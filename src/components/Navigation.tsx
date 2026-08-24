import React from 'react';
import { useHotel } from '../context/HotelContext';
import { 
  LayoutDashboard, 
  CalendarRange, 
  ConciergeBell, 
  Compass, 
  Smartphone,
  Bot,
  UtensilsCrossed, 
  Sparkles, 
  Users, 
  LineChart, 
  Share2,
  Briefcase,
  Layers
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    todayArrivals, 
    todayDepartures, 
    housekeeping, 
    maintenance,
    rooms,
    channels,
    serviceRequests
  } = useHotel();

  const dirtyRoomsCount = rooms.filter(r => r.status === 'dirty' || r.status === 'inspecting').length;
  const parityViolations = channels.filter(c => c.parityStatus === 'violation').length;
  const pendingRequests = serviceRequests.filter(s => s.status !== 'completed').length;

  const navItems = [
    {
      id: 'dashboard',
      label: 'Operations Command',
      icon: LayoutDashboard,
      badge: null,
      description: 'Exception board & live pulse'
    },
    {
      id: 'matrix',
      label: 'Tape Chart & Matrix',
      icon: CalendarRange,
      badge: `${rooms.length} Suites`,
      badgeColor: 'bg-[#2E3C36] text-[#D4AF37]',
      description: '14-Day inventory timeline'
    },
    {
      id: 'frontdesk',
      label: 'Front Desk & Run Sheet',
      icon: ConciergeBell,
      badge: `${todayArrivals.length} Arr / ${todayDepartures.length} Dep`,
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border border-emerald-800',
      description: 'Check-in, check-out & keys'
    },
    {
      id: 'booking_portal',
      label: 'Direct Booking Suite',
      icon: Compass,
      badge: 'Live Engine',
      badgeColor: 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30',
      description: 'High-conversion commerce'
    },
    {
      id: 'guest_portal',
      label: 'In-Stay Guest Companion',
      icon: Smartphone,
      badge: 'Digital Room Pass',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border border-cyan-800',
      description: 'Smart room controls & mobile key'
    },
    {
      id: 'concierge_ai',
      label: 'AI Concierge & Messaging',
      icon: Bot,
      badge: pendingRequests > 0 ? `${pendingRequests} Requests` : 'AI Live',
      badgeColor: pendingRequests > 0 ? 'bg-amber-950/80 text-amber-300 border border-amber-800' : 'bg-purple-950/80 text-purple-300',
      description: 'Aura AI & Unified inbox'
    },
    {
      id: 'pos',
      label: 'Restaurant & Spa POS',
      icon: UtensilsCrossed,
      badge: '9 Tables',
      badgeColor: 'bg-amber-950/80 text-amber-300 border border-amber-800',
      description: 'Table seating & room charging'
    },
    {
      id: 'housekeeping',
      label: 'Housekeeping & Repairs',
      icon: Sparkles,
      badge: dirtyRoomsCount > 0 ? `${dirtyRoomsCount} Turn` : 'All Clean',
      badgeColor: dirtyRoomsCount > 0 ? 'bg-amber-950/80 text-amber-300 border border-amber-800' : 'bg-emerald-950/80 text-emerald-300',
      description: 'Room turnover & maintenance'
    },
    {
      id: 'guest_crm',
      label: 'Guest CRM & VIPs',
      icon: Users,
      badge: 'Loyalty Tiers',
      badgeColor: 'bg-purple-950/80 text-purple-300 border border-purple-800',
      description: 'Preferences & spend histories'
    },
    {
      id: 'channels',
      label: 'Channel Distribution',
      icon: Share2,
      badge: parityViolations > 0 ? `${parityViolations} Parity Alert` : 'Synced',
      badgeColor: parityViolations > 0 ? 'bg-rose-950/80 text-rose-300 border border-rose-800 animate-pulse' : 'bg-emerald-950/80 text-emerald-300',
      description: 'OTA sync & parity monitor'
    },
    {
      id: 'sales_events',
      label: 'Sales, Groups & BEO',
      icon: Briefcase,
      badge: '2 Events',
      badgeColor: 'bg-blue-950/80 text-blue-300 border border-blue-800',
      description: 'Room blocks & banquet sheets'
    },
    {
      id: 'analytics',
      label: 'RevPAR & Financials',
      icon: LineChart,
      badge: null,
      description: 'ADR, TRevPAR & pace curve'
    }
  ];

  return (
    <nav className="bg-[#18211D] text-[#D1DDD7] border-b border-[#2C3B34] px-4 lg:px-8 py-2">
      <div className="max-w-[1680px] mx-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-150 shrink-0 ${
                isActive
                  ? 'bg-[#FBF9F5] text-[#1E2522] shadow-sm font-semibold'
                  : 'hover:bg-[#25322B] text-[#A2B5AD] hover:text-[#FBF9F5]'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#1E2522]' : 'text-[#8EA299]'}`} />
              <span>{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${isActive ? 'bg-[#1E2522] text-[#E0CDA9]' : item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
