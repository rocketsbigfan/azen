import { RefObject, useEffect, useRef, useState } from "react";

interface UseResizeWidthProps {
  defaultWidth?: number;
}

/**
 * 监听容器大小变化
 * @param defaultWidth - 默认宽度
 * @returns [svgWidth, svgRef]
 */
export default function useResizeWidth ({
  defaultWidth = 100,
}: UseResizeWidthProps = {}) {

  const svgRef = useRef<SVGSVGElement>(null);
  const [svgWidth, setSvgWidth] = useState(defaultWidth); // SVG 宽度为 100

  // 监听容器大小变化
  useEffect(() => {
    function updateSize() {
      if (svgRef.current) {
        setSvgWidth(svgRef.current.clientWidth);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [ svgWidth, svgRef ] as [number, RefObject<SVGSVGElement>];
};

