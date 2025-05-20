"use client"

import React from 'react'

import Heading from '@/components/home-new/heading'
import ContentContainerLarge from '../container/ContentContainerLarge';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

import icon1 from '@/assets/product/azen-zenhive-icon/1.svg'
import icon2 from '@/assets/product/azen-zenhive-icon/2.svg'
import icon3 from '@/assets/product/azen-zenhive-icon/3.svg'
import icon4 from '@/assets/product/azen-zenhive-icon/4.svg'

import zenhive1 from '@/assets/zenhive/zenhive/image-1.webp'
import zenhive2 from '@/assets/zenhive/zenhive/image-2.webp'
import zenhive3 from '@/assets/zenhive/zenhive/image-3.webp'



import right from '@/assets/arrow/right.svg'
import left from '@/assets/arrow/left.svg'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = [
  zenhive1,
  zenhive2,
  zenhive3,
]

const ZenHive = () => {
  const router = useRouter();
  const handleClick = (page: string) => {
    router.push(page);
  };
  const data = [
    {
      id: 1,
      name: 'AI at the Edge',
      icon: icon1,
    },
    {
      id: 2,
      name: 'Optimized Data Solutions',
      icon: icon2,
    },
    {
      id: 3,
      name: 'Proof of Contribution Mining',
      icon: icon3,
    },
    {
      id: 4,
      name: 'Geo-Centric Solutions',
      icon: icon4,
    },
  ]
  return (
    <ContentContainerLarge  id='zenhive' className='font-gilroy mt-20'>
      <Heading className='w-full text-center uppercase'>ZenHive</Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 relative w-full h-auto md:h-[500px] border border-white/30 bg-[rgba(29,29,29,0.1)] backdrop-blur-[22px] rounded-[8px] overflow-hidden mt-20'>
        <div className='max-md:order-2 swiper-container relative h-auto md:h-[500px]'>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            className='h-full'
            navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
            autoplay
          >
            <Arrow direction='left' />
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className='!flex justify-center items-center'
              >
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-4/5 md:w-3/5  object-cover"
                />

              </SwiperSlide>
            ))}
            <Arrow direction='right' />

          </Swiper>
        </div>
        <div
          className='p-[75px_32px] md:pb-0 lg:pb-[75px] flex flex-col gap-6 md:gap-2 lg:gap-5 xl:gap-8 overflow-hidden transition-opacity duration-300'
        >
          <p
            className='font-normal text-[28px] text-white'
          >The first mass commercial adoption DePIN device built on aZen Protocol.</p>
          <div className='mt-4 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-2 xl:gap-8'>
            {
              data.map((item) => (
                <div key={item.id} className='flex justify-start items-center gap-2 h-12'>
                  <Image width={30} src={item.icon} alt="" />
                  <p className='ml-2 font-normal text-base text-white'>{item.name}</p>
                </div>
              ))
            }
          </div>
          <button
            className='max-md:mx-auto w-auto max-w-[280px] flex-[0_0_10px] px-8 py-1.5 inline-flex justify-center items-center mt-8 gap-2 text-2xl text-white border border-white hover:text-black hover:bg-white transition-all duration-300 rounded-lg'
            onClick={() => handleClick('/zenhive')}>
            Test Minning is on &gt;
          </button>
        </div>
        {/* <img className='block md:hidden' src={bgm} alt=""/> */}
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(ZenHive)

const Arrow = ({ direction }: { direction: 'left' | 'right' }) => {
  return (
    <div className={cn(
      "block w-[80px] md:w-[130px] h-full absolute top-0 z-10",
      direction === 'left' && 'left-0  md:hover:bg-[linear-gradient(90deg,#1F1F1F_0,rgba(31,31,31,0.00)_100%)]',
      direction === 'right' && 'right-0 md:hover:bg-[linear-gradient(90deg,rgba(31,31,31,0.00)_0,#1F1F1F_100%)]',
    )}>
      <button 
        className={cn(
          "absolute top-1/2 -translate-y-1/2 arrow z-10 opacity-[0.17] hover:opacity-100 transition-opacity duration-300",
          direction === 'left' && 'left-8 arrow-prev',
          direction === 'right' && 'right-8 arrow-next',
        )}
      >
        <Image src={direction === 'left' ? left : right} alt="right" />
      </button>
    </div>
  )
}