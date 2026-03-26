'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/hype-grid/dashboard-layout';
import { GlassCard } from '@/components/hype-grid/glass-card';
import { NeonText } from '@/components/hype-grid/neon-text';
import { mockEvents } from '@/lib/mock-data';
import { Search, Filter } from 'lucide-react';

const categories = ['All', 'Music', 'Art', 'Tech', 'Gaming', 'Sports', 'Lifestyle'];
const statusOptions = ['All', 'Upcoming', 'Ongoing', 'Completed'];

export default function BrowseEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = mockEvents.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || event.status === selectedStatus.toLowerCase();
    const searchMatch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && statusMatch && searchMatch;
  });

  return (
    <DashboardLayout 
      title="Browse Events" 
      subtitle="Discover and manage all events"
    >
      {/* Search Bar */}
      <GlassCard className="mb-8 p-4" glow="none">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
          />
        </div>
      </GlassCard>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Category Filter */}
        <GlassCard className="p-4" glow="none">
          <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF00A2] text-white shadow-lg shadow-[#FF00A2]/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Status Filter */}
        <GlassCard className="p-4" glow="none">
          <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Status
          </h3>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedStatus === status
                    ? 'bg-[#00FF88] text-slate-900 shadow-lg shadow-[#00FF88]/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <GlassCard 
            key={event.id} 
            className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            glow="magenta"
          >
            {/* Event Header */}
            <div className="p-0 h-40 bg-gradient-to-br from-[#FF00A2]/20 to-[#0077FF]/20 flex items-center justify-center border-b border-white/10">
              <div className="text-6xl">{['🎵', '🎨', '💻', '🎮', '⚽', '👗'][mockEvents.indexOf(event) % 6]}</div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{event.name}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{event.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Category</span>
                  <span className="neon-blue">{event.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Status</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    event.status === 'upcoming' ? 'bg-[#0077FF]/30 text-[#0077FF]' :
                    event.status === 'ongoing' ? 'bg-[#00FF88]/30 text-[#00FF88]' :
                    'bg-gray-700/30 text-gray-400'
                  }`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Attendees</span>
                  <span className="neon-lime">{event.attendees} / {event.capacity}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white">{new Date(event.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Capacity Bar */}
              <div className="mb-4">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF00A2] to-[#0077FF] rounded-full"
                    style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                  />
                </div>
              </div>

              <button className="w-full py-2 px-4 rounded-lg font-medium transition-all bg-white/10 hover:bg-white/20 text-white">
                View Details
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <GlassCard className="p-12 text-center" glow="none">
          <p className="text-gray-400">No events found. Try adjusting your filters.</p>
        </GlassCard>
      )}
    </DashboardLayout>
  );
}
