import React from 'react'
import Heading from '@/components/home-new/heading'
import ContentContainerLarge from '../container/ContentContainerLarge'

import earnBg from '@/assets/product/earning/bg.webp'
import FadeIn from '../fade-in'
import Image from 'next/image'



const Earn = () => {
  const data = [
    {
      id: 1,
      desc: 'Your $XaZen rewards in the Earning Center are tracked and rated based on when you joined aZen, the quality of your completed tasks, and your engagement level.',
    },
    {
      id: 2,
      desc: 'At TGE (Token Generation Event), your $XaZen will be converted into $AZEN based on your rating!Post-TGE, even more Web3 ecosystem rewards will be unlocked, opening up new ways to earn and grow within aZen.',
    },
    {
      id: 3,
      desc: 'Final sprint to TGE! Stay active in the Earning Center and maximize your rewards!',
    },
  ]
  return (
    <ContentContainerLarge className='mt-20 md:mt-36 font-gilroy text-center'>
      <div className='relative max-w-[1260px] mx-auto rounded-[20px] overflow-hidden'>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[linear-gradient(90deg,rgba(15,17,16,0.00)_0%,#0F1110_100%)] rounded-[20px]'>
          <Image src={earnBg} alt='earn' className='max-md:absolute max-md:top-1/2 max-md:-translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2  max-md:max-w-[700px] md:w-full' />
        </div>
        <div className="absolute w-[120px] h-full top-0 left-0 bg-[linear-gradient(270deg,rgba(15,17,16,0.00)_0%,#0F1110_100%)]"></div>
        <div className="absolute w-[120px] h-full top-0 right-0 bg-[linear-gradient(90deg,rgba(15,17,16,0.00)_0%,#0F1110_100%)]"></div>
        <div className='relative pt-8 pb-10 bg-[linear-gradient(180deg,rgba(15,17,16,0.20)_0%,#0F1110_100%)]'>
          <FadeIn>
            <Heading className='uppercase'>Earning Center & TGE</Heading>
          </FadeIn>
          <div className='max-w-[800px] mx-auto'>
            {
              data.map((item, index) => (
                <FadeIn key={item.id} transition={{ delay: index * 0.1, duration: 1 }}>
                  <p className='mt-8 text-[18px] font-medium text-[#ADABB2] md:text-white text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>{item.desc}</p>
                </FadeIn>
              ))
            }
          </div>
        </div>
      </div>
    </ContentContainerLarge>
  )
}
export default React.memo(Earn)