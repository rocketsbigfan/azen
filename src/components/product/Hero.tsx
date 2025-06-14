"use client"
import React, { useEffect } from 'react'
import Button, { ButtonType } from '@/components/home-new/Button'
import homeStore from '../../service/home/index';
import NumberScroll from '../number-scroll';
import FadeIn from '@/components/fade-in';
import ContentContainerLarge from '../container/ContentContainerLarge';
import bg from '@/assets/product/hero/bg.webp';
import Heading from '../home-new/heading';

import icon1 from '@/assets/zenhive/mining/icon1.png'
import icon2 from '@/assets/zenhive/mining/icon2.png'
import icon3 from '@/assets/zenhive/mining/icon3.png'
import Image from 'next/image';

const Datas = () => {
  const { resourceInfo, loading, error, fetchResourceInfo } = homeStore();

  useEffect(() => {
    fetchResourceInfo();
  }, [fetchResourceInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!resourceInfo) {
    return <div>No data available</div>;
  }

  const data = [
    {
      id: 1,
      title: 'Download',
      desc: <p className='text-left font-semibold text-2xl md:text-3xl lg:text-[40px] text-white'>
        <NumberScroll duration={1} value={resourceInfo?.azenConnectDownload} />
      </p>
    },
    {
      id: 2,
      title: 'MAU',
      desc: <p className='text-left font-semibold text-2xl md:text-3xl lg:text-[40px] text-white'>
        <NumberScroll duration={1} value={resourceInfo?.mau} />
        {/* K<span className='text-[#B0F15B]'>+</span> */}
      </p>
    },
    {
      id: 3,
      title: 'DAU',
      desc: <p className='text-left font-semibold text-2xl md:text-3xl lg:text-[40px] text-white'>
        <NumberScroll duration={1} value={resourceInfo?.dau} />
      </p>
    },
  ]

  return <div className='text-center md:text-left mt-12 flex-1 md:flex-none flex flex-wrap border-t border-b border-white/20 '>
    {
      data.map((item) => (
        <div key={item.id} className='flex-1 md:flex-none pt-4 pb-5 px-3 md:px-4 border-r border-white/20 [&:last-child]:border-r-0'>
          <h5 className='text-left font-medium text-base text-[#D4D8DB] pb-4'>
            {item.title}
          </h5>
          {item.desc}
        </div>
      ))
    }
  </div>
}

const data = [
  {
    title: 'Multiple Earning Streams',
    desc: 'Mine, DeFi, promote, and engage to maximize rewards',
    icon: icon3
  },
  {
    title: 'AI & Web3 Integration',
    desc: 'Powering Real-World Solutions (RWS) with DePIN technology',
    icon: icon2
  },
  {
    title: 'Seamless User Experience',
    desc: 'Easy setup, real-time tracking, and transparent rewards',
    icon: icon1
  },
]

const AzenHub = () => {
  return (
    <ContentContainerLarge className='relative font-gilroy'>
      <div id="azen-hub" className='w-full flex flex-col md:flex-row'>
        <div className='text-center md:text-left md:flex-1 relative z-10'>
          <FadeIn>
            <h2
              className=' mt-16 md:mt-32 text-[40px] text-[#EAFF29] font-black w-full uppercase'>
              aZen Hub
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Heading className='mt-3 uppercase'>
              Your Gateway to Web3
            </Heading>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className='mt-6 text-white text-[30px] font-bold'>
              ZenHive, Earning Center, and DePIN <br /> – All in One
            </p>
          </FadeIn>
          <FadeIn
            delay={0.6}
            className='flex'
          >
            <Datas />
          </FadeIn>
          <FadeIn
            delay={0.8}
            className='flex flex-wrap justify-center md:justify-start gap-3 mt-16'
          >
            <a target='_blank' className='flex-1 md:flex-none' href="https://apps.apple.com/us/app/azen-connect/id6476482774">
              <Button className='min-w-[140px] w-full md:w-[184px] h-[58px] rounded-[6px]' gradient={false} type={ButtonType['App Store']} />
            </a>
            <a target='_blank' className='flex-1 md:flex-none' href="https://play.google.com/store/apps/details?id=com.azen.manager">
              <Button className='min-w-[140px] w-full md:w-[184px] h-[58px] rounded-[6px]' gradient={false} type={ButtonType['Google Play']} />
            </a>
            <a target='_blank' className='flex-1 md:flex-none' href="https://t.me/aZennetwork1_bot">
              <Button className='min-w-[140px] w-full md:w-[184px] h-[58px] rounded-[6px]' gradient={false} type={ButtonType['Mini App']} />
            </a>
          </FadeIn>
        </div>
        <div className='mt-5 mx-auto w-4/5 scale-125 md:scale-100 md:w-[43.2%] block text-center origin-top'>
          <Image className='inline-block md:absolute md:top-1/2 md:-translate-y-1/2 lg:top-20 lg:-translate-y-0 right-0' src={bg} alt="" />
        </div>
      </div>
      <FadeIn delay={1} className=' mt-12 grid grid-cols-1 md:grid-cols-3 gap-3'>
        {
          data.map((item) => (
            <div key={item.title} className='relative p-6 pb-12 md:pb-6 border border-white/30 bg-[rgba(29,29,29,0.1)] backdrop-blur-[22px] rounded-[8px] overflow-hidden'>
              <h5 className='relative z-[1] text-[28px] font-bold leading-normal text-white'>
                {item.title}
              </h5>
              <p className='mt-4 pr-24 text-[#ADABB2] text-[18px] font-normal leading-normal'>
                {item.desc}
              </p>
              <Image className='absolute bottom-0 right-0' width={110} src={item.icon} alt="" />
            </div>
          ))
        }
      </FadeIn>
    </ContentContainerLarge>
  )
}

export default React.memo(AzenHub)
