import Header from '@/components/Header'

export default function Home() {

  return (
    <main>
      <Header />
      <div>
        <section className='px-16 h-[550px] flex items-center'>
          <div>
            <h1 className='font-extrabold text-[70px] w-[1000px] leading-[80px]'>Unlock the Power of <span className='text-light'>Excelens</span>, Anywhere, Anytime!</h1>
            <div>
              <button className='hover:bg-light text-lg rounded-xl text-white px-3 py-2 mt-8 bg-primary'>Get Started</button>
            </div>
          </div>

          <img src="/excel-icon.jpg" alt="" className='w-[700px]' />

        </section>
      </div>
    </main>
  )
}
