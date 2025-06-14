"use client"
import { motion, MotionProps, SVGMotionProps, useAnimate } from 'motion/react'
import useResizeWidth from './useSvgWidth';
import usePathWidth from './usePathWidth';

import border from '@/assets/home-new/stack/border.png'
import { ForwardedRef, forwardRef, ReactNode, RefObject, useState } from 'react';
import { cn } from '@/lib/utils';
import useAniamtionLinearGradient from './useAniamtionLinearGradient';

import left1 from '@/assets/home-new/stack/icons/left/1.svg'
import left2 from '@/assets/home-new/stack/icons/left/2.svg'
import left3 from '@/assets/home-new/stack/icons/left/3.svg'
import left4 from '@/assets/home-new/stack/icons/left/4.svg'
import left5 from '@/assets/home-new/stack/icons/left/5.svg'
import left6 from '@/assets/home-new/stack/icons/left/6.svg'
import left7 from '@/assets/home-new/stack/icons/left/7.svg'
import left8 from '@/assets/home-new/stack/icons/left/8.svg'
import left9 from '@/assets/home-new/stack/icons/left/9.svg'

import right1 from '@/assets/home-new/stack/icons/right/1.svg'
import right2 from '@/assets/home-new/stack/icons/right/2.svg'
import right3 from '@/assets/home-new/stack/icons/right/3.svg'
import right4 from '@/assets/home-new/stack/icons/right/4.svg'
import right5 from '@/assets/home-new/stack/icons/right/5.svg'
import right6 from '@/assets/home-new/stack/icons/right/6.svg'
import right7 from '@/assets/home-new/stack/icons/right/7.svg'
import right8 from '@/assets/home-new/stack/icons/right/8.svg'
import right9 from '@/assets/home-new/stack/icons/right/9.svg'
import Image from 'next/image';

const leftIcons = [left1, left2, left3, left4, left5, left6, left7, left8, left9]
const rightIcons = [right1, right2, right3, right4, right5, right6, right7, right8, right9]


const AnimationPathLength = 134

let leftIndex: number = 0
let rightIndex = 0

const useFakeAnimationEnd = (pathRef: RefObject<SVGPathElement>, pathLength: number, position: 'left' | 'right' = 'left') => {
  const [nearEndCalled, setNearEndCalled] = useState(false);

  const [scope, animate] = useAnimate()
  const { gradientRef, onPathUpdate } = useAniamtionLinearGradient(pathRef, AnimationPathLength)

  const [icon, setIcon] = useState(position === 'left' ? () => leftIcons[leftIndex++] : () => rightIcons[rightIndex++])

  const onUpdate: MotionProps['onUpdate'] = (latest) => {
    const num = Number(latest.strokeDashoffset)
    // 认为动画快结束了
    if (num + pathLength < AnimationPathLength && !nearEndCalled) {
      // console.log("动画快结束了！");
      setNearEndCalled(true);
      animate(
        scope.current,
        { boxShadow: ["none", "0 0 27px 0 rgba(174, 255, 112, .85)", "none"] },
        { duration: 0.6, ease: "easeIn" }
      ).then(() => {
        if (position === 'left') {
          const index = ++leftIndex
          leftIndex = leftIndex >= leftIcons.length - 1 ? 0 : index
          setIcon(leftIcons[index])
        } else {
          const index = ++rightIndex
          rightIndex = rightIndex >= rightIcons.length - 1 ? 0 : index
          setIcon(rightIcons[index])
        }
      })
      animate(
        "img",
        { scale: [1, 1.2, 1] },
        { duration: 0.6, ease: "easeIn" }
      )
    }
    // 在动画回到初始位置后重置状态，确保下一次循环也能检测到
    if (num + pathLength > AnimationPathLength && nearEndCalled) {
      // console.log("动画开始了！");
      setNearEndCalled(false);
    }
    onPathUpdate(latest)
  }

  return {
    scope,
    icon,
    gradientRef,
    onUpdate
  }
}

const IconWrapper = forwardRef((props: { children: ReactNode, className?: string, delay?: number }, ref: ForwardedRef<HTMLDivElement>) => {
  const { children, className, delay = 0 } = props

  return (
    <motion.div
      ref={ref}
      className={cn('absolute w-[60px] h-[60px] inline-flex justify-center items-center rounded-[16px]', className)}
      style={{ backgroundImage: `url(${border.src})` }}
      transition={{ delay, duration: .3 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
})

const lineProps = {
  strokeWidth: 5,
  fill: "none",
  filter: "url(#yellowShadow)",
  strokeLinecap: "round" as SVGMotionProps<SVGPathElement>['strokeLinecap']
}

export const LineAnimation1 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 355 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength)
  const svgHeight = 128; // 设置容器高度
  const path = `M${svgWidth - 18}.349 126.03H${svgWidth - 115}.022C${svgWidth - 129}.578 126.03 ${svgWidth - 129} 119.995 ${svgWidth - 129} 112.551V14.8302C${svgWidth - 129} 7.38609 ${svgWidth - 135} 1.35144 ${svgWidth - 142} 1.35144H1.53125`

  return (
    <div className='relative'>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          overflow: 'visible',
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: .3, delay: 0 }}
      >
        <defs>
          <linearGradient ref={gradientRef} id="innerGradient1" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          {...lineProps}
          d={path}
          stroke="url(#innerGradient1)"
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay: 0 }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} className='absolute top-0 left-0 -translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}

