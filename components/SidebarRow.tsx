import Image from "next/image"
import { IconProps } from "./Types"


const SidebarRow = (props: IconProps) => {
    return (
        <div>
            {props.src && (
                <Image
                    src={props.src}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="UserProfilePic"
                    className="rounded-full"
                />
            )}
            {props.Icon && (
                <props.Icon
                    className="h-8 w-8 text-blue-400"
                />
            )}
            <p className="hidden sm:inline-flex font-bold">{props.title}</p>
        </div>
    )
}
export default SidebarRow
