import React from 'react';

export default function AnalyticsLtvPage() {
  return (
    <div className="bg-[#f3f4f7] dark:bg-[#1f2938] min-h-screen font-noto">
      <div className="flex h-full min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-[#d4dde2] dark:border-gray-700 bg-white dark:bg-gray-900 hidden lg:flex flex-col">
          <div className="p-6 flex flex-col gap-8 h-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#2c5f81] rounded-lg p-2 text-white">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h1 className="text-[#101518] dark:text-white text-base font-bold leading-tight">Growth Team</h1>
                <p className="text-[#5c778a] text-xs font-normal">SaaS Admin</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1 flex-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-800 transition-colors" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Overview</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#eaeef1] dark:bg-gray-800 text-[#2c5f81] dark:text-white" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                <span className="text-sm font-medium">LTV Insights</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-800 transition-colors" href="#">
                <span className="material-symbols-outlined">payments</span>
                <span className="text-sm font-medium">Revenue</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-800 transition-colors" href="#">
                <span className="material-symbols-outlined">person_off</span>
                <span className="text-sm font-medium">Churn</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-800 transition-colors" href="#">
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm font-medium">Customers</span>
              </a>
            </nav>
            <div className="pt-6 border-t border-[#d4dde2] dark:border-gray-700 flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-800 transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </a>
              <div className="flex items-center gap-3 px-3 py-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnXKLQBp_sOv7MBCOWw6oqRE2-EzUTIPmS2LamGgVe6ftZVmDsc0GykwdfeSyLVBEzkNmHUWfw0AFuUzbXXGA6oldrPNJBhv1KGWQ69d-I9f9vn0eywspCJTKExGt_XODkxN_ahMUJFSB1UleiVkKk12fvkfNzlDjVLx0k69wk4qmX13THZfzRt6d59q7iZZwk1ykspbO1eTfNQkbMa6C4YWX65MlMXNEv6cvUloGm_qTbAKB8CPguJ1VNSLngdFsJmIJYfI-vD5c")' }}
                ></div>
                <div className="flex flex-col">
                  <p className="text-[#101518] dark:text-white text-xs font-bold">Alex Rivera</p>
                  <p className="text-[#5c778a] text-[10px]">Growth Lead</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between border-b border-[#d4dde2] dark:border-gray-700 px-8 py-4 bg-white dark:bg-gray-900 sticky top-0 z-10">
            <div className="flex items-center gap-6">
              <h2 className="text-[#101518] dark:text-white text-lg font-bold font-space">Subscription Analytics</h2>
              <div className="hidden md:flex items-center bg-[#f3f4f7] dark:bg-gray-800 rounded-lg px-3 py-1.5 w-64">
                <span className="material-symbols-outlined text-[#5c778a] text-xl">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-[#5c778a] dark:text-white" placeholder="Search data..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#2c5f81] text-white rounded-lg text-sm font-bold transition-transform active:scale-95">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Report
              </button>
              <button className="p-2 bg-[#f3f4f7] dark:bg-gray-800 rounded-lg text-[#101518] dark:text-white hover:bg-[#eaeef1] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-[#E47C7C] rounded-full border-2 border-white dark:border-gray-900"></span>
              </button>
            </div>
          </header>
          {/* Page Body */}
          <div className="p-8 max-w-7xl mx-auto w-full">
            {/* Page Heading */}
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#101518] dark:text-white text-4xl font-black font-space tracking-tight">LTV Insights</h3>
                <p className="text-[#5c778a] dark:text-gray-400 text-base">Detailed financial trends and customer lifetime value metrics.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-[#d4dde2] dark:border-gray-700 rounded-lg text-sm font-bold text-[#101518] dark:text-white shadow-sm">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Last 30 Days
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Stats Cards */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm flex flex-col justify-between hover:border-[#2c5f81]/50 transition-colors group">
                <div>
                  <p className="text-[#5c778a] text-sm font-medium mb-1">Monthly Recurring Revenue</p>
                  <p className="text-[#101518] dark:text-white text-3xl font-bold font-space">$124,500</p>
                </div>
                <div className="flex items-center gap-1 mt-4 text-[#0D9276]">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="text-sm font-bold">+8.2% vs last month</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm flex flex-col justify-between hover:border-[#2c5f81]/50 transition-colors">
                <div>
                  <p className="text-[#5c778a] text-sm font-medium mb-1">Net Movement</p>
                  <p className="text-[#101518] dark:text-white text-3xl font-bold font-space">+$12,300</p>
                </div>
                <div className="flex items-center gap-1 mt-4 text-[#E47C7C]">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  <span className="text-sm font-bold">-1.5% vs last month</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm flex flex-col justify-between hover:border-[#2c5f81]/50 transition-colors">
                <div>
                  <p className="text-[#5c778a] text-sm font-medium mb-1">Avg Churn Rate</p>
                  <p className="text-[#101518] dark:text-white text-3xl font-bold font-space">2.4%</p>
                </div>
                <div className="flex items-center gap-1 mt-4 text-[#0D9276]">
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                  <span className="text-sm font-bold">-0.4% improvement</span>
                </div>
              </div>
            </div>
            {/* Main Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Trend Chart */}
              <div className="lg:col-span-8 bg-white dark:bg-gray-900 p-8 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-[#101518] dark:text-white text-xl font-bold font-space">Upgrades vs Downgrades Trend</h4>
                    <p className="text-[#5c778a] text-sm">Expansion and contraction over the current period</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#0D9276]"></span>
                      <span className="text-xs font-medium text-[#5c778a]">Upgrades</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#E47C7C]"></span>
                      <span className="text-xs font-medium text-[#5c778a]">Downgrades</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[280px] w-full mt-4">
                  {/* SVG Area Chart */}
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="success-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0D9276" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="#0D9276" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    {/* Upgrade Line (Success) */}
                    <path d="M0 160 C 100 150, 200 80, 300 100 S 400 40, 500 60 S 600 20, 700 40 S 800 10, 800 10" fill="none" stroke="#0D9276" strokeWidth="3"></path>
                    <path d="M0 160 C 100 150, 200 80, 300 100 S 400 40, 500 60 S 600 20, 700 40 S 800 10, 800 10 V 200 H 0 Z" fill="url(#success-gradient)"></path>
                    {/* Downgrade Line (Danger) */}
                    <path d="M0 180 C 100 185, 200 170, 300 190 S 400 160, 500 180 S 600 170, 700 185 S 800 160, 800 160" fill="none" stroke="#E47C7C" strokeDasharray="4 4" strokeWidth="2"></path>
                  </svg>
                  <div className="flex justify-between mt-4 px-2">
                    <span className="text-[10px] font-bold text-[#5c778a]">Week 1</span>
                    <span className="text-[10px] font-bold text-[#5c778a]">Week 2</span>
                    <span className="text-[10px] font-bold text-[#5c778a]">Week 3</span>
                    <span className="text-[10px] font-bold text-[#5c778a]">Week 4</span>
                  </div>
                </div>
              </div>
              {/* LTV Per Plan Bar Chart */}
              <div className="lg:col-span-4 bg-white dark:bg-gray-900 p-8 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm flex flex-col">
                <h4 className="text-[#101518] dark:text-white text-xl font-bold font-space mb-2">LTV per Subscription Plan</h4>
                <p className="text-[#5c778a] text-sm mb-8">Average lifetime value by tier</p>
                <div className="flex-1 flex flex-col gap-6">
                  {/* Bar 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-[#101518] dark:text-white">Enterprise</span>
                      <span className="text-[#2c5f81] font-bold font-space text-base">$48,200</span>
                    </div>
                    <div className="w-full bg-[#f3f4f7] dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2c5f81] h-full rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  {/* Bar 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-[#101518] dark:text-white">Pro Plan</span>
                      <span className="text-[#2c5f81] font-bold font-space text-base">$12,450</span>
                    </div>
                    <div className="w-full bg-[#f3f4f7] dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2c5f81] h-full rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  {/* Bar 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-[#101518] dark:text-white">Basic Tier</span>
                      <span className="text-[#2c5f81] font-bold font-space text-base">$3,100</span>
                    </div>
                    <div className="w-full bg-[#f3f4f7] dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2c5f81] h-full rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  {/* Bar 4 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-[#101518] dark:text-white">Custom/API</span>
                      <span className="text-[#2c5f81] font-bold font-space text-base">$82,000</span>
                    </div>
                    <div className="w-full bg-[#f3f4f7] dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2c5f81] h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#d4dde2] dark:border-gray-700">
                  <div className="flex items-start gap-3 bg-[#f3f4f7] dark:bg-gray-800 p-4 rounded-lg">
                    <span className="material-symbols-outlined text-[#2c5f81]">auto_awesome</span>
                    <p className="text-xs text-[#101518] dark:text-white font-medium">
                      <span className="font-bold">Growth Insight:</span> Upgrades are up 12% this month, primarily from the Pro Plan migration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Movement Table */}
            <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#d4dde2] dark:border-gray-700 flex items-center justify-between">
                <h4 className="text-[#101518] dark:text-white text-xl font-bold font-space">Recent Movements</h4>
                <button className="text-[#2c5f81] text-sm font-bold hover:underline">View all transactions</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#f3f4f7] dark:bg-gray-800 text-[#5c778a] text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Movement Type</th>
                      <th className="px-6 py-4">From Plan</th>
                      <th className="px-6 py-4">To Plan</th>
                      <th className="px-6 py-4">Value Change</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d4dde2] dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="size-8 rounded-full bg-[#2c5f81]/10 flex items-center justify-center text-[#2c5f81] font-bold text-xs">SK</div>
                        <span className="text-sm font-bold text-[#101518] dark:text-white">Skyline Tech</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#0D9276]/10 text-[#0D9276]">UPGRADE</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Pro Plan</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#101518] dark:text-white">Enterprise</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#0D9276]">+$2,400/mo</td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Oct 24, 2023</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="size-8 rounded-full bg-[#2c5f81]/10 flex items-center justify-center text-[#2c5f81] font-bold text-xs">NL</div>
                        <span className="text-sm font-bold text-[#101518] dark:text-white">NextLevel Inc</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#E47C7C]/10 text-[#E47C7C]">DOWNGRADE</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Enterprise</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#101518] dark:text-white">Pro Plan</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#E47C7C]">-$1,800/mo</td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Oct 22, 2023</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="size-8 rounded-full bg-[#2c5f81]/10 flex items-center justify-center text-[#2c5f81] font-bold text-xs">VA</div>
                        <span className="text-sm font-bold text-[#101518] dark:text-white">Vortex Agency</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#0D9276]/10 text-[#0D9276]">UPGRADE</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Basic Tier</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#101518] dark:text-white">Pro Plan</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#0D9276]">+$450/mo</td>
                      <td className="px-6 py-4 text-sm text-[#5c778a]">Oct 21, 2023</td>
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
