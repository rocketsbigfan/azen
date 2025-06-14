import { Fragment, useCallback, useEffect, useRef, useState, WheelEvent } from "react";
import Heading from "./heading";
import useAutoScrollIntoView from "@/hooks/useAutoScrollIntoView";
import { useScroll, useSpring, motion } from "motion/react";
// import left from '@/assets/home-new/roadmap/bg-left.png'
// import right from '@/assets/home-new/roadmap/bg-right.png'
import left from '@/assets/home-new/roadmap/bg-left.webp'
import right from '@/assets/home-new/roadmap/bg-right.webp'
import Image from "next/image";

const Map = [
  {
    year: 2024,
    data: [
      {
        section: 'Q1',
        items: [
          'aZen Connect - Android and iOS release',
          'aZen Connect - Particle Wallet Integration',
        ]
      },
      {
        section: 'Q2',
        items: [
          'DePIN - Solana testnet integration',
        ]
      },
      {
        section: 'Q3',
        items: [
          'DePIN - Android release',
          'ZenHive - Prototyping and architecture',
          'ZenHive - #2 Key Web 3 Partnerships (W3P) for rollout phase'
        ]
      },
      {
        section: 'Q4',
        items: [
          'ZenHive - Integration and partnerships with Top L1 (Peaq)',
          'ZenHive - Launch of the Commercial-Grade DePIN Product',
          'Integration with strategic partners'
        ]
      }
    ],
  }, {
    year: 2025,
    data: [
      {
        section: 'Q1',
        items: [
          // 'TGE -$aZen Token Generation Event',
          'ZenHive Mining',
          'Function Liquidity Feature',
        ]
      },
      {
        section: 'Q2',
        items: [
          'aZen AI Nexus – AI and Data services for businesses, enterprises and web3 projects',
          'DePIN-Windows:  Capabilities on PC (WIN)',
          'TGE – $AZEN Token Generation Event'
        ]
      },
      {
        section: 'Q3',
        items: [
          'DePIN- Linux: Capabilities on Linux systems.'
        ]
      },
      {
        section: 'Q4',
        items: [
          'aZen Forge- Toolkits and support program for building on aZen'
        ]
      }
    ]
  }
]

const Years = Map.reduce((prev, curr) => {
  const arr = Array.from({length: curr.data.length}).fill(curr.year) as number[]
  prev.push(...arr)
  return prev
}, [] as number[])

const PY = 80
const PX = 40

const useCheckPostions = (containerRef: React.RefObject<HTMLDivElement | null>) => {

  const [stickyIndexes, setStickyIndexes] = useState<number[]>([]);
  const [lastActiveYear, setLastActiveYear] = useState<number | null>(null)

  const checkAllPositions = useCallback(() => {
    if (!containerRef.current) return;
    const items = Array.from(containerRef.current.children) as HTMLDivElement[];
    const newStickyIndexes: number[] = [];
    let latestYear: number | null = null;

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      if (itemRect.top - containerRect.top <= PY + 2) {
        newStickyIndexes.push(index);
      }
      // lastyear 处理
      if (itemRect.top - containerRect.top <= PY + 100) {
        latestYear = Years[index]
      }
    });

    setStickyIndexes((prevIndexes) =>
      JSON.stringify(prevIndexes) === JSON.stringify(newStickyIndexes) ? prevIndexes : newStickyIndexes
    );
    setLastActiveYear(latestYear ?? Years[0])
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkAllPositions();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      checkAllPositions();
    };

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkAllPositions]);

  useEffect(() => {
    checkAllPositions();
  }, [checkAllPositions]);

  return {
    stickyIndexes,
    lastActiveYear
  }
}

const useGetScrollLeft = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const handleScrollLeft = () => {
      if (containerRef.current) {
        setScrollLeft(containerRef.current.getBoundingClientRect().left)
      }
    }
   handleScrollLeft()

   window.addEventListener('resize', handleScrollLeft)
   return () => {
    window.removeEventListener('resize', handleScrollLeft)
   }
  }, [])

  return scrollLeft
}

