import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DemoSection from '@/components/Home/DemoSection'
import HeroSection from '@/components/Home/HeroSection'

export default function Home() {

  return (
    <main>
      <div className='bg h-screen flex flex-col justify-between'>
        <Header />
        <HeroSection />
        <div></div>
      </div>
      <DemoSection />
      <DemoSection />
      <DemoSection />
      <DemoSection />
      <Footer />
    </main>
  )
}
