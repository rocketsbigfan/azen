import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Container = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <section id='container' className={cn(`bg-[#0F1110] mx-auto px-0 relative`, className)}>
          {children}
        </section>
      );
}

export default Container