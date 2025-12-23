import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { customersList } from '@/lib/data';

export default function CustomersView() {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <h1 className="text-2xl font-bold text-slate-900">Customer Base</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {customersList.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img src={user.img} alt={user.name} className="w-14 h-14 rounded-full border-2 border-slate-50" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">{user.name}</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">{user.role}</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Mail size={14} /> {user.email}</div>
              <div className="flex items-center gap-2"><Phone size={14} /> {user.phone}</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> {user.location}</div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
              <span className={`text-xs font-bold ${user.status === 'Active' ? 'text-emerald-500' : 'text-rose-500'}`}>● {user.status}</span>
              <button className="text-indigo-600 text-sm font-bold hover:underline">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}