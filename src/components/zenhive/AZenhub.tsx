import ContentContainerLarge from "../container/ContentContainerLarge";
import Heading from "../home-new/heading";

import usdt from '@/assets/zenhive/azenhub/icon-1.png'
import referral from '@/assets/zenhive/azenhub/icon-2.png'
import aggregate from '@/assets/zenhive/azenhub/icon-3.png'
import mining from '@/assets/zenhive/azenhub/icon-4.png'

import bg from '@/assets/zenhive/azenhub/header-bg.png'
import bgMobile from '@/assets/zenhive/azenhub/header-bg-m.png'
import Button, { ButtonType } from "../home-new/Button";
import FadeIn from "../fade-in";
import Image from "next/image";

const datas = [
  {
    id: 1,
    title: 'USDT Commission',
    icon: usdt,
  },
  {
    id: 2,
    title: 'Referral Rewards',
    icon: referral,
  },
  {
    id: 3,
    title: 'Aggregate Earning',
    icon: aggregate,
  },
]

export default function AZenhub() {
  return (
    <ContentContainerLarge className='mt-16 md:mt-36 relative font-gilory'>
      <FadeIn>
        <Heading className='uppercase text-white text-center' >Mining in aZen Hub App</Heading>
      </FadeIn>
      <FadeIn 
        className="mt-10 flex flex-wrap gap-6 justify-center items-center"
        transition={{ duration: 1, delay: .2 }}
      >
        <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774">
          <Button type={ButtonType["App Store"]} gradient={false} className='w-[230px] h-[60px]' />
        </a>
        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager">
          <Button type={ButtonType["Google Play"]} gradient={false} className='w-[230px] h-[60px]' />
        </a>
      </FadeIn>
      <FadeIn
        className="relative mt-16 min-h-[60px] max-md:border-b border-[#D5FF3F] z-[2]"
        transition={{ duration: 1, delay: .4 }}
      >
        <div className="absolute max-md:bottom-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2  w-full h-[64px] md:w-[69%] md:h-[50px] bg-[rgba(228,255,77,0.50)] md:bg-[#E4FF4D] rounded-[100%] filter blur-[52px] md:blur-[92px]"></div>
        <Image src={bg} className='hidden md:block' alt="header-bg" />
        <Image src={bgMobile} className='block md:hidden w-4/5 mx-auto' alt="header-bg" />
      </FadeIn>
      <FadeIn 
        className='hidden relative mt-6 md:grid grid-cols-1 md:grid-cols-3 gap-6'
        transition={{ duration: 1, delay: .6 }}
      >
        {datas.map((data) => (
          <div key={data.id} className='inline-flex flex-col items-center justify-center border border-white/30 bg-[#141615] rounded-[8px] backdrop-blur-[22px] p-14'>
            <h3 className="text-center text-white text-[28px] font-bold">{data.title}</h3>
            <Image className="mt-8" src={data.icon} alt={data.title} width={214} height={214} />
          </div>
        ))}
      </FadeIn>
      <FadeIn 
        className='md:hidden relative mt-4 flex flex-wrap gap-4'
        transition={{ duration: 1, delay: .6 }}
      >
        <div  className='flex-1 inline-flex flex-col items-center justify-center min-h-[142px] border border-white/30 bg-[#141615] rounded-[8px] backdrop-blur-[22px] p-6'>
          <h3 className="text-center text-white text-[14px] md:text-[28px] font-bold">USDT Commission</h3>
          <Image className="mt-5 w-[78px]" src={usdt} alt="USDT Commission" />
        </div>
        <div  className='flex-1 inline-flex flex-col items-center justify-center min-h-[142px] border border-white/30 bg-[#141615] rounded-[8px] backdrop-blur-[22px] p-6'>
          <h3 className="text-center text-white text-[14px] md:text-[28px] font-bold">Referral Rewards</h3>
          <Image className="mt-5 w-[78px]" src={referral} alt="Referral Rewards" />
        </div>
        <div className='w-full flex-shrink-0 inline-flex items-center justify-between min-h-[142px] border border-white/30 bg-[#141615] rounded-[8px] backdrop-blur-[22px] p-6'>
          <h3 className="text-center text-white text-[14px] md:text-[28px] font-bold">Aggregate Earning</h3>
          <Image className="w-[78px]" src={aggregate} alt="Aggregate Earning" />
        </div>
      </FadeIn>
      <FadeIn
        className=" mt-6 flex justify-center items-center text-center"
        transition={{ duration: 1, delay: .8 }}
      >
        <a href="https://medium.com/@azenprotocol/zenhive-testnet-phase-1-is-now-live-0d78379fd09d" target="_blank" className=" text-[#EAFF29] text-base md:text-2xl font-normal">
          <Image src={mining} alt="mining" className="mr-2 inline-block" />
          ZenHive Testnet Mining Rules
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 inline-block" width="15" height="12" viewBox="0 0 15 12" fill="none">
            <path d="M0 6H14M14 6L8.66667 1M14 6L8.66667 11" stroke="#EAFF29"/>
          </svg>
        </a>
      </FadeIn>
    </ContentContainerLarge>
  )
}