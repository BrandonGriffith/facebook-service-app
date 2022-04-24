import { useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef } from "react"
import { db } from '../../firebase'
import { serverTimestamp } from 'firebase/firestore'



const InputBox = () => {
    const { data: session }: any = useSession()
    const inputRef: any = useRef(null);
    const submitPost = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        db.collection('posts').add({
            name: session.user.name,
            email: session.user.email,
            message: inputRef.current.value,
            image: session.user.image,
            createdAt: serverTimestamp()
        })
        inputRef.current.value = "";
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
            </div>
            <div className="flex justify-evenly border-t-2 p-2">
                <div className="inputBoxIcon">
                    <VideoCameraIcon className="h-8 text-red-600" />
                    <p className="text-sm sm:text-lg">Add Video</p>
                </div>
                <div className="inputBoxIcon">
                    <CameraIcon className="h-8 text-green-400" />
                    <p className="text-sm sm:text-lg">Add Image</p>
                </div>
                <div className="inputBoxIcon">
                    <EmojiHappyIcon className="h-8 text-yellow-400" />
                    <p className="text-sm sm:text-lg">Add Emoji</p>
                </div>
            </div>
        </div>
    )
}
export default InputBox
