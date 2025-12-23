import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface TopNavProps {
  toggleSidebar: () => void;
}

export default function TopNav({ toggleSidebar }: TopNavProps) {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 shrink-0">
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-600"><Menu size={24} /></button>
      <div className="hidden md:flex items-center bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 w-96 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
        <Search size={18} className="text-slate-400" />
        <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm ml-3 w-full placeholder:text-slate-400" />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-700">Prasad Wani</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prasad" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
}