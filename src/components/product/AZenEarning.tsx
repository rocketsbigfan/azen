
import earnBg from '@/assets/product/azen-earning/bg.png'
import ContentContainerLarge from '../container/ContentContainerLarge'
import Heading from '../home-new/heading'
import FadeIn from '../fade-in'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Promote & Earn',
    desc: 'Share content, drive engagement, and monetize social influence',
  },
  {
    id: 2,
    title: 'Community-Building',
    desc: 'Onboard new users, expand networks, and organize DAOs or governance models',
  },
  {
    id: 3,
    title: 'AI-Generated Content (AIGC)',
    desc: 'Empower users to create content, automate marketing, and earn rewards',
  },
  {
    id: 4,
    title: 'DeFAI',
    desc: 'Automate trading, optimize staking, and predict market trends with AI agents',
  },
  {
    id: 5,
    title: 'Web3 Ecosystem Integration',
    desc: 'Interact with leading projects, participate in cross-chain collaborations, and earn rewards',
  },
]

export default function AZenEarning() {
  return (
    <ContentContainerLarge className='mt-20 md:mt-32 font-gilroy'>
      <div className='relative md:pt-20'>
        <Image src={earnBg} alt="earnBg" className='max-md:w-2/5 absolute top-full left-1/2 -translate-x-1/2 md:-translate-x-0 md:top-0 md:left-[11.7%]' />
        <div className='relative lg:ml-[42%] text-center lg:text-left'>
          <FadeIn>
            <Heading className='uppercase'>aZen Earning Center</Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-4 text-[#EAFF29] text-[18px] md:text-[32px] font-normal'>Earn Smart with SocialFi & DeFAI</p>
          </FadeIn>
        </div>
      </div>
      <div className='relative mt-40 md:mt-[58px] flex flex-col justify-center md:flex-row flex-wrap'>
        {data.map((item, index) => (
          <FadeIn 
            delay={index * 0.2}
            key={item.id} 
            className='md:w-1/2 lg:w-1/3 p-3'
          >
            <div 
              className='py-7 px-4 h-full min-h-[182px] text-center border border-white/30 bg-[rgba(29,29,29,0.1)] backdrop-blur-[22px] rounded-[8px]'
            >
              <h3 className='text-white text-[28px] leading-normal font-bold'>{item.title}</h3>
              <p className='mt-4 text-[#adabb2] text-[18px] leading-normal font-normal'>{item.desc}</p>
            </div>  
          </FadeIn>
        ))}
      </div>
    </ContentContainerLarge>
  )
}