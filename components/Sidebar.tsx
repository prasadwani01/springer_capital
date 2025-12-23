import React from 'react';
import { LayoutDashboard, BarChart3, Wallet, Users, Settings, LogOut, X } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ activeView, setActiveView, isOpen, toggleSidebar }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'transactions', icon: Wallet, label: 'Transactions' },
    { id: 'customers', icon: Users, label: 'Customers' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
      <div className="flex items-center justify-between h-20 px-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-xl">S</div>
          <span className="text-xl font-bold tracking-wide">Springer</span>
        </div>
        <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-white"><X size={24} /></button>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => { setActiveView(item.id); toggleSidebar(); }}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${activeView === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-6">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}