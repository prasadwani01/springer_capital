import React from 'react';
import { User, BellRing } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="max-w-3xl space-y-8 animate-in slide-in-from-right-4 duration-500">
       <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
       <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><User size={20} /> Profile Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Full Name</label>
                <input type="text" defaultValue="Prasad Wani" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Email Address</label>
                <input type="email" defaultValue="prasad@example.com" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BellRing size={20} /> Notifications</h3>
             <div className="space-y-4">
               {['Email Notifications', 'Push Notifications', 'Weekly Reports'].map((item) => (
                 <div key={item} className="flex items-center justify-between">
                   <span className="text-slate-600 font-medium">{item}</span>
                   <div className="w-11 h-6 bg-indigo-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                 </div>
               ))}
             </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
             <button className="px-6 py-2 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-slate-50">Cancel</button>
             <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700">Save Changes</button>
          </div>
       </div>
    </div>
  );
}