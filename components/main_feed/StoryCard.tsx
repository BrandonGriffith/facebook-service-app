import Image from "next/image"
import { StoryProps } from "../Types"

const StoryCard = (props: StoryProps) => {
    return (
        <div className="relative w-40 h-60 p-1">
            <Image
                src={props.profile}
                width={40}
                height={40}
                objectFit="cover"
                layout="fixed"
                className="rounded-full absolute z-10 top-10 opacity-0 lg:opacity-100"
            />
            <Image
                src={props.src}
                layout="fill"
                className="object-cover filter z-1 rounded-full xl:rounded-xl brightness-75 p-1"
            />
        </div>
    )
}
export default StoryCard
