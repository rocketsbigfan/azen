/**
 * 滚动到指定元素
 * @param id 元素id
 * @param delay 延迟时间
 */
export const scrollTo = (id: string, delay?: number) => {
  const element = document.getElementById(id)
  if (element) {
    if (delay) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, delay)
    } else {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}