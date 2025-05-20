import Footer from '@/components/home-new/footer'
import Header from '@/components/header'
import Hero from '@/components/product/Hero'
import Earn from '@/components/product/Earning'
import AzenDepin from '@/components/product/AzenDepin'
import ZenHive from '@/components/product/ZenHive'

import FadeIn from '@/components/fade-in'
import AZenEarning from '@/components/product/AZenEarning'

const Product = () => {

  return (
    <main className='overflow-y-auto overflow-x-hidden bg-[#0F1110] h-screen'>
      {/* <Container className='bg-[#0F1110]'> */}
        <Header size='large' />
        <div className='w-full'>
          <Hero />
        </div>
        {/* <div className='w-full relative bg-[#0F1110]'> */}
        <FadeIn>
          <AZenEarning />
        </FadeIn>
        <FadeIn>
          <Earn />
        </FadeIn>
        <FadeIn>
          <ZenHive />
        </FadeIn>
        <FadeIn>
          <AzenDepin />
        </FadeIn>
        <Footer />
    </main>
  )
}

export default Product
