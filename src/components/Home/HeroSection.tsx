import React from 'react'
import Link from 'next/link'
function HeroSection() {
    return (
        <div>
            <section className='px-12 lg:px-20 h-[500px] flex items-center'>
                <div>
                    <h1 className='text-center lg:text-left font-extrabold text-[39px] leading-[45px] lg:text-[70px] lg:w-5/6 lg:leading-[80px]'>Unlock the Power of <span className='text-primary'>Excelens</span>, Anywhere, Anytime!</h1>
                    <div className='flex gap-2 font-semibold justify-center lg:justify-start mt-8'>
                        <Link href={"/project"}><button className='hover:bg-light lg:text-lg rounded-lg text-white px-3 py-2 bg-primary border-primary'>Try Demo</button></Link>
                        <button className='hover:text-light border border-primary hover:border-light lg:text-lg rounded-lg text-primary px-3 py-2'>Read Docs</button>
                    </div>
                </div>
                <div><img src="/excel-icon.png" alt="" className='hidden lg:block w-[700px]' /></div>
            </section>
        </div>
    )
}

export default HeroSection
