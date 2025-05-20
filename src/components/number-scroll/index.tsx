import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import BigNumber from 'bignumber.js';

/**
 * NumberScroll 组件 - 数字滚动动画效果
 * @param value - 目标数值
 * @param duration - 动画持续时间（秒），默认2秒
 * @param format - 是否格式化数字（添加千位分隔符），默认true
 * @param style - 自定义样式对象
 * @param resetOnExit - 元素离开视口时是否重置动画，默认false
 * @param decimals - 小数位数，默认0
 */
const NumberScroll = ({ 
  value = 0, 
  duration = 2, 
  format = true, 
  style = {}, 
  resetOnExit = false, 
  decimals = 0,
  delay = 0
}: {
  value?: number,
  duration?: number,
  format?: boolean,
  style?: React.CSSProperties,
  resetOnExit?: boolean,
  decimals?: number,
  delay?: number
}) => {
  // 控制动画的控制器
  const controls = useAnimation();
  // 当前显示的数值
  const [displayValue, setDisplayValue] = useState('0');
  // 是否已经执行过动画
  const [hasAnimated, setHasAnimated] = useState(false);
  // DOM引用，用于观察元素是否进入视口
  const ref = useRef(null);

  /**
   * 执行数字滚动动画
   * 使用 requestAnimationFrame 实现平滑动画效果
   * 通过 BigNumber 处理大数字计算，避免精度问题
   */
  const startAnimation = (value: number) => {
    const start = new BigNumber(0);
    const end = new BigNumber(value);
    const startTime = Date.now();

    const updateValue = () => {
      // 计算动画进度
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // 根据进度计算当前数值
      const currentValue = start.plus(end.minus(start).multipliedBy(progress));
      // 格式化数值（可选添加千位分隔符）
      const formattedValue = format 
        ? currentValue.toFormat(decimals, 1)
        : currentValue.toFixed();
      setDisplayValue(formattedValue);

      // 如果动画未完成，继续下一帧
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  /**
   * 使用 Intersection Observer 监听元素是否进入视口
   * 当元素进入视口时触发动画
   * 当元素离开视口时可选择重置动画
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 元素进入视口且未执行过动画
            if (!hasAnimated) {
              controls.start({ opacity: 1 });
              if (delay) {
                setTimeout(() => {
                  startAnimation(value);
                }, delay * 1000);
              } else {
                startAnimation(value);
              }
              setHasAnimated(true);
            }
          } else if (resetOnExit) {
            // 元素离开视口且需要重置
            startAnimation(0);
            setHasAnimated(false);
          }
        });
      },
      { threshold: 0.5 } // 当元素50%可见时触发
    );

    // 开始观察元素
    if (ref.current) {
      observer.observe(ref.current);
    }
    // 清理函数
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, hasAnimated, resetOnExit, value]);

  return (
    <motion.span 
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      style={style}
    >
      {displayValue}
    </motion.span>
  );
};

export default NumberScroll;
