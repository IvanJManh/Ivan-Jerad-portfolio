'use client';

import { useEffect, useRef } from 'react';

interface SpotlightRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightReveal({ children, className = '' }: SpotlightRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      section.style.setProperty('--cursor-x', `${x}px`);
      section.style.setProperty('--cursor-y', `${y}px`);
    };

    const handleMouseLeave = () => {
      section.style.setProperty('--cursor-x', '50%');
      section.style.setProperty('--cursor-y', '50%');
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`reveal-section ${className}`}>
      <div className="base-bg"></div>
      <div className="interactive-texture-layer"></div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
