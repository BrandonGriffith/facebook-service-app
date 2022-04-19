import Image from 'next/image'
import React from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';


const Header = () => {
    return (
        <div>
            <Image className="rounded-lg"
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                width={40}
                height={40}
                layout="fixed"
                alt="fbIcon"
            />
            <div>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}
export default Header
