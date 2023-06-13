import { ArrowButton } from '@/shared/components';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

export function AlbumSection({ title, children }: IProps) {
  const [showActions, setShowActions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setShowActions(scrollWidth > clientWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl">{title}</h1>
        {showActions && (
          <div className="flex gap-2 items-center pr-4 lg:pr-0">
            <span tabIndex={0} className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">
              Ver todos
            </span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        )}
      </div>
      <div className="w-full overflow-x-auto md:overflow-x-hidden" ref={containerRef}>
        <section className="grid gap-4 grid-flow-col p-2 auto-rows-max justify-start">{children}</section>
      </div>
    </section>
  );
}
