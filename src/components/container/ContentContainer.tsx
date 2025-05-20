import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ContentContainer = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <section className={cn(
          `w-full xl:w-[1260px] mx-auto px-4 md:px-4 xl:px-0 bg-transparent`,
          className
        )}>
          {children}
        </section>
      );
}

export default ContentContainer