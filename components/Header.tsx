import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';


const Header = ({ guestLogin, setGuestLogin }: any) => {
    const { data: session }: any = useSession()
    const userSignOut = () => {
        const result: boolean = window.confirm("Do you want to logout?");
        if (result) {
            setGuestLogin(false);
            signOut();
        } return
    }
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
                    <p className="font-semibold sm:pr-3 sm:pl-3 whitespace-nowrap cursor-pointer
                    hover:text-blue-400 text-center mt-2 sm:mt-4"
                        onClick={() => userSignOut()}>Logout</p>
                </div>
            </div>
            <div className='hidden lg:inline-flex items-center'>
                <Image
                    src={!guestLogin ? session.user.image : "/favicon.ico"}
                    height={40}
                    width={40}
                    alt="userProfilePic"
                    className="rounded-full"
                />
                <p className="font-semibold pr-3 pl-3 whitespace-nowrap">{!guestLogin ? session.user.name : "Guest Account"}</p>
                <ViewGridIcon className='icon animate-spin' />
                <ChatIcon className='icon animate-bounce bg-blue-200' />
                <BellIcon className='icon animate-bounce bg-blue-200' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}
export default Header
