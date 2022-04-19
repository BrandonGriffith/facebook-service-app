import Image from 'next/image'
import React from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';


const Header = () => {
    return (
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
                <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                    type="text" placeholder="Search..." />
            </div>
        </div>
    )
}
export default Header
