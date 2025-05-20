import { RefObject, useEffect, useRef, useState } from "react";

export default function usePathWidth ({ svgWidth }: { svgWidth: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  // 获取路径长度
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength()); // 获取路径的总长度
    }
  }, [svgWidth]);

  return [ pathLength, pathRef ] as [number, RefObject<SVGPathElement>];
}
