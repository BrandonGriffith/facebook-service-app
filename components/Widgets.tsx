import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/solid"

const Widgets = () => {
    return (
        <div className="hidden lg:flex flex-col w-52 px-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Contacts</h1>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-5" />
                    <SearchIcon className="h-5" />
                    <DotsHorizontalIcon className="h-5" />
                </div>
            </div>
            <div className="flex items-center relative">
                <UserCircleIcon className="h-14 text-blue-400" /><h1>Default User</h1>
                <div className="absolute bottom-1 left-8 bg-green-400 
                h-4 w-4 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center relative">
                <UserCircleIcon className="h-14 text-blue-400" /><h1>Default User</h1>
                <div className="absolute bottom-1 left-8 bg-green-400 
                h-4 w-4 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center relative">
                <UserCircleIcon className="h-14 text-blue-400" /><h1>Default User</h1>
                <div className="absolute bottom-1 left-8 bg-green-400 
                h-4 w-4 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center relative">
                <UserCircleIcon className="h-14 text-blue-400" /><h1>Default User</h1>
                <div className="absolute bottom-1 left-8 bg-green-400 
                h-4 w-4 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center relative">
                <UserCircleIcon className="h-14 text-blue-400" /><h1>Default User</h1>
                <div className="absolute bottom-1 left-8 bg-green-400 
                h-4 w-4 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
export default Widgets
