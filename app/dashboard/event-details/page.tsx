'use client';

import React from 'react';
import { DashboardLayout } from '@/components/hype-grid/dashboard-layout';
import { GlassCard } from '@/components/hype-grid/glass-card';
import { StatCard } from '@/components/hype-grid/stat-card';
import { ProgressBar } from '@/components/hype-grid/progress-bar';
import { NeonText } from '@/components/hype-grid/neon-text';
import { mockEvents, mockAttendees } from '@/lib/mock-data';
import { Calendar, MapPin, Clock, Users, TrendingUp, Share2 } from 'lucide-react';

// Using the first event as the featured event
const featuredEvent = mockEvents[2];

export default function EventDetailsPage() {
  const capacityPercentage = (featuredEvent.attendees / featuredEvent.capacity) * 100;

  return (
    <DashboardLayout 
      title={featuredEvent.name} 
      subtitle="Complete event metrics and attendee management"
    >
      {/* Hero Section */}
      <GlassCard className="mb-8 overflow-hidden p-0" glow="blue">
        <div className="h-64 bg-gradient-to-br from-[#0077FF]/30 via-[#FF00A2]/20 to-[#00FF88]/20 flex items-center justify-center border-b border-white/10">
          <div className="text-9xl">💻</div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{featuredEvent.name}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar className="w-5 h-5 text-[#FF00A2]" />
                  <span>{new Date(featuredEvent.date).toLocaleDateString()} at {featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#00FF88]" />
                  <span>{featuredEvent.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Users className="w-5 h-5 text-[#0077FF]" />
                  <span>{featuredEvent.attendees} / {featuredEvent.capacity} Attendees</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{featuredEvent.description}</p>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-[#FF00A2] hover:bg-[#FF00A2]/80 text-white font-bold rounded-lg transition-all">
                  Manage Event
                </button>
                <button className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-3">Capacity Utilization</p>
                <ProgressBar value={capacityPercentage} max={100} color="magenta" />
                <p className="text-sm text-gray-400 mt-2">{capacityPercentage.toFixed(1)}% Full</p>
              </div>

              <GlassCard className="p-4 glow-magenta">
                <p className="text-xs text-gray-400 mb-2">Category</p>
                <p className="neon-blue font-bold text-lg">{featuredEvent.category}</p>
              </GlassCard>

              <GlassCard className="p-4 glow-lime">
                <p className="text-xs text-gray-400 mb-2">Status</p>
                <p className={`font-bold text-lg ${
                  featuredEvent.status === 'upcoming' ? 'neon-blue' :
                  featuredEvent.status === 'ongoing' ? 'neon-lime' :
                  'text-gray-400'
                }`}>
                  {featuredEvent.status.charAt(0).toUpperCase() + featuredEvent.status.slice(1)}
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          label="Total Registered"
          value={featuredEvent.attendees}
          change="8.2%"
          positive={true}
          icon="📝"
        />
        <StatCard 
          label="Checked In"
          value={Math.floor(featuredEvent.attendees * 0.72)}
          change="5.1%"
          positive={true}
          icon="✓"
        />
        <StatCard 
          label="Available Spots"
          value={featuredEvent.capacity - featuredEvent.attendees}
          change="12.3%"
          positive={false}
          icon="🪑"
        />
        <StatCard 
          label="Conversion Rate"
          value="72.3%"
          change="3.8%"
          positive={true}
          icon="📈"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendee List */}
        <GlassCard className="lg:col-span-2 p-6" glow="lime">
          <h3 className="neon-lime text-lg font-bold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Recent Check-Ins
          </h3>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {mockAttendees.map((attendee, idx) => (
              <div key={attendee.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF00A2] to-[#0077FF] flex items-center justify-center font-bold">
                    {attendee.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{attendee.name}</p>
                    <p className="text-xs text-gray-400">{attendee.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-bold px-2 py-1 rounded ${
                    attendee.status === 'checked-in' ? 'bg-[#00FF88]/20 text-[#00FF88]' :
                    attendee.status === 'registered' ? 'bg-[#0077FF]/20 text-[#0077FF]' :
                    'bg-gray-700/20 text-gray-400'
                  }`}>
                    {attendee.status === 'checked-in' ? '✓ Checked In' : 
                     attendee.status === 'registered' ? 'Registered' :
                     'Completed'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{attendee.joinedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Event Summary */}
        <GlassCard className="p-6" glow="blue">
          <h3 className="neon-blue text-lg font-bold mb-6">Event Summary</h3>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-2">Registration Timeline</p>
              <div className="flex items-end gap-1">
                {[65, 45, 78, 92, 88, 95].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#FF00A2] to-[#0077FF] rounded-t opacity-70 hover:opacity-100 transition-opacity"
                    style={{ height: `${(val / 100) * 80}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h4 className="font-bold text-white mb-3 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white">
                  Export Attendees
                </button>
                <button className="w-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white">
                  Send Reminder
                </button>
                <button className="w-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  );
}
