import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { postProps } from "../Types"

const Post = (props: postProps) => {
    return (
        <div className="flex flex-col">
            <div className="p-4 bg-white shadow-md mt-4 rounded-lg">
                <div className="flex space-x-2 items-center">
                    <Image
                        src={props.image}
                        alt={props.name}
                        height={40}
                        width={40}
                        className="rounded-full cursor-pointer"
                    />
                    <div>
                        <p className="text-sm font-bold">{props.name}</p>
                        <p className="text-xs text-gray-400">{new Date(props.createdAt?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <p className="p-2">{props.message}</p>
            </div>
            {props.postImage && (
                <div className="relative bg-white h-96">
                    <Image
                        src={props.postImage}
                        alt="post image"
                        objectFit="cover"
                        layout="fill"
                        className="rounded-lg"
                        priority
                    />
                </div>
            )}
            <div className="flex justify-evenly items-center rounded-md bg-white shadow-md text-gray-400 border-t-2">
                <div className="inputBoxIcon hover:text-blue-400 active:bg-blue-200">
                    <ThumbUpIcon className="h-8" />
                    <p className="text-sm pl-2">like</p>
                </div>
                <div className="inputBoxIcon hover:text-blue-400 active:bg-blue-200">
                    <ChatAltIcon className="h-8" />
                    <p className="text-sm pl-2">comment</p>
                </div>
                <div className="inputBoxIcon hover:text-blue-400 active:bg-blue-200">
                    <ShareIcon className="h-8" />
                    <p className="text-sm pl-2">Share</p>
                </div>
            </div>
        </div>
    )
}
export default Post
