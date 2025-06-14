import { cn } from '@/lib/utils'

export default function Heading(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2
    className={cn(
      'font-gilroyBlack font-medium md:font-bold text-4xl md:text-[58px] md:leading-[1.25] text-white',
      props.className)}
  >
    {props.children}
  </h2>
}