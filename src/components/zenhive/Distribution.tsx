import ContentContainerLarge from "../container/ContentContainerLarge";
import Heading from '@/components/home-new/heading'
import logo1 from '@/assets/zenhive/distribution/icon1.png'
import logo2 from '@/assets/zenhive/distribution/icon2.png'
import Image from "next/image";
// import FadeIn from "../fade-in";

const logos = [
  logo1, logo2
]

export default function Distribution() {
  return (
    <ContentContainerLarge className="mt-24 md:mt-40">
      <Heading className="text-center uppercase">Distribution Partners</Heading>
      <div className="mt-6 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      {
        logos.map((logo, index) => (
          <div key={index} className='px-6 md:px-0 inline-flex justify-center items-center h-[80px] md:h-[150px] rounded-[8px] bg-[rgba(29,29,29,.1)] border border-white/30 backdrop-blur-[22px]'>
            <Image className='h-[28px] md:h-[52px] w-auto' src={logo} alt="" />
          </div>
        ))
      }
      </div>
    </ContentContainerLarge>
  )
}