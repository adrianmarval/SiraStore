import React from 'react';

export default function PlansPricingPage() {
  return (
    <div className="bg-[#f9fafa] dark:bg-[#21242c] text-[#101518] dark:text-gray-100 min-h-screen font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-[#d4dde2] dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col shrink-0">
          <div className="p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#2c5f81] size-8 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_graph</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#101518] dark:text-white text-sm font-bold leading-tight">GrowthAdmin</h1>
                <p className="text-[#5c778a] dark:text-gray-400 text-[10px] uppercase tracking-wider font-bold">Workspace v2.0</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5c778a] dark:text-gray-400 hover:bg-[#eaeef1] dark:hover:bg-gray-700 transition-colors" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-semibold">Dashboard</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#2c5f81]/10 text-[#2c5f81] dark:bg-[#2c5f81]/20 dark:text-primary-light" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                <span className="text-sm font-bold">Plans & Pricing</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5c778a] dark:text-gray-400 hover:bg-[#eaeef1] dark:hover:bg-gray-700 transition-colors" href="#">
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm font-semibold">Customers</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5c778a] dark:text-gray-400 hover:bg-[#eaeef1] dark:hover:bg-gray-700 transition-colors" href="#">
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-sm font-semibold">Analytics</span>
              </a>
            </nav>
          </div>
          <div className="mt-auto p-6 border-t border-[#d4dde2] dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div
                className="size-9 rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjux0yiuiWXfw107qjeI4f0uosLBgY_b4nVoqaWanM6vsb1ETwwTZHwasn8cIVLuncZvyZ3Sdnd4lJHIa3FnDGBJWTTc-0Udb5Dj-Tb9IOnkkpHDbpyIkyj-v8QCZcp7fmEjDUGOYbj8lbR5UbFmp5lyNafpkPkc6IBDzn90sDrqQXMx7gcv9VPuPVKHlp9ixLIDnmWpnX7s2Lgw5pq3m3pLv5JLkOcS8J_caJNbcp5Fzp6uNcouzwPHuoAlmhplSy6pwyafYFL6w')" }}
              ></div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-xs font-bold truncate">Alex Morgan</p>
                <p className="text-[10px] text-[#5c778a] truncate">Admin Account</p>
              </div>
              <button className="ml-auto text-[#5c778a]">
                <span className="material-symbols-outlined text-lg">settings</span>
              </button>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          {/* Top Navigation Bar */}
          <header className="h-16 border-b border-[#d4dde2] dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-6">
              <h2 className="text-lg font-bold tracking-tight">Subscription Management</h2>
              <div className="hidden md:flex relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5c778a] text-sm">search</span>
                <input className="pl-10 pr-4 py-1.5 bg-[#eaeef1] dark:bg-gray-700 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#2c5f81]/20" placeholder="Search plans..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-[#5c778a] hover:bg-[#eaeef1] dark:hover:bg-gray-700 rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="bg-[#2c5f81] hover:bg-[#2c5f81]/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">add</span>
                Create New Plan
              </button>
            </div>
          </header>
          <div className="p-8 max-w-7xl mx-auto w-full">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#5c778a] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Total Subscribers</span>
                  <span className="material-symbols-outlined text-[#2c5f81]">groups</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">6,280</span>
                  <span className="text-emerald-600 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span> 12%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#5c778a] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Monthly Revenue</span>
                  <span className="material-symbols-outlined text-[#2c5f81]">payments</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">$142,500</span>
                  <span className="text-emerald-600 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span> 8.5%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-[#d4dde2] dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#5c778a] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Active Trials</span>
                  <span className="material-symbols-outlined text-[#2c5f81]">hourglass_empty</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">452</span>
                  <span className="text-orange-600 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-sm">arrow_downward</span> 2%
                  </span>
                </div>
              </div>
            </div>
            {/* Billing Toggle and Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Active Plans</h3>
                <p className="text-[#5c778a] dark:text-gray-400 text-sm">Configure and monitor your subscription tiers</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex bg-[#eaeef1] dark:bg-gray-700 p-1 rounded-xl">
                  <label className="relative cursor-pointer">
                    <input defaultChecked className="peer sr-only" name="billing" type="radio" />
                    <div className="px-4 py-1.5 text-xs font-bold rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-gray-600 peer-checked:shadow-sm text-[#5c778a] dark:text-gray-400 peer-checked:text-[#101518] dark:peer-checked:text-white">Monthly</div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="billing" type="radio" />
                    <div className="px-4 py-1.5 text-xs font-bold rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-gray-600 peer-checked:shadow-sm text-[#5c778a] dark:text-gray-400 peer-checked:text-[#101518] dark:peer-checked:text-white">Yearly (-20%)</div>
                  </label>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-bold border border-[#d4dde2] dark:border-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg text-[#5c778a]">filter_list</span>
                  Filter
                </button>
              </div>
            </div>
            {/* Pricing Plan Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-[#d4dde2] dark:border-gray-700 p-8 flex flex-col relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-[#eaeef1] dark:bg-gray-700 text-[10px] font-black uppercase tracking-widest text-[#5c778a] dark:text-gray-400">Entry Tier</span>
                    <h4 className="text-2xl font-black mt-2">Basic</h4>
                  </div>
                  <button className="text-[#5c778a] hover:text-[#101518] dark:hover:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">$29</span>
                    <span className="text-[#5c778a] dark:text-gray-400 font-bold">/mo</span>
                  </div>
                  <p className="text-sm text-[#5c778a] dark:text-gray-400 mt-2">Essential features for individuals</p>
                </div>
                <div className="bg-[#f9fafa] dark:bg-gray-900/50 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#5c778a]">Active Users</span>
                    <span className="text-xs font-black text-[#2c5f81]">1,240</span>
                  </div>
                  <div className="w-full bg-[#d4dde2] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2c5f81] h-full w-[45%]"></div>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 mb-10 grow">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">3 Core Features</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Standard Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm opacity-40 grayscale">
                    <span className="material-symbols-outlined text-xl">cancel</span>
                    <span className="font-semibold text-[#5c778a] line-through">Advanced Analytics</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-[#eaeef1] dark:border-gray-700 font-black text-sm hover:bg-[#eaeef1] dark:hover:bg-gray-700 transition-all">
                  Edit Plan Details
                </button>
              </div>
              {/* Pro Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-[#2c5f81] p-8 flex flex-col relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg">
                <div className="absolute top-0 right-0 bg-[#2c5f81] text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-[#2c5f81]/10 text-[#2c5f81] text-[10px] font-black uppercase tracking-widest">Growth Tier</span>
                    <h4 className="text-2xl font-black mt-2">Pro</h4>
                  </div>
                  <button className="text-[#5c778a] hover:text-[#101518] dark:hover:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">$79</span>
                    <span className="text-[#5c778a] dark:text-gray-400 font-bold">/mo</span>
                  </div>
                  <p className="text-sm text-[#5c778a] dark:text-gray-400 mt-2">Scale your business with ease</p>
                </div>
                <div className="bg-[#2c5f81]/5 dark:bg-[#2c5f81]/10 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#5c778a]">Active Users</span>
                    <span className="text-xs font-black text-[#2c5f81]">4,890</span>
                  </div>
                  <div className="w-full bg-[#d4dde2] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2c5f81] h-full w-[78%]"></div>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 mb-10 grow">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">8 Core Features</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Priority Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Advanced Analytics</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">API Access</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-[#2c5f81] text-white font-black text-sm hover:bg-[#2c5f81]/90 transition-all">
                  Edit Plan Details
                </button>
              </div>
              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-[#d4dde2] dark:border-gray-700 p-8 flex flex-col relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-[#eaeef1] dark:bg-gray-700 text-[10px] font-black uppercase tracking-widest text-[#5c778a] dark:text-gray-400">Custom Tier</span>
                    <h4 className="text-2xl font-black mt-2">Enterprise</h4>
                  </div>
                  <button className="text-[#5c778a] hover:text-[#101518] dark:hover:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">Custom</span>
                  </div>
                  <p className="text-sm text-[#5c778a] dark:text-gray-400 mt-2">Tailored for large organizations</p>
                </div>
                <div className="bg-[#f9fafa] dark:bg-gray-900/50 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#5c778a]">Active Accounts</span>
                    <span className="text-xs font-black text-[#2c5f81]">150</span>
                  </div>
                  <div className="w-full bg-[#d4dde2] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2c5f81] h-full w-[12%]"></div>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 mb-10 grow">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Unlimited Features</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Dedicated Manager</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">Custom SLA</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2c5f81] text-xl">check_circle</span>
                    <span className="font-semibold text-[#101518] dark:text-gray-200">SSO/SAML Integration</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-[#eaeef1] dark:border-gray-700 font-black text-sm hover:bg-[#eaeef1] dark:hover:bg-gray-700 transition-all">
                  Edit Plan Details
                </button>
              </div>
            </div>
            {/* Secondary Section: Recent Activity */}
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl border border-[#d4dde2] dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-[#d4dde2] dark:border-gray-700 flex items-center justify-between">
                <h5 className="font-black text-sm uppercase tracking-widest text-[#5c778a]">Pricing Change Log</h5>
                <button className="text-[#2c5f81] text-xs font-bold hover:underline">View All History</button>
              </div>
              <div className="divide-y divide-[#d4dde2] dark:divide-gray-700">
                <div className="p-4 flex items-center gap-4 hover:bg-[#f9fafa] dark:hover:bg-gray-900/50 transition-all">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-lg">edit</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Pro Plan Updated</p>
                    <p className="text-xs text-[#5c778a]">Base price changed from $69 to $79 by Sarah J.</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold text-[#5c778a]">2 hours ago</span>
                </div>
                <div className="p-4 flex items-center gap-4 hover:bg-[#f9fafa] dark:hover:bg-gray-900/50 transition-all">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">New Coupon Code: GROWTH2024</p>
                    <p className="text-xs text-[#5c778a]">Created for Spring marketing campaign</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold text-[#5c778a]">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
