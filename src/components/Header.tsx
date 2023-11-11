import React from 'react'
import Link from 'next/link'
function Header() {
    return (
        <header className='h-20 flex pt-20 pb-10 px-16 justify-between items-center'>
            <div className='w-48'>
                <img className='object-contain' src="/logo/logo.png" />
            </div>
            <div>
                <ul className='flex gap-1 items-center'>
                    
                    <li className='hover:text-primary px-3 py-1 hover:border rounded-lg'>
                        <Link href={"register"}>Register</Link>
                    </li>
                    <li className='hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary'>
                        <Link href={"login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
