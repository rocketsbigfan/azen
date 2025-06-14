import React from 'react'
import logo from '@/assets/logo/logo.svg'
import ContentContainer from '../container/ContentContainer'
import twitter from '@/assets/home-new/social-icon/twitter.svg'
import telegram from '@/assets/home-new/social-icon/telegram.svg'
import linkedin from '@/assets/home-new/social-icon/linkedin.svg'
import medium from '@/assets/home-new/social-icon/medium.svg'
import gitbook from '@/assets/home-new/social-icon/gitbook.svg'

import twitter_active from '@/assets/social-icon/twitter.svg'
import telegram_active from '@/assets/social-icon/tg.svg'
import linkedin_active from '@/assets/social-icon/linkedin.svg'
import medium_active from '@/assets/social-icon/medium.svg'
import gitbook_active from '@/assets/social-icon/gitbook.svg'


import { cn } from '@/lib/utils';
import Link from 'next/link'
import Image from 'next/image'

const Footer = ({ className }: { className?: string }) => {

  const about = [
    {id: 1, name: 'Our Team', link: '/team'},
    {id: 2, name: 'Blogs', link: '/blog'},
    {id: 3, name: 'Whitepaper', link: 'https://azen-protocol.gitbook.io/azen-gitbook'},
    {id: 4, name: 'Media Kit', link: 'https://drive.google.com/drive/folders/1t4lTrPubTUKevymdKgWOVJCe97rLVSuA?usp=share_link'},
  ]
  const products = [
    { id: 1, name: 'aZen Hub', positionScrollTo: '/azen-hub', link: '/product#azen-hub' },
    { id: 2, name: 'ZenHive', positionScrollTo: '/zenhive', link: '/product#zenhive' },
    { id: 3, name: 'aZen DePIN Lite', positionScrollTo: '/azen-depin-lite', link: '/product#azen-depin-lite' },
  ]

  const downloads = [
    { id: 1, name: 'aZen Hub for iOS', link: 'https://apps.apple.com/us/app/azen-connect/id6476482774' },
    { id: 2, name: 'aZen Hub for Android', link: 'https://play.google.com/store/apps/details?id=com.azen.manager' },
    // {
    //   id: 3,
    //   name: 'aZen DePIN Lite for Android',
    //   link: 'https://play.google.com/store/apps/details?id=com.azen.client&pli=1'
    // },
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      icon: twitter,
      link: 'https://x.com/azen_protocol',
      active: twitter_active
    },
    {
      name: 'Telegram',
      icon: telegram,
      link: 'https://t.me/azenprotocol',
      active: telegram_active
    },
    {
      name: 'Linkedin',
      icon: linkedin,
      link: 'https://www.linkedin.com/company/azenprotocol/posts/?feedView=all',
      active: linkedin_active
    },
    {
      name: 'Gitbook',
      icon: gitbook,
      link: 'https://azen-protocol.gitbook.io/azen-gitbook',
      active: gitbook_active
    },
    {
      name: 'Medium',
      icon: medium,
      link: 'https://medium.com/@azenprotocol',
      active: medium_active
    }
  ]

  return (
    <section className={cn('font-gilroy relative bg-black px-4 py-10 mt-36 border-t border-t-[#404040]', className)}>
      <ContentContainer>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full'>
          <div className='w-full md:w-[30%] lg:w-[50%]'>
            <Image src={logo} width={99} alt="" />
            <p
              className='w-full md:w-[80%]  font-normal text-sm text-white md:text-[#d2d2d2] mt-4 tracking-wide'>
              aZen focused on real-world AI applications, aZen provides a scalable computing layer that powers Web3 applications, AI, and data analytics. Its ecosystem integrates protocol-level AI coordination, commercial-grade hardware, and an application hub that bridges DePIN and DeFAI.
            </p>
          </div>

          <div className='flex md:flex-row flex-col justify-center items-start gap-6 lg:gap-6 xl:gap-16 mt-10 md:mt-0'>
            <div>
              <h6 className='font-gilroy font-normal text-xl text-white mb-4'>Products</h6>
              {
                products.map((item) => (
                  <div className='mt-2' key={item.id}>
                    {/* <button className='font-normal text-[#d2d2d2] hover:text-white transition-all duration-300'
                      key={item.id}
                      onClick={() => scrollTo(item.positionScrollTo)}>
                      {item.name}
                    </button> */}
                    <Link 
                      key={item.id}
                      href={item.link}
                      className='font-normal text-[#d2d2d2] hover:text-white transition-all duration-300'
                    >
                      {
                        item.name
                      }
                    </Link>
                  </div>
                ))
              }
            </div>
            <div>
              <h6 className='font-gilroy font-normal text-xl text-white mb-4'>About</h6>
              {
                about.map((item, index) => (
                  <Link 
                    // target='_blank'
                    key={item.id}
                    href={item.link}>
                    <p className='mt-2 font-normal text-[#d2d2d2] hover:text-white transition-all duration-300'>{item.name}</p>
                  </Link>
                ))
              }
            </div>
            <div>
              <h6 className='font-gilroy font-normal text-xl text-white mb-4'>Downloads</h6>
              {
                downloads.map((item) => (
                  <a
                    target='_blank'
                    key={item.id}
                    href={item.link}>
                    <p className='mt-2 font-normal text-[#d2d2d2] hover:text-white transition-all duration-300'>{item.name}</p>
                  </a>
                ))
              }
            </div>
            {/* <div className='flex justify-center items-center gap-3'>
            {
              socialLinks.map((item) => (
                <a key={item.id} target='_blank' href={item.link}>
                  <img src={item.icon} alt=""/>
                </a>
              ))
            }
          </div> */}
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-0 xl:px-0 mx-auto py-8 mt-8'>
          <p className=' font-normal text-sm text-white md:text-[#d2d2d2]'>
            © 2024 aZen. All Rights Reserved.</p>
          {/* <p className=' font-normal text-sm text-white md:text-[#d2d2d2]'></p> */}
          {/* <a className=' font-normal text-sm text-white md:text-[#d2d2d2]' href="">Terms of Use |  Privacy Policy</a> */}
          <div className='flex justify-end items-center gap-2'>
            <a target='_blank' className=' text-white md:text-[#d2d2d2] text-sm'
              href="https://www.azenprotocol.io/terms-and-conditions.html">
              Terms of Use
            </a>
            <p className='text-white md:text-[#d2d2d2]'>|</p>
            <a target='_blank' className=' text-white md:text-[#d2d2d2] text-sm'
              href=" https://www.azenprotocol.io/privacy-policy.html">
              Privacy Policy
            </a>
            <div className='hidden md:flex flex-auto justify-center items-center gap-4 ml-9'>
              {
                socialLinks.map((item) => (
                  item.link ? <a key={item.name} target='_blank' href={item.link}>
                  {/* <img src={item.icon} width={40} alt="" /> */}
                  <Icon icon={item.icon} activeIcon={item.active} />
                </a> : <Icon key={item.name} icon={item.icon} activeIcon={item.active} />
                ))
              }
            </div>
          </div>
          <div className='md:hidden flex-auto flex justify-center items-center gap-5'>
            {
              socialLinks.map((item) => (
                item.link ? <a key={item.name} target='_blank' href={item.link}>
                  <Image src={item.icon} width={40} alt="" />
                </a> : <Image key={item.name} src={item.icon} width={40} alt="" />
              ))
            }
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}

export default React.memo(Footer)

const Icon = ({icon, activeIcon}: {icon: string, activeIcon: string}) => {
  return <div className='group w-[26px] relative inline-flex justify-center items-center'>
    <Image src={icon} width={26} className='opacity-1 group-hover:opacity-0 transition duration-300' alt="" />
    <Image   
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300' 
      src={activeIcon} 
      width={26} 
      alt="" 
    />
  </div>
}