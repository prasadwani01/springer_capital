"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, DollarSign, Users, ShoppingBag, 
  Download, Filter, ChevronRight
} from 'lucide-react';

// Enhanced Mock Data for a "Non-Basic" Look
const mainSalesData = [
  { name: 'Jan', sales: 4200, profit: 2400 },
  { name: 'Feb', sales: 3800, profit: 1398 },
  { name: 'Mar', sales: 5200, profit: 3800 },
  { name: 'Apr', sales: 4780, profit: 3908 },
  { name: 'May', sales: 5890, profit: 4800 },
  { name: 'Jun', sales: 6390, profit: 5100 },
];

const categoryData = [
  { name: 'Electronics', value: 45 },
  { name: 'Fashion', value: 25 },
  { name: 'Groceries', value: 20 },
  { name: 'Home', value: 10 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

const recentTransactions = [
  { id: '#TRX-9821', customer: 'Alice Varma', date: 'Oct 18, 2023', amount: '₹12,450', status: 'Completed' },
  { id: '#TRX-9822', customer: 'Rahul Sharma', date: 'Oct 18, 2023', amount: '₹8,200', status: 'Pending' },
  { id: '#TRX-9823', customer: 'Priya Singh', date: 'Oct 17, 2023', amount: '₹4,150', status: 'Completed' },
  { id: '#TRX-9824', customer: 'Sohan Gupta', date: 'Oct 17, 2023', amount: '₹22,000', status: 'Cancelled' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-10 font-sans">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Analytics Dashboard</h1>
            <p className="text-slate-500 mt-2 text-lg">Performance overview and sales insights for 2024.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all">
              <Filter size={18} /> Filters
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
              <Download size={18} /> Download CSV
            </button>
          </div>
        </header>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {[
            { label: 'Net Revenue', value: '₹84.2k', change: '+14%', icon: DollarSign, color: 'indigo' },
            { label: 'Active Users', value: '12,402', change: '+8%', icon: Users, color: 'emerald' },
            { label: 'New Orders', value: '1,240', change: '+22%', icon: ShoppingBag, color: 'rose' },
            { label: 'Avg. Margin', value: '32.4%', change: '+5%', icon: TrendingUp, color: 'amber' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl bg-${item.color}-50 text-${item.color}-600`}>
                  <item.icon size={28} />
                </div>
                <span className="text-emerald-500 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">{item.change}</span>
              </div>
              <p className="text-slate-500 font-medium">{item.label}</p>
              <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          {/* Main Area Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Revenue Growth</h2>
              <select className="bg-slate-50 border-none text-sm font-semibold rounded-lg px-3 py-1">
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mainSalesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} 
                  />
                  <Area type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={4} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart / Distribution */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
            <h2 className="text-xl font-bold w-full text-left mb-8">Sales by Category</h2>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} innerRadius={70} outerRadius={90} paddingAngle={8} dataKey="value">
                    {categoryData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full mt-6 space-y-4">
              {categoryData.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}} />
                    <span className="font-medium text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Transactions</h2>
            <button className="text-indigo-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ChevronRight size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-8 py-5 text-slate-500 font-semibold text-sm">Order ID</th>
                  <th className="px-8 py-5 text-slate-500 font-semibold text-sm">Customer</th>
                  <th className="px-8 py-5 text-slate-500 font-semibold text-sm">Amount</th>
                  <th className="px-8 py-5 text-slate-500 font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentTransactions.map((tx, i) => (
                  <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-8 py-5 font-bold">{tx.id}</td>
                    <td className="px-8 py-5 text-slate-600">{tx.customer}</td>
                    <td className="px-8 py-5 font-bold">{tx.amount}</td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                        tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                        tx.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}