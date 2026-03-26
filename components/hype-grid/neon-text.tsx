import React from 'react';

interface NeonTextProps {
  children: React.ReactNode;
  color?: 'magenta' | 'lime' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'bold' | 'black';
  className?: string;
}

export function NeonText({ 
  children, 
  color = 'magenta',
  size = 'md',
  weight = 'bold',
  className = ''
}: NeonTextProps) {
  const colorClass = {
    magenta: 'neon-magenta',
    lime: 'neon-lime',
    blue: 'neon-blue',
  }[color];

  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-2xl',
    xl: 'text-4xl',
  }[size];

  const weightClass = {
    normal: 'font-normal',
    bold: 'font-bold',
    black: 'font-black',
  }[weight];

  return (
    <span className={`${colorClass} ${sizeClass} ${weightClass} ${className}`}>
      {children}
    </span>
  );
}
