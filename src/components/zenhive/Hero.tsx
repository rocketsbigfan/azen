import React from 'react'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Button, { AppStoreButtonSmall, ButtonType, GoogleButtonSmall } from "../home-new/Button";

import bg from '@/assets/zenhive/hero/bg-hero.webp'

// import { useDialogContext } from '@/providers/DialogProvider'


import ZenhiveLogo from '@/assets/zenhive/zenhive-logo.svg'
import Heading from '../home-new/heading'
import FadeIn from '../fade-in';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {

  // const { setShowGetInTouchDialog } = useDialogContext()

  // const handleClick = () => {
  //   setShowGetInTouchDialog(true)
  // }

  return (
    <ContentContainerLarge className='relative md:mt-32 font-gilory'>
      <div className='w-full h-full'>
        <div className='relative z-[2] md:w-3/5'>
          <FadeIn
            className='hidden md:block'
          >
            <Image src={ZenhiveLogo} alt="" className='' />
          </FadeIn>
          <FadeIn
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Heading className='mt-8 max-md:text-center uppercase'>Empowering Industries </Heading>
          </FadeIn>
          <FadeIn
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className='mt-6 font-gilory font-medium text-white text-xl md:text-2xl leading-relaxed max-md:text-center'>
              with Real-Time AI, Optimized Data, and DePIN Innovation
            </p>
          </FadeIn>
          <FadeIn
            transition={{ duration: 1, delay: 0.6 }}
            className="buttons mt-6 md:mt-32 w-full flex max-md:justify-center gap-6 flex-wrap"
          >
            {/* pc端 */}
            <Link target='_blank' className='hidden md:block' href="https://apps.apple.com/us/app/azen-connect/id6476482774">
              <Button className=' w-[230px] backdrop-blur-[17px]' gradient={false} labelClassName='text-xl' textClassName='text-[10px]' type={ButtonType['App Store']} />
            </Link>
            <Link target='_blank' className='hidden md:block' href="https://play.google.com/store/apps/details?id=com.azen.manager">
              <Button className=' w-[230px] backdrop-blur-[17px]' gradient={false} labelClassName='text-xl' textClassName='text-[10px]' type={ButtonType['Google Play']} />
            </Link>
            {/* 移动端 */}
            <Link className='md:hidden' target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774">
              <GoogleButtonSmall />
            </Link>
            <Link className='md:hidden' target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager">
              <AppStoreButtonSmall />
            </Link>
          </FadeIn>
        </div>
        <div className='hidden md:block relative z-[1]'>
          <Image className='absolute bottom-0 md:-bottom-10 lg:-bottom-20 right-0 hidden md:block w-[532px]' src={bg} alt="" />
        </div>
        <div className='mt-5 md:hidden relative z-[1]'>
          <Image className='w-full max-w-[344px] mx-auto' src={bg} alt="" />
        </div>
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(Hero)