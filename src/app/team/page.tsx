import Container from "@/components/container/Container";
import Header from "@/components/header";
import Footer from '@/components/home-new/footer'
import FadeIn from "@/components/fade-in";
import { Innovations } from "./Innovations";

import academic1 from '@/assets/team/academic-1.png'
import academic2 from '@/assets/team/academic-2.png'
import academic3 from '@/assets/team/academic-3.png'
import academic4 from '@/assets/team/academic-4.png'
import academic5 from '@/assets/team/academic-5.png'
import academic6 from '@/assets/team/academic-6.png'
import academic7 from '@/assets/team/academic-7.svg'

import industry1 from '@/assets/team/industry-1.svg'
import industry2 from '@/assets/team/industry-2.svg'
import industry3 from '@/assets/team/industry-3.svg'
import industry4 from '@/assets/team/industry-4.svg'
import industry5 from '@/assets/team/industry-5.png'
import industry6 from '@/assets/team/industry-6.svg'
import industry7 from '@/assets/team/industry-7.svg'
import industry8 from '@/assets/team/industry-8.webp'

import industry from '@/assets/team/industry-bg.png'

import Heading from "@/components/home-new/heading";

import flower from '@/assets/home-new/team/flower-2.webp'
import ContentContainerLarge from "@/components/container/ContentContainerLarge";

import champion from '@/assets/team/champion.png'
import Image from "next/image";
import { cn } from "@/lib/utils";

const academicList = [{
  src: academic1,
  height: 50,
  className: 'max-sm:h-[32px] md:h-[50px]'
}, {
  src: academic2,
  height: 46,
  className: 'max-sm:h-[28px] sm:h-[46px]'
}, {
  src: academic4,
  height: 42,
  className: 'max-sm:h-[26px] sm:h-[42px]'
}, {
  src: academic3,
  height: 34,
  className: 'max-sm:h-[21px] sm:h-[34px]'
}, {
  src: academic6,
  height: 40,
  className: 'max-sm:h-[25px] sm:h-[40px]'
}, {
  src: academic5,
  height: 38,
  className: 'max-sm:h-[23px] sm:h-[38px]'
}, {
  src: academic7,
  height: 36,
  className: 'max-sm:h-[25px] sm:h-[36px]'
}]

const industryList = [{
  src: industry1,
  className: 'max-sm:h-[24px]'
}, {
  src: industry2,
  className: 'max-sm:h-[24px]'
}, {
  src: industry3,
  className: 'max-sm:h-[24px]'
}, {
  src: industry4,
  className: 'max-sm:h-[24px]'
}, {
  src: industry5,
  className: 'max-sm:h-[16px] sm:h-[24px]',
}, {
  src: industry6,
  className: 'max-sm:h-[12px]',
}, {
  src: industry7,
  className: 'max-sm:h-[42px]'
}, {
  src: industry8,
  className: 'max-sm:h-[42px] sm:h-[50px]'
}]

