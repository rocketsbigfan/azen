import ContentContainerLarge from "../container/ContentContainerLarge";
import Heading from "./heading";

import web3Logo1 from '@/assets/home-new/web3/1.svg'
import web3Logo2 from '@/assets/home-new/web3/2.svg'
import web3Logo3 from '@/assets/home-new/web3/3.svg'
import FadeIn from "../fade-in";
import Image from "next/image";



export default function Web3() {
  return (
    <ContentContainerLarge className="pt-16 md:pt-32">
      <FadeIn viewport={{ once: false }} transition={{ delay: .2, duration: 1 }}><Heading className="text-center">Web3 Grants</Heading></FadeIn>
      <div className='w-full grid grid-cols-2 lg:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 mx-auto mt-6 md:mt-24'>
        <FadeIn viewport={{ once: false }} className="flex-1 text-center" transition={{ delay: .2, duration: .6 }}><Web3Item><Image className='h-[20px] md:h-[40px]'  src={web3Logo1} alt="" /></Web3Item></FadeIn>
        <FadeIn viewport={{ once: false }} className="flex-1 text-center"  transition={{ delay: .4, duration: .6 }}><Web3Item><Image className='h-[21px] md:h-[50px]' src={web3Logo2} alt="" /></Web3Item></FadeIn>
        <FadeIn viewport={{ once: false }} className="flex-1 text-center" transition={{ delay: .6, duration: .6 }}><Web3Item><Image className='h-[25px] md:h-[40px]' src={web3Logo3} alt="" /></Web3Item></FadeIn>
        {/* <FadeIn viewport={{ once: false }} className="flex-1 text-center" transition={{ delay: .8, duration: .6 }}><Web3Item><img className='h-[30px] md:h-[32px]' src={web3Logo4} alt="" /></Web3Item></FadeIn> */}
      </div>
    </ContentContainerLarge>
  )
}

const Web3Item = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full  md:max-w-[285px] h-[56px] md:h-[92px] inline-flex justify-center items-center rounded-[6px] md:rounded-[20px] bg-[#1b1b1b]'>
      {children}
    </div>
  )
}

