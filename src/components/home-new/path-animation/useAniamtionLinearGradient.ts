import { MotionProps } from "motion/react";
import { RefObject, useRef } from "react";

const useAniamtionLinearGradient = (pathRef: RefObject<SVGPathElement>, AnimationPathLength: number) => {
  const gradientRef = useRef<SVGLinearGradientElement>(null)

  const onPathUpdate: MotionProps['onUpdate'] = (latest) => {
    // 动态更新渐变坐标
    // const currentOffset = latest.strokeDashoffset;
    if (pathRef.current && gradientRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      // const dashStart = Math.max(0, -currentOffset); // 转换为正数并确保不越界
      // const dashEnd = Math.min(dashStart + AnimationPathLength, totalLength);
      const currentOffset = Math.abs(Number(latest.strokeDashoffset)); // 确保为正值
      const progress = currentOffset % totalLength; // 处理循环动画
    
      // 计算当前动画段的起点和终点
      const start = progress;
      const end = (progress + AnimationPathLength) % totalLength;

      // 获取路径上的点坐标
      const startPoint = pathRef.current.getPointAtLength(start);
      const endPoint = pathRef.current.getPointAtLength(end);

      // 更新渐变方向
      gradientRef.current.setAttribute('x1', startPoint.x + '');
      gradientRef.current.setAttribute('y1', startPoint.y + '');
      gradientRef.current.setAttribute('x2', endPoint.x + '');
      gradientRef.current.setAttribute('y2', endPoint.y + '');
    }
  }

  return { gradientRef, onPathUpdate }
}

export default useAniamtionLinearGradient