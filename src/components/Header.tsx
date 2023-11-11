import React from 'react'
import Link from 'next/link'
function Header() {
    return (
        <header className='h-20 flex py-16 px-10 justify-between items-center'>
            <div className='w-48'>
                <img className='object-contain' src="/logo/logo.png" />
            </div>
            <div>
                <ul className='flex gap-3 items-center'>

                    <li className='hover:text-primary'>
                        <Link href={"#"}>Register</Link>
                    </li>
                    <li className='hover:bg-light rounded-xl text-white px-2 py-1 bg-primary'>
                        <Link href={"#"}>Login</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
