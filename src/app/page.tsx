"use client"
import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import FadeIn from "@/components/fade-in";
import Stack from "@/components/home-new/stack";
import Azenhub from "@/components/home-new/azenhub";
// import Hero from "@/components/home-new/hero";
import AzenToken from "@/components/home-new/azen-token";
import ZenHive from "@/components/home-new/zenhive";
import Roadmap from "@/components/home-new/roadmap";

import Web3 from "@/components/home-new/web3";
import Footer from "@/components/home-new/footer";
import { FooterLink } from "@/components/home-new/footer-link";
import Parteners from "@/components/home-new/parteners";
import OurTeam from "@/components/home-new/our-team";
import { cn } from "@/lib/utils";

import azenhubBg from '@/assets/home-new/azenhub/bg.jpeg'
import Loading from "@/components/home-new/loading";

// import Wave from '@/components/home-new/wave'
import useHomeVideoLoading from "@/hooks/useHomeVideoLoading";
import Image from "next/image";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import('@/components/home-new/hero'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black" />
})

export default function AnimationPage() {

  const divRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const { isVideoLoaded: isHomeVideoLoaded } = useHomeVideoLoading()
  const [isVideoLoaded, setIsVideoLoaded] = useState(isHomeVideoLoaded);
  const imageRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)

  function handleStart() {
    divRef.current?.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  function handleVideoLoaded() {
    setIsVideoLoaded(true)
  }

  useEffect(() => {
    const azenhubContainter = document.getElementById('azenhub-wrapper')

    if (!azenhubContainter && imageRef.current) return
    const windowHeight = window.innerHeight;
    const handleScroll = () => {
      const containerTop = azenhubContainter!.getBoundingClientRect().top ?? 0
      const containerBottom = (azenhubContainter!.getBoundingClientRect().top ?? 0) + azenhubContainter!.getBoundingClientRect().height

      // 头部超过2/3，底部超过容器时，不需要改变了，顶部进入视野
      if (containerTop - windowHeight / 3 <= 0 && 0 < containerBottom) {
        // imageRef.current!.style.transform = `translateY(${-containerTop}px)`
        imageRef.current!.style.opacity = '1'
        imageRef.current!.style.display = 'block'
        imageRef.current!.style.zIndex = '1'
      } else {
        imageRef.current!.style.opacity = '0'
        imageRef.current!.style.display = 'none'
        imageRef.current!.style.zIndex = '-1'
      }
    }
    window?.addEventListener('scroll', handleScroll)

    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="home-container" ref={divRef} className={cn("w-full h-screen bg-black font-gilroy scroll-smooth hide-scrollbar ", {
      // 在视频加载完成之前，禁止滚动
      // 'overflow-y-hidden': !isHomeVideoLoaded && !isVideoLoaded
    })}>
      {/* video loading */}
      <Loading
        loaded={isHomeVideoLoaded || isVideoLoaded}
      />
      {/* header */}
      <div className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-[17px] z-[1000]">
        <Header size="large" />
      </div>
      {/* second screen */}
      <Hero
        onStart={handleStart}
        opacity={opacity}
        onVideoLoaded={handleVideoLoaded}
      // onVideoProgress={setVideoProgress}
      />
      <div
        ref={secondRef}
        id="second-screen"
        className="relative z-[2] bg-black hide-scrollbar overflow-y-auto overflow-x-hidden"
      >
        <div ref={imageRef} style={{ opacity: 0, display: 'none' }} className="fixed w-full z-[1] top-[25%] left-0 transition-all duration-100">
          {/* <Wave /> */}
          <Image src={azenhubBg} alt="" width={0} height={0} className='w-[1000px] h-auto max-md:relative max-md:-left-1/2 md:w-full max-w-none mx-auto ' />
          <div className="hidden sm:block absolute top-0 left-0 w-[400px] h-full bg-[linear-gradient(90deg,#000_0,rgba(15,17,16,0.00)_100%)]" />
          <div className="hidden sm:block absolute top-0 right-0 w-[400px] h-full bg-[linear-gradient(90deg,rgba(15,17,16,0.00)_0,#000_100%)]" />
        </div>
        <Stack />
        <Azenhub />
        <FadeIn className="relative z-[2]">
          <ZenHive />
        </FadeIn>
        <FadeIn className="relative z-[2]">
          <AzenToken />
        </FadeIn>
        <Roadmap />
        <FadeIn viewport={{ once: true, amount: 0.2, }}>
          <Web3 />
        </FadeIn>
        <FadeIn viewport={{ once: true, amount: 0.2, }}>
          <Parteners />
        </FadeIn>
        <FadeIn viewport={{ once: true, amount: 0.2 }}>
          <OurTeam />
        </FadeIn>
        <FadeIn viewport={{ once: true, amount: 0.2 }}>
          <FooterLink />
        </FadeIn>
        <Footer />
      </div>
    </div >
  )
}
