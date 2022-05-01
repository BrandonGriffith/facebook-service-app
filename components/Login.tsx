import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = ({ setGuestLogin }: any) => {
    return (
        <div className="grid place-items-center pt-10">
            <Image
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fbIcon"
                height={200}
                width={200}
                objectFit="contain"
            />
            <h1 onClick={() => signIn()} className="mt-10 p-3 bg-blue-600 active:bg-blue-800 rounded-full text-blue-100 
            text-lg active:p-2 hover:text-white cursor-pointer active:mt-11"
            >Login with Facebook</h1>
            <h1 onClick={() => setGuestLogin(true)} className="mt-10 p-3 bg-gray-600 active:bg-blue-800 rounded-full text-blue-100 
            text-lg active:p-2 hover:text-white cursor-pointer active:mt-11"
            >Login with Guest Account</h1>
        </div>
    )
}
export default Login
