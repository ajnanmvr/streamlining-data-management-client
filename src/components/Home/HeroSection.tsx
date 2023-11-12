import React from 'react'
import Link from 'next/link'
function HeroSection() {
    return (
        <div>
            <section className='px-12 lg:px-20 h-[550px] flex items-center'>
                <div>
                    <h1 className='font-extrabold text-[39px] leading-[50px] lg:text-[70px] lg:w-[1000px] lg:leading-[80px]'>Unlock the Power of <span className='text-light'>Excelens</span>, Anywhere, Anytime!</h1>
                    <div className='flex gap-2 font-semibold'>
                    <Link href={"/project"}><button className='hover:bg-light text-lg rounded-lg text-white px-3 py-2 mt-8 bg-primary'>Try Demo</button></Link>
                        <button className='hover:text-light border border-primary hover:border-light text-lg rounded-lg text-primary px-3 py-2 mt-8'>Read Docs</button>
                    </div>
                </div>
                <img src="/excel-icon.png" alt="" className='hidden lg:block w-[700px]' />
            </section>
        </div>
    )
}

export default HeroSection