const useScrollToYear = (containerRef: React.RefObject<HTMLDivElement | null>) => {

  const scrollToCurrentYear = () => {
    if (containerRef?.current) {
      const years = [...containerRef.current.children] as HTMLDivElement[]
      const year = years.find(item => item.dataset?.year === CURRENT_YEAR.toString())

      if (year) {
        const offsetTop = year?.offsetTop - containerRef.current.offsetTop
        requestAnimationFrame(() => {
          containerRef.current!.scrollTo({ top: offsetTop, behavior: "smooth" });
        });
      } 
    }
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToCurrentYear()
    }, 1000)
  }, [])
  return scrollToCurrentYear
}

const RoadmapId = 'roadmap-scroll'
export default function Roadmap() {
  const divRef = useRef<HTMLDivElement>(null);

  const isInViewport = useRef(false)
  useAutoScrollIntoView(divRef, { threshold: .2 })
  // 使用 IntersectionObserver 检测外层 div 是否完全进入 viewport
  useEffect(() => {
    const checkVisibility = () => {
      if (!divRef.current) return;
  
      // 获取元素的位置信息
      const rect = divRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
  
      // 计算可见高度
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, windowHeight);
      const visibleHeight = visibleBottom - visibleTop;
  
      // 判断可见比例是否 ≥80%
      const isVisible = visibleHeight >= 0.8 * elementHeight;
      isInViewport.current = isVisible;
  
      // 设置容器滚动条
      const container = document.getElementById(RoadmapId);
      if (container) {
        container.style.overflowY = isVisible ? 'auto' : 'hidden';
      }
    };
    // const homeContainer = document.getElementById('home-container')
    // 监听滚动和窗口变化
    window?.addEventListener('scroll', checkVisibility);
    window?.addEventListener('resize', checkVisibility);
    // 初始检查
    checkVisibility();
    // 清理函数
    return () => {
      window?.removeEventListener('scroll', checkVisibility);
      window?.removeEventListener('resize', checkVisibility);
    };
  }, []);
  

  useEffect(() => {
    // 全局监听 wheel 事件（需设置 passive: false）
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleWheel = (e: any) => {
      // 仅在外层 div完全在 viewport 内时启动拦截逻辑
      if (!isInViewport.current) return;
      const container = document.getElementById(RoadmapId);
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1; // 考虑到精度问题
      // 根据滚动方向决定是否允许外层滚动：
      if (e.deltaY < 0 && !atTop) {
        // 往上滚动但还未到顶部：阻止外层滚动，让 container 自身滚动
        e.preventDefault();
        container.scrollTop += e.deltaY; // 手动更新滚动位置
      } else if (e.deltaY > 0 && !atBottom) {
        // 往下滚动但还未到底部：阻止外层滚动
        e.preventDefault();
        container.scrollTop += e.deltaY;
      } else {
        // 当到边界时，不 preventDefault，外层滚动得以生效
      }
      // 当到边界时，不 preventDefault，外层滚动得以生效
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  

  return <div ref={divRef} className="relative flex flex-col items-center mt-0 md:mt-[133px] pt-[133px] text-white h-screen overflow-hidden" >
    <div className="absolute top-0 left-0 z-[2] w-full h-[300px] bg-[linear-gradient(180deg,#000_0%,rgba(15,17,16,0.00)_100%)]"></div>
    <div className="absolute bottom-0 left-0 z-[2] w-full h-[300px] bg-[linear-gradient(180deg,rgba(15,17,16,0.00)_0%,#000_100%)]"></div>
    <Heading className="text-center reative z-[2]">ROADMAP</Heading>
    <Image className="w-auto hidden sm:block absolute z-[1] left-0 top-0 h-full" src={left} alt="left" />
    <Image className="w-auto hidden sm:block absolute z-[1] right-0 top-0 h-full" src={right} alt="right" />
    <StickyListContainer />
  </div>
}

const CURRENT_YEAR = new Date().getFullYear()

const StickyListContainer = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  // const inView = useInView(containerRef, { once: true, amount: 0.1 })
  useScrollToYear(containerRef)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const { stickyIndexes, lastActiveYear } = useCheckPostions(containerRef)
  const scrollLeft = useGetScrollLeft(containerRef)

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    
    if (!container) return;
  
    const { scrollTop, scrollHeight, clientHeight } = container;
    const atTop = scrollTop === 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight;
  
    // 向上滚动时，如果已在顶部，则允许外层滚动
    if (e.deltaY < 0 && atTop) {
      // 允许外层滚动：可以选择不做任何处理
      return;
    }
    // 向下滚动时，如果已在底部，则允许外层滚动
    if (e.deltaY > 0 && atBottom) {
      return;
    }
    // 否则，阻止事件冒泡，确保滚动只在内层容器内生效
    e.stopPropagation();
  };

  return (
    <div  className={`relative z-[3] w-screen flex-1 flex flex-col items-center overflow-y-hidden overflow-x-visible max-sm:!pr-4`} style={{ paddingBottom: PY, padding: `0 ${PX}px ${PY * 1.5}px`}}>
      <div className={`absolute w-[2px] bg-black`} style={{top: PY + 2, bottom: PY * 1.5, left: scrollLeft}}>
        {
          lastActiveYear && (<span className="absolute top-[1px] -translate-y-full -translate-x-1/2 left-[1px] w-[46px] h-[46px] sm:w-20 sm:h-20 inline-flex items-center justify-center text-base sm:text-3xl text-[#C0EE02] bg-black rounded-full border border-[#BFFF77] z-10">{lastActiveYear}</span>)
        }
        <motion.div 
          className="w-full h-full  bg-[linear-gradient(#C1FF50_0%,rgba(193,255,80,0)_100%)] overflow-hidden" 
          style={{ scaleY, originY: 0 }} 
        />
      </div>
      {/* <div className="relative overflow-hidden pb-[20px]"> */}
        <div 
          id={RoadmapId}  
          ref={containerRef} 
          className={`w-auto relative px-12 h-full overflow-y-auto hide-scrollbar`} 
          style={{ paddingTop: PY, paddingBottom: PY * 1.5 }}
          onWheel={handleWheel}
        >
          {
            Map.map((item, index) => (
              <Fragment key={index}>
                {
                  item.data.map((section, _index) => (
                    <StickyItem 
                      containerRef={containerRef} 
                      stickyIndexes={stickyIndexes} 
                      key={_index} 
                      year={item.year}
                      index={`${index * 4 + _index}` as unknown as number - 0} 
                      className="sticky top-0 mt-10 max-w-[700px] min-h-[300px] md:min-h-[240px] lg:min-h-[180px] max-sm:p-3 py-5 px-6 rounded-[8px] border border-[#454645] backdrop-blur-[12px]"
                    >
                      <h3 className="text-xl sm:text-4xl font-gilroyMedium text-[#c0ee02]" >{section.section}</h3>
                      <ul className="mt-2">
                        {
                          section.items.map((item) => (
                            <li
                              key={item}
                              className="[&:not(:first-child)]:mt-2 flex text-base sm:text-xl leading-[180%] "
                            >
                              <div className='relative translate-y-3 w-1 h-1 flex-none bg-white rounded-full'/>
                              <span className="ml-2">{item}</span>
                            </li>
                          ))
                        }
                      </ul>
                    </StickyItem>
                  ))
                }
              </Fragment>
            ))
          }
        </div>
        {/* <div className="absolute bottom-0 -left-[1px] z-[2] w-full h-[10px] bg-[linear-gradient(180deg,rgba(15,17,16,0.00)_0%,#000_100%)]"></div> */}
      {/* </div> */}
    </div>
  )
}


interface StickyItemProps {
  index: number;
  className?: string;
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  stickyIndexes: number[];
  year: number
}

const StickyItem = ({ index, children, className, stickyIndexes, year }: StickyItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const stickyIndex = stickyIndexes.indexOf(index);
  const translateOffset = stickyIndex !== -1 ? (stickyIndexes.length - stickyIndex) * 6 : 0;

  return (
    <div
      ref={itemRef}
      className={className}
      data-item-id={index}
      data-year={year}
      style={{
        transform: `translate(${translateOffset}px, -${translateOffset}px)`,
        transition: 'transform 0.1s ease',
        transformOrigin: 'left center',
      }}
    >
      {children}
    </div>
  );
};
