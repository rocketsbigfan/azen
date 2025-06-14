import ContentContainerLarge from "../container/ContentContainerLarge"
import FadeIn from "../fade-in"

import edge from '@/assets/zenhive/device/icon-1.png'
import primehost from '@/assets/zenhive/device/icon-2.png'
import bg from '@/assets/zenhive/device/bg.webp'
import { cn } from "@/lib/utils"
import Image from "next/image"

const data = [
  {
    icon: edge,
    title: 'ZenHive Edge',
    description: 'Deliver to your home, easy to connect to the internet and electricity to start mining.',
  },
  {
    icon: primehost,
    title: 'ZenHive PrimeHost',
    description: 'Hosted free at a professional data center',
  }
]

export default function TwoDevice() { 
  return (
    <ContentContainerLarge className="mt-16 md:mt-60 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <FadeIn>
            <h3 className="max-md:text-center text-xl md:text-[32px] font-bold">
              Two Device Formats to Suit Your Needs:
            </h3>
          </FadeIn>
          <div className="mt-7 md:mt-16">
            {data.map((item, index) => (
              <FadeIn 
                key={item.title} 
                className="mt-5 md:min-h-[182px] flex border border-white/30 rounded-[8px] bg-[rgba(29,29,29,.1)] backdrop-blur-[22px] overflow-hidden"
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className={cn("inline-flex items-end max-md:w-[100px] w-[170px] flex-shrink-0", {
                  'items-center': index === 1})}>
                  <Image src={item.icon} alt="" className={cn(
                    "object-contain",
                    {'scale-[.8]': index === 1}
                  )} />
                </div>
                {/* <img src={item.icon} alt="" className="max-md:w-[100px] w-[170px] object-contain" /> */}
                <div className="pr-4 py-[22px] md:py-8 md:pr-10">
                  <h4 className="text-base md:text-[24px] font-bold">{item.title}</h4>
                  <p className="mt-2 md:mt-5 text-[12px] md:text-[18px] text-white/80">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="hidden md:inline-flex justify-center items-center w-1/2">
          <Image src={bg} className="scale-110" alt="" />
        </div>
      </div>
    </ContentContainerLarge>
  )
}