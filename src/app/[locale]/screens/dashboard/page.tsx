import React from 'react';

export default function DashboardOverviewPage() {
  return (
    <div className="bg-[#f3f4f7] dark:bg-[#1f2938] font-manrope text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-[#2c5f81] flex items-center justify-center text-white">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#2c5f81] font-space font-bold text-lg leading-tight">SubHub</h1>
                <p className="text-slate-500 text-xs font-medium">Growth Engine</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#2c5f81] text-white" href="#">
              <span className="material-symbols-outlined text-xl">dashboard</span>
              <span className="font-space font-medium text-sm">Overview</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">group</span>
              <span className="font-space font-medium text-sm">Customers</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">payments</span>
              <span className="font-space font-medium text-sm">Subscriptions</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">bar_chart</span>
              <span className="font-space font-medium text-sm">Revenue</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">settings</span>
              <span className="font-space font-medium text-sm">Settings</span>
            </a>
          </nav>
          <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
            <button className="w-full flex items-center justify-center gap-2 bg-[#2c5f81] hover:bg-[#2c5f81]/90 text-white rounded-lg py-2.5 font-space font-bold text-sm transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">download</span>
              Export Data
            </button>
            <div className="mt-4 flex items-center gap-3 px-2 py-2">
              <div
                className="size-8 rounded-full bg-slate-200"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjD0CAJv5Epbv-XDwF3us91V4wihnsVbIbvbvY4j4GifKn6n3IiikaGAj2mK4MdL6URRyzFnBVU_oraDGXSGEn6WiCUevvc-VKde4aQYaH6FQ84GTdXk6Xf1ODj_nzGG05riQMU8CymSTAQa8_jYCXMM4jRc9HZ99xVDtJkvhHQfbwiDGNyTKn4eP_jgOpJFIOqJmppeQicqcP_4od3EKqtU5oVIj0338HLyb8kVpZpqD5XDvlwtsDioKuLVJlCxBn9SmhcW36-U8')",
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold font-space">Alex Rivera</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Admin</span>
              </div>
              <span className="material-symbols-outlined ml-auto text-slate-400 text-lg">more_vert</span>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
            <div className="flex items-center gap-4 w-1/3">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#2c5f81]/20 font-manrope" placeholder="Search customers or orders..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50">
                <span className="material-symbols-outlined text-xl">help</span>
              </button>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-space px-2 py-1 bg-[#0D9276]/10 text-[#0D9276] rounded">LIVE SYSTEM</span>
              </div>
            </div>
          </header>
          <div className="p-8 space-y-8">
            {/* KPI Section */}
            <div>
              <h2 className="text-2xl font-space font-bold text-slate-900 dark:text-white mb-6">Subscription Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-space font-medium text-sm uppercase tracking-wide">Active Plans</span>
                    <span className="material-symbols-outlined text-[#2c5f81]">analytics</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-space font-bold">12,450</span>
                    <span className="text-[#0D9276] text-sm font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-base">arrow_upward</span> 12.5%
                    </span>
                  </div>
                  <div className="mt-4 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2c5f81]" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-space font-medium text-sm uppercase tracking-wide">Monthly Net Flow</span>
                    <span className="material-symbols-outlined text-[#2c5f81]">swap_horiz</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-space font-bold">+304</span>
                    <span className="text-[#0D9276] text-sm font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-base">arrow_upward</span> 5.2%
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-slate-400 font-medium">432 Upgrades / 128 Downgrades</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-space font-medium text-sm uppercase tracking-wide">Churn Rate</span>
                    <span className="material-symbols-outlined text-[#E47C7C]">trending_down</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-space font-bold">2.1%</span>
                    <span className="text-[#E47C7C] text-sm font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-base">arrow_downward</span> 0.4%
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-slate-400 font-medium">84 cancellations this period</p>
                </div>
              </div>
            </div>
            {/* Bento Grid Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LTV Bar Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-space font-bold text-lg">LTV per Plan</h3>
                    <p className="text-sm text-slate-500">Average lifetime value comparison across tiers</p>
                  </div>
                  <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-bold py-1.5 pl-3 pr-8 focus:ring-0">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-6 px-4">
                  {/* Basic */}
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative overflow-hidden" style={{ height: "40%" }}>
                      <div className="absolute bottom-0 w-full bg-[#2c5f81]/40 group-hover:bg-[#2c5f81] transition-all duration-300" style={{ height: "100%" }}></div>
                    </div>
                    <span className="mt-4 font-space font-bold text-xs">$850</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Basic</span>
                  </div>
                  {/* Pro */}
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative overflow-hidden" style={{ height: "75%" }}>
                      <div className="absolute bottom-0 w-full bg-[#2c5f81]/40 group-hover:bg-[#2c5f81] transition-all duration-300" style={{ height: "100%" }}></div>
                    </div>
                    <span className="mt-4 font-space font-bold text-xs">$2,400</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Pro</span>
                  </div>
                  {/* Enterprise */}
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative overflow-hidden" style={{ height: "100%" }}>
                      <div className="absolute bottom-0 w-full bg-[#2c5f81] group-hover:bg-[#2c5f81] transition-all duration-300" style={{ height: "100%" }}></div>
                    </div>
                    <span className="mt-4 font-space font-bold text-xs">$12,800</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Enterprise</span>
                  </div>
                  {/* Startup */}
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative overflow-hidden" style={{ height: "60%" }}>
                      <div className="absolute bottom-0 w-full bg-[#2c5f81]/40 group-hover:bg-[#2c5f81] transition-all duration-300" style={{ height: "100%" }}></div>
                    </div>
                    <span className="mt-4 font-space font-bold text-xs">$1,200</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Startup</span>
                  </div>
                </div>
              </div>
              {/* User Distribution Chart */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
                <h3 className="font-space font-bold text-lg mb-1">User Distribution</h3>
                <p className="text-sm text-slate-500 mb-8">Share by plan tier</p>
                <div className="flex-1 flex items-center justify-center relative">
                  {/* SVG Doughnut Representation */}
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#f1f5f9" strokeWidth="20"></circle>
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#2c5f81" strokeDasharray="502" strokeDashoffset="150" strokeWidth="20"></circle>
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#0D9276" strokeDasharray="502" strokeDashoffset="400" strokeWidth="20"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-space font-bold">18.5k</span>
                    <span className="text-xs text-slate-500 font-medium">Total Users</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#2c5f81]"></div>
                    <span className="text-xs font-bold">Pro (45%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#0D9276]"></div>
                    <span className="text-xs font-bold">Enterprise (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-slate-200"></div>
                    <span className="text-xs font-bold">Basic (30%)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Advanced Data Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-space font-bold text-lg">Individual Subscriptions</h3>
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500 font-bold">1,204 TOTAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-50">
                    <span className="material-symbols-outlined text-sm">filter_list</span>
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-50">
                    <span className="material-symbols-outlined text-sm">sort</span>
                    Sort
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">User</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Plan</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Billing Cycle</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">LTV</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Active</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-[#2c5f81]/10 flex items-center justify-center text-[#2c5f81] font-bold text-xs">JD</div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Jane Doe</span>
                            <span className="text-xs text-slate-400">jane@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight bg-[#2c5f81]/10 text-[#2c5f81] border border-[#2c5f81]/20">Enterprise</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#0D9276]">
                          <span className="size-1.5 rounded-full bg-[#0D9276]"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600 dark:text-slate-400">Annual</td>
                      <td className="px-6 py-4 text-sm font-bold font-space">$4,250</td>
                      <td className="px-6 py-4 text-xs text-slate-500">2 mins ago</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-[#2c5f81]"><span className="material-symbols-outlined text-lg">edit_note</span></button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 font-bold text-xs">MK</div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Marcus King</span>
                            <span className="text-xs text-slate-400">marcus@dev-agency.io</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight bg-slate-100 dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700">Pro</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#E47C7C]">
                          <span className="size-1.5 rounded-full bg-[#E47C7C]"></span>
                          Canceled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600 dark:text-slate-400">Monthly</td>
                      <td className="px-6 py-4 text-sm font-bold font-space">$840</td>
                      <td className="px-6 py-4 text-xs text-slate-500">3 days ago</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-[#2c5f81]"><span className="material-symbols-outlined text-lg">edit_note</span></button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-[#0D9276]/10 flex items-center justify-center text-[#0D9276] font-bold text-xs">LL</div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Lily Lawson</span>
                            <span className="text-xs text-slate-400">lily.l@startup.co</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight bg-[#2c5f81]/10 text-[#2c5f81] border border-[#2c5f81]/20">Enterprise</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#0D9276]">
                          <span className="size-1.5 rounded-full bg-[#0D9276]"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600 dark:text-slate-400">Annual</td>
                      <td className="px-6 py-4 text-sm font-bold font-space">$5,100</td>
                      <td className="px-6 py-4 text-xs text-slate-500">1 hour ago</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-[#2c5f81]"><span className="material-symbols-outlined text-lg">edit_note</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-medium">Showing 1 to 3 of 1,204 entries</span>
                <div className="flex gap-1">
                  <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Prev</button>
                  <button className="px-3 py-1 text-xs font-bold rounded bg-[#2c5f81] text-white">1</button>
                  <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">2</button>
                  <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">3</button>
                  <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Next</button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Space for Scroll */}
          <div className="h-12"></div>
        </main>
      </div>
    </div>
  );
}
