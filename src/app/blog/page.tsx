import Container from "@/components/container/Container";
import Header from "@/components/header";
import Footer from '@/components/home-new/footer'

import blog1 from '@/assets/blog/blog-1.webp'
import blog2 from '@/assets/blog/blog-2.webp'
import blog3 from '@/assets/blog/blog-3.webp'
import blog4 from '@/assets/blog/blog-4.webp'
import blog5 from '@/assets/blog/blog-5.webp'
import blog6 from '@/assets/blog/blog-6.webp'
import blog7 from '@/assets/blog/blog-7.webp'
import blog8 from '@/assets/blog/blog-8.webp'
import blog9 from '@/assets/blog/blog-9.webp'

import bg from '@/assets/team/team-header-bg.webp'

import bg1 from '@/assets/blog/bg-1.png'
import bg2 from '@/assets/blog/bg-2.png'
import bg3 from '@/assets/team/team-bg-3.webp'
import bg4 from '@/assets/team/team-bg-4.webp'

import feature1 from '@/assets/blog/feature-1.png'
import feature2 from '@/assets/blog/feature-2.png'
import feature3 from '@/assets/blog/feature-3.png'
import feature4 from '@/assets/blog/feature-4.png'

import FadeIn from "../../components/fade-in";
import Heading from "@/components/home-new/heading";
import Link from "next/link";
import Image from "next/image";

const Featured = [
  {
    title: 'Yahoo！finance',
    date: 'Augest 8, 2024',
    link: 'https://finance.yahoo.com/news/azen-protocol-launched-decentralised-marketplace-162000991.html',
    img: feature1
  },
  {
    title: 'BENZINGA',
    date: 'August 7, 2024',
    link: 'https://www.benzinga.com/pressreleases/24/08/40231397/azen-protocol-launched-the-decentralised-marketplace-for-computing-resources',
    img: feature2
  },
  {
    title: 'AP | ASSOCIATED PRESS',
    date: 'August 7, 2024',
    link: 'https://apnews.com/press-release/accesswire/data-management-and-storage-fb700f746b19837d0e32c0e36ed68659',
    img: feature3
  },
  {
    title: 'BUSINESS INSIDER',
    date: 'August 7, 2024',
    link: 'https://markets.businessinsider.com/news/currencies/azen-protocol-launched-the-decentralised-marketplace-for-computing-resources-1033655124',
    img: feature4
  },
]

const BlogList = [
  {
    id: 1,
    title: 'aZen Hub: Build the DePIN Network and Earn $AZEN – Start Here!',
    date: 'March 31,2025',
    link: 'https://medium.com/@azenprotocol/azen-hub-build-the-depin-network-and-earn-azen-start-here-84ffe2ce4e55',
    img: blog1
  },
  {
    id: 2,
    title: 'aZen New Official Website is live!',
    date: 'March 28,2025',
    link: 'https://x.com/azen_protocol/status/1905459882201153664',
    img: blog2
  },
  {
    id: 3,
    title: 'aZen Brand Story-',
    date: 'March 26,2025',
    link: 'https://medium.com/@azenprotocol/azen-brand-story-d7bd537f0537',
    img: blog3
  },
  {
    id: 4,
    title: 'aZen DePIN infrastructure powers ubiquitous AI',
    date: 'March 21,2025',
    link: 'https://medium.com/@azenprotocol/azen-depin-infrastructure-for-the-age-of-ubiquitous-ai-0c26bac1cf25',
    img: blog4
  },
  {
    id: 5,
    title: 'aZen reached 200,000+ followers on X',
    date: 'March 14,2025',
    link: 'https://x.com/azen_protocol/status/1900394049263088038',
    img: blog5
  },
  {
    id: 6,
    title: 'aZen at the #StartinBlock Top 100',
    date: 'March 11,2025',
    link: 'https://x.com/azen_protocol/status/1899409640472854794',
    img: blog6
  },
  {
    id: 7,
    title: 'Our in-app swap is getting ready for your $XaZen rewards!',
    date: 'March 11,2025',
    link: 'https://x.com/azen_protocol/status/1899365368801730604',
    img: blog7
  },
  {
    id: 8,
    title: 'aZen DePIN Lite Testnet Mission Accomplished!',
    date: 'March 11,2025',
    link: 'https://x.com/azen_protocol/status/1899364374982344930',
    img: blog8
  },
  {
    id: 9,
    title: 'aZen Office Hours #1 – ZenHive Testnet Deep Dive!',
    date: 'March 04,2025',
    link: 'https://x.com/azen_protocol/status/1896786009138049213',
    img: blog9
  },
]
const Button = () => {
  return <button className="w-[130px] inline-flex items-center justify-between font-gilroy px-3 py-1 text-white text-[14px] font-normal border border-white transition duration-300 rounded-[10px] hover:bg-[linear-gradient(88deg,#C0EE02_0.41%,#90FF6B_100%)] hover:text-black hover:border-transparent">
    Read More<span className="ml-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M4.84237 4.09609L0.968863 0.172434C0.762074 -0.0474827 0.41706 -0.0583697 0.196121 0.147394C0.187414 0.155015 0.179795 0.163724 0.171088 0.172434C0.0578985 0.27586 -0.00413801 0.422834 0.000215505 0.57634C-0.00413802 0.729846 0.0578985 0.87682 0.171088 0.980246L3.64407 4.5L0.171088 8.01975C0.0578982 8.12318 -0.00413835 8.27124 0.000215162 8.42366C-0.00413837 8.57717 0.0578981 8.72414 0.171088 8.82757C0.377878 9.04748 0.722891 9.05837 0.94383 8.85261C0.952537 8.84498 0.960156 8.83627 0.968863 8.82757L4.84237 4.90391C5.06548 4.68726 5.07092 4.33125 4.85434 4.10807C4.85107 4.10371 4.84672 4.09936 4.84237 4.09609ZM8.82906 4.09609L4.95665 0.172434C4.74986 -0.0474825 4.40484 -0.0583695 4.1839 0.147394C4.1752 0.155015 4.16758 0.163724 4.15887 0.172434C4.04568 0.27586 3.98364 0.422834 3.988 0.57634C3.98364 0.729846 4.04568 0.87682 4.15778 0.980246L7.63186 4.5L4.15778 8.01975C4.04459 8.12318 3.98256 8.27124 3.988 8.42366C3.98364 8.57608 4.04568 8.72414 4.15778 8.82757C4.36457 9.04748 4.70959 9.05837 4.93052 8.85261C4.93923 8.84498 4.94685 8.83627 4.95556 8.82757L8.82906 4.90391C9.05218 4.68726 9.05762 4.33125 8.84103 4.10807L8.82906 4.09609Z" fill="currentColor"/>
      </svg>
    </span>
  </button>
}



