import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
}

export function StatCard({ 
  label, 
  value, 
  unit = '', 
  change, 
  positive = true,
  icon 
}: StatCardProps) {
  return (
    <div className="glass-dark p-6 glow-magenta">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        {icon && <div className="text-xl">{icon}</div>}
      </div>
      <div className="mb-3">
        <p className="text-3xl font-bold neon-magenta">
          {value}
          {unit && <span className="text-lg ml-1">{unit}</span>}
        </p>
      </div>
      {change && (
        <p className={`text-xs font-medium ${positive ? 'text-[#00FF88]' : 'text-[#FF4444]'}`}>
          {positive ? '↑' : '↓'} {change}
        </p>
      )}
    </div>
  );
}
