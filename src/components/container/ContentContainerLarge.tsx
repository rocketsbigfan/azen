import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

const ContentContainerLarge = ({ children, className, style, ...others }: HTMLProps<HTMLElement>) => {
  return (
    <section style={style} className={cn(
      `w-full hd:w-[1360px] mx-auto px-4 md:px-4 hd:px-0 bg-transparent`,
      className
    )} {...others}>
      {children}
    </section>
  );
}

export default ContentContainerLarge