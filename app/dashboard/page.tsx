"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import DashboardView from '@/components/views/DashboardView';
import AnalyticsView from '@/components/views/AnalyticsView';
import TransactionsView from '@/components/views/TransactionsView';
import CustomersView from '@/components/views/CustomersView';
import SettingsView from '@/components/views/SettingsView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'analytics' && <AnalyticsView />}
          {activeView === 'transactions' && <TransactionsView />}
          {activeView === 'customers' && <CustomersView />}
          {activeView === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}