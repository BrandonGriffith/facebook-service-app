import {
    CalendarIcon, ChevronDownIcon,
    ClockIcon, DesktopComputerIcon,
    ShoppingBagIcon, UserGroupIcon,
    UserIcon
} from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"


const Sidebar = () => {
    const { data: session }: any = useSession()
    return (
        <div className="p-4 mt-4 max-w-[550px] lg:min-w-[350px]">
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Favorite" />
            <SidebarRow Icon={ChevronDownIcon} title="Explorer" />
        </div>
    )
}
export default Sidebar
