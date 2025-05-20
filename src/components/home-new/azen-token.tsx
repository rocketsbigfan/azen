import { motion, useAnimate } from "motion/react";
import circle1 from '@/assets/home-new/azen-token/circle-1.png'
import circle2 from '@/assets/home-new/azen-token/circle-2.png'
import circle3 from '@/assets/home-new/azen-token/circle-3.png'
import circle4 from '@/assets/home-new/azen-token/circle-4.png'
import circle5 from '@/assets/home-new/azen-token/circle-5.png'
import circle6 from '@/assets/home-new/azen-token/circle-6.png'
import circle7 from '@/assets/home-new/azen-token/circle-center.png'

import ContentContainerLarge from "../container/ContentContainerLarge";
import Heading from "./heading";

import FadeIn from "../fade-in";
import useFadeIn from "../fade-in/useFadeIn";
import useVideoAutoploy from "@/hooks/useVideoAutoploy";

const circles = [
  {
    src: circle1,
    width: 281,
    height: 302,
    top: 14,
    left: 164,
    rotate: -70.088,
  },
  {
    src: circle2,
    width: 300.6,
    height: 322.8,
    top: 62,
    left: 306,
    rotate: -39.732,
  },
  {
    src: circle3,
    width: 304.152,
    height: 326.567,
    top: 200,
    left: 312,
    rotate: 23.489,
  },
  {
    src: circle4,
    width: 232.993,
    height: 271.055,
    top: 346,
    left: 205,
    rotate: 55.554,
  },
  {
    src: circle5,
    width: 242.693,
    height: 335.049,
    top: 290,
    left: 74,
    rotate: -53.264,
  },
  {
    src: circle6,
    width: 267.76,
    height: 287.493,
    top: 100,
    left: 60,
    rotate: -139.834,
  }
]

const duration = 5
const circleDuration = duration / circles.length

const boxVariants = {
  hidden: { opacity: 0, scale: 0 }, // 初始状态
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 } // 进入视图动画
  }
};
const Circle = () => {
  return (
    <>
      <motion.div
        initial={{ rotate: 0 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        whileInView={{ rotate: 360 }}
        className="absolute w-full h-full"
        style={{
          transformOrigin: 'center center',
        }}
      >
        {circles.map((circle, index) => (
          <motion.img
            key={index}
            src={circle.src.src}
            width={circle.width}
            height={circle.height}
            className="absolute"
            initial={{ opacity: 0 }}
            transition={{ duration: circleDuration, delay: circleDuration * index }}
            whileInView={{ opacity: 1 }}
            style={{
              top: circle.top,
              left: circle.left,
              rotate: circle.rotate,
            }}
          />
        ))}
      </motion.div>
      <div className="rounded-full w-[413px] h-[417px] rotate-[58.155deg]">
        <motion.img
          src={circle7.src}
          alt="circle7"
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: [1.1, 1] }}
          transition={{ delay: duration, duration: 0.4, type: "spring", bounce: 0.5 }}
          variants={boxVariants}
        // whileInView={{ opacity: 1, scale: [1.2, 1.0] }}
        />
      </div>
    </>
  )
}

const data = [
  {
    id: 1,
    title: 'SocialFi',
    desc: 'Earn $aZen by promoting social media content and fostering community engagement.',
  },
  {
    id: 2,
    title: 'DePIN Lite',
    desc: 'Share idle computing resources from various devices to build a decentralized green network and generate rewards.',
  },
  {
    id: 3,
    title: 'ZenHive Mining',
    desc: 'Invest in and set up a ZenHive to mine $aZen.',
  },
]



export default function AzenToken() {
  const fadeInProps = useFadeIn({})

  const { videoRef, videoContainer, handleLoadedData } = useVideoAutoploy()

  const [scope, animate] = useAnimate()


  const handleEnd = () => {
    animate('video', {
      rotate: [0, 360],
    }, {
      duration: 10, ease: "linear", repeatType: 'loop', repeat: Infinity
    })
  }

  return (
    <ContentContainerLarge className="relative z-[2] py-10 md:py-28">
      
      <div ref={videoContainer} className="relative flex flex-col md:flex-row md:h-[610px] rounded-[8px] border border-[rgba(255,255,255,.3)] bg-[#010100] overflow-hidden">
        <FadeIn className="md:hidden pt-10 relative z-[2]" viewport={{ once: false }}><Heading className="text-center">$AZEN TOKEN</Heading></FadeIn>
        <div className="order-2 md:order-1 relative z-[1] flex-1 p-10 max-md:pt-0 lg:p-[66px] md:pb-0 md:max-w-[592px]" >
          <FadeIn className="max-md:hidden" viewport={{ once: false }}><Heading className=" max-md:text-center">$AZEN TOKEN</Heading></FadeIn>
          <div className=" max-md:text-center text-white">
            {
              data.map(item => {
                return (
                  <div
                    key={item.id}
                    className="mt-6 lg:mt-10"
                  >
                    <motion.div 
                      {...fadeInProps} 
                      transition={{ delay: item.id * 0.3 + .3, duration: .6 }} 
                      viewport={{ once: false }} 
                    >
                      <h4 className="font-gilroyMedium max-md:text-[18px] text-[28px] leading-[36px] font-bold">{item.title}</h4>
                      <p className="text-white/60 max-md:text-[14px] text-base leading-normal">{item.desc}</p>
                    </motion.div>
                  </div>

                )
              })
            }
          </div>
        </div>
        <div ref={scope} className="order-1 md:order-2  md:flex relative flex-1 md:h-[610px] items-center justify-center overflow-visible">
          <video 
            src='/video/home-azen-token.mp4'
            controls={false}
            preload="auto"
            playsInline
            autoPlay
            ref={videoRef}
            className="max-md:mx-auto max-md:w-4/5 md:absolute md:h-full max-w-none object-cover"
            muted
            webkit-playsinline="true"  // 添加这个属性
            x5-playsinline="true"  // 添加这个属性(针对腾讯X5内核)
            x-webkit-airplay="allow"  // 添加这个属性
            x5-video-player-type="h5"  // 添加这个属性(针对腾讯X5内核)
            onEnded={handleEnd}
            onCanPlayThrough={handleLoadedData}
          />
          {/* <motion.div 
            initial={{ rotate: 0 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            whileInView={{ rotate: 360 }}
            className="absolute w-full h-full"
            style={{
              transformOrigin: 'center center',
            }}
          >
            {circles.map((circle, index) => (
              <motion.img
                key={circle.src}
                src={circle.src}
                width={circle.width}
                height={circle.height}
                className="absolute"
                initial={{ opacity: 0 }}
                transition={{ duration: circleDuration, delay: circleDuration * index }}
                whileInView={{ opacity: 1 }}
                style={{
                  top: circle.top,
                  left: circle.left,
                  rotate: circle.rotate,
                }}
              />
            ))}
          </motion.div>
          <div className="rounded-full w-[413px] h-[417px] rotate-[58.155deg]">
            <motion.img 
              src={circle7} 
              alt="circle7" 
              className="w-full h-full" 
              initial={{ opacity: 0, scale: 0 }}  
              whileInView={{ opacity: 1, scale: [1.1, 1] }}  
              transition={{ delay: duration, duration: 0.4, type: "spring", bounce: 0.5 }}
              variants={boxVariants}
              // whileInView={{ opacity: 1, scale: [1.2, 1.0] }}
            />
          </div> */}
        </div>
      </div>
    </ContentContainerLarge>
  );
}