import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"

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
        </div>
    )
}
export default Widgets
