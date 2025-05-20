import React, { useState, useEffect, useRef } from 'react';

const ScrollContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollingDiv5, setIsScrollingDiv5] = useState(false);
  const div5Ref = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // 初始化 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsScrollingDiv5(true);
            window.scrollTo({ top: div5Ref.current?.offsetTop });
          } else {
            setIsScrollingDiv5(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (div5Ref.current) observer.observe(div5Ref.current);

    return () => observer.disconnect();
  }, []);

  // 事件监听
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => handleScroll(e);
    const handleTouchMove = (e: TouchEvent) => handleScroll(e);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentIndex, isScrollingDiv5]);

  // 滚动处理
  const handleScroll = (e: WheelEvent | TouchEvent) => {
    if (!isScrollingDiv5 || !div5Ref.current) return;

    e.preventDefault();
    let delta = 0;

    if (e instanceof WheelEvent) {
      delta = e.deltaY;
    } else if (e.touches) {
      delta = touchStartY.current - e.touches[0].clientY;
    }

    if (delta > 5 && currentIndex < 4) {
      setCurrentIndex(prev => prev + 1);
    } else if (delta < -5 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (currentIndex === 4 && delta > 5) {
      exitDiv5('down');
    } else if (currentIndex === 0 && delta < -5) {
      exitDiv5('up');
    }

    updateScrollPosition();
  };

  // 更新滚动位置
  const updateScrollPosition = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.style.transform = `translateY(-${currentIndex * 100}vh)`;
    }
  };

  // 退出 div5 滚动
  const exitDiv5 = (direction: 'up' | 'down') => {
    setIsScrollingDiv5(false);
    const div5 = div5Ref.current;
    if (!div5) return;

    const targetScroll = direction === 'down' 
      ? div5.offsetTop + div5.offsetHeight
      : div5.offsetTop - window.innerHeight;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className='relative'>
      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
        num === 5 ? (
          <div
            key={num}
            ref={div5Ref}
            className="h-screen relative overflow-hidden"
            onTouchStart={(e) => touchStartY.current = e.touches[0].clientY}
          >
            <div 
              ref={innerContainerRef}
              className="transition-transform duration-500 ease-in-out"
            >
              {[1,2,3,4,5].map((subNum) => (
                <div 
                  key={subNum}
                  className="h-screen flex items-center justify-center text-4xl bg-blue-100"
                >
                  Div5-{subNum}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div 
            key={num}
            className="h-screen flex items-center justify-center text-4xl bg-gray-100"
          >
            Div {num}
          </div>
        )
      ))}
    </div>
  );
};

export default ScrollContainer;