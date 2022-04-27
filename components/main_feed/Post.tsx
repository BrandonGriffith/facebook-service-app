import Image from "next/image"

const Post = (props: any) => {
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
