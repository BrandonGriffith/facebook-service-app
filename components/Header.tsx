import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';


const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-1 border-b-2">
            <div className="flex items-center">
                <Image className="rounded-lg"
                    src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="fbIcon"
                />
                <div className="flex bg-gray-200 p-2 rounded-full">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500
                    flex-shrink hidden" type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="flex justify-center flex-grow pl-3">
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className='hidden lg:inline-flex items-center'>
                <p className="font-semibold pr-3 whitespace-nowrap">User Profile</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}
export default Header
