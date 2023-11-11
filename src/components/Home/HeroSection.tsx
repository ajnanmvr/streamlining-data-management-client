import React from 'react'

function HeroSection() {
    return (
        <div>
            <section className='px-20 h-[550px] flex items-center'>
                <div>
                    <h1 className='font-extrabold text-[70px] w-[1000px] leading-[80px]'>Unlock the Power of <span className='text-light'>Excelens</span>, Anywhere, Anytime!</h1>
                    <div className='flex gap-2 font-semibold'>
                        <button className='hover:bg-light text-lg rounded-lg text-white px-3 py-2 mt-8 bg-primary'>Get Started</button>
                        <button className='hover:text-light border hover:border-light text-lg rounded-lg text-primary px-3 py-2 mt-8'>Read Docs</button>
                    </div>
                </div>

                <img src="/excel-icon.png" alt="" className='w-[700px]' />

            </section>
        </div>
    )
}

export default HeroSection
