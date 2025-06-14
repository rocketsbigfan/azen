import React from 'react'
import bg from '@/assets/zenhive/nano/bg.png'
import bgm from '@/assets/zenhive/nano/bg-m.png'
import nano2 from '@/assets/zenhive/nano/nano-2.webp'
import nano from '@/assets/zenhive/nano/nano.png'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from '../home-new/heading'

import iconRight from '@/assets/zenhive/nano/icon-right.svg'
import Image from 'next/image'

const Nano = () => {

  const data = [
    {
      id: 1,
      desc: 'Stake-to-Own with Web3 strategic partners',
    },
    {
      id: 2,
      desc: 'aZen Hub Earning Center, by contributing to community growth'
    },
    {
      id: 3,
      desc: 'Direct Purchase for 29.99 USDT'
    }
  ]

  return (
    <ContentContainerLarge className='mt-16 md:mt-32 font-gilroy'>
      <div
        className='relative border border-white/30 rounded-[8px] bg-[rgba(29,29,29,.1)] backdrop-blur-[22px] overflow-hidden'>
        <Image className='hidden md:block absolute left-0 bottom-0 object-cover h-full w-auto' src={bg} alt="" />
        <Image className='block md:hidden absolute bottom-0 object-cover h-full w-auto' src={bgm} alt="" />
        <div className='relative flex flex-col-reverse md:flex-row items-end'>
          <div className=' w-6/12 h-full hidden md:block'>
              <Image src={nano2} className=' object-cover max-w-none h-full' alt="" />
          </div>
          <div className='block w-10/12 md:hidden z-10 -mt-10'>
            <Image src={nano} alt="" />
          </div>
          <div
            className='relative w-full md:w-6/12 self-start flex flex-col justify-start items-start pt-5 md:pt-16 pl-5 pr-5 md:pr-0 pb-16'>
            <Heading className='w-full font-medium text-white uppercase'>
              ZenHive Nano
            </Heading>
            <p className='w-full text-[18px] text-white/80 mt-2'>
              A virtual machine hosted in a data center, representing 1/64 of a ZenHive, designed for multi-project DePIN mining.
            </p>
            <p className='w-full text-[18px] text-white mt-10'>
              You can acquire it through:
            </p>
            <div className='w-full mt-1'>
              {
                data.map((item) => (
                  <div key={item.id} className='flex justify-start items-start gap-2 mt-3'>
                    <Image key={item.id} src={iconRight} alt="" />
                    <p className='w-full text-[14px] font-medium text-white'>
                      {item.desc}
                    </p>
                  </div>
                ))
              }
            </div>
            <h2
              className='font-gilroyBlack font-bold text-[40px] text-white mt-10'>
              29.99 USDT
            </h2>
          </div>
        </div>
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(Nano)