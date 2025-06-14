"use client"

import React, { useEffect, useRef } from 'react'
import Heading from '@/components/home-new/heading'
import logo1 from '@/assets/zenhive/trusted/logo1.svg'
import logo2 from '@/assets/zenhive/trusted/logo2.svg'
import logo3 from '@/assets/zenhive/trusted/logo3.svg'
import logo4 from '@/assets/zenhive/trusted/logo4.svg'
import logo5 from '@/assets/zenhive/trusted/logo5.svg'
import logo6 from '@/assets/zenhive/trusted/logo6.svg'
import logo7 from '@/assets/zenhive/trusted/logo7.svg'
import logo8 from '@/assets/zenhive/trusted/logo8.svg'
import logo9 from '@/assets/zenhive/trusted/logo9.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Image from 'next/image'

const Trusted = () => {
  const icons = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];
  return (
    <section>
      <ContentContainerLarge className='font-gilroy mt-16 md:mt-36'>
        <Heading className='text-center uppercase'>Trusted Clients and Partners</Heading>
        <p
          className=' mt-5 mx-auto px-4 max-w-[900px] text-base md:text-[20px] text-white/80 text-center '>
          ZenHive leverages AI-powered data analysis and AIGC technology to analyze consumer behavior,
          create personalized content, and expand consumer outreach across social media platforms,
          boosting our distribution channels’ sales conversions effectively and efficiently.
        </p>
      </ContentContainerLarge>
      <div className='relative mt-28'>
        <div className='absolute top-0 left-0 w-[100px] md:w-[180px] lg:w-[300px] xl:w-[480px] h-full bg-[linear-gradient(90deg,#0F1110_0%,rgba(15,17,16,0)_100%)] z-[10]' />
        <PSwiper icons={icons} speed={4000} />
        <div className='absolute top-0 right-0 w-[100px] md:w-[180px] lg:w-[300px] xl:w-[480px] h-full bg-[linear-gradient(90deg,rgba(15,17,16,0)_0%,#0F1110_100%)] z-[10]' />
      </div>
    </section>
  )
}

export default React.memo(Trusted)

const PSwiper = ({ icons, className, reverse, speed }: { 
  icons: string[], 
  className?: string, 
  reverse?: boolean,
  speed?: number,
  delayTime?: number
}) => {

  const swiperRef = useRef<unknown>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 组件卸载时断开 IntersectionObserver，防止内存泄漏
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current?.disconnect();
      }
    };
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
        pauseOnMouseEnter: true
      }}
      loop={true}
      speed={speed ?? 4000} // 增加速度值使滚动更慢更平滑
      slidesPerView='auto' // 同时显示的 slide 数量
      spaceBetween={48}
      freeMode={{
        enabled: true,
        momentum: false, // 禁用动量效果
        minimumVelocity: 1, // 最小速度
      }}
      allowTouchMove={false}
      className={className}
      grabCursor={false}
      resistance={false} // 禁用阻力效果
      watchSlidesProgress={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        // 设置 swiper-wrapper 的过渡为线性，保证速度恒定
        swiper.wrapperEl.style.transitionTimingFunction = 'linear';
        // 使用 IntersectionObserver 监听 Swiper 是否进入视口
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                swiper.autoplay.start();
              } else {
                swiper.autoplay.stop();
              }
            });
          },
          { threshold: 0.8 } // 当 50% 进入视口时触发
        );
        observerRef.current.observe(swiper.el);
      }}
    >
      {icons.map((icon, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          {/* <div className=' h-[130px] flex items-center justify-center rounded-[20px] bg-[rgba(27,27,27,1)]'> */}
            <Image
              src={icon}
              alt={`icon-${index}`}
              className="h-[46px] md:h-[90px] object-contain w-auto"
            />
          {/* </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}