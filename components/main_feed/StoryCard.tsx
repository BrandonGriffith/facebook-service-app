import Image from "next/image"
import { StoryProps } from "../Types"

const StoryCard = (props: StoryProps) => {
    return (
        <div className="relative cursor-pointer overflow-x w-[70px] h-40 xl:w-40 xl:h-60 p-1">
            <Image
                src={props.profile}
                alt="pro"
                width={40}
                height={40}
                objectFit="cover"
                layout="fixed"
                className="rounded-full absolute z-10 top-10 opacity-0 xl:opacity-100"
                priority
            />
            <h1 className="absolute text-white z-10 text-lg overflow-hidden 
            bottom-5 left-5 font-bold hidden xl:inline-flex ">{props.name}</h1>
            <Image
                src={props.src}
                alt="pr"
                layout="fill"
                className="object-cover filter z-1 rounded-full xl:rounded-xl brightness-75 p-1"
                priority
            />
        </div>
    )
}
export default StoryCard
