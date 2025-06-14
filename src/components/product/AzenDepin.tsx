"use client"
import React, { useEffect } from 'react'
import ContentContainerLarge from '../container/ContentContainerLarge'
import NumberScroll from '../number-scroll';
import homeStore from '@/service/home';
import depin from '@/assets/product/azen-depin/bg.webp';
import right from '@/assets/zenhive/nano/icon-right.svg';
import FadeIn from '../fade-in';
import Image from 'next/image';

const Datas = () => {
  const { resourceInfo, loading, error, fetchResourceInfo } = homeStore();

  useEffect(() => {
    fetchResourceInfo();
  }, [fetchResourceInfo]);

  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  if (error) {
    return <div className='text-white'>Error: {error}</div>;
  }

  if (!resourceInfo) {
    return <div className='text-white'>No data available</div>;
  }

  const data = [
    {
      id: 1,
      title: 'Active DePINs',
      desc: <p className='font-gilroy font-bold text-3xl md:text-4xl xl:text-5xl text-white'>
        <NumberScroll value={resourceInfo.activeDepins} />
      </p>
    },
    {
      id: 2,
      title: 'Storage',
      desc: <p className='font-gilroy font-bold text-3xl md:text-4xl xl:text-5xl text-white'>
        <NumberScroll value={resourceInfo.totalStorage} /> <span className='text-[#B0F15B]'>G</span>
      </p>
    },
    {
      id: 3,
      title: 'RAM',
      desc: <p className='font-gilroy font-bold text-3xl md:text-4xl xl:text-5xl text-white'>
        <NumberScroll value={resourceInfo.totalRam} /> <span className='text-[#B0F15B]'>G</span>
      </p>
    },
    {
      id: 4,
      title: 'Minted $XaZen',
      desc: <p className='font-gilroy font-bold text-3xl md:text-4xl xl:text-5xl text-white'>
        <NumberScroll value={resourceInfo.mintedXazen} />
      </p>
    },
  ]


  return (
    <div className='px-[42px] md:px-0 md:py-[42px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center border border-white/30 bg-[rgba(29,29,29,0.1)] backdrop-blur-[22px] rounded-[8px] overflow-hidden'>
      {
        data.map((item) => (
          <div key={item.id} className='py-6 md:py-0 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0 md:[&:nth-child(even)]:border-l lg:[&:not(:first-child)]:border-l md:[&:nth-child(n+3)]:mt-6 lg:[&:nth-child(n+3)]:mt-0 border-white/30'>
            <div className='inline-flex flex-col'>
              <h5 className='md:text-center lg:text-left w-full font-normal text-xl text-[#D4D8DB] mb-3'>{item.title}</h5>
              {item.desc}
            </div>
          </div>
        ))
      }
    </div>
  )
}

const data = [
  {
    id: 1,
    title: 'Share Computing Power, Earn Rewards',
    desc: 'Built on aZen protocol, users can tokenize computing resources and applications, powering intelligent data processing and building AI-native infrastructures for Ubiquitous AI',
    tip: 'Rewards are distributed based on Proof of Contribution (PoC), which evaluates:',
    list: [
      'Quality of computing resources',
      'Duration of contribution',
      'Availability and stability of the node',
    ]
  },
  {
    id: 2,
    title: 'DePIN Lite Testnet Accomplishment:',
    list: [
      'Successfully deployed applications across diverse Android devices and networks.',
      'Full compliance with Android and Google Play privacy and security requirements.',
      'Shared Resources.',
    ]
  }
]

const AzenDepin = () => {
  return (
    <ContentContainerLarge id='azen-depin-lite' className='relative mt-[74px] md:mt-48 font-gilroy'>
      <div className='flex justify-start relative'>
        <div className='relative z-[2] w-full md:w-[52.4%] flex-shrink-0 flex-grow-0 mb-8'>
          <FadeIn>
            <h3 className='mb-2 max-md:text-center font-gilroyBlack text-5xl leading-normal text-white uppercase'>aZen DePIN</h3>
          </FadeIn>
          {
            data.map((item, index) => (
              <FadeIn 
                transition={{delay: index * 0.2, duration: 1}}
                key={item.id} 
                className='mt-8 px-8 py-5 border border-white/30 bg-[rgba(29,29,29,0.1)] backdrop-blur-[22px] rounded-[8px]'
              >
                <h4 className='text-[32px] leading-normal font-bold text-white'>{item.title}</h4>
                <p className='mt-2 text-[18px] text-white/60'>{item.desc}</p>
                <p className='mt-4 text-base text-white'>{item.tip}</p>
                <ul className='mt-2 flex flex-wrap gap-x-10 gap-y-2'>
                  {
                    item.list.map((item) => (
                      <li key={item} className='inline-flex items-start gap-x-[10px] mt-3 text-base text-white'>
                        <Image src={right} className='relative top-[2px]' alt='right' />
                        <span>{item}</span>
                      </li>
                    ))
                  }
                </ul>
              </FadeIn>
            ))
          }
        </div>
        <div className='hidden md:block pt-full flex-1 absolute top-0 left-0 md:relative '>
          <Image src={depin} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-0 lg:left-0 lg:-translate-x-0 lg:-translate-y-0' alt="depin" />
        </div>
      </div>
      <div className='block md:hidden mx-auto w-4/5 scale-125 origin-top'>
        <Image src={depin} className='' alt="depin" />
      </div>
      <FadeIn
        transition={{ delay: 0.4, duration: 1 }}
        className='relative z-[2]'
      >
        <Datas />
      </FadeIn>
    </ContentContainerLarge>
  )
}

export default React.memo(AzenDepin)