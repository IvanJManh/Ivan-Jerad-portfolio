'use client';

import React from 'react';
import { DashboardLayout } from '@/components/hype-grid/dashboard-layout';
import { GlassCard } from '@/components/hype-grid/glass-card';
import { StatCard } from '@/components/hype-grid/stat-card';
import { NeonText } from '@/components/hype-grid/neon-text';
import { mockAnalytics } from '@/lib/mock-data';
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const data = mockAnalytics;

export default function AnalyticsPage() {
  return (
    <DashboardLayout 
      title="Attendee Insights" 
      subtitle="Deep dive into attendee analytics and demographics"
    >
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          label="Total Attendees"
          value={data.totalAttendees}
          change="14.2%"
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
          icon="⚡"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hourly Flow */}
        <GlassCard className="p-6" glow="magenta">
          <h3 className="neon-magenta text-lg font-bold mb-6">Hourly Check-In Flow</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data.hourlyFlow}>
              <defs>
                <linearGradient id="colorHourly" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF00A2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF00A2" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis stroke="#8B8E9F" fontSize={12} />
              <YAxis stroke="#8B8E9F" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                  border: '1px solid rgba(255, 0, 162, 0.3)',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#FF00A2" 
                fillOpacity={1} 
                fill="url(#colorHourly)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Category Distribution */}
        <GlassCard className="p-6" glow="lime">
          <h3 className="neon-lime text-lg font-bold mb-6">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data.categoryBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.categoryBreakdown.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={['#FF00A2', '#00FF88', '#0077FF', '#FF6B35', '#8B00FF', '#FF4444'][index % 6]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Demographics Radar */}
        <GlassCard className="p-6" glow="blue">
          <h3 className="neon-blue text-lg font-bold mb-6">Age Demographics</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={data.demographics}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="name" stroke="#8B8E9F" fontSize={12} />
              <PolarRadiusAxis stroke="#8B8E9F" />
              <Radar 
                name="Percentage" 
                dataKey="value" 
                stroke="#0077FF" 
                fill="#0077FF" 
                fillOpacity={0.6}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                  border: '1px solid rgba(0, 119, 255, 0.3)',
                  borderRadius: '8px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Conversion Funnel */}
        <GlassCard className="p-6" glow="none">
          <h3 className="text-white text-lg font-bold mb-6">Conversion Funnel</h3>
          <div className="space-y-4">
            {[
              { label: 'Impressions', value: 5000, color: '#0077FF' },
              { label: 'Website Visits', value: 3200, color: '#00FF88' },
              { label: 'Registered', value: 2156, color: '#FF00A2' },
              { label: 'Checked In', value: 1558, color: '#FF6B35' },
              { label: 'Completed', value: 1242, color: '#8B00FF' },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-400">{step.label}</span>
                  <span className="font-bold" style={{ color: step.color }}>{step.value}</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(step.value / 5000) * 100}%`,
                      backgroundColor: step.color,
                      boxShadow: `0 0 10px ${step.color}80`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Dual Axis Chart */}
      <GlassCard className="p-6" glow="none">
        <h3 className="text-white text-lg font-bold mb-6">Registration vs Check-In Trend</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data.weeklyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis stroke="#8B8E9F" />
            <YAxis yAxisId="left" stroke="#FF00A2" />
            <YAxis yAxisId="right" orientation="right" stroke="#00FF88" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(8, 10, 16, 0.95)', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px'
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span style={{ color: '#E5E7EB' }}>{value}</span>}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="value" 
              stroke="#FF00A2" 
              strokeWidth={2}
              dot={{ fill: '#FF00A2', r: 5 }}
              name="Registrations"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="value2" 
              stroke="#00FF88" 
              strokeWidth={2}
              dot={{ fill: '#00FF88', r: 5 }}
              name="Check-Ins"
            />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>
    </DashboardLayout>
  );
}
