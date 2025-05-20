import React from 'react'
import icon1 from '@/assets/zenhive/mining/icon1.png'
import icon2 from '@/assets/zenhive/mining/icon2.png'
import FadeIn from '../fade-in'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Image from 'next/image'


const datas = [
  {
    id: 1,
    icon: icon1,
    label1: 'Stake. Mine. Earn.',
    label2: 'Power your ZenHive device and earn rewards through PoC — computing, delegating, aggregating.',
  },
  {
    id: 2,
    icon: icon2,
    label1: 'Empower Industries',
    label2: 'Your mining powers AI and data services across gaming, smart cities, healthcare, commerce, and more.',
  }
]

const Mining = () => {
  return (
    <ContentContainerLarge className='mt-3 md:mt-52 relative font-gilory'>
      <FadeIn className='relative w-full z-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[28px] rounded-xl'>
          {
            datas.map((item) => (
              <div key={item.id} className='lg:min-h-[187px] max-md:p-[14px_16px] p-[20px_38px] flex border border-white/30 rounded-[8px] bg-[rgba(29,29,29,.1)] backdrop-blur-[22px]'>
                <div >
                  <h5 className='text-white font-bold text-[16px] md:text-[28px]'>{item.label1}</h5>
                  <p className='mt-3 text-[12px] md:text-[18px] font-normal text-white/70 md:leading-9'>{item.label2}</p>
                </div>
                <div className='inline-flex items-center w-[74px] md:w-[120px] flex-shrink-0 flex-grow-0 '>
                  <Image className='w-full' src={item.icon} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </FadeIn>
    </ContentContainerLarge>
  )
}

export default React.memo(Mining)