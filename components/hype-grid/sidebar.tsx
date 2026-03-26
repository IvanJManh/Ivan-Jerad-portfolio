'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: '📊' },
  { label: 'Browse Events', href: '/dashboard/events', icon: '🎉' },
  { label: 'Event Details', href: '/dashboard/event-details', icon: '📝' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`glass-dark border-r border-white/10 p-6 flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-[#FF00A2] to-[#0077FF] rounded-lg group-hover:shadow-lg group-hover:shadow-[#FF00A2]/50 transition-all">
            <Zap className="w-5 h-5 text-white" />
          </div>
          {!collapsed && <span className="neon-magenta font-black text-lg">HYPE</span>}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all hover:glow-magenta duration-200"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="glass p-4 border border-[#FF00A2]/30 text-center">
        {!collapsed && (
          <>
            <p className="text-xs text-gray-400 mb-2">Version</p>
            <p className="neon-magenta font-bold">1.0.0</p>
          </>
        )}
      </div>
    </div>
  );
}
