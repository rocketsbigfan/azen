import { useEffect, RefObject } from "react";

interface UseAutoScrollIntoViewOptions {
  threshold?: number; // 触发滚动的可见比例 (默认 50%)
  behavior?: ScrollBehavior; // 滚动动画 (默认 smooth)
  block?: ScrollLogicalPosition; // 滚动对齐方式 (默认 center)
}

const up = 100
const down = 100

const useAutoScrollIntoView = (
  ref: RefObject<HTMLElement | null>,
  { threshold = 0.3, behavior = "smooth", block = "start" }: UseAutoScrollIntoViewOptions = {}
) => {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting
          if (entry.intersectionRatio > 0.2) {
            ref.current?.scrollIntoView({ behavior, block });
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, behavior, block]);
};

export default useAutoScrollIntoView;
