import { motion } from "motion/react";
import usePathWidth from "./usePathWidth";
import useResizeWidth from "./useSvgWidth";
import useAniamtionLinearGradient from "./useAniamtionLinearGradient";

const AnimationPathLength = 200

function ArcAnimation() {
  const [svgWidth, svgRef] = useResizeWidth({ defaultWidth: 200 });
  const [pathLength, pathRef] = usePathWidth({
    svgWidth
  })
  const { onPathUpdate, gradientRef } = useAniamtionLinearGradient(pathRef, AnimationPathLength)

  const svgHeight = 120; // 设置容器高度

  // 圆心位置与控制点
  // 起点与终点
  const startX = 0;
  const startY = svgHeight;
  const endX = svgWidth;
  const endY = svgHeight;
  // 控制点 - 通过调节它来影响圆弧的弯曲程度
  const controlX = svgWidth / 2; // 控制点X（水平中心）
  const controlY = svgHeight / 4; // 控制点Y（控制弯曲的深度）
  // 使用贝塞尔曲线描述圆弧路径
  const arcPath = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

  return (
    <motion.svg
      ref={svgRef}
      width="100%"
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: .3, delay: 1.8 }}
      viewport={{once: true}}
      className='hidden md:block'
    >
      <defs>
        <filter id="yellowShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="rgba(255,255,0,0.8)" />
        </filter>

        <linearGradient id="arcInnerGradient" ref={gradientRef} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#C1FF57" />
        </linearGradient>

        <linearGradient id="ArcOuterGradient" x1="1" y1="61" x2="1658" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C1FF57" stopOpacity="0"/>
          <stop offset="0.505182" stopColor="#C1FF57" stopOpacity="0.4"/>
          <stop offset="1" stopColor="#C1FF57" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* 绘制弧线路径 */}
      <path
        ref={pathRef}
        d={arcPath}
        fill="none"
        stroke="url(#ArcOuterGradient)"
        strokeWidth="2"
      />
      <motion.path
        d={arcPath}
        stroke="url(#arcInnerGradient)"
        strokeWidth="5"
        fill="none"
        filter="url(#yellowShadow)"
        strokeLinecap="round"
        strokeDasharray={`${AnimationPathLength} ${pathLength}`}  // 这里设置 dash 长度为 30，后面 gap 长度大到只显示一段 dash
        animate={{ strokeDashoffset: [0, -pathLength] }} // 根据路径总长动画 offset（可根据实际路径总长调整）
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1.8 }}
        onUpdate={onPathUpdate}
      />
    </motion.svg>
  );
}

export default ArcAnimation