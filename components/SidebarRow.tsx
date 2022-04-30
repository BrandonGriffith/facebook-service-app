import Image from "next/image"
import { IconProps } from "./Types"


const SidebarRow = (props: any) => {
    return (
        <div className="flex items-center space-x-2 p-2 rounded-xl 
        cursor-pointer hover:bg-gray-200">
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
            <p className="hidden lg:inline-flex font-bold">{props.title}</p>
        </div>
    )
}
export default SidebarRow
