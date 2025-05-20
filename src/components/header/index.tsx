"use client"

import logo from '@/assets/logo/logo.svg'
import React, { Suspense, useRef, useState } from 'react'
import Link from 'next/link'
import ContentContainer from '../container/ContentContainer'
import menuIcon from '@/assets/header/menu-icon.svg'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import { scrollTo } from '@/utils/util'
import { team, blog } from './config'
import ContentContainerLarge from '../container/ContentContainerLarge'
import MobileMenu from '../mobile-menu/MobileMenu'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menus = [
  {
    id: 0,
    name: 'Home',
    link: '/'
  },
  {
    id: 1,
    name: 'ZenHive',
    link: '/zenhive'
  },
  {
    id: 2,
    name: 'Products',
    link: '/product',
    isLink: true,
    children: [
      {
        id: '2-1',
        name: 'aZen Hub',
        link: '/product#azen-hub',
        // anchor: true,
      },
      {
        id: '2-2',
        name: 'ZenHive',
        link: '/product#zenhive',
        // anchor: true,
      },
      {
        id: '2-3',
        name: 'aZen DePIN',
        link: '/product#azen-depin-lite',
        // anchor: true,
      },
    ]
  },
  // {
  //   id: 3,
  //   name: 'Protocol',
  //   link: '/protocol'
  // },
  {
    id: 4,
    name: 'About',
    link: '/about',
    children: [
      {
        id: '4-1',
        name: 'Our Team',
        link: '/team',
        icon: team
      },
      {
        id: '4-2',
        name: 'Blog',
        link: '/blog',
        icon: blog
      },
      {
        id: '4-3',
        name: 'Whitepaper',
        link: 'https://azen-protocol.gitbook.io/azen-gitbook',
        // icon: whitepaper
      },
      {
        id: '4-4',
        name: 'Media Kit',
        link: 'https://drive.google.com/drive/folders/1t4lTrPubTUKevymdKgWOVJCe97rLVSuA?usp=share_link',
        // icon: whitepaper
      }
    ]
  },
]

type MenuItemProps = {
  id: string | number
  name: string
  link: string
  anchor?: boolean
  isLink?: boolean
  children?: MenuItemProps[]
}

function NavLink({ href, children, className, style }: { 
  href: string, 
  children: React.ReactNode, 
  className?: string | (({ isActive }: { isActive : boolean}) => string) 
  style?: React.CSSProperties | (({ isActive }: { isActive : boolean}) => React.CSSProperties | undefined)
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href}
      className={typeof className === 'function' ? className({ isActive }) : className}
      style={typeof style === 'function' ? style({ isActive }) : style}
    >
      {children}
    </Link>
  )
}

const Menu = (props: { menus: MenuItemProps[] }) => {
  const { menus } = props
  return (
    <div className='font-gilroy flex-1 hidden md:flex justify-end items-center gap-14'>
      {
        menus.map((item) => (
          <MenuItem key={item.id} menu={item} />
        ))
      }
    </div>
  )
}
const SubMenu = (props: { menu: MenuItemProps }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { menu } = props
  const paths = menu.children!.map((item) => item.link)
  const className = "text-white text-lg font-normal"

  const isActive = paths.includes(pathname) || pathname === menu.link
  const extraClassName = isActive ? 'after:content-[""] after:block after:w-[20px] after:h-[2px] after:rounded-full after:bg-white after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%]' : ''

  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setOpen(false)
    }, 3000)
  }

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen} >
      <DropdownMenuTrigger
        className='outline-none'
        onMouseEnter={handleMouseEnter} // **鼠标进入打开**
        onMouseLeave={handleMouseLeave}
      >
        {
          menu.isLink ? <NavLink
            className={cn(
              className,
              extraClassName,
              'relative',
            )}
            href={menu.link}
          >{menu.name}</NavLink> : <span
            className={cn(
              className,
              extraClassName,
              'relative',
            )}
            style={isActive ? { color: 'white', fontWeight: 'bold' } : { color: '#D4D8DB' }}
          >
            {menu.name}
          </span>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='
          px-2 py-3 bg-[linear-gradient(144deg,rgba(230,255,71,0)_38.51%,rgba(230,255,71,0.4)_99.52%),linear-gradient(127deg,rgba(19,22,2,0.3)_61.97%,rgba(51,76,0,0.3)_99.99%)] shadow-[inset_-2px_-2px_4px_0px_#CFF73D,inset_2px_2px_4px_0px_rgba(255,255,255,0.62)] backdrop-blur-[16px] rounded-[12px] ![animation-duration:200ms]
        '
        onMouseEnter={handleMouseEnter} // **保持打开**
        onMouseLeave={handleMouseLeave}
      >
        {
          menu.children!.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className={cn(
                // className,
                'px-[16px] py-[8px] hover:bg-white/10',
              )}
              onClick={item.anchor ? () => scrollTo(item.link, 1000) : undefined}
            >
              {!item.anchor ? <NavLink
                key={item.id}
                className={cn(
                  className,
                  'flex items-center w-full'
                )}
                href={item.link}
              >
                {item.name}
              </NavLink> : <span className={className}>{item.name}</span>}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
const MenuItem = (props: { menu: MenuItemProps }) => {
  const { menu } = props
  const className = " relative text-[#D4D8DB] text-lg font-normal hover:text-white transition-colors duration-300"
  return menu.children ? (<SubMenu menu={menu} />) : (
    <NavLink
      key={menu.id}
      className={({ isActive }) => {
        return cn(
          className,
          isActive ? 'after:content-[""] after:block after:w-[28px] after:h-[2px] after:rounded-full after:bg-white after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%]' : ''
        )
      }}
      href={menu.link}
      style={({ isActive }) => (isActive ? { color: 'white', fontWeight: 'bold' } : undefined)}
    >
      {menu.name}
    </NavLink>
  )
}

const Header = ({ size }: {size?: 'large' | 'normal'}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true)
  }

  const Wrapper = size === 'large' ? ContentContainerLarge : ContentContainer

  return (
    <>
      <div className={cn(
        'relative w-full z-[1000] transition-colors duration-300 bg-black/20 backdrop-blur-[17px] border-b border-white/10',
        // isScrolled ? 'bg-[rgba(0,0,0,.48)]' : 'bg-transparent'
      )}>
        {/* 就这样吧 */}
        <Wrapper>
          <header className='relative z-50 flex justify-between items-center py-6'>
            <div className='flex-1 ml-74 relative'>
              <Link href='/' className='absolute top-1/2 -translate-y-1/2 left-0' ><Image src={logo} width={85} alt="" /></Link>
            </div>
            <div className='flex-1 hidden md:flex justify-end items-center gap-14'>
              <Menu menus={menus} />
            </div>
            <Image className='block md:hidden z-10' src={menuIcon} alt="" onClick={handleMenuClick} />
          </header>
        </Wrapper>
      </div>
      {
        showMenu &&
        <Suspense fallback={<div>Loading...</div>}>
          <MobileMenu
            onClose={() => setShowMenu(false)}
            onOk={() => setShowMenu(false)}
          />
        </Suspense>
      }
    </>
  )
}

export default React.memo(Header)