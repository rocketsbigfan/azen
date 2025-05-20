"use client"
import { motion } from 'motion/react'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from '@/components/home-new/heading'
import FadeIn from '../fade-in'

import headerIcon1 from '@/assets/home-new/partners/title-icon-1.png'
import headerIcon2 from '@/assets/home-new/partners/title-icon-2.png'

const data = [
  {
    title: 'Real-Time Data',
    desc: 'Turn raw data into instant insights. Scalable, flexible, and cost-efficient.'
  },
  {
    title: 'AI at the Edge',
    desc: 'Run LLMs locally for real-time, smart decisions.'
  },
  {
    title: 'Geo-Centric Growth',
    desc: 'Deliver location-based services and targeted marketing for sectors like gaming, healthcare, and smart cities.'
  },
]

export default function Features() {
  return <ContentContainerLarge className='mt-32'>
    <Heading className='text-center'>
      <div className='relative sm:px-[240px] md:pt-20 py-[20px]'>
        <motion.div
          className='max-md:hidden absolute left-0 top-0'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // **额外的上下浮动动画**
          transition={{
            delay: 1.2,
            duration: .6
          }}
          viewport={{ once: false }}
        >
          <motion.img
            className='w-[202px]'
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
        <FadeIn className='w-full text-center relative z-[2] uppercase' transition={{ duration: 1, delay: .2 }}>
          ZenHive Features
        </FadeIn>
        <motion.div
          className="max-md:hidden absolute right-0 top-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // **额外的上下浮动动画**
          transition={{
            delay: 1.2,
            duration: .6
          }}
          viewport={{ once: false }}
        >
          <motion.img
            className='w-[226px]'
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
    <div className='mt-10 md:mt-[50px] w-full flex flex-col md:flex-row gap-6'>
      {
        data.map((item, index) => (
          <FadeIn
            className='w-full px-4 md:px-[30px] py-[22px] min-h-[180px] text-center border border-white/30 bg-[rgba(29,29,29,.1)] backdrop-blur-[22px] rounded-[8px] hover:backdrop-blur-[12px] hover:shadow-[-2px_-2px_2px_#cff73d_inset,2px_3px_2px_0px_rgba(255,255,255,0.42)_inset] hover:bg-[linear-gradient(127deg,#131602_61.97%,#334C00_99.99%)] transition-all duration-300'
            transition={{ duration: .6, delay: index * .1 }}
            key={index}
          >
            <h5 className='font-gilroyMedium text-2xl md:text-[28px] font-bold text-white'>{item.title}</h5>
            <p className='mt-6 md:mt-3 text-white md:text-white/80 text-base font-medium'>{item.desc}</p>

          </FadeIn>
        ))
      }
    </div>
  </ContentContainerLarge>
}