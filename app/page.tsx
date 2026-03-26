import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080A10] flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#FF00A2] rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0077FF] rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#00FF88] rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-[#FF00A2] to-[#0077FF] rounded-2xl">
            <Zap className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
          <span className="neon-magenta">Hype</span>
          <span className="text-white"> </span>
          <span className="neon-blue">Grid</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
          The Gen-Z Web3 Event Organizer Dashboard
        </p>

        {/* Description */}
        <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
          Manage events, track attendees, and visualize real-time analytics with a neon-powered interface designed for the next generation.
        </p>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF00A2] to-[#0077FF] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#FF00A2]/50 transition-all duration-300 transform hover:scale-105"
        >
          Enter Dashboard
        </Link>

        {/* Secondary Navigation */}
        <div className="mt-12 flex justify-center gap-8 text-sm">
          <Link href="/dashboard" className="text-gray-400 hover:neon-lime transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/events" className="text-gray-400 hover:neon-lime transition-colors">
            Events
          </Link>
          <Link href="/dashboard/analytics" className="text-gray-400 hover:neon-lime transition-colors">
            Analytics
          </Link>
        </div>
      </div>

      {/* Floating cards */}
      <div className="fixed bottom-8 right-8 hidden lg:block">
        <div className="glass-dark p-4 rounded-xl border border-[#FF00A2]/30 w-48 glow-magenta">
          <p className="text-xs text-gray-400 mb-2">Active Events</p>
          <p className="neon-magenta text-2xl font-bold">24</p>
        </div>
      </div>

      <div className="fixed top-8 right-8 hidden lg:block">
        <div className="glass-dark p-4 rounded-xl border border-[#00FF88]/30 w-48 glow-lime">
          <p className="text-xs text-gray-400 mb-2">Total Attendees</p>
          <p className="neon-lime text-2xl font-bold">8,248</p>
        </div>
      </div>
    </div>
  );
}
