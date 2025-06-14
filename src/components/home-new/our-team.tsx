import React from 'react'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from './heading'
import flower from '@/assets/home-new/team/flower-2.webp'
import { motion } from 'motion/react'
import FadeIn from '../fade-in'
import Link from 'next/link'
const OurTeam = () => {

  return (
    <ContentContainerLarge className='relative'>
      <div className='w-full flex min-h-[430px] bg-[#03180d] border border-[#c2fd53] rounded-[12px] overflow-hidden'>
        <div className="relative z-[2] flex-1 p-10 lg:p-14 xl:pt-[75px] xl:px-[106px]">
          <FadeIn transition={{ duration: .6, delay: .4 }} viewport={{ once: false, amount: .1 }}><Heading className='relative uppercase md:font-black'>Our Team</Heading></FadeIn>
          <FadeIn transition={{ duration: .6, delay: .6 }} viewport={{ once: false, amount: .1 }} className='font-gilroyLight z-10 mt-5 font-normal text-base text-white/60 leading-normal'>
            Founded in 2010 as a research lab at the University of Auckland,
            evolving into a multi-million-dollar high-tech Web2 business and launching aZen Protocol as a Web2+Web3
            spin-out.
          </FadeIn>
          <FadeIn transition={{ duration: .6, delay: .8 }} viewport={{ once: false, amount: .1 }}>
            <Link href='/team'>
              <button className='mt-10 w-[162px] h-[54px] inline-flex justify-center items-center text-white md:text-black md:bg-white font-gilroy text-2xl font-medium rounded-[8px]  border border-white'>
                More
              </button>
            </Link>
          </FadeIn>
        </div>
        <div className='lg:w-[600px] relative z-[1] flex-shrink-0 flex-grow-0 overflow-visible'>
          <motion.div
            className="absolute -right-[277px] -bottom-[277px] md:-bottom-[300px] md:-right-[250px] lg:bottom-0 lg:-top-[600px] lg:-right-1/3 "
            initial={{
              x: 150,
              y: -150,
            }}
            whileInView={{
              x: 0,
              y: 0,
            }}
            transition={{
              x: { duration: 1, ease: "easeOut" }, // 平滑移动到 (0,0)
              y: { duration: 1, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            <motion.img
              src={flower.src}
              className='origin-center max-w-none w-[544px] md:w-[600px] lg:w-[1000px]'
              alt="flower"
              whileInView={{
                rotate: [0, 360],
                transition: { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: 1 }
              }}
              viewport={{ once: false }}
            />
          </motion.div>
        </div>
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(OurTeam)