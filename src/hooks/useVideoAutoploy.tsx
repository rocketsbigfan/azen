import { useInView } from "motion/react"
import { useEffect, useRef } from "react"

 const useVideoAutoploy = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainer = useRef<HTMLDivElement>(null)
  const loadedRef = useRef(false)
  const playedRef = useRef(false)

  const inView = useInView(videoContainer, {
    once: true,
    amount: .6
  })

  const handleLoadedData = () => {
    loadedRef.current = true
    if (inView && !playedRef.current) {
      handlePlay()
    }
  }

  const handlePlay = () => {
    // playedRef.current = true
    // videoRef.current?.play()
  }

  useEffect(() => {
    if (inView && loadedRef.current && !playedRef.current) {
      handlePlay()
    }
  }, [inView])

  return {
    videoRef,
    videoContainer,
    handleLoadedData,
    inView
  }
}

export default useVideoAutoploy
