import {
    CalendarIcon, ChevronDownIcon,
    UserIcon, DesktopComputerIcon,
    ShoppingBagIcon, UserGroupIcon
} from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"


const Sidebar = (guestLogin: any) => {
    const { data: session }: any = useSession()
    return (
        <div className="p-4 mt-4 max-w-[550px]">
            <SidebarRow src={!guestLogin ? session.user.image : "/favicon.ico"} title={!guestLogin ? session.user.name : "Guest Account"} />
            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ChevronDownIcon} title="Explorer" />
        </div>
    )
}
export default Sidebar
