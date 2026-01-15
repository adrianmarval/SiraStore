import React from 'react';

export default function SubscriptionsPage() {
  return (
    <div className="bg-[#f9fafb] dark:bg-[#1a1d21] text-[#0e191b] dark:text-gray-100 transition-colors duration-200 font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col bg-white dark:bg-[#22262a] border-r border-gray-200 dark:border-gray-800 shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="size-8 bg-[#0e7f90] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div>
              <h1 className="text-base font-bold leading-none">GrowthDash</h1>
              <p className="text-xs text-[#4d8f99] mt-1">SaaS Management</p>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold rounded-lg bg-[#0e7f90]/10 text-[#0e7f90]" href="#">
              <span className="material-symbols-outlined text-[20px] fill-[1]">receipt_long</span>
              Subscriptions
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
              <span className="material-symbols-outlined text-[20px]">group</span>
              Customers
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
              <span className="material-symbols-outlined text-[20px]">bar_chart</span>
              Analytics
            </a>
            <div className="pt-4 pb-2 px-3">
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Administration</p>
            </div>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              Settings
            </a>
          </nav>
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full flex items-center justify-center gap-2 bg-[#0e7f90] text-white py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#0e7f90]/90 transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Subscription
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#f9fafb] dark:bg-[#1a1d21]">
          {/* Top Nav */}
          <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-[#22262a] border-b border-gray-200 dark:border-gray-800 shrink-0">
            <div className="flex items-center gap-4 w-1/3">
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
                <input className="w-full pl-10 pr-4 py-1.5 text-sm bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-[#0e7f90]/20 placeholder:text-gray-400" placeholder="Search for anything..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white dark:border-[#22262a] rounded-full"></span>
              </button>
              <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-1"></div>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold leading-none group-hover:text-[#0e7f90] transition-colors">Alex Rivera</p>
                  <p className="text-[10px] text-gray-400">Growth Manager</p>
                </div>
                <div
                  className="size-9 rounded-full bg-cover bg-center border-2 border-[#0e7f90]/20"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD52OeW6ZUPLhaso6bdbU4DjlLAgtlzlzUmRo2fq7-ODXKwXZtB9fCaFjG-t70qSfA2tc8r3BVrCznHtg7sfCM_5L31V7ttKIsFMh9zByQ_Y08g26xUIGkL9pNMF3OImiFnLdGI3VtZ7Fu6O8di-Hop1szYdIDL4KZ0vx04su5rfhkG8IY3p9mseuxwKt1gqgBkdctdOZNqviqfXcZBIpgUF8lfzvQhnxhbrXwO6uD2DZo1yejCjD_07iPezKQswwM6gskDioSnlrg')" }}
                ></div>
              </div>
            </div>
          </header>
          {/* Page Header */}
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#0e191b] dark:text-white">All Subscriptions</h2>
                <p className="text-[#4d8f99] mt-1 text-sm">Reviewing 1,248 active recurring billing records.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#22262a] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-200 hover:shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export CSV
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#22262a] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-200 hover:shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-[#22262a] p-1 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                <button className="px-3 py-1 text-xs font-bold rounded bg-[#0e7f90] text-white">All</button>
                <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">Active</button>
                <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">Trials</button>
                <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">Past Due</button>
              </div>
              <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1"></div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white dark:bg-[#22262a] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-[16px]">filter_list</span>
                Plan: All
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white dark:bg-[#22262a] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                Renewal: This Month
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="ml-auto">
                <p className="text-xs font-medium text-gray-400">Showing 1-10 of 1,248</p>
              </div>
            </div>
          </div>
          {/* Table Section */}
          <div className="flex-1 overflow-auto px-8 pb-8">
            <div className="bg-white dark:bg-[#22262a] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <input className="rounded border-gray-300 text-[#0e7f90] focus:ring-[#0e7f90]" type="checkbox" />
                    </th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400">Customer</th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400">Plan</th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400 text-center">Status</th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400 text-right">MRR</th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400">Renewal Date</th>
                    <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {/* Row 1 */}
                  <tr className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <input className="rounded border-gray-300 text-[#0e7f90] focus:ring-[#0e7f90]" type="checkbox" />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6K2THpDxCZDvIv0L8Qe5O0mLCMbMdFlMdW6iLq7KIAU1eoGtL3wgeHadjEVzNb4g5vdo0UIIGie9yPa1WJOoasL4twTd1A9kTgMjYF59gV4LcChGJkbPWCakTe4XuqATLscscdBybcXzZhfN_vsoUzBek2QAVgtFPKDxwyqtrIlKgNI28tTL7sH1bPdLO9gBdWf9AbbiuhTthjlIjiM59u7lujTu7Bcv_1iWQwWRcUeecFEkJBSHbNh6BR7wzNrxzTk3hUaW2ntg')" }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold">Acme Corp</p>
                          <p className="text-xs text-gray-400">billing@acme.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0e7f90]/10 text-[#0e7f90]">ENTERPRISE</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-500">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-black">$1,200.00</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Oct 24, 2024</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-1 text-gray-400 hover:text-[#0e7f90] transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <input className="rounded border-gray-300 text-[#0e7f90] focus:ring-[#0e7f90]" type="checkbox" />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP-rnoOtM-ROtGrJPoHnxAmdXYOu_oSfxXdXm4FtmkJh2xeGByEZ6nmQcMfUSiciVgGRHymHIxrUYrHOiiQ8J6e9eWv5zv_My-0Oy-SRPUoHGNBf2kDZIjFJIwnIWGtGiEWmohsF4E4X8DiXlOLLr_0jBtSpwdZtofB2hr0ze8sIJCof2akpRM6H2nCq634OP6XkH7vlCaFH70cTYLSg0Vf3YBynXIMnwP2UARDbCUXTnfolYmNpFLH7uc4nekVQ5nT4lRPGljB8U')" }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold">John Doe</p>
                          <p className="text-xs text-gray-400">john@doe.io</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">PRO PLAN</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-500">
                        <span className="size-1.5 rounded-full bg-red-500"></span>
                        Past Due
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-black">$49.00</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Oct 12, 2024</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-1 text-gray-400 hover:text-[#0e7f90] transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <input className="rounded border-gray-300 text-[#0e7f90] focus:ring-[#0e7f90]" type="checkbox" />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW5lGVYqWWpyTdVEDV0-bDc8FLuxuS9qFsO-wYWWEJidNrkhPrA41s5uHt8NUPFsFpp-GwYQp4YpkWZJy6Rw4c_GjRdCAArNubawW7ZG2fSo-JZiPgf_fWX-6ZBG4T9zt5HVEOqnfojXOspErQOAqdhqadSYjX1z6fERrgMVnyupnPI2x8ANkhNz6K0SzRZuLQMKHBiBfvdeXzTw_gX8dPJ-NvPh_ryI5CN21Tgl7xsAT69s8dqEwVAQGveWKiohP6aHk7G1CEj8M')" }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold">Stellar Labs</p>
                          <p className="text-xs text-gray-400">ops@stellarlabs.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0e7f90]/10 text-[#0e7f90]">ENTERPRISE</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-500">
                        <span className="size-1.5 rounded-full bg-orange-500"></span>
                        Trial
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-black">$0.00</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Nov 02, 2024</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-1 text-gray-400 hover:text-[#0e7f90] transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                  {/* More Rows Placeholder */}
                  <tr className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <input className="rounded border-gray-300 text-[#0e7f90] focus:ring-[#0e7f90]" type="checkbox" />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKCSrn_Xy7vvEEqvEkza35s7CKzwTvTs0Aa6gg_Eqy6JfbhvOKFA5bj73yPbVVllPlAUUKLT0Gxta97lfK0FS6LjX0K5eKRyGDZCkwoGvNVDHITniL56o1Q4pun5T2TjJj_ocm_jXYqBdaZ-FVODUAF7HqgSfyr2CpIdxy__e-EFyPEHgRsBfthjUBQtOvTxa55PMPzUQGEgnp0rqG-W3_V5uqJ72wjftyLSfqiA4EyDvV9xhAW0eNgtSGs771I3EZFHgwXt0rb68')" }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold">Pulse Media</p>
                          <p className="text-xs text-gray-400">finance@pulse.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">STARTER</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-500">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-black">$29.00</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Oct 28, 2024</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-1 text-gray-400 hover:text-[#0e7f90] transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Pagination */}
              <div className="p-4 bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-[#0e7f90] transition-colors disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  <button className="size-8 flex items-center justify-center rounded-lg bg-[#0e7f90] text-white text-xs font-bold">1</button>
                  <button className="size-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold">2</button>
                  <button className="size-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold">3</button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="size-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold">125</button>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-[#0e7f90] transition-colors">
                  Next
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
