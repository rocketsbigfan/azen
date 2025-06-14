import Container from '@/components/container/Container'
import Footer from '@/components/home-new/footer'
import React from 'react'
import Mining from '@/components/zenhive/Mining'
import Join from '@/components/zenhive/Join'
import Stake from '@/components/zenhive/Stake'
import Features from '@/components/zenhive/Features'
import Commercial from '@/components/zenhive/Commercial'
import Trusted from '@/components/zenhive/Trusted'
import Header from '@/components/header'
import FadeIn from '@/components/fade-in'
import Distribution from '@/components/zenhive/Distribution'
import Hero from '@/components/zenhive/Hero'
import Nano from '@/components/zenhive/Nano'
import TwoDevice from '@/components/zenhive/TwoDevice'
import ZenHiveEdge from '@/components/zenhive/ZenHive'
import AZenhub from '@/components/zenhive/AZenhub'

const ZenHive = () => {

  return (
    <Container className='relative'>
      <Header size='large' />
      <FadeIn>
        <Hero />
      </FadeIn>
      <Mining />
      <FadeIn>
        <Join />
      </FadeIn>
      <FadeIn>
        <ZenHiveEdge />
      </FadeIn>
      <FadeIn>
        <TwoDevice />
      </FadeIn>
      <FadeIn>
        <AZenhub />
      </FadeIn>
      <FadeIn>
        <Nano />
      </FadeIn>
      <FadeIn>
        <Stake />
      </FadeIn>
      <FadeIn>
        <Features />
      </FadeIn>
        <Commercial />
      <FadeIn>
        <Trusted />
      </FadeIn>
      <FadeIn>
        <Distribution />
      </FadeIn>
      {/* </div> */}
      <Footer className='mt-32' />

    </Container>
  )
}

export default React.memo(ZenHive)
