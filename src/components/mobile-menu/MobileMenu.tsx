import React, { Fragment, useEffect, useRef } from 'react'
import logo from '@/assets/logo/logo.svg'
import close from '@/assets/mobile-menu/close.svg'
import Link from 'next/link'
import { scrollTo } from '@/utils/util';
import Image from 'next/image';

interface MenuMobileProps {
  onClose: () => void;
  onOk: () => void;
}

type MenuItemProps = {
  id: string | number
  name: string
  link: string
  anchor?: boolean
  isLink?: boolean
  children?: Omit<MenuItemProps, 'isLink'>[]
}


const items: MenuItemProps[] = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'ZenHive',
    link: '/zenhive',
  },
  {
    id: 3,
    name: 'Products',
    link: '/product',
    isLink: true,
    children: [
      {
        id: '3-1',
        name: 'aZen Hub',
        link: 'azen-hub',
        anchor: true,
      },
      {
        id: '3-2',
        name: 'ZenHive',
        link: 'zenhive',
        anchor: true,
      },
      {
        id: '3-3',
        name: 'aZen DePIN',
        link: 'azen-depin-lite',
        anchor: true,
      },
    ]
  },
  {
    id: 4,
    name: 'About',
    link: '/about',
    children: [
      {
        id: '4-1',
        name: 'Our Team',
        link: '/team'
      },
      {
        id: '4-2',
        name: 'Blog',
        link: '/blog'
      },
      {
        id: '4-3',
        name: 'Whitepaper',
        link: 'https://azen-protocol.gitbook.io/azen-gitbook',
      },
      {
        id: '4-4',
        name: 'Media Kit',
        link: 'https://drive.google.com/drive/folders/1t4lTrPubTUKevymdKgWOVJCe97rLVSuA?usp=share_link',
      }
    ]
  },
]

const MobileMenu = (props: MenuMobileProps) => {


  const handleClose = () => {
    closeDialog()
  }

  const handleScrollTo = (id: string) => {
    handleClose()
    scrollTo(id)
  }

  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    // Prevent auto-focus
    const handleFocus = (e: FocusEvent) => e.preventDefault();
    dialog?.addEventListener('focus', handleFocus);

    dialog?.showModal();

    return () => {
      dialog?.removeEventListener('focus', handleFocus);
    };
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
    props.onClose();
  };

  return (
    <dialog ref={dialogRef} className='bg-[#0F1110] fixed inset-0 w-screen h-screen top-0 left-0 z-50 outline-none overflow-y-auto hide-scrollbar flex flex-col justify-start items-stretch'>
      <div className='w-full flex justify-between items-center px-4 py-10'>
        <Image src={logo} className='w-[74px]' alt="" />
        <Image className='cursor-pointer' src={close} onClick={handleClose} alt="" />
      </div>
      <div className='px-14 flex flex-col gap-10 justify-start items-start'>
        {
          items.map((item) => {
            if (item.children?.length) {
              return <Fragment key={item.id}>
                <div className='text-sm text-white cursor-pointer'>{
                  item.isLink ? <Link tabIndex={-1} aria-hidden="true" onClick={handleClose} key={item.id} href={item.link}>{item.name}</Link> : item.name
                }</div>
                <div className='px-10 flex flex-col gap-6 justify-start items-start'>
                  {
                    item.children.map(_item => {
                      if (_item.anchor) {
                        return <div key={_item.id} tabIndex={-1} className='text-sm text-white cursor-pointer' onClick={() => handleScrollTo(_item.link)}>{_item.name}</div>
                      }
                      return <Link tabIndex={-1} aria-hidden="true" className='text-sm text-white cursor-pointer' onClick={handleClose} key={_item.id} href={_item.link}>{_item.name}</Link>
                    })
                  }
                </div>
              </Fragment>
            }
            return <Link tabIndex={-1} aria-hidden="true" className='text-sm text-white cursor-pointer' onClick={handleClose} key={item.id} href={item.link}>{item.name}</Link>
          })
        }
      </div>

    </dialog>
  )
}


export default React.memo(MobileMenu)