"use client"
import { useLayoutEffect, useState } from "react";

const HomeVideoLoading = 'AZEN_HOME_VIDEO_LOADING'

// 0: not loaded, 1: loaded
export default function useHomeVideoLoading() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const setVideoLoaded = () => {
    if (isVideoLoaded) return
    globalThis.sessionStorage.setItem(HomeVideoLoading, '1')
    setIsVideoLoaded(true)
  }

  const setVideoNotLoaded = () => {
    globalThis.sessionStorage.setItem(HomeVideoLoading, '0')
    setIsVideoLoaded(false)
  }

  useLayoutEffect(() => {
    setIsVideoLoaded(globalThis.sessionStorage.getItem(HomeVideoLoading) === '1')
  }, [])

  return { isVideoLoaded, setVideoLoaded, setVideoNotLoaded };
}
