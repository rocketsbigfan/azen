import { useEffect, useRef, useState } from 'react'
import { motion, Variants } from 'motion/react'
import img1 from '@/assets/home-new/azenhub/img-1.png'
import img2 from '@/assets/home-new/azenhub/img-2.png'

import 'swiper/css'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from './heading'
import FadeIn from '../fade-in'
import Button, { AppStoreButtonSmall, ButtonType, GoogleButtonSmall, TelegramButtonSmall } from '../home-new/Button'
import homeStore from '@/service/home'
import NumberScroll from '../number-scroll'
import { formatNumber } from '@/utils/format'
import Link from 'next/link'
const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
}

const Transition = {
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { amount: 0.7 },
  variants,
  transition: { duration: .6 }
}

const AnimationItem = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {

  const [extraAnimation, setExtraAnimation] = useState(false);

  return (
    <motion.div
      {...Transition}
      transition={{ delay, duration: .6 }}
      viewport={{ amount: 0.4 }}
      className={className}
      onAnimationComplete={() => setExtraAnimation(true)} // **动画完成后触发额外动画**
    >
      {/* <motion.div
        animate={extraAnimation ? { y: [0, -20, 0] } : {}} // **额外的上下浮动动画**
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          delay
        }}
      > */}
      {children}
      {/* </motion.div> */}
    </motion.div>
  )
}

const NumberItem = ({ title, value, unit, delay, className }: { title: string, value?: number, unit?: string, delay?: number, className?: string }) => {
  return <>
    <p className={`w-full text-left text-[14px] lg:text-xl font-medium text-[rgba(212,216,219,.7)] ${className}`}>{title}</p>
    <div className='max-sm:mt-[14px] relative'>
      <p className="text-[32px] md:text-4xl lg:text-6xl font-GilroyMedium font-extrabold text-white opacity-0">
        {formatNumber(value ?? 0)}
        {unit && <span className='text-[#B0F15B]'>{unit}</span>}
      </p>
      <p className="absolute top-0 left-0 text-[32px] md:text-4xl lg:text-6xl font-GilroyMedium font-extrabold text-white">
        <NumberScroll resetOnExit duration={.6} value={value} delay={delay} />
        {unit && <span className='text-[#B0F15B]'>{unit}</span>}
      </p>
    </div>
  </>
}

