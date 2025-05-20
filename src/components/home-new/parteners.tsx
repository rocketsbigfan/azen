import React, { useEffect, useRef } from 'react'

import { motion } from 'motion/react'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import Heading from './heading'

import img1 from '@/assets/home-new/partners/backers/1.png'
import img2 from '@/assets/home-new/partners/backers/2.png'
import img3 from '@/assets/home-new/partners/backers/3.png'
import img4 from '@/assets/home-new/partners/backers/4.png'
import img5 from '@/assets/home-new/partners/backers/5.png'
import img6 from '@/assets/home-new/partners/backers/6.png'
import img7 from '@/assets/home-new/partners/backers/7.png'
import img8 from '@/assets/home-new/partners/backers/8.png'
import img9 from '@/assets/home-new/partners/backers/9.png'
// import img10 from '@/assets/home-new/partners/backers/10.png'
// import img11 from '@/assets/home-new/partners/backers/11.png'
// import img12 from '@/assets/home-new/partners/backers/12.png'
// import img13 from '@/assets/home-new/partners/backers/13.png'
import img14 from '@/assets/home-new/partners/backers/14.png'

import headerIcon1 from '@/assets/home-new/partners/title-icon-1.png'
import headerIcon2 from '@/assets/home-new/partners/title-icon-2.png'




import 'swiper/css'
import 'swiper/css/autoplay'
import FadeIn from '../fade-in'

const icons1 = [
  img1.src, img2.src, img3.src, img4.src, img5.src, img1.src, img2.src, img3.src, img4.src, img5.src, img1.src, img2.src, img3.src, img4.src, img5.src
];
const icons2 = [
  img6.src, img7.src, img8.src, img9.src, img14.src, img6.src, img7.src, img8.src, img9.src, img14.src, img6.src, img7.src, img8.src, img9.src, img14.src
];
// const icons3 = [
//   img10, img11, img12, img13, img10, img11, img12, img13, img10, img11, img12, img13
// ];

const Parteners = () => {
  return (
    <section className='w-full mt-20 md:mt-56'>
      <Heading
        className='flex justify-center items-center w-full'
      >
        <div className='relative px-[120px] md:px-[240px]'>
          <motion.div
            className='absolute -left-[30px] md:left-0 top-0'
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }} // **额外的上下浮动动画**
            transition={{
              delay: 1.2,
              duration: .6
            }} 
            viewport={{once: false}}
          >
            <motion.img 
              className='w-[120px] md:w-[202px]' 
              src={headerIcon1.src} alt=""
              animate={{ y: [0, -30] }} // **额外的上下浮动动画**
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                delay: 1.2
              }} 
            />
          </motion.div>
          <FadeIn viewport={{ once: false }} className='text-center' transition={{ duration: 1, delay: .2 }}>
            Backers & Investment Partners
          </FadeIn>
          <motion.div
            className="absolute -right-[30px] md:right-0 top-0" 
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }} // **额外的上下浮动动画**
            transition={{
              delay: 1.2,
              duration: .6
            }} 
            viewport={{once: false}}
          >
            <motion.img 
              className='w-[120px] md:w-[226px]' 
              src={headerIcon2.src} 
              alt=""
              animate={{ y: [0, -30] }} // **额外的上下浮动动画**
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: .8,
                delay: 1.4
              }} 
            />
          </motion.div>
        </div>
      </Heading>
      {/* <FadeIn viewport={{ once: false }} transition={{ delay: .6, duration: 1 }}>
        <p className='relative font-gilroy font-normal text-2xl w-full text-center text-white/80  md:text-white mt-6'>Over $70Million in Equity and Token Investment</p>
      </FadeIn> */}
      <div className="relative mt-16 md:mt-32 mask-gradient whitespace-nowrap overflow-hidden py-4 mb-16 xl:mb-40 md:mb-20">
        <div className='absolute top-0 left-0 w-[100px] md:w-[180px] lg:w-[300px] xl:w-[480px] h-full bg-[linear-gradient(90deg,#000,rgba(15,17,16,0)_100%)] z-[10]' />
        <PSwiper icons={icons1} reverse speed={4000} />
        <PSwiper icons={icons2} className='mt-6 md:mt-12' speed={4000} />
        <div className='absolute top-0 right-0 w-[100px] md:w-[180px] lg:w-[300px] xl:w-[480px] h-full bg-[linear-gradient(90deg,rgba(15,17,16,0)_0%,#000_100%)] z-[10]' />
      </div>
    </section>
  )
}

export default React.memo(Parteners)

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
        // observerRef.current = new IntersectionObserver(
        //   (entries) => {
        //     entries.forEach((entry) => {
        //       if (entry.isIntersecting) {
        //         swiper.autoplay.start();
        //       } else {
        //         swiper.autoplay.stop();
        //       }
        //     });
        //   },
        //   { threshold: 0.8 } // 当 50% 进入视口时触发
        // );
        // observerRef.current.observe(swiper.el);
      }}
    >
      {icons.map((icon, index) => (
        <SwiperSlide key={index} className='!w-[176px] md:!w-[302px]'>
          <div className='h-[58px] md:h-[100px] flex items-center justify-center rounded-[8px] bg-[rgba(27,27,27,1)]'>
            <img
              src={icon}
              alt={`icon-${index}`}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}