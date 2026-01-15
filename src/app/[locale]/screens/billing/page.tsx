import React from 'react';

export default function BillingHistoryPage() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#22262a] font-display text-[#101819] dark:text-[#f9fbfb]">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-[#d3e1e3] dark:border-[#3a4148] bg-white dark:bg-[#1a1d21] hidden lg:flex flex-col sticky top-0 h-screen">
          <div className="p-6 flex flex-col h-full">
            {/* Org Info */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1e5f67]/10 rounded-lg p-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwIfTGWN2_8uRY8hg-8IBJnNXNokvrmmuOYpG4MtPOlZzmt2RXRUxXM-MIU9zy_IwkrqGeQGgZsc-6Xr3d44Ux6RLzY1IbBzL9JxBjrAfzQ3xQ5KL6Z22jV53_XwcbNnFNT0_04Lv61i6S6Ks_dJyAamX7LjSzgICyGSnTFvvwOD-fHSpKVM03hvTPtmVzZq4CFTB-_0aqdA3l8cLLavXpOVnU3Aep33A_AiIAMG42RG9ABIKVs14pVgJGxfJRtMJAwV0MtUPV8mk')" }}
                ></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#101819] dark:text-[#f9fbfb] text-base font-bold leading-tight">Growth Team</h1>
                <p className="text-[#5a868c] text-xs font-medium uppercase tracking-wider">Business Plan</p>
              </div>
            </div>
            {/* Nav Links */}
            <nav className="flex flex-col gap-1.5 grow">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5a868c] hover:bg-[#1e5f67]/5 hover:text-[#1e5f67] transition-colors" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-semibold">Dashboard</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5a868c] hover:bg-[#1e5f67]/5 hover:text-[#1e5f67] transition-colors" href="#">
                <span className="material-symbols-outlined">subscriptions</span>
                <span className="text-sm font-semibold">Subscriptions</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e5f67]/10 text-[#1e5f67]" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                <span className="text-sm font-bold">Billing</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5a868c] hover:bg-[#1e5f67]/5 hover:text-[#1e5f67] transition-colors" href="#">
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm font-semibold">Team</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5a868c] hover:bg-[#1e5f67]/5 hover:text-[#1e5f67] transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-semibold">Settings</span>
              </a>
            </nav>
            {/* User Profile */}
            <div className="pt-6 border-t border-[#d3e1e3] dark:border-[#3a4148]">
              <div className="flex items-center gap-3 p-2">
                <div className="size-8 rounded-full bg-[#1e5f67]/20 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-[#1e5f67] text-xl">account_circle</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-[#101819] dark:text-[#f9fbfb]">Alex Rivera</p>
                  <p className="text-[10px] text-[#5a868c]">Admin Access</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {/* Header & Breadcrumbs */}
          <header className="max-w-6xl mx-auto w-full px-6 pt-8 pb-4">
            <nav className="flex items-center gap-2 mb-4 text-[#5a868c] text-sm font-medium">
              <a className="hover:text-[#1e5f67] transition-colors" href="#">Home</a>
              <span className="text-xs">/</span>
              <a className="hover:text-[#1e5f67] transition-colors" href="#">Billing</a>
              <span className="text-xs">/</span>
              <span className="text-[#101819] dark:text-white">History</span>
            </nav>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-4xl font-black text-[#101819] dark:text-white tracking-tight">Billing History</h2>
                <p className="text-[#5a868c] mt-1">Review and manage your company&apos;s past and upcoming invoices.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1e5f67] text-white rounded-lg font-bold text-sm shadow-sm hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-sm">download</span>
                Export CSV
              </button>
            </div>
          </header>
          {/* Quick Stats */}
          <section className="max-w-6xl mx-auto w-full px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1a1d21] p-6 rounded-xl border border-[#d3e1e3] dark:border-[#3a4148] shadow-sm flex flex-col gap-2">
                <p className="text-[#5a868c] text-xs font-bold uppercase tracking-widest">Total Billed</p>
                <p className="text-2xl font-black text-[#101819] dark:text-white">$12,450.00</p>
                <p className="text-[#078834] text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  +12.4% vs last period
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a1d21] p-6 rounded-xl border border-[#d3e1e3] dark:border-[#3a4148] shadow-sm flex flex-col gap-2">
                <p className="text-[#5a868c] text-xs font-bold uppercase tracking-widest">Pending Amount</p>
                <p className="text-2xl font-black text-[#101819] dark:text-white">$450.00</p>
                <p className="text-[#e73108] text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">info</span>
                  Due within 14 days
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a1d21] p-6 rounded-xl border border-[#d3e1e3] dark:border-[#3a4148] shadow-sm flex flex-col gap-2">
                <p className="text-[#5a868c] text-xs font-bold uppercase tracking-widest">Active Seats</p>
                <p className="text-2xl font-black text-[#101819] dark:text-white">24</p>
                <p className="text-[#5a868c] text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">person</span>
                  Scale plan
                </p>
              </div>
            </div>
          </section>
          {/* Filters Toolbar */}
          <section className="max-w-6xl mx-auto w-full px-6 py-4">
            <div className="bg-white dark:bg-[#1a1d21] rounded-xl border border-[#d3e1e3] dark:border-[#3a4148] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 grow max-w-2xl">
                {/* Search */}
                <div className="relative grow max-w-sm">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5a868c] text-xl">search</span>
                  <input className="w-full pl-10 pr-4 py-2 bg-[#fafafa] dark:bg-[#22262a] border-[#d3e1e3] dark:border-[#3a4148] rounded-lg text-sm focus:ring-[#1e5f67] focus:border-[#1e5f67]" placeholder="Search customer or ID..." type="text" />
                </div>
                {/* Date Picker Mockup */}
                <div className="relative">
                  <button className="flex items-center gap-2 px-3 py-2 bg-[#fafafa] dark:bg-[#22262a] border border-[#d3e1e3] dark:border-[#3a4148] rounded-lg text-sm font-semibold text-[#101819] dark:text-[#f9fbfb]">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                    <span>Last 30 Days</span>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </button>
                </div>
                {/* Status Filter */}
                <div className="relative">
                  <button className="flex items-center gap-2 px-3 py-2 bg-[#fafafa] dark:bg-[#22262a] border border-[#d3e1e3] dark:border-[#3a4148] rounded-lg text-sm font-semibold text-[#101819] dark:text-[#f9fbfb]">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    <span>Status: All</span>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">refresh</span>
                </button>
                <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">view_column</span>
                </button>
              </div>
            </div>
          </section>
          {/* Invoices Table */}
          <section className="max-w-6xl mx-auto w-full px-6 pb-20">
            <div className="bg-white dark:bg-[#1a1d21] rounded-xl border border-[#d3e1e3] dark:border-[#3a4148] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#fafafa] dark:bg-[#1f2328] border-b border-[#d3e1e3] dark:border-[#3a4148]">
                      <th className="p-4 w-8"><input className="rounded border-[#d3e1e3] text-[#1e5f67] focus:ring-[#1e5f67]" type="checkbox" /></th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c]">Invoice ID</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c]">Customer</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c]">Date</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c]">Amount</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c]">Status</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-[#5a868c] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d3e1e3] dark:divide-[#3a4148]">
                    {/* Row 1 */}
                    <tr className="hover:bg-[#1e5f67]/[0.02] transition-colors group">
                      <td className="p-4"><input className="rounded border-[#d3e1e3] text-[#1e5f67] focus:ring-[#1e5f67]" type="checkbox" /></td>
                      <td className="p-4 font-bold text-[#1e5f67]">#INV-8821</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#101819] dark:text-[#f9fbfb]">Acme Corp.</span>
                          <span className="text-xs text-[#5a868c]">billing@acme.com</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[#5a868c]">Oct 12, 2023</td>
                      <td className="p-4 font-bold text-[#101819] dark:text-[#f9fbfb]">$299.00</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32' }}>
                          <span className="size-1.5 rounded-full bg-[#2e7d32]"></span>
                          Paid
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/10 hover:text-[#1e5f67] rounded-lg transition-all" title="Download PDF">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-[#1e5f67]/[0.02] transition-colors group">
                      <td className="p-4"><input className="rounded border-[#d3e1e3] text-[#1e5f67] focus:ring-[#1e5f67]" type="checkbox" /></td>
                      <td className="p-4 font-bold text-[#1e5f67]">#INV-8819</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#101819] dark:text-[#f9fbfb]">Stark Indust.</span>
                          <span className="text-xs text-[#5a868c]">p.potts@stark.com</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[#5a868c]">Oct 10, 2023</td>
                      <td className="p-4 font-bold text-[#101819] dark:text-[#f9fbfb]">$1,240.00</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit" style={{ backgroundColor: 'rgba(255, 179, 71, 0.1)', color: '#e68a00' }}>
                          <span className="size-1.5 rounded-full bg-[#e68a00]"></span>
                          Pending
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/10 hover:text-[#1e5f67] rounded-lg transition-all">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-[#1e5f67]/[0.02] transition-colors group">
                      <td className="p-4"><input className="rounded border-[#d3e1e3] text-[#1e5f67] focus:ring-[#1e5f67]" type="checkbox" /></td>
                      <td className="p-4 font-bold text-[#1e5f67]">#INV-8815</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#101819] dark:text-[#f9fbfb]">Wayne Ent.</span>
                          <span className="text-xs text-[#5a868c]">b.wayne@wayne.co</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[#5a868c]">Oct 05, 2023</td>
                      <td className="p-4 font-bold text-[#101819] dark:text-[#f9fbfb]">$299.00</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit" style={{ backgroundColor: 'rgba(204, 92, 92, 0.1)', color: '#c62828' }}>
                          <span className="size-1.5 rounded-full bg-[#c62828]"></span>
                          Failed
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/10 hover:text-[#1e5f67] rounded-lg transition-all">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-[#1e5f67]/[0.02] transition-colors group">
                      <td className="p-4"><input className="rounded border-[#d3e1e3] text-[#1e5f67] focus:ring-[#1e5f67]" type="checkbox" /></td>
                      <td className="p-4 font-bold text-[#1e5f67]">#INV-8812</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#101819] dark:text-[#f9fbfb]">Cyberdyne Systems</span>
                          <span className="text-xs text-[#5a868c]">miles@cyberdyne.io</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[#5a868c]">Sep 28, 2023</td>
                      <td className="p-4 font-bold text-[#101819] dark:text-[#f9fbfb]">$2,450.00</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32' }}>
                          <span className="size-1.5 rounded-full bg-[#2e7d32]"></span>
                          Paid
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-[#5a868c] hover:bg-[#1e5f67]/10 hover:text-[#1e5f67] rounded-lg transition-all">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Pagination Footer */}
              <div className="p-4 border-t border-[#d3e1e3] dark:border-[#3a4148] flex items-center justify-between">
                <p className="text-sm text-[#5a868c]">Showing <span className="font-bold">1-4</span> of <span className="font-bold">124</span> invoices</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-[#fafafa] dark:bg-[#22262a] border border-[#d3e1e3] dark:border-[#3a4148] rounded-lg text-sm font-bold text-[#5a868c] disabled:opacity-50">
                    Previous
                  </button>
                  <button className="px-3 py-1.5 bg-[#1e5f67] text-white rounded-lg text-sm font-bold shadow-sm">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
