import React, { useState, useMemo } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { initialTransactions } from '@/lib/data';

export default function TransactionsView() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTransactions = useMemo(() => {
    return initialTransactions.filter(tx => 
      tx.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tx.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Transaction History</h1>
        <div className="flex gap-2">
           <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100 text-slate-500 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTransactions.map((tx, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={tx.img} className="w-8 h-8 rounded-full bg-slate-100" alt={tx.customer} />
                    <span className="font-bold text-sm">{tx.customer}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
                  <td className="px-6 py-4 font-bold text-sm">₹{parseInt(tx.amount).toLocaleString()}</td>
                  <td className="px-6 py-4">
                     <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                        tx.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                     }`}>{tx.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-400 hover:text-indigo-600 cursor-pointer">
                    <MoreHorizontal size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}