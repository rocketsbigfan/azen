import ContentContainerLarge from "../container/ContentContainerLarge";
import ArcAnimation from "./path-animation/arc";
import { LineAnimation1, LineAnimation2, LineAnimation3, LineAnimation4, LineAnimation5, LineAnimation6 } from "./path-animation/line";

import Heading from "./heading";

import { motion } from 'motion/react'
import useFadeIn from "../fade-in/useFadeIn";
import FadeIn from "../fade-in";

const applicationData = [
  {
    id: 1,
    title: 'Application',
    desc: 'Seamlessly integrates cloud and decentralized computing into Web3 and Website applications.',
  },
  {
    id: 2,
    title: 'DePIN Layer',
    desc: 'Smart contracts for dfNFT dynamic scheduling and orchestration.',
  },
  {
    id: 3,
    title: 'Protocol Layer',
    desc: 'Transforms diverse computing resources into dynamic fractional dfNFTs.',
  },
]

export default function Stack() {

  const fadeinProps = useFadeIn({})

  return (
    <FadeIn className="bg-black">
      <ContentContainerLarge className="relative z-[2] py-[133px]">
        <div>
          <FadeIn>
            <Heading className="text-center">STACK DEPICTION</Heading>
          </FadeIn>
          <div className="mt-12 flex justify-center">
            <div className="flex-1 hidden md:block">
              <LineAnimation1 />
              <LineAnimation2 />
              <LineAnimation3 />
            </div>
            {/* <img src={stack_img} width={477} alt="" /> */}
            <video src='/video/home-stack.mp4' width={477} className="md:w-[350px] hd:w-[477px]" loop muted autoPlay playsInline controls={false} />
            <div className="flex-1 hidden md:block">
              <LineAnimation4 />
              <LineAnimation5 />
              <LineAnimation6 />
            </div>
          </div>
          <ArcAnimation />
          <div className='mt-6 sm:flex justify-between gap-6 text-white flex-wrap'>
            {
              applicationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className='flex-1'
                  {...fadeinProps}
                  viewport={{ once: true, amount: .1 }}
                  transition={{ duration: 1, delay: .2 * index + .6 }}
                >
                  <h3 className='mt-5 sm:mt-0 font-gilroyMedium text-xl md:text-[32px] leading-9 '>{item.title}</h3>
                  <p className='mt-[10px] sm:mt-9 font-gilory text-[14px] md:text-[18px] leading-tight text-white/70'>{item.desc}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
      </ContentContainerLarge>
    </FadeIn>
  )
}