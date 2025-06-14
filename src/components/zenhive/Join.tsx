import logo1 from '@/assets/zenhive/join/logo1.svg'
import logo2 from '@/assets/zenhive/join/logo2.svg'
import React from 'react'
import Heading from '@/components/home-new/heading'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Image from 'next/image'
const Join = () => {
  return (
    <ContentContainerLarge className='mt-16 md:mt-28 relative font-gilroy'>
      <Heading className='text-center uppercase'>Join the Revolution</Heading>
      <p className='mt-5 px-4 text-[14px] md:text-2xl text-white/70 md:text-white w-full text-center'>ZenHive Dual-Architecture for unparalleled performance for AI and Data Solutions </p>
      <div className='mt-10 flex justify-center flex-col md:flex-row  gap-6'>
        <div className='py-6 md:min-h-[298px] w-full text-center border border-white/30 rounded-[8px] bg-[rgba(29,29,29,.1)] backdrop-blur-[22px]'>
          <Image className='inline-block mx-auto' src={logo1} alt="" />
          <h5 className='text-[30px] text-white mt-6 md:mt-8 mb-3'>Intel(Linux)</h5>
          <p className='text-[18px] text-white/70 leading-9'>
            Advanced AI inferencing & large-scale data processing <br/> 
            Real-time analytics <br/> 
            ntelligent decision-making at the
          </p>
        </div>
        <div className='py-6 md:min-h-[298px] w-full text-center  border border-white/30 rounded-[8px] bg-[rgba(29,29,29,.1)] backdrop-blur-[22px]'>
          <Image className='inline-block mx-auto' src={logo2} alt="" />
          <h5 className='text-[30px] text-white mt-6 md:mt-8 mb-3'>Android</h5>
          <p className='text-[18px] text-white/70 mb-8 md:mb-0 leading-9'>
            Efficient data collection & lightweight processing <br/> 
            64 virtual machines in one unit <br/>
            Ideal for customer engagement & geo-centric solutions
          </p>
        </div>
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(Join)