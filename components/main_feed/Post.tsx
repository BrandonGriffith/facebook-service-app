import Image from "next/image"
import { postProps } from "../Types"

const Post = (props: postProps) => {
    return (
        <div className="flex flex-col">
            <div>
                <div>
                    <Image
                        src={props.image}
                        alt={props.image}
                        height={40}
                        width={40}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
export default Post
