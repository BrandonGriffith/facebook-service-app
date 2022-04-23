import { useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"


const InputBox = () => {
    const { data: session }: any = useSession()
    const submitPost = (e: React.SyntheticEvent) => {
        e.preventDefault();
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
                    />
                    <button type="submit" hidden onClick={(e) => submitPost(e)} />
                </form>
            </div>
        </div>
    )
}
export default InputBox