export default function Team() {

  return (
    <>
      <main className='overflow-x-hidden bg-black h-screen font-gilroy'>
        <Header size="large" />
        <Container className="px-4 md:px-0 font-gilroy relative bg-[#0F1110]">
          <div className="w-full max-w-[1920px] mx-auto">
            <div className="w-full pt-[118px] relative">
              <div className='relative z-30 max-w-[860px] mx-auto text-center'>
                <FadeIn><Heading className="text-center text-4xl md:text-6xl uppercase ">Our Team</Heading></FadeIn>
                <FadeIn delay={0.2} className="z-10 mt-14 w-full text-sm md:text-[18px] leading-[1.5] text-white/80 max-md:mt-10 max-md:max-w-full px-[20px]">
                  Our academic founders are PhDs from Stanford University and professors at the University of Auckland. Originally founded in 2010 as the research lab ORUA at the University of Auckland, it transformed groundbreaking research into successful commercial applications. Led by tech transfer executives and entrepreneurs, the initiative has grown into a high-tech enterprise, generating $28M in revenue from edge computing and consumer data. Strategically restructured under a BVI framework in pursuit of a Nasdaq listing, it is now launching aZen as a Web2+Web3 spin-out to provide DePIN and DeFAI solutions for both Web2 and Web3 businesses.
                </FadeIn>
              </div>
              <Image className="absolute top-0 -left-[110px] md:-left-80 2xl:-left-20 md:top-40 w-[220px] md:w-[580px]" priority src={flower} alt="" />
              <Image className="absolute top-0 -right-[110px] md:-right-20 2xl:right-40 md:top-[46px] w-[220px] md:w-[316px] " priority src={flower} alt="" />
            </div>
          </div>
          <FadeIn delay={0.3} className="mt-10 relative">
            <div className="relative mx-auto w-full max-w-[774px] flex border border-[#C2FD53] bg-[#03180D] rounded-[12px] overflow-hidden">
              <div className="flex-1 p-5 pr-28 md:pr-0 md:pl-9  md:pt-24 pb-28 ">
                <FadeIn delay={0.4} className="text-white text-base md:text-[34px] font-bold leading-tight">Award-Winning Innovations</FadeIn>
                <FadeIn delay={0.5} className="mt-8 text-white text-[12px] md:text-base tracking-wide-[1px] max-w-[426px]">Our research and development have been supported by multi-million-dollar grants from industry-leading corporations and government programs.</FadeIn>
              </div>
              <div className="max-md:hidden relative md:w-[300px] mt-8">
                <Image className="absolute w-[500px] bottom-0 right-0 max-w-none" src={champion} alt="champion" />
              </div>
              <Image className="md:hidden absolute bottom-0 right-0 w-64" src={champion} alt="champion" />
            </div>
          </FadeIn>
          <FadeIn delay={0.6} className="mt-20 relative flex justify-center items-center flex-wrap gap-[40px] md:gap-[70px]">
            {Innovations.map((item, index) => (
              <div key={index} className="flex justify-center text-white items-center">
                <div className="">
                  {item.svg}
                </div>
                <div>
                  {
                    item.label?.map((label, index) => (
                      <p key={index} className="text-white text-xs md:text-xl">{label}</p>
                    ))
                  }
                </div>
              </div>
            ))}
          </FadeIn>
          <div className="mt-8 md:mt-20 relative">
            <FadeIn delay={0.7} className="text-center text-4xl text-white font-bold">Academic Excellence</FadeIn>
            <FadeIn delay={0.8} className="text-center mt-4 text-white text-base ">Graduates and researchers from world-renowned universities.</FadeIn>
            <FadeIn delay={0.9} className="mt-20 flex justify-center items-center flex-wrap gap-[40px] sm:gap-[70px]">
              {academicList.map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image className={cn(item.className, "w-auto")} src={item.src} alt="academic" />
                </div>
              ))}
            </FadeIn>
          </div>
          <FadeIn delay={1} className="mt-20 md:mt-40">
            <ContentContainerLarge>
              <div className="min-h-[464px] flex flex-col md:flex-row border border-[#454645] backdrop-blur-[12px] rounded-[8px] overflow-hidden">
                <div className="text-center md:text-left pt-6 px-4 md:px-0 md:pl-[90px] md:pt-[92px] lg:pl-[180px] ">
                  <h3 className="text-white text-4xl md:text-5xl font-bold">
                      Industry
                      <br />
                      Expertise
                    </h3>
                    <p className="mt-4 md:mt-12 text-white/60 text-base">Extensive working experience with industry leaders in AI , telecommunication, computing, Web3, and government programs.</p>
                </div>
                <div className="relative md:w-1/2 flex-grow-0 flex-shrink-0 flex justify-center items-center">
                  <Image className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-contain" src={industry} alt="" />
                  <div className="py-16 relative grid grid-cols-2 w-full h-full gap-10 md:gap-0">
                    {industryList.map((item, index) => (
                      <div key={index} className={cn("flex justify-center items-center")}>
                        <Image 
                          className={cn(item.className, "w-auto")} 
                          src={item.src} 
                          alt="academic"
                        />
                      </div>
                    ))}
                  </div>
                </div>
               </div>
            </ContentContainerLarge>
          </FadeIn>
          <Footer className="mt-32" />
        </Container>
      </main>
    </>
  )
}
