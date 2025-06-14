import React from 'react'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from '@/components/home-new/heading'
import logo1 from '@/assets/zenhive/stake/logo1.svg'
import logo3 from '@/assets/zenhive/stake/logo3.svg'
import logo4 from '@/assets/zenhive/stake/logo4.svg'
import logo5 from '@/assets/zenhive/stake/logo5.svg'
import Image from 'next/image'

const logos = [logo1, logo5, logo3, logo4, ]
const widths = ['h-[20px] md:h-[40px]', 'h-[21px] md:h-[50px]', 'h-[25px] md:h-[40px]', 'h-[30px] md:h-[32px]']
const Stake = () => {
  return (
    <ContentContainerLarge className='font-gilroy mt-44'>
      <Heading className='text-center uppercase'>Stake-to-Own with</Heading>
      <Heading className='text-center uppercase'>Web3 Strategic Partners</Heading>
      <p className='mt-4 md:px-24 text-[18px] text-white/80 w-full text-center '>Stake industry-leading tokens to earn ZenHive, retaining your original tokens while gaining a valuable new asset. </p>
      <div className='mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center'>
        {logos.map((logo, index) => (
          <div key={index} className='px-6 md:px-0 inline-flex justify-center items-center h-[55px] md:h-[100px] rounded-[8px] bg-[#1f1f1f]'>
            <Image className={`${widths[index]} w-auto`} src={logo} alt="" />
          </div>
        ))}
      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(Stake)