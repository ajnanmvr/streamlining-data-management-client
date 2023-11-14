import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DemoSection from '@/components/Home/DemoSection'
import HeroSection from '@/components/Home/HeroSection'

export default function Home() {

  return (
    <main>
      <div className='bg'>
        <Header />
        <HeroSection />
      </div>
      <DemoSection />
      <DemoSection />
      <DemoSection />
      <DemoSection />
      <Footer />
    </main>
  )
}
