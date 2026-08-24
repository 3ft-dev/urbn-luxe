import React, { useState } from 'react';
import { useHotel } from '../context/HotelContext';
import { 
  Bell, 
  Search, 
  Sparkles, 
  Key, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Bed, 
  Utensils, 
  ShieldCheck, 
  X,
  Plus,
  Building,
  Globe,
  Coins,
  UserCheck,
  Smartphone,
  ChevronDown
} from 'lucide-react';
import { AppLogo } from './Common/AppLogo';
import { UserRole, CurrencyCode } from '../types';

export const Header: React.FC = () => {
  const { 
    currentDate, 
    setCurrentDate, 
    occupancyRate, 
    todayArrivals, 
    todayDepartures, 
    alerts, 
    dismissAlert, 
    openNewReservationModal,
    activeView,
    setActiveView,
    userRole,
    setUserRole,
    currency,
    setCurrency,
    activeProperty,
    setActiveProperty,
    resetToDemoData,
    reservations,
    rooms,
    guests,
    openFolioModal,
    formatCurrency
  } = useHotel();

  const [showAlertsDropdown, setShowAlertsDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const roles: UserRole[] = [
    'General Manager',
    'Front Desk',
    'Housekeeping & Maintenance',
    'F&B & Spa POS',
    'Guest Experience & AI Concierge',
    'Revenue & Distribution',
    'Sales & Groups',
    'Guest Direct Portal'
  ];

  const properties = [
    'The Azure Sanctuary (Cliffside)',
    'The Azure Residence (Bali)',
    'The Azure Alpine Chalet (Zermatt)'
  ];

  const currencies: CurrencyCode[] = ['USD', 'EUR', 'GBP', 'JPY', 'AED', 'CHF'];

  // Global search filtering
  const searchResults = searchQuery.trim() ? {
    reservations: reservations.filter(r => 
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      r.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.roomNumber.includes(searchQuery)
    ).slice(0, 3),
    guests: guests.filter(g => 
      g.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.phone.includes(searchQuery)
    ).slice(0, 3),
    rooms: rooms.filter(r => 
      r.number.includes(searchQuery) ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.type.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3)
  } : null;

  const criticalAlertsCount = alerts.filter(a => a.severity === 'critical' || a.type === 'exception' || a.unread).length;

  return (
    <header className="sticky top-0 z-40 bg-[#141A17] text-[#FBF9F5] border-b border-[#26332C] px-3 sm:px-6 lg:px-8 py-3 shadow-lg">
      <div className="max-w-[1680px] mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Brand Identity & Property Switcher */}
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <AppLogo size={38} variant="gold" animate />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
                className="font-serif-heading text-lg lg:text-xl tracking-wide font-semibold text-[#F7F4EE] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
              >
                <span>{activeProperty}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8EA299]" />
              </button>

              {showPropertyDropdown && (
                <div 
                  className="absolute top-14 left-4 w-72 bg-[#1A2420] border border-[#35483F] rounded-xl shadow-2xl p-2 z-50 text-xs"
                  onMouseLeave={() => setShowPropertyDropdown(false)}
                >
                  <span className="text-[10px] text-[#8EA299] uppercase tracking-wider px-2 py-1 block">Switch Property Portfolio</span>
                  {properties.map(p => (
                    <button
                      key={p}
                      onClick={() => {
                        setActiveProperty(p);
                        setShowPropertyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                        activeProperty === p ? 'bg-[#2B3B33] text-[#D4AF37] font-semibold' : 'text-[#D1DDD7] hover:bg-[#223029]'
                      }`}
                    >
                      <Building className="w-3.5 h-3.5 text-[#A38020]" />
                      <span>{p}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#8EA299] tracking-wider uppercase flex items-center gap-2">
              <span>12 Luxury Suites</span>
              <span>•</span>
              <span className="text-[#D4AF37]">Eco-Certified Ultra-Luxury</span>
              <span>•</span>
              <span className="text-emerald-400">Live PMS Synchronized</span>
            </p>
          </div>
        </div>

        {/* Center: Search Bar & Global Date Simulation */}
        <div className="hidden xl:flex items-center gap-3">
          {/* Quick Search */}
          <div className="relative">
            <div className="flex items-center bg-[#19221E] border border-[#2D3E35] rounded-full px-3.5 py-1.5 focus-within:border-[#D4AF37] transition-colors w-64">
              <Search className="w-3.5 h-3.5 text-[#8EA299] mr-2 shrink-0" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search guest, room, res #..."
                className="bg-transparent text-xs text-[#FBF9F5] placeholder-[#6E8078] outline-none w-full"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-[#8EA299] hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Search Popover */}
            {isSearchOpen && searchResults && (
              <div 
                className="absolute top-full left-0 mt-2 w-84 bg-[#1A2420] border border-[#3A4A43] rounded-2xl shadow-2xl p-3 z-50 text-xs text-[#E1E8E4]"
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                <div className="flex justify-between items-center pb-2 border-b border-[#2A3831] mb-2">
                  <span className="font-semibold text-[#D4AF37] uppercase text-[10px] tracking-wider">Quick Search Results</span>
                  <button onClick={() => setIsSearchOpen(false)} className="text-[#889B93] hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {searchResults.reservations.length > 0 && (
                  <div className="mb-2.5">
                    <span className="text-[10px] text-[#7A8C84] uppercase tracking-wider block mb-1">Reservations</span>
                    {searchResults.reservations.map(res => (
                      <div 
                        key={res.id}
                        onClick={() => {
                          openFolioModal(res);
                          setIsSearchOpen(false);
                        }}
                        className="p-1.5 rounded-lg hover:bg-[#25332C] cursor-pointer flex justify-between items-center"
                      >
                        <div>
                          <span className="font-medium text-white">{res.guestName}</span>
                          <span className="text-[#A1B2AB] block text-[11px]">{res.id} • Suite {res.roomNumber} ({res.status.replace('_', ' ')})</span>
                        </div>
                        <span className="text-[#D4AF37] font-semibold">{formatCurrency(res.totalAmount)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {searchResults.guests.length > 0 && (
                  <div className="mb-2.5">
                    <span className="text-[10px] text-[#7A8C84] uppercase tracking-wider block mb-1">Guest Profiles</span>
                    {searchResults.guests.map(g => (
                      <div 
                        key={g.id}
                        onClick={() => {
                          setActiveView('guest_crm');
                          setIsSearchOpen(false);
                        }}
                        className="p-1.5 rounded-lg hover:bg-[#25332C] cursor-pointer flex items-center gap-2"
                      >
                        <img src={g.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                        <div>
                          <span className="font-medium text-white">{g.fullName}</span>
                          <span className="text-[#A1B2AB] block text-[10px]">{g.vipTier} • {g.country}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Operational Date Simulator */}
          <div className="flex items-center gap-2 bg-[#19221E] border border-[#2D3E35] rounded-full px-3 py-1 text-xs">
            <span className="text-[#8EA299] text-[11px]">System Date:</span>
            <input 
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="bg-transparent text-[#F7F4EE] text-xs outline-none cursor-pointer font-medium"
            />
          </div>
        </div>

        {/* Right: Currency, Role Persona Switcher, Alerts & Fast Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Currency Switcher */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-[#19221E] text-[#D1DDD7] border border-[#2D3E35] rounded-xl px-2.5 py-1.5 text-xs font-semibold hover:border-[#D4AF37] transition-colors outline-none cursor-pointer"
            >
              {currencies.map(c => (
                <option key={c} value={c} className="bg-[#1A2420] text-white">{c}</option>
              ))}
            </select>
          </div>

          {/* Persona Role Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="flex items-center gap-1.5 bg-[#202C26] hover:bg-[#2B3B33] text-[#E0CDA9] border border-[#3A4E43] rounded-xl px-3 py-1.5 text-xs font-medium transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden md:inline">{userRole}</span>
              <span className="md:hidden">Role</span>
              <ChevronDown className="w-3 h-3 text-[#8EA299]" />
            </button>

            {showRoleDropdown && (
              <div 
                className="absolute right-0 top-full mt-2 w-64 bg-[#1A2420] border border-[#3A4A43] rounded-xl shadow-2xl p-2 z-50 text-xs"
                onMouseLeave={() => setShowRoleDropdown(false)}
              >
                <div className="px-2 py-1 border-b border-[#293930] mb-1">
                  <span className="text-[10px] text-[#8EA299] uppercase tracking-wider font-semibold">Active Role Switcher</span>
                  <p className="text-[10px] text-[#A6B4AE]">Select stakeholder workspace perspective</p>
                </div>
                {roles.map(r => (
                  <button
                    key={r}
                    onClick={() => {
                      setUserRole(r);
                      setShowRoleDropdown(false);
                      if (r === 'Guest Direct Portal') setActiveView('guest_portal');
                      else if (r === 'Front Desk') setActiveView('frontdesk');
                      else if (r === 'Housekeeping & Maintenance') setActiveView('housekeeping');
                      else if (r === 'F&B & Spa POS') setActiveView('pos');
                      else if (r === 'Guest Experience & AI Concierge') setActiveView('concierge_ai');
                      else if (r === 'Revenue & Distribution') setActiveView('analytics');
                      else if (r === 'Sales & Groups') setActiveView('sales_events');
                      else setActiveView('dashboard');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                      userRole === r ? 'bg-[#2B3B33] text-[#D4AF37] font-semibold' : 'text-[#D1DDD7] hover:bg-[#223029]'
                    }`}
                  >
                    <span>{r}</span>
                    {userRole === r && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Activity Alerts & Exception Bell */}
          <div className="relative">
            <button
              onClick={() => setShowAlertsDropdown(!showAlertsDropdown)}
              className="relative p-2 rounded-xl bg-[#19221E] hover:bg-[#24312B] border border-[#2D3E35] text-[#D1DDD7] transition-colors"
              title="Operational Alerts & Exceptions"
            >
              <Bell className="w-4 h-4" />
              {criticalAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-[#141A17] font-bold text-[9px] rounded-full flex items-center justify-center animate-pulse">
                  {criticalAlertsCount}
                </span>
              )}
            </button>

            {showAlertsDropdown && (
              <div 
                className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-[#1A2420] border border-[#3A4A43] rounded-2xl shadow-2xl p-3 z-50 text-xs text-[#E1E8E4]"
                onMouseLeave={() => setShowAlertsDropdown(false)}
              >
                <div className="flex justify-between items-center pb-2 border-b border-[#2A3831] mb-2">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold text-[#D4AF37] uppercase text-[11px] tracking-wider">Operational Events & Alerts</span>
                  </div>
                  <button onClick={() => setShowAlertsDropdown(false)} className="text-[#889B93] hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
                  {alerts.length === 0 ? (
                    <p className="text-center text-[#7A8C84] py-4">No unread alerts. All systems running smooth.</p>
                  ) : (
                    alerts.map(a => (
                      <div 
                        key={a.id}
                        className={`p-2.5 rounded-xl border flex gap-2.5 items-start justify-between ${
                          a.severity === 'critical'
                            ? 'bg-rose-950/40 border-rose-800/60 text-rose-100'
                            : a.severity === 'warning'
                            ? 'bg-amber-950/40 border-amber-800/60 text-amber-100'
                            : 'bg-[#223029] border-[#314239] text-[#E1E8E4]'
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-semibold text-xs text-white">{a.title}</span>
                            <span className="text-[10px] text-[#8EA299]">{a.timestamp}</span>
                          </div>
                          <p className="text-[11px] text-[#B8C9C1] leading-relaxed">{a.description}</p>
                          {a.actionLabel && (
                            <button 
                              onClick={() => {
                                if (a.actionPayload === 'REQ-101') setActiveView('concierge_ai');
                                else if (a.actionPayload === 'CHN-02') setActiveView('channels');
                                setShowAlertsDropdown(false);
                              }}
                              className="mt-2 text-[10px] font-semibold px-2.5 py-1 rounded bg-[#D4AF37] text-[#141A17] hover:bg-[#E5C358] transition-colors"
                            >
                              {a.actionLabel} →
                            </button>
                          )}
                        </div>
                        <button 
                          onClick={() => dismissAlert(a.id)}
                          className="text-[#8EA299] hover:text-white p-0.5"
                          title="Dismiss"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Fast Action: New Reservation */}
          <button
            onClick={() => openNewReservationModal()}
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B89327] hover:from-[#E5C358] hover:to-[#C9A332] text-[#141A17] font-semibold px-3.5 py-1.5 rounded-xl text-xs shadow-md hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">New Reservation</span>
          </button>

          {/* Reset Demo Data Button */}
          <button
            onClick={resetToDemoData}
            title="Reset system to pristine luxury demo state"
            className="p-2 rounded-xl bg-[#19221E] hover:bg-[#24312B] border border-[#2D3E35] text-[#8EA299] hover:text-[#D4AF37] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </header>
  );
};
