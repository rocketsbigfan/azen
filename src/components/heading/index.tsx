import { cn } from '@/lib/utils'

export default function Heading(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2
    className={cn(
      'font-gilroy font-medium md:font-bold text-4xl md:text-6xl md:leading-[1.25] text-linear-gradient',
      props.className)}
  >
    {props.children}
  </h2>
}