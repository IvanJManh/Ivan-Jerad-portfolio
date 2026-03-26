import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: 'magenta' | 'lime' | 'blue';
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  color = 'magenta',
  showLabel = false,
  label = ''
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  const colorClass = {
    magenta: 'bg-[#FF00A2]',
    lime: 'bg-[#00FF88]',
    blue: 'bg-[#0077FF]',
  }[color];

  const glowClass = {
    magenta: 'shadow-[0_0_10px_rgba(255,0,162,0.8)]',
    lime: 'shadow-[0_0_10px_rgba(0,255,136,0.8)]',
    blue: 'shadow-[0_0_10px_rgba(0,119,255,0.8)]',
  }[color];

  return (
    <div>
      {showLabel && (
        <div className="flex justify-between mb-2 text-xs text-gray-400">
          <span>{label}</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-white/10">
        <div
          className={`h-full ${colorClass} ${glowClass} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
