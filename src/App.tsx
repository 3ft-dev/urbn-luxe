/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HotelProvider, useHotel } from './context/HotelContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { OperationsCommandCenter } from './components/CommandCenter/OperationsCommandCenter';
import { AvailabilityGrid } from './components/TimelineMatrix/AvailabilityGrid';
import { FrontDeskDashboard } from './components/FrontDesk/FrontDeskDashboard';
import { GuestBookingPortal } from './components/BookingEngine/GuestBookingPortal';
import { GuestCompanionPortal } from './components/GuestExperience/GuestCompanionPortal';
import { AIConciergeChat } from './components/AIConcierge/AIConciergeChat';
import { RestaurantAndSpaPOS } from './components/POS/RestaurantAndSpaPOS';
import { HousekeepingBoard } from './components/Housekeeping/HousekeepingBoard';
import { GuestDirectory } from './components/GuestCRM/GuestDirectory';
import { ChannelManager } from './components/Distribution/ChannelManager';
import { GroupEventsManager } from './components/SalesEvents/GroupEventsManager';
import { RevenueDashboard } from './components/Analytics/RevenueDashboard';
import { NewReservationModal } from './components/Modals/NewReservationModal';
import { GuestFolioModal } from './components/Modals/GuestFolioModal';
import { DigitalKeyModal } from './components/Modals/DigitalKeyModal';

const HotelAppContent: React.FC = () => {
  const { activeView } = useHotel();

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1E2522] flex flex-col font-sans-body selection:bg-[#D4AF37]/30 selection:text-[#1E2522]">
      
      {/* Global Luxury Header */}
      <Header />

      {/* Global View Navigation */}
      <Navigation />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-[1680px] w-full mx-auto px-3 sm:px-6 lg:px-8 py-6">
        {(activeView === 'dashboard') && <OperationsCommandCenter />}
        {(activeView === 'matrix' || activeView === 'timeline') && <AvailabilityGrid />}
        {(activeView === 'frontdesk' || activeView === 'front_desk') && <FrontDeskDashboard />}
        {(activeView === 'booking_portal' || activeView === 'booking') && <GuestBookingPortal />}
        {activeView === 'guest_portal' && <GuestCompanionPortal />}
        {activeView === 'concierge_ai' && <AIConciergeChat />}
        {activeView === 'pos' && <RestaurantAndSpaPOS />}
        {activeView === 'housekeeping' && <HousekeepingBoard />}
        {(activeView === 'guest_crm' || activeView === 'crm') && <GuestDirectory />}
        {activeView === 'channels' && <ChannelManager />}
        {activeView === 'sales_events' && <GroupEventsManager />}
        {activeView === 'analytics' && <RevenueDashboard />}
      </main>

      {/* Global Floating Modals */}
      <NewReservationModal />
      <GuestFolioModal />
      <DigitalKeyModal />

      {/* Footer Branding */}
      <footer className="py-6 border-t border-[#EAE3D6] bg-[#FAF8F4] text-center text-xs text-[#7A8C84]">
        <p className="max-w-7xl mx-auto px-4">
          The Azure Sanctuary • Boutique Luxury Hotel Operating System & Direct Booking Suite • Real-time Inventory, AI Concierge & Guest Folio Engine
        </p>
      </footer>

    </div>
  );
};

export default function App() {
  return (
    <HotelProvider>
      <HotelAppContent />
    </HotelProvider>
  );
}
