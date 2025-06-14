import Link from 'next/link'
import ContentContainer from '../container/ContentContainer'
import FadeIn from '../fade-in'
import { Gitbook, Linkedin, Medium, Tg, Twitter } from '../social-icon'

const links = [
  {
    name: 'Twitter',
    icon: (
      <Twitter />
    ),
    link: 'https://x.com/azen_protocol'
  },
  {
    name: 'Telegram',
    icon: <Tg />,
    link: 'https://t.me/azenprotocol'
  },
  {
    name: 'Linkedin',
    icon: (<Linkedin />),
    link: 'https://www.linkedin.com/company/azenprotocol/posts/?feedView=all'
  },
  {
    name: 'Gitbook',
    icon: (<Gitbook />),
    link: 'https://azen-protocol.gitbook.io/azen-gitbook'
  },
  {
    name: 'Medium',
    icon: (<Medium />),
    link: 'https://medium.com/@azenprotocol'
  }
]

const Item = (item: typeof links[number]) => {
  return (
    <div key={item.name} className='max-md:inline-flex max-md:flex-col max-md:justify-center max-md:items-center transition-all duration-300'>
      {item.icon}
      <p className='text-white text-sm md:text-xl mt-4 font-light text-center'>{item.name}</p>
    </div>
  )
}

export const FooterLink = () => {
  return (
    <ContentContainer className='flex justify-center mt-36 flex-wrap items-center max-md:justify-between md:gap-16'>
      {
        links.map((link, index) => (
          <FadeIn
            key={link.name}
            transition={{
              delay: index * 0.1,
              duration: 1,
              // once: false,
            }}
            viewport={{ amount: 0.2 }}
          >
            {link.link ? <Link href={link.link} key={link.name} target='_blank'>
              <Item {...link} />
            </Link> : <Item key={link.name} {...link} />}
          </FadeIn>
        ))
      }
    </ContentContainer>
  )
}