"use client"
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";
import { SyntheticEvent, use, useEffect, useRef, useState } from "react";
import Button, { AppStoreButtonSmall, ButtonType, GoogleButtonSmall } from "../home-new/Button";

import ContentContainerLarge from "../container/ContentContainerLarge";
import useHomeVideoLoading from "@/hooks/useHomeVideoLoading";

import videoImg1 from '@/assets/home-new/hero/left.png'
import videoImg2 from '@/assets/home-new/hero/right.png'
import bg from '@/assets/home-new/hero/video-bg.webp'
import bgM from '@/assets/home-new/hero/home-m.webp'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (isInView: boolean) => ({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 50,
  }),
};

const show = {
  opacity: 1,
  y: 0,
}

const NoPermission = 'NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission'
export default function Hero({ onVideoLoaded, onVideoProgress, opacity = 1 }: { opacity?: number, onStart: () => void, onVideoLoaded: () => void, onVideoProgress?: (progress: number) => void }) {

  const [scope, animate] = useAnimate()
  const { setVideoLoaded, isVideoLoaded } = useHomeVideoLoading()
  const [firstEnded, setFirstEnded] = useState(false)
  const [progress1, setProgress1] = useState(0); // 视频1的进度
  const [progress2, setProgress2] = useState(0); // 视频2的进度
  // const [secondEnded, setSecondEnded] = useState(false)
  const buttons = useRef<HTMLDivElement>(null)
  const first = useRef<HTMLVideoElement>(null)
  const second = useRef<HTMLVideoElement>(null)
  const showRef = useRef(false)
  const isMobile = useRef(false)
  const isDestroyed = useRef(false)
  const loadingTimeRef = useRef(0)
  const videoLoaded = useRef({ video1: false, video2: false });
  const videoLoadedRef = useRef(false)
  const pathname = usePathname()
  const handleProgress = (videoKey: string, event: SyntheticEvent<HTMLVideoElement>) => {
    const { buffered, duration } = event.target as HTMLVideoElement;
    if (buffered.length > 0 && duration > 0) {
      const loaded = buffered.end(0);
      const percent = (loaded / duration) * 100; // 单个视频的加载进度
      if (videoKey === "video1") {
        setProgress1(percent);
      } else if (videoKey === "video2") {
        setProgress2(percent);
      }
    }
  };

  const handleVideoLoaded = () => {
    videoLoadedRef.current = true
    onVideoLoaded()
    setVideoLoaded()
    if (!isMobile.current) {
      // 桌面端加载完成自动播放, 如果加载时间小于1s, 则延迟1s播放
      const rest = Date.now() - loadingTimeRef.current
      if (rest >= 0 && rest <= 2000) {
        setTimeout(() => {
          first.current?.play().catch(console.log)
        }, rest)
      } else {
        first.current?.play().catch(console.log)
      }
    } else {
      showElement()
    }
  }

  const handleLoadedData = (videoKey: 'video1' | 'video2') => {
    // console.log('video loaded');
    videoLoaded.current[videoKey] = true
    if (videoLoaded.current.video1 && videoLoaded.current.video2 && !videoLoadedRef.current) {
      handleVideoLoaded()
    }
  };

  const showElement = () => {
    if (isDestroyed.current || showRef.current) return
    showRef.current = true
    animate(
      "h1",
      show,
      { duration: .6 }
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    buttons.current && animate(
      buttons.current,
      show,
      { duration: .6, delay: .3 }
    )
  }

  const handleFirstVideoPlay = () => {
    const timeStamp = first.current!.duration * 1000 *.6
    setTimeout(() => {
      showElement()
    }, timeStamp)
  }

  const handleFirstVideoEnd = () => {
    // hack: safari video 兜底
    showElement()
    console.log('first video end')
    setFirstEnded(true)
    second.current?.play().catch((e) => {
      console.log(NoPermission, e, JSON.stringify(e.message))
    })
  }

  const handleFirstVideoError = (type: 'error' | 'stalled' | 'abort') => {
    if (type === 'error') {
      console.error("onError: 视频加载失败！")
    } else if (type === 'stalled') {
      console.warn("onStalled: 网络问题导致加载中断")
    } else if (type === 'abort') {
      console.warn("onAbort: 用户取消加载")
    }
    // hack 网络问题时，直接展示页面
    handleVideoLoaded()
  }

  // 计算总进度：取两个视频加载进度的最大值
  const totalProgress = Math.max(progress1, progress2);

  useEffect(() => {
    if (totalProgress === 100 && !videoLoadedRef.current) {
      handleVideoLoaded()
    }
    onVideoProgress?.(totalProgress)
  }, [totalProgress])

  useEffect(() => {
    loadingTimeRef.current = Date.now()
    if (window.innerWidth < 768) {
      isMobile.current = true
      // hack onCanPlayThrough事件在元素隐藏时不触发
      handleVideoLoaded()
    } else {
      isMobile.current = false
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        isMobile.current = true
        // 取消视频播放
        first.current?.pause()
        second.current?.pause()
        setFirstEnded(false)
      } else {
        isMobile.current = false
        handleFirstVideoEnd()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      isDestroyed.current = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile.current || !first.current) return
    // 检查是否已经可以播放
    if (first.current.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      console.log('✅ 视频可以播放')
      first.current.play().catch((e) => {
        console.log(NoPermission, e, JSON.stringify(e.message))
      })
    } else {
      console.log('⏳ 视频还未准备好，手动触发 load')
      first.current.load()
    }
  }, [pathname])
  return (
    <div className={cn("relative z-[3] w-full h-screen overflow-hidden bg-black")}>
      <video
        className={cn('max-md:hidden absolute z-[2] top-0 left-0 w-full h-full object-cover transition-all duration-300', {
          'opacity-0': firstEnded
        })}
        onProgress={(e) => handleProgress("video1", e)}
        onCanPlayThrough={() => handleLoadedData("video1")}
        onError={() => handleFirstVideoError('error')}
        onStalled={() => handleFirstVideoError('stalled')}
        onAbort={() => handleFirstVideoError('abort')}
        onPlay={handleFirstVideoPlay}
        onCanPlay={() => console.log('canPlay')}
        onLoadedMetadata={() => console.log('loadedMetadata')}
        onLoadedData={() => console.log('loadedData')}
        onEnded={handleFirstVideoEnd}
        autoPlay={isVideoLoaded} // 页面切换之后切回来自动播放
        ref={first}
        src='/video/home-new-1.mp4'
        controls={false}
        loop={false}
        muted
        poster={bg.src}
        preload='auto'
        playsInline  // 添加这个属性，注意小写
        webkit-playsinline="true"  // 添加这个属性
        x5-playsinline="true"  // 添加这个属性(针对腾讯X5内核)
        x-webkit-airplay="allow"  // 添加这个属性
        x5-video-player-type="h5"  // 添加这个属性(针对腾讯X5内核)
        id="home-video-1"
      // ... 其他属性 ...
      />
      <video
        src='/video/home-new-2.mp4'
        loop
        autoPlay={false}
        preload="auto"
        className="max-md:hidden absolute top-0 left-0 w-full h-full object-cover"
        ref={second}
        muted
        poster={bg.src}
        onPlay={() => console.log('second play')}
        playsInline  // 添加这个属性，注意小写
        webkit-playsinline="true"  // 添加这个属性
        x5-playsinline="true"  // 添加这个属性(针对腾讯X5内核)
        x-webkit-airplay="allow"  // 添加这个属性
        x5-video-player-type="h5"  // 添加这个属性(针对腾讯X5内核)
        controls={false}
        onProgress={(e) => handleProgress("video2", e)}
        onCanPlayThrough={() => handleLoadedData("video2")}
        id="home-video-2"
      />
      <Image src={bgM} className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-0 w-[860px] max-w-none" alt="" />
      <Image src={videoImg1} priority className="absolute left-0 top-0 z-[3] w-[742px]" alt="" />
      <Image src={videoImg2} priority className="absolute right-0 top-0 z-[3] w-[742px]" alt="" />
      <ContentContainerLarge className="relative z-[4] h-screen">
        <div ref={scope} className="md:absolute max-md:mt-[120px] top-[50%] md:-translate-y-1/2 ">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            // animate="show"
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: .4 }}
            className="max-md:text-center font-gilroyBlack text-white text-4xl md:text-5xl leading-tight md:text-[72px] md:leading-[78px] font-[900] uppercase break-words"
          >
            {/* <span > */}
            Unifying Computing<br />
            infrastructure for<br />
            Ubiquitous AI
            {/* </span> */}
          </motion.h1>
          <motion.div
            ref={buttons}
            className="buttons mt-10 md:mt-20 w-full flex max-md:justify-center gap-6 flex-wrap"
            variants={itemVariants}
            initial="hidden"
          >
            <Link target='_blank' className="max-md:flex-1 max-md:order-2" href="https://apps.apple.com/us/app/azen-connect/id6476482774">
              <AppStoreButtonSmall className='md:hidden w-full' />
              <Button className='max-md:hidden md:w-[270px] md:h-[80px] backdrop-blur-[17px]' gradient={false} labelClassName='text-xl' textClassName='text-[10px]' type={ButtonType['App Store']} />
            </Link>
            <Link target='_blank' className="max-md:flex-1" href="https://play.google.com/store/apps/details?id=com.azen.manager">
              <GoogleButtonSmall className='md:hidden w-full' />
              <Button className='max-md:hidden md:w-[270px] md:h-[80px] backdrop-blur-[17px]' gradient={false} labelClassName='text-xl' textClassName='text-[10px]' type={ButtonType['Google Play']} />
            </Link>
          </motion.div>
        </div>
      </ContentContainerLarge>
    </div>
  )
}
