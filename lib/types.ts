export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  category: 'Music' | 'Art' | 'Tech' | 'Gaming' | 'Sports' | 'Lifestyle';
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  image: string;
  description: string;
  capacity: number;
}

export interface Attendee {
  id: string;
  name: string;
  email: string;
  joinedAt: string;
  status: 'registered' | 'checked-in' | 'completed';
}

export interface ChartData {
  name: string;
  value: number;
  value2?: number;
  date?: string;
}

export interface Analytics {
  totalAttendees: number;
  registrationRate: number;
  checkInRate: number;
  avgEngagement: number;
  weeklyTrend: ChartData[];
  categoryBreakdown: ChartData[];
  hourlyFlow: ChartData[];
  demographics: ChartData[];
}
