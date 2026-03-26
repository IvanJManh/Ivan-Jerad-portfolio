'use client';

import React from 'react';
import { DashboardLayout } from '@/components/hype-grid/dashboard-layout';
import { StatCard } from '@/components/hype-grid/stat-card';
import { GlassCard } from '@/components/hype-grid/glass-card';
import { ProgressBar } from '@/components/hype-grid/progress-bar';
import { NeonText } from '@/components/hype-grid/neon-text';
import { mockAnalytics } from '@/lib/mock-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

export default function OverviewPage() {
  const data = mockAnalytics;

  return (
    <DashboardLayout 
      title="Dashboard Overview" 
      subtitle="Real-time insights from your events"
    >
      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          label="Total Attendees"
          value={data.totalAttendees}
          change="12.5%"
          positive={true}
          icon="👥"
        />
        <StatCard 
          label="Registration Rate"
          value={`${data.registrationRate}%`}
          change="2.1%"
          positive={true}
          icon="📝"
        />
        <StatCard 
          label="Check-In Rate"
          value={`${data.checkInRate}%`}
          change="5.8%"
          positive={true}
          icon="✓"
        />
        <StatCard 
          label="Avg Engagement"
          value={`${data.avgEngagement}%`}
          change="3.2%"
          positive={true}
          icon="📊"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Trend Chart */}
        <GlassCard className="lg:col-span-2 p-6" glow="blue">
          <h3 className="neon-blue text-lg font-bold mb-6">Weekly Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis stroke="#8B8E9F" />
              <YAxis stroke="#8B8E9F" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                  border: '1px solid rgba(255, 0, 162, 0.3)',
                  borderRadius: '8px'
                }}
                cursor={{ stroke: 'rgba(255, 0, 162, 0.5)' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF00A2" 
                strokeWidth={2}
                dot={{ fill: '#FF00A2', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="value2" 
                stroke="#00FF88" 
                strokeWidth={2}
                dot={{ fill: '#00FF88', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Progress Indicators */}
        <GlassCard className="p-6" glow="magenta">
          <h3 className="neon-magenta text-lg font-bold mb-6">Progress</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-400">Registration</span>
                <span className="text-sm neon-lime">{data.registrationRate}%</span>
              </div>
              <ProgressBar value={data.registrationRate} color="magenta" />
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-400">Check-In</span>
                <span className="text-sm neon-lime">{data.checkInRate}%</span>
              </div>
              <ProgressBar value={data.checkInRate} color="lime" />
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-400">Engagement</span>
                <span className="text-sm neon-blue">{data.avgEngagement}%</span>
              </div>
              <ProgressBar value={data.avgEngagement} color="blue" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Category Breakdown */}
      <GlassCard className="mt-6 p-6" glow="lime">
        <h3 className="neon-lime text-lg font-bold mb-6">Event Categories</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.categoryBreakdown}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis stroke="#8B8E9F" />
            <YAxis stroke="#8B8E9F" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                border: '1px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.categoryBreakdown.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={['#FF00A2', '#00FF88', '#0077FF', '#FF6B35', '#8B00FF', '#FF4444'][index % 6]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>
    </DashboardLayout>
  );
}
