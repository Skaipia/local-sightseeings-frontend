'use client';

import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';

export interface ClickAwayListenerProps extends HTMLAttributes<HTMLDivElement> {
  onClickAway: () => void;
  children: ReactNode;
}

export function ClickAwayListener({ onClickAway, children, ...props }: ClickAwayListenerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const clickAwayRef = useRef(onClickAway);

  useEffect(() => {
    clickAwayRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      if (!ref.current?.contains(target)) {
        clickAwayRef.current();
      }
    }
    const handleScroll = () => {
      clickAwayRef.current();
    };

    document.addEventListener('pointerdown', handleClick);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('pointerdown', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
