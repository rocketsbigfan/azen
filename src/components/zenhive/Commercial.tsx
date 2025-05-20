import React from 'react'
import ContentContainerLarge from "../container/ContentContainerLarge";
import Heading from '@/components/home-new/heading'
import FadeIn from '../fade-in';

const data = [
  {
    id: 1,
    title: '️Social Commerce',
    desc: 'AI-analyzed user behavior powers personalized content and consistent revenue growth.',
    list: [
      'Track interactions',
      'Uncover trends',
      'Deliver tailored experiences',
    ],
  },
  {
    id: 2,
    title: 'Gaming',
    desc: 'A decentralized launchpad for instant play and smarter development.',
    list: [
      'No downloads – stream via VMs',
      'Location-based acceleration',
      'Player insights to boost revenue',
    ],
  },
  {
    id: 3,
    title: 'Video Entertainment',
    desc: 'Peer-to-peer streaming meets AI personalization and NFT monetization.',
    list: [
      'Tokenize content as NFTs',
      'Fast, secure P2P delivery',
      'Scalable decentralized storage',
    ],
  },
]

const data2 = [
  {
    id: 1,
    title: 'Smart Cities',
    desc: 'Power real-time monitoring, traffic optimization, and urban safety.',
  },
  {
    id: 2,
    title: 'Healthcare',
    desc: 'Process large-scale medical data for diagnostics and research.',
  },
  {
    id: 3,
    title: 'Education',
    desc: 'Personalize learning with AI-driven content recommendations.',
  },
  {
    id: 4,
    title: 'Supply Chain',
    desc: 'Ensure operational efficiency with real-time tracking and decentralized data sharing.',
  },
]

const Commercial = () => {
  return (
    <ContentContainerLarge className='font-gilroy'>
      <FadeIn>
        <Heading className='mt-16 md:mt-40 text-center uppercase'>Commercial Applications</Heading>
      </FadeIn>
      <div className='mt-4 md:mt-[70px] w-full flex flex-col md:flex-row gap-6'>
        {
          data.map((item, index) => (
            <FadeIn
              className='w-full px-4 md:px-8 py-[40px] text-center border border-white/30 bg-[rgba(29,29,29,.1)] backdrop-blur-[22px] rounded-[8px] hover:backdrop-blur-[12px] hover:shadow-[-2px_-2px_2px_#cff73d_inset,2px_3px_2px_0px_rgba(255,255,255,0.42)_inset] hover:bg-[linear-gradient(127deg,#131602_61.97%,#334C00_99.99%)] transition-all duration-300'
              transition={{ duration: .6, delay: index * .1 }}
              key={item.id}
            >
              <h5 className='font-gilroyMedium text-2xl md:text-[28px] font-bold text-white'>{item.title}</h5>
              <p className='mt-3 text-white/80 text-sm md:text-base font-medium'>{item.desc}</p>
              <ul className='mt-5'>
                {
                  item.list.map(_item => {
                    return <li
                      key={_item}
                      className='mt-2 text-xl flex gap-2 justify-center text-white font-bold leading-normal'
                    >
                      <div className='relative mt-[14px] w-1 h-1 bg-white rounded-full' />
                      {_item}
                    </li>
                  })
                }
              </ul>
            </FadeIn>
          ))
        }
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6' >
        {
          data2.map((item, index) => (
            <FadeIn
              className='w-full px-4 md:px-8 text-white py-[32px]  md:pb-[10px] md:min-h-[210px] text-center border border-white/30 bg-[rgba(29,29,29,.1)] backdrop-blur-[22px] rounded-[8px] hover:backdrop-blur-[12px] hover:shadow-[-2px_-2px_2px_#cff73d_inset,2px_3px_2px_0px_rgba(255,255,255,0.42)_inset] hover:bg-[linear-gradient(127deg,#131602_61.97%,#334C00_99.99%)] transition-all duration-300'
              transition={{ duration: .6, delay: index * .1 + .3 }}
              key={item.id}
            >
              <div className=''>
                <h5 className='text-3xl leading-normal '>{item.title}</h5>
                <p className='mt-3 text-[#ADABB2] text-base'>{item.desc}</p>
              </div>
            </FadeIn>
          ))
        }

      </div>
    </ContentContainerLarge>
  )
}

export default React.memo(Commercial)