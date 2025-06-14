import bgm1 from '@/assets/product/earn3/bg-prime-host-m.png'
import bgm2 from '@/assets/product/earn3/bg-prime-host-m1.svg'
import bg1 from '@/assets/product/earn3/bg-prime-host1.png'
import bg2 from '@/assets/product/earn3/bg-prime-host2.svg'
import Image from 'next/image'
import React from 'react'

const PrimeHost = () => {

  const route = () => {
    window.open('https://zenhive.azenprotocol.io/')
  }

  return (
    <div
      className='relative w-full border md:border-[#3D3E3D] md:hover:border-[#C0EE02] rounded-xl mt-10 md:mt-20 overflow-hidden'>
      <Image className='block md:hidden absolute left-0 top-0 w-full h-full object-cover' src={bgm2} alt=""/>
      <Image className='hidden md:block absolute left-0 top-0 object-cover h-full' src={bg2} alt=""/>

      <div className='w-full flex flex-col md:flex-row items-start md:items-end'>
        <Image className='hidden md:block md:w-5/12 z-20' src={bg1} alt=""/>
        <div
          className='self-start w-full md:w-7/12 p-5 md:p-0 md:mx-2 lg:mx-16 xl:mx-32 md:mt-16 lg:mt-20 xl:mt-24 md:mb-10 lg:mb-16 xl:mb-20'>
          <h4 className='font-medium font-pingFangSCRegular text-3xl text-white'>ZenHive PrimeHost NFT</h4>
          <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-2'>
            A ZenHive device hosted at a professional data center.
          </p>
          <h2
            className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[60px] text-white mt-10'>
            999.9999 USDT
          </h2>
          <button
            className='hidden md:block bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-3 md:py-3.5 px-[4.5rem] md:px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl relative z-50 cursor-pointer'
            onClick={route}>
            Buy Now
          </button>
        </div>
        <Image className='block md:hidden -mt-20 z-20' src={bgm1} alt=""/>
      </div>
    </div>
  )
}

export default React.memo(PrimeHost)