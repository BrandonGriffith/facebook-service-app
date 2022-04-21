import { UserIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"


const Sidebar = () => {
    const { data: session }: any = useSession()
    return (
        <div className="p-4 mt-4 max-w-[550px] lg:min-w-[350px]">
            <SidebarRow Icon={UserIcon} title="friends" />
        </div>
    )
}
export default Sidebar
