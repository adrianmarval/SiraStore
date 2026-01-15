import React from 'react';

export default function ChurnRetentionPage() {
  return (
    <div className="bg-[#f9fafa] dark:bg-[#14181f] font-display text-slate-900 dark:text-white min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 dark:border-[#2d3744] flex flex-col bg-white dark:bg-[#14181f]">
          <div className="p-6 flex items-center gap-3">
            <div className="size-8 bg-[#2898bd] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Retention Lab</h1>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1c222b] rounded-lg cursor-pointer">
              <span className="material-symbols-outlined">grid_view</span>
              <span className="text-sm font-medium">Overview</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1c222b] rounded-lg cursor-pointer">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Revenue</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 bg-[#2898bd]/10 text-[#2898bd] rounded-lg cursor-pointer">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_remove</span>
              <span className="text-sm font-medium">Churn Analysis</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1c222b] rounded-lg cursor-pointer">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Cohorts</span>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-[#2d3744]">
              <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1c222b] rounded-lg cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </div>
            </div>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-[#2d3744]">
            <div className="flex items-center gap-3 p-2 bg-slate-100 dark:bg-[#1c222b] rounded-xl">
              <div
                className="size-8 rounded-full bg-slate-300 overflow-hidden"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2IM_YmP_IkRzNFefQJndcQXj3IlcWC_Yb1Rr8f-2l6VRRVJFcK56R-6WBChsGVUhmptoKXBldkWyWcDWz6ro-R_jM3RFVhDWRo5S2fWTk5UQT_42MwyvlhgPsaZ0bE3T5BtiQcTXXDaifbAMp2Y5FaGvK8v1GPTkj0yVeT6viH2vjx-BkaD3sNpuFfQRMuX8guLPaxB-XJuDBJAcSJl457_Ae_kTQlzI08iog5q-VMehL2xTUoRW7Uapan4go0rZLxaiV3kko17s')", backgroundSize: 'cover' }}
              ></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 truncate">Growth Lead</p>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-16 border-b border-slate-200 dark:border-[#2d3744] flex items-center justify-between px-8 sticky top-0 bg-[#f9fafa]/80 dark:bg-[#14181f]/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">Churn & Retention</h2>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-[#1c222b] text-[10px] uppercase tracking-wider font-bold text-slate-500">Live Data</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">calendar_today</span>
                <select className="pl-10 pr-8 py-2 bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] rounded-lg text-xs font-medium focus:ring-[#2898bd] focus:border-[#2898bd] appearance-none cursor-pointer">
                  <option>Last 12 Months</option>
                  <option>Last 30 Days</option>
                  <option>Year to Date</option>
                </select>
              </div>
              <button className="bg-[#2898bd] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#2898bd]/90 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">ios_share</span>
                Export Report
              </button>
            </div>
          </header>
          <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] p-6 rounded-xl hover:border-[#2898bd]/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Churn Rate</p>
                  <span className="text-orange-500 flex items-center gap-1 text-xs font-bold bg-orange-500/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 0.5%
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-bold tracking-tight">4.2%</h3>
                </div>
                <div className="mt-4 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[42%]"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] p-6 rounded-xl hover:border-[#2898bd]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Lost Revenue (MRR)</p>
                  <span className="text-rose-500 flex items-center gap-1 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-xs">arrow_downward</span> 2.1%
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-bold tracking-tight">$12,400</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 italic">Down from $14.2k last month</p>
              </div>
              <div className="bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] p-6 rounded-xl hover:border-[#2898bd]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Net Retention Rate</p>
                  <span className="text-emerald-500 flex items-center gap-1 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 4.2%
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-bold tracking-tight">105%</h3>
                </div>
                <div className="mt-4 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[85%]"></div>
                </div>
              </div>
            </div>
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Cancellation Trend */}
              <div className="lg:col-span-2 bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] rounded-xl p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-lg font-bold">Cancellation Trends</h4>
                    <p className="text-xs text-slate-500">Monthly churn events over the last year</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="size-2 rounded-full bg-[#2898bd]"></span> Monthly
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 ml-4">
                      <span className="size-2 rounded-full bg-slate-400"></span> Previous Year
                    </span>
                  </div>
                </div>
                <div className="h-[250px] w-full relative">
                  {/* Custom SVG Chart for "Lab" Aesthetic */}
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 250">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#2898bd" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="#2898bd" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line className="text-slate-200 dark:text-[#2d3744]" stroke="currentColor" strokeDasharray="4" x1="0" x2="1000" y1="0" y2="0"></line>
                    <line className="text-slate-200 dark:text-[#2d3744]" stroke="currentColor" strokeDasharray="4" x1="0" x2="1000" y1="62.5" y2="62.5"></line>
                    <line className="text-slate-200 dark:text-[#2d3744]" stroke="currentColor" strokeDasharray="4" x1="0" x2="1000" y1="125" y2="125"></line>
                    <line className="text-slate-200 dark:text-[#2d3744]" stroke="currentColor" strokeDasharray="4" x1="0" x2="1000" y1="187.5" y2="187.5"></line>
                    {/* Background Fill */}
                    <path d="M0,200 Q100,180 200,140 Q300,100 400,150 Q500,200 600,120 Q700,40 800,80 Q900,120 1000,100 L1000,250 L0,250 Z" fill="url(#chartGradient)"></path>
                    {/* Main Line */}
                    <path d="M0,200 Q100,180 200,140 Q300,100 400,150 Q500,200 600,120 Q700,40 800,80 Q900,120 1000,100" fill="none" stroke="#2898bd" strokeLinecap="round" strokeWidth="3"></path>
                    {/* Data Points */}
                    <circle cx="200" cy="140" fill="#2898bd" r="4"></circle>
                    <circle cx="400" cy="150" fill="#2898bd" r="4"></circle>
                    <circle cx="600" cy="120" fill="#2898bd" r="4"></circle>
                    <circle cx="800" cy="80" fill="#2898bd" r="4"></circle>
                  </svg>
                  <div className="flex justify-between mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                  </div>
                </div>
              </div>
              {/* Churn Reason Pie Chart (Donut) */}
              <div className="bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] rounded-xl p-6">
                <h4 className="text-lg font-bold mb-1">Churn Reason</h4>
                <p className="text-xs text-slate-500 mb-6">Qualitative breakdown</p>
                <div className="flex flex-col items-center">
                  <div className="relative size-48">
                    {/* Donut Representation */}
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <circle className="text-slate-100 dark:text-[#2d3744]" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#2898bd" strokeDasharray="45, 100" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#fa5f38" strokeDasharray="25, 100" strokeDashoffset="-45" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#98b8c3" strokeDasharray="30, 100" strokeDashoffset="-70" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-bold">284</span>
                      <span className="text-[10px] uppercase text-slate-500 font-bold">Total Lost</span>
                    </div>
                  </div>
                  <div className="w-full mt-6 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#2898bd]"></span>
                        <span>Too Expensive</span>
                      </div>
                      <span className="font-bold">45%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#fa5f38]"></span>
                        <span>Missing Features</span>
                      </div>
                      <span className="font-bold">25%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#98b8c3]"></span>
                        <span>UX Complexity</span>
                      </div>
                      <span className="font-bold">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cohort Analysis Table */}
            <div className="bg-white dark:bg-[#1c222b] border border-slate-200 dark:border-[#2d3744] rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-[#2d3744] flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">Cohort Retention Analysis</h4>
                  <p className="text-xs text-slate-500">Subscription longevity by month of signup</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-[10px] font-bold px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">Count</button>
                  <button className="text-[10px] font-bold px-3 py-1 rounded bg-[#2898bd]/20 text-[#2898bd] uppercase">Percent</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500 border-r border-slate-200 dark:border-[#2d3744]">Cohort</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">Users</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M1</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M2</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M3</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M4</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M5</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M6</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M7</th>
                      <th className="p-4 text-[10px] font-bold uppercase text-slate-500">M8</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-t border-slate-200 dark:border-[#2d3744]">
                      <td className="p-4 font-bold border-r border-slate-200 dark:border-[#2d3744] whitespace-nowrap">Jan 2024</td>
                      <td className="p-4 text-slate-400">1,240</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.9)' }}>94%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.7)' }}>88%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.7)' }}>82%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>78%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>75%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.3)' }}>68%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.15)' }}>62%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.15)' }}>58%</td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-[#2d3744]">
                      <td className="p-4 font-bold border-r border-slate-200 dark:border-[#2d3744] whitespace-nowrap">Feb 2024</td>
                      <td className="p-4 text-slate-400">980</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.9)' }}>96%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.7)' }}>89%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.7)' }}>84%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>79%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>76%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.3)' }}>70%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.15)' }}>64%</td>
                      <td className="p-4 bg-slate-100 dark:bg-slate-800/30"></td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-[#2d3744]">
                      <td className="p-4 font-bold border-r border-slate-200 dark:border-[#2d3744] whitespace-nowrap">Mar 2024</td>
                      <td className="p-4 text-slate-400">1,450</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.9)' }}>92%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.7)' }}>85%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>79%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.5)' }}>72%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.3)' }}>68%</td>
                      <td className="p-4 text-center text-white font-bold" style={{ backgroundColor: 'rgba(40, 152, 189, 0.15)' }}>61%</td>
                      <td className="p-4 bg-slate-100 dark:bg-slate-800/30"></td>
                      <td className="p-4 bg-slate-100 dark:bg-slate-800/30"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
