import React, { useState } from 'react';
import { Download, DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { chartData, categoryData } from '@/lib/data';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

export default function DashboardView() {
  const [metricMode, setMetricMode] = useState('revenue');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time updates and performance metrics.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-lg hover:bg-indigo-700 transition-all">
          <Download size={16} /> Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '₹84,245', change: 14.2, icon: DollarSign, color: 'indigo' },
          { label: 'Total Orders', value: '1,240', change: -2.4, icon: ShoppingBag, color: 'rose' },
          { label: 'New Customers', value: '342', change: 8.1, icon: Users, color: 'emerald' },
          { label: 'Growth Rate', value: '24.5%', change: 4.3, icon: TrendingUp, color: 'amber' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.change >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {Math.abs(stat.change)}%
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-lg">Revenue Trends</h2>
             <div className="flex bg-slate-100 p-1 rounded-lg">
                {['revenue', 'profit'].map((m) => (
                  <button 
                    key={m}
                    onClick={() => setMetricMode(m)}
                    className={`px-3 py-1 text-xs font-bold capitalize rounded-md transition-all ${metricMode === m ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={metricMode === 'revenue' ? '#6366f1' : '#10b981'} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={metricMode === 'revenue' ? '#6366f1' : '#10b981'} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Area type="monotone" dataKey={metricMode} stroke={metricMode === 'revenue' ? '#6366f1' : '#10b981'} strokeWidth={3} fill="url(#colorMetric)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Sales Distribution</h2>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {categoryData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />{item.name}</div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}