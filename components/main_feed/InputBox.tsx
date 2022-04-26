import { useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { db, storage } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'


const InputBox = () => {
    const { data: session }: any = useSession()
    const [postImage, setPostImage] = useState(null);
    const inputRef: any = useRef(null);
    const imageRef: any = useRef(null);
    const submitPost = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const coll = collection(db, "posts");
        addDoc(coll, {
            name: session.user.name,
            email: session.user.email,
            message: inputRef.current.value,
            image: session.user.image,
            createdAt: serverTimestamp()
        }).then(doc => {
            if (postImage) {
                const uploadImage: any = ref(storage, `posts/${doc.id}`);
                uploadBytes(uploadImage, postImage,).then(() => { })
            }
        })
        inputRef.current.value = "";
        nullImage();
    }
    const addImage = (e: any) => {
        const addedFile = new FileReader();
        if (e.target.files[0]) {
            addedFile.readAsDataURL(e.target.files[0])
        }
        addedFile.onload = (ee: any) => {
            setPostImage(ee.target.result)
        }
    }
    const nullImage = () => {
        setPostImage(null);
    }
    return (
        <div className="p-1 bg-white text-gray-600 font-medium
        rounded-xl shadow-md">
            <div className="flex p-2 space-x-5 items-center">
                <Image
                    src={session.user.image}
                    height={50}
                    width={50}
                    layout="fixed"
                    alt="idk"
                    className="rounded-full cursor-pointer"
                />
                <form className="flex flex-1">
                    <input type="text" name="userpost" id="userpost" placeholder="Enter post here..."
                        className="flex-grow px-2 rounded-full h-14
                        focus:outline-none mt-4 bg-gray-200"
                        ref={inputRef}
                    />
                    <button type="submit" hidden onClick={(e) => submitPost(e)} />
                </form>
                {postImage && (
                    <div onClick={nullImage} className="flex flex-col transition duration-150
                    transform hover:scale-110 cursor-pointer filter hover:brightness-110">
                        <Image
                            src={postImage}
                            height={70}
                            width={90}
                            alt="imageToPost"
                            className="object-contain rounded-lg"
                        />
                        <p className="text-sm text-center">Remove Image</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly border-t-2 p-2">
                <div className="inputBoxIcon" onClick={() => imageRef.current.click()}>
                    <VideoCameraIcon className="h-8 text-red-600" />
                    <p className="text-sm sm:text-lg">Add Video</p>
                </div>
                <div className="inputBoxIcon" onClick={() => imageRef.current.click()}>
                    <CameraIcon className="h-8 text-green-400" />
                    <p className="text-sm sm:text-lg">Add Image</p>
                    <input type="file" onChange={addImage} ref={imageRef} hidden />
                </div>
                <div className="inputBoxIcon" onClick={() => imageRef.current.click()}>
                    <EmojiHappyIcon className="h-8 text-yellow-400" />
                    <p className="text-sm sm:text-lg">Add Emoji</p>
                </div>
            </div>
        </div>
    )
}
export default InputBox