export default async function Blog() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`)
  const BlogList = await response.json()
  return (
    <>
      <main className='overflow-x-hidden bg-black h-screen'>
        <Header />
        <Container className="font-gilroy relative bg-black">
          <div
            className='w-full relative pb-32'
            style={{
              backgroundImage: `url(${bg3.src}),url(${bg4.src})`,
              backgroundPosition: 'left 800px,right 1500px',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <FadeIn>
              <div className="w-full pt-[118px] pb-[170px] relative">
                <div className='relative z-30 max-w-[930px] mx-auto text-center'>
                  <Heading className=''>AZEN BLOG</Heading>
                  <p className="z-10 mt-14 w-full text-base leading-[1.5] text-white max-md:mt-10 max-md:max-w-full px-[20px]">
                    Dive into exclusive stories, industry trends, and groundbreaking innovations from aZen. <br />Stay ahead with insights that shape the future!
                  </p>
                </div>
                <Image className="absolute z-20  bottom-0 left-0 2xl:left-[190px]" src={bg1} alt="" />
                <Image property="true" className="hidden sm:block absolute z-20 top-[6px] -right-[20px] 2xl:right-[160px]" src={bg2} alt="" />
                <Image src={bg} className="absolute -top-[90px] left-1/2 -translate-x-1/2 w-full h-[814px] object-cover z-10" alt="" />
              </div>
            </FadeIn>

            <div className="px-[20px] hd:px-0 hd:w-[1360px] mx-auto relative z-10 ">
              <FadeIn>
                <h3 className="text-3xl text-white font-bold">
                  Featured On
                </h3>
              </FadeIn>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-16">
                  {
                    Featured.map((item, index) => (
                      <FadeIn 
                        key={index} 
                        className='p-[6px] min-h-[302px] rounded-[20px] bg-[#181818] overflow-hidden'
                        transition={{
                          delay: index * 0.1,
                          duration: 1,
                        }}
                      >
                        <div className="relative h-[192px] rounded-[20px]  group bg-[linear-gradient(88deg,#C0EE02_0.41%,#90FF6B_100%)]" key={index}>
                          <Image src={item.img} alt="" className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.1] transition duration-300" />
                        </div>
                        <div className="flex flex-col  p-[12px_14px_14px]">
                          <h4 className="text-white text-[16px] font-bold group-hover:translate-y-[-10px] transition duration-300">{item.title}</h4>
                          <Link className="mt-4" href={item.link} key={index} target="_blank">
                            <Button />
                          </Link>
                        </div>
                      </FadeIn>
                    ))
                  }
                </div>
              <FadeIn>
                <h3 className="text-3xl text-white font-bold mt-16">
                  News
                </h3>
              </FadeIn>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {
                  BlogList.map((item: any, index: number) => (
                    <FadeIn 
                      key={item.id}
                      transition={{
                        delay: index * 0.1,
                        duration: 1,
                      }}
                    >
                      <div className='flex flex-col group p-[6px] h-[342px] rounded-[20px] bg-[#181818] overflow-hidden'>
                        <div className="relative h-[210px] rounded-[20px] overflow-hidden">
                          <img src={item.thumbnail} alt="" className="w-full h-auto object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.1] transition duration-300" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between p-[12px_14px_14px]">
                          <h4 title={item.title} className="text-white text-base leading-[normal] font-bold line-clamp-2">{item.title}</h4>
                          <div className="flex justify-between items-center">
                            <Link href={item.link} key={item.id} target="_blank">
                              <Button />
                            </Link>
                            <span className='text-[#A2A2A2] text-[14px] leading-[normal]'>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))
                }
              </div>
            </div>
          </div>
          <Footer className="mt-0" />
        </Container>
      </main>
    </>
  )
}
