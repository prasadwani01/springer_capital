import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartData } from '@/lib/data';

export default function AnalyticsView() {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Advanced Analytics</h1>
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-lg font-bold mb-6">Revenue vs Expenses</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <h3 className="font-bold text-slate-700 mb-2">Conversion Rate</h3>
           <p className="text-4xl font-extrabold text-indigo-600">3.8%</p>
           <p className="text-sm text-slate-500 mt-1">Top 10% of industry</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <h3 className="font-bold text-slate-700 mb-2">Average Order Value</h3>
           <p className="text-4xl font-extrabold text-emerald-600">₹4,250</p>
           <p className="text-sm text-slate-500 mt-1">+12% from last month</p>
        </div>
      </div>
    </div>
  );
}