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
                        <p className="text-sm font-bold">
                            {props.name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {new Date(props.createdAt?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div>
                <p className="p-2">
                    {props.message}
                </p>
            </div>
        </div>
    )
}
export default Post
