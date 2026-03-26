import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'magenta' | 'lime' | 'blue' | 'none';
}

export function GlassCard({ children, className = '', glow = 'none' }: GlassCardProps) {
  const glowClass = {
    magenta: 'glow-magenta',
    lime: 'glow-lime',
    blue: 'glow-blue',
    none: '',
  }[glow];

  return (
    <div className={`glass-dark ${glowClass} ${className}`}>
      {children}
    </div>
  );
}