export const LineAnimation2 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 304 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength)

  const svgHeight = 48; // 设置容器高度
  const path = `M${svgWidth - 19}.349 46.8076H${svgWidth - 121}.789C${svgWidth - 128}.345 46.8076 ${svgWidth - 133}.311 40.773 ${svgWidth - 133}.311 33.3288V15.3572C${svgWidth - 133}.311 7.91306 ${svgWidth - 139}.276 1.87842 ${svgWidth - 147}.832 1.87842H50.0766602`
  const delay = .2
  return (
    <div className='relative'>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          marginTop: '16px',
          overflow: 'visible',
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: .3, delay }}
      >
        <defs>
          <linearGradient id="innerGradient2" ref={gradientRef} gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          d={path}
          stroke="url(#innerGradient2)"
          {...lineProps}
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} delay={delay} className='top-0 left-[47px] -translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}

export const LineAnimation3 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 289 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength)

  const svgHeight = 66; // 设置容器高度
  const path = `M${svgWidth - 1}.306 2.07814H${svgWidth - 77}.546C${svgWidth - 84}.102 2.07814 ${svgWidth - 90}.068 8.11279 ${svgWidth - 90}.068 15.5569V51.5002C${svgWidth - 90}.068 58.9444 ${svgWidth - 96}.033 64.979 ${svgWidth - 104}.589 64.979H66.759277`
  const delay = .4
  return (
    <div className="relative">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          marginTop: '66px',
          overflow: 'visible',
        }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .3, delay: delay }}
      >
        <defs>
          <linearGradient id="innerGradient3" ref={gradientRef} gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          d={path}
          stroke="url(#innerGradient3)"
          {...lineProps}
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay: delay }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} delay={delay} className='bottom-0 left-[63px] translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}
export const LineAnimation4 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 355 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength, 'right')

  // const gradientRef = useRef<SVGLinearGradientElement>(null)

  const svgHeight = 128; // 设置容器高度
  const path = `M18.651093 126.03H96.9778C104.422 126.03 110.457 119.995 110.457 112.551V14.8302C110.457 7.38609 116.491 1.35144 123.935 1.35144H${svgWidth - 1}.469`
  const delay = .6
  return (
    <div className="relative">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          overflow: 'visible',
        }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .3, delay: delay }}
      >
        <defs>
          <linearGradient
            ref={gradientRef}
            id="innerGradient4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          d={path}
          stroke="url(#innerGradient4)"
          {...lineProps}
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 134，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay: delay }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} delay={delay} className='top-0 -right-[3px] -translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}

export const LineAnimation5 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 304 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength, 'right')

  const svgHeight = 48; // 设置容器高度
  const path = `M18.651559 46.8076H101.211C108.655 46.8076 114.69 40.773 114.69 33.3288V15.3572C114.69 7.91306 120.725 1.87842 128.169 1.87842H${svgWidth - 51}.924`
  const delay = .8

  return (
    <div className="relative">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          marginTop: '16px',
          overflow: 'visible',
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: .3, delay: delay }}
      >
        <defs>
          <linearGradient ref={gradientRef} id="innerGradient5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          d={path}
          stroke="url(#innerGradient5)"
          {...lineProps}
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay: delay }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} delay={delay} className='top-0 right-[48px] -translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}

export const LineAnimation6 = () => {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 289 });
  const [pathLength, pathRef] = usePathWidth({ svgWidth });
  const { scope, onUpdate, gradientRef, icon } = useFakeAnimationEnd(pathRef, pathLength, 'right')

  const svgHeight = 66; // 设置容器高度
  const path = `M0.693172 2.07814H76.4532C83.8973 2.07814 89.9319 8.11279 89.9319 15.5569V51.5002C89.9319 58.9444 95.9666 64.979 103.411 64.979H${svgWidth - 67}.24`
  const delay = 1
  return (
    <div className="relative">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        style={{
          marginTop: '66px',
          overflow: 'visible',
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: .3, delay: delay }}
      >
        <defs>
          <linearGradient ref={gradientRef} id="innerGradient6" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#C1FF57" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#424D1A"
          strokeWidth="2.24646"
        />
        <motion.path
          d={path}
          stroke="url(#innerGradient6)"
          {...lineProps}
          strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
          animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop', delay: delay }}
          onUpdate={onUpdate}
        />
      </motion.svg>
      <IconWrapper ref={scope} delay={delay} className='absolute bottom-0 right-[61px] translate-y-1/2'>
        <Image className='w-auto' src={icon} alt="icon" />
      </IconWrapper>
    </div>
  )
}
