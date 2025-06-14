import { motion } from 'motion/react';
import bubble from '@/assets/home-new/zenhive/bubble.png';
import { useEffect, useState } from 'react';
import ContentContainerLarge from '../container/ContentContainerLarge';
import Heading from './heading';
import FadeIn from '../fade-in';

import icon1 from '@/assets/home-new/zenhive/icon-1.svg'
import icon2 from '@/assets/home-new/zenhive/icon-2.svg'
import icon3 from '@/assets/home-new/zenhive/icon-3.svg'
import icon4 from '@/assets/home-new/zenhive/icon-4.svg'
import useFadeIn from '../fade-in/useFadeIn';

import videoBg from '@/assets/home-new/zenhive/bg.webp'
import useVideoAutoploy from '@/hooks/useVideoAutoploy';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ZenHive() {
  return (
    <Bubbles />
  )
}

type Ball = {
  id: number;
  size: number;
  left: number;
  duration: number;
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

const Bubbles = () => {
  const [containerHeight, setContainerHeight] = useState(610);
  const [balls, setBalls] = useState<Ball[]>([]);
  const fadeInProps = useFadeIn({})

  const { inView, videoRef, handleLoadedData, videoContainer } = useVideoAutoploy()

  const router = useRouter();
  const handleClick = (page: string) => {
    router.push(page);
  };

  function generateBalls() {
    return Array.from({ length: 10 }).map(() => createBall());
  }
  function createBall() {
    return {
      id: Math.random(),
      size: Math.random() * 8 + 20, // 10px ~ 20px
      left: 10 + Math.random() * 80, // 10% ~ 90% 之间随机出现
      duration: Math.random() * 4 + 4, // **随机 4 ~ 8s 速度**
    };
  }

  useEffect(() => {
    if (videoContainer.current) {
      setContainerHeight(videoContainer.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      setBalls(generateBalls());
    }

  }, [inView]);

  return (
    <ContentContainerLarge className='relative  pt-36'>
      <div className='flex flex-col md:flex-row rounded-[8px] md:h-[610px] border border-[rgba(255,255,255,.3)] bg-[#010100] overflow-hidden'>
        <div ref={videoContainer} className="order-2 md:order-1 block relative bubble md:w-[550px] xl:w-[610px] ">
          <div className='max-md:mx-auto max-md:w-4/5 md:absolute md:w-full md:h-full'>
            <video 
              src='/video/home-zenhive.mp4'
              controls={false}
              preload="auto"
              playsInline
              autoPlay
              ref={videoRef}
              className="max-md:object-cover max-md:w-full md:absolute md:w-[660px] top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rotate-[18.44deg] md:rotate-[-18.44deg] max-w-none"
              muted
              loop
              poster={videoBg.src}
              webkit-playsinline="true"  // 添加这个属性
              x5-playsinline="true"  // 添加这个属性(针对腾讯X5内核)
              x-webkit-airplay="allow"  // 添加这个属性
              x5-video-player-type="h5"  // 添加这个属性(针对腾讯X5内核)
              onCanPlayThrough={handleLoadedData}
            />
            {balls.map((ball) => (
              <motion.div
                key={ball.id}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -containerHeight, opacity: 0, scale: .6 }} // 这里用 containerHeight
                transition={{ duration: ball.duration, ease: "easeIn" }}
                onAnimationComplete={() => {
                  // **小球到顶部后，立即重新生成**
                  if (inView) {
                    setBalls((prevBalls) =>
                      prevBalls.map((b) =>
                        b.id === ball.id ? createBall() : b
                      )
                    );
                  } else {
                    setBalls(prevBalls => prevBalls.filter(b => b.id !== ball.id));
                  }
                }}
                className='absolute bottom-[10px] rounded-full'
                style={{
                  left: `${ball.left}%`, // 相对父级的随机 left
                  width: ball.size,
                  height: ball.size,
                  // backgroundColor: 'rgba(202, 255, 77, 0.3)',
                  backgroundImage: `url(${bubble.src}) `,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-[2] order-1 md:order-2 p-10 lg:p-[60px] md:pb-0 flex-1">
          <FadeIn viewport={{ once: false }} transition={{ duration: 1 }}><Heading className='max-md:text-center font-gilroyBlack'>ZENHIVE</Heading></FadeIn>
          <FadeIn viewport={{ once: false }} transition={{ delay: .3, duration: 1 }}>
            <p
              className='mt-5 max-md:text-center text-base font-medium text-white/60'
            >The first mass commercial adoption DePIN device built on aZen Protocol.</p>
          </FadeIn>
          <div className='mt-2 text-[14px] md:text-[18px] text-white uppercase'>
            {
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='inline-flex items-center pt-4 hd:pt-8 mr-[42px] leading-normal'
                  >
                    <motion.div
                      {...fadeInProps}
                      className='inline-flex items-center'
                      transition={{ delay: item.id * 0.1 + .4, duration: .6 }}
                      viewport={{ once: false }}
                    >
                      <Image alt={item.icon} src={item.icon} />
                      <span className="ml-4 font-gilroyMedium"> {item.name}</span>
                    </motion.div>
                  </div>
                )
              })
            }
          </div>
          <motion.div
            {...fadeInProps}
            transition={{ delay: .7, duration: .6 }}
            viewport={{ once: false }}
          >
            <button
              className='mt-10 md:18 hd:mt-24 w-52 h-14 flex justify-center items-center gap-2 text-2xl text-white border border-white  hover:text-black hover:bg-white rounded-lg transition-colors duration-300'
              onClick={() => handleClick('/zenhive')}>
              Go
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.949829 5H12.7591M12.7591 5L9.80682 1M12.7591 5L9.80682 9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </ContentContainerLarge>
  );
}