export default function Azenhub() {
  const { resourceInfo, fetchResourceInfo } = homeStore();

  useEffect(() => {
    fetchResourceInfo();
  }, [fetchResourceInfo]);

  return (
    <div id="azenhub-wrapper" className='relative w-full z-[2]'>
      <ContentContainerLarge className='mx-auto mt-0 md:mt-20'>
        <motion.div {...Transition} viewport={{ amount: 0.6 }} variants={undefined}>
          <FadeIn viewport={{ once: false }}><Heading className='text-center uppercase'>aZen Hub</Heading></FadeIn>
          <FadeIn viewport={{ once: false }} transition={{ delay: .3, duration: 1 }}>
            <p className='text-center mt-9 text-sm md:text-xl font-medium text-white/70 md:text-white/60 leading-6 md:!leading-[34px]'>
              aZen Hub is the gateway to the Web3 ecosystem,
              integrating with aZen DePIN and DeFAI. Users earn $aZen rewards as Proof of Contribution by sharing computing resources
              and engaging in DID-based social interactions. Users also receive eco-partner incentives
              and grow their Web3 portfolio with AI-optimized, risk-controlled DeFAI solutions.
            </p>
            <FadeIn viewport={{ once: false }} transition={{ delay: .6, duration: 1 }} className='flex flex-wrap md:justify-center gap-[10px] md:gap-10 mt-9'>
              <Link target='_blank' className='max-md:flex-1' href="https://apps.apple.com/us/app/azen-connect/id6476482774">
                <AppStoreButtonSmall className='md:hidden w-full' />
                <Button className='max-md:hidden w-[274px] md:w-[230px] h-[60px]' gradient={false} type={ButtonType['App Store']} />
              </Link>
              <Link target='_blank' className='max-md:flex-1' href="https://play.google.com/store/apps/details?id=com.azen.manager">
                <GoogleButtonSmall className='md:hidden w-full' />
                <Button className='max-md:hidden w-[274px] md:w-[230px] h-[60px] ' gradient={false} type={ButtonType['Google Play']} />
              </Link>
              <Link target='_blank' className='max-md:w-full' href="https://t.me/aZennetwork1_bot">
                <TelegramButtonSmall className='md:hidden w-full' />
                <Button className='max-md:hidden w-[274px] md:w-[230px] h-[60px] ' gradient={false} type={ButtonType['Mini App']} />
              </Link>
            </FadeIn>
          </FadeIn>
          <div className='mt-10 md:mt-20 flex justify-between'>
            <AnimationItem
              className='flex flex-col items-center justify-end'
              delay={.3}
            >
              <NumberItem delay={.3} title='Download' value={resourceInfo?.azenConnectDownload} />
              <div className='max-sm:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="397" viewBox="0 0 11 397" fill="none">
                  <path d="M0.166667 6C0.166667 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667C2.55448 0.666667 0.166667 3.05448 0.166667 6ZM6.5 397V6H4.5V397H6.5Z" fill="url(#paint0_linear_1201_4287)" />
                  <defs>
                    <linearGradient id="paint0_linear_1201_4287" x1="6" y1="6" x2="6" y2="397" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C1FF50" />
                      <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </AnimationItem>
            <div className="hidden sm:block w-[14.16%] sm:ml-32">
              <motion.img initial={{opacity: 0, scale: .8}} whileInView={{opacity: 1, scale: 1}} src={img1.src} className='object-covercover' alt="" />
            </div>
            <AnimationItem
              className='flex flex-col items-center justify-end'
              delay={.6}
            >
              <NumberItem delay={.6} title='MAU' value={resourceInfo?.mau} />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="12" height="204" viewBox="0 0 12 204" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6ZM7.00001 204L7 6L5 6L5.00001 204L7.00001 204Z" fill="url(#paint0_linear_1201_4288)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4288" x1="6.5" y1="6" x2="6.50001" y2="204" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
            <AnimationItem
              className='flex flex-col items-center justify-end'
              delay={.9}
            >
              <NumberItem delay={.9} title='DAU' value={resourceInfo?.dau} />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="12" height="269" viewBox="0 0 12 269" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM7 269V6H5V269H7Z" fill="url(#paint0_linear_1201_4289)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4289" x1="6.5" y1="6" x2="6.5" y2="269" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
          </div>
          <motion.img initial={{opacity: 0, scale: .8}} whileInView={{opacity: 1, scale: 1}} src={img1.src} className='block sm:hidden mt-5 object-cover w-[54%] mx-auto' alt="" />
        </motion.div>
      </ContentContainerLarge>
      <ContentContainerLarge className='mx-auto mt-20'>
        <motion.div {...Transition} viewport={{ amount: 0.6 }} variants={undefined}>
          <FadeIn viewport={{ once: false }}><Heading className='text-center uppercase'>aZen DePIN Lite</Heading></FadeIn>
          <FadeIn viewport={{ once: false }} transition={{ delay: .3, duration: 1 }}>
            <p className='text-center mt-9 text-sm md:text-xl font-medium text-white/70 md:text-white/60  leading-6 md:!leading-[34px]'>
              Through the aZen DePIN protocol, users can tokenize computing resources and applications.
              Rewards are distributed based on the quality, duration, availability, and utilization of rented resources by customers.
            </p>
          </FadeIn>
          <div className='mt-10 md:mt-20 flex max-sm:flex-wrap justify-between'>
            <AnimationItem delay={.3} className='max-sm:w-1/2 flex flex-col max-sm:justify-center items-center'>
              <NumberItem delay={.3} title='Active DePINs' value={resourceInfo?.activeDepins} className='max-sm:text-center' />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="11" height="397" viewBox="0 0 11 397" fill="none">
                <path d="M0.166667 6C0.166667 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667C2.55448 0.666667 0.166667 3.05448 0.166667 6ZM6.5 397V6H4.5V397H6.5Z" fill="url(#paint0_linear_1201_4287)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4287" x1="6" y1="6" x2="6" y2="397" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
            <AnimationItem
              className='max-sm:w-1/2 flex flex-col items-center justify-end'
              delay={.6}
            >
              <NumberItem delay={.6} title='Storage' value={resourceInfo?.totalStorage} className='max-sm:text-center' unit='G' />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="12" height="204" viewBox="0 0 12 204" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6ZM7.00001 204L7 6L5 6L5.00001 204L7.00001 204Z" fill="url(#paint0_linear_1201_4288)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4288" x1="6.5" y1="6" x2="6.50001" y2="204" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
            <div className="hidden sm:block w-[14.16%]">
              <motion.img initial={{opacity: 0, scale: .8}} whileInView={{opacity: 1, scale: 1}} src={img2.src} className='object-cover' alt="" />
            </div>
            <AnimationItem
              className='max-sm:mt-4 max-sm:w-1/2 flex flex-col items-center sm:justify-end'
              delay={.9}
            >
              <NumberItem delay={.9} title='RAM' value={resourceInfo?.totalRam} className='max-sm:text-center' unit='G' />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="12" height="204" viewBox="0 0 12 204" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6ZM7.00001 204L7 6L5 6L5.00001 204L7.00001 204Z" fill="url(#paint0_linear_1201_4288)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4288" x1="6.5" y1="6" x2="6.50001" y2="204" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
            <AnimationItem delay={1.2} className='max-sm:mt-4 max-sm:w-1/2 flex flex-col items-center justify-end sm:justify-start'>
              <NumberItem delay={1.2} title='Minted $XaZen' value={resourceInfo?.mintedXazen ? resourceInfo?.mintedXazen / 1000 : 0} unit='K+' className='max-sm:text-center' />
              <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="11" height="397" viewBox="0 0 11 397" fill="none">
                <path d="M0.166667 6C0.166667 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667C2.55448 0.666667 0.166667 3.05448 0.166667 6ZM6.5 397V6H4.5V397H6.5Z" fill="url(#paint0_linear_1201_4287)" />
                <defs>
                  <linearGradient id="paint0_linear_1201_4287" x1="6" y1="6" x2="6" y2="397" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF50" />
                    <stop offset="0.65" stopColor="#C1FF50" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </AnimationItem>
            <motion.img initial={{opacity: 0, scale: .8}} whileInView={{opacity: 1, scale: 1}} src={img2.src} className='block sm:hidden mt-5 object-cover w-[54%] mx-auto' alt="" />
          </div>
        </motion.div>
        
      </ContentContainerLarge>
    </div>
  )
}
