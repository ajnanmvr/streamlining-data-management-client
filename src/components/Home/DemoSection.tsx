import React from 'react'

function DemoSection() {
    return (
        <div className='flex p-32 justify-center gap-20'>
            <div className='flex flex-col gap-2 justify-center'>
                <p className='text-primary font-semibold'>#Basic Features</p>
                <h1 className='text-center lg:text-left font-bold text-3xl'>Excel File Management</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.</p>
                <div className="flex gap-1 mt-2">
                    <button className="text-[15px] font-semibold rounded-full text-primary hover:bg-smoker bg-smoke px-3 py-1 flex items-center gap-1">
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" className='h-[11px] fill-primary' height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>
                </div>
                <div className="flex gap-5 mt-10">
                    <button className="text-primary flex-col items-center">
                        <div className='font-bold text-[30px] font-sans- px-1 bg-smoke leading-[40px] border border-primary border-dashed rounded-lg'>01</div>
                        <div className='text-[15px] mt-1 font-semibold'>Create</div> 
                    </button>
                    <button className="text-smoker flex-col items-center">
                        <div className='font-bold text-[30px] font-sans- px-1 bg-white leading-[40px] border border-white border-dashed rounded-lg'>01</div>
                        <div className='text-[15px] mt-1 font-semibold'>Create</div> 
                    </button>
                    <button className="text-smoker flex-col items-center">
                        <div className='font-bold text-[30px] font-sans- px-1 bg-white leading-[40px] border border-white border-dashed rounded-lg'>01</div>
                        <div className='text-[15px] mt-1 font-semibold'>Create</div> 
                    </button>
                    <button className="text-smoker flex-col items-center">
                        <div className='font-bold text-[30px] font-sans- px-1 bg-white leading-[40px] border border-white border-dashed rounded-lg'>01</div>
                        <div className='text-[15px] mt-1 font-semibold'>Create</div> 
                    </button>
                    
                </div>
            </div>
            <div>
                <img src="/1.avif" alt="" className='object-cover rounded-xl w-[1200px] h-72' />
            </div>
        </div>
    )
}

export default DemoSection
