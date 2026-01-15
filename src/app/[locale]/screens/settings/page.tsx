import React from 'react';

export default function SettingsPage() {
  return (
    <div className="bg-[#f9fafb] dark:bg-[#1a1e23] font-display text-slate-900 dark:text-slate-100 antialiased h-full min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1a1e23]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <div className="bg-[#106c7e] p-1.5 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">FluxScale</h2>
              </div>
              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-1.5 gap-2 border border-transparent focus-within:border-[#106c7e]/50 transition-all">
                <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-slate-500" placeholder="Jump to setting..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-[#106c7e] transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-[#106c7e] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a1e23]"></span>
              </button>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Alex Morgan</p>
                  <p className="text-[10px] text-slate-500">Growth Plan</p>
                </div>
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMPZfx5Sz6IvRncHtycRo4kow7UKWMwPl8V2W2D0eqkBeLG8LKGIVWWInIBhCED22bCE3_LzBOWIuflJZiLO0dkbYnvtg-aPZb67mWXi_MaGLuEyFAVNHLyCNZRZcdn97Ldj7qj9hVocxWwvfW0eAYOUv1f7hcN2VTnex25UZvA_WQj3RosLbnHAVsHJPkYBcR3GicjT0-HWkIG08FeJzWZGAZujghFVmNDc1DioKG1EdQB4krmFwMAH6sxQ7KmRwe_5VGe-__a24')" }}
                ></div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 max-w-[1440px] mx-auto w-full">
          {/* Sidebar Navigation */}
          <aside className="w-72 hidden lg:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a1e23] pt-8">
            <div className="px-6 mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Workspace</h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">Growth Dynamics LLC</p>
            </div>
            <nav className="flex-1 space-y-1">
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span className="text-sm font-semibold">Overview</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">group</span>
                <span className="text-sm font-semibold">Customers</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                <span className="text-sm font-semibold">Subscriptions</span>
              </a>
              <div className="pt-6 pb-2 px-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Configuration</h3>
              </div>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">tune</span>
                <span className="text-sm font-semibold">General</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 font-semibold" style={{ backgroundColor: 'rgba(16, 108, 126, 0.1)', color: '#106c7e', borderRight: '3px solid #106c7e' }} href="#">
                <span className="material-symbols-outlined text-[20px] fill-[#106c7e]">webhook</span>
                <span className="text-sm">Webhooks</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">currency_exchange</span>
                <span className="text-sm font-semibold">Currency & Tax</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                <span className="text-sm font-semibold">Notifications</span>
              </a>
              <a className="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">key</span>
                <span className="text-sm font-semibold">API Keys</span>
              </a>
            </nav>
            <div className="p-6">
              <div className="bg-[#106c7e]/5 dark:bg-[#106c7e]/10 rounded-xl p-4 border border-[#106c7e]/10">
                <p className="text-xs font-bold text-[#106c7e]">Need help?</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 mb-3 leading-relaxed">View documentation for advanced configurations.</p>
                <button className="w-full py-2 bg-[#106c7e] text-white rounded-lg text-xs font-bold hover:bg-[#106c7e]/90 transition-all">Docs & Guides</button>
              </div>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 bg-[#f9fafb] dark:bg-[#1a1e23] p-6 lg:p-12">
            <div className="max-w-[960px] mx-auto">
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="flex-1 min-w-0">
                  <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                    <span>Settings</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">Dashboard & Subscriptions</span>
                  </nav>
                  <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dashboard Settings</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Configure how your business engine interacts with external services and global markets.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">Discard</button>
                  <button className="px-5 py-2.5 bg-[#106c7e] text-white rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-[#106c7e]/20 transition-all">Save Changes</button>
                </div>
              </div>
              <div className="space-y-10">
                {/* Section: Webhooks */}
                <section id="webhooks">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#106c7e]">webhook</span>
                        Webhook Endpoints
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">Receive real-time updates when subscription events occur.</p>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold text-[#106c7e] hover:text-[#106c7e]/80 transition-all">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      Add Endpoint
                    </button>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">URL Endpoint</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Events</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded bg-[#106c7e]/10 text-[#106c7e] flex items-center justify-center font-bold text-[10px]">API</span>
                                <div>
                                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">https://api.growthdynamics.io/hooks/v1</p>
                                  <p className="text-[11px] text-slate-400">Production environment</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-5 text-center">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">12 events</span>
                            </td>
                            <td className="px-6 py-5">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-5 text-right">
                              <div className="flex justify-end gap-3 text-slate-400">
                                <button className="hover:text-[#106c7e] transition-colors"><span className="material-symbols-outlined text-[20px]">play_circle</span></button>
                                <button className="hover:text-[#106c7e] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                                <button className="hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-[10px]">WEB</span>
                                <div>
                                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">https://hooks.slack.com/services/T001...</p>
                                  <p className="text-[11px] text-slate-400">Slack Notifications</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-5 text-center">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">2 events</span>
                            </td>
                            <td className="px-6 py-5">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                Paused
                              </span>
                            </td>
                            <td className="px-6 py-5 text-right">
                              <div className="flex justify-end gap-3 text-slate-400">
                                <button className="hover:text-[#106c7e] transition-colors"><span className="material-symbols-outlined text-[20px]">play_circle</span></button>
                                <button className="hover:text-[#106c7e] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                                <button className="hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* Section: Currency & Tax */}
                <section id="currency-tax">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Currency Card */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-[#106c7e]/10 flex items-center justify-center text-[#106c7e]">
                          <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Currency</h3>
                          <p className="text-xs text-slate-500">Global transaction controls</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Base Currency</label>
                          <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 px-4 text-sm focus:border-[#106c7e] focus:ring-1 focus:ring-[#106c7e] outline-none transition-all">
                            <option>USD - US Dollar ($)</option>
                            <option>EUR - Euro (€)</option>
                            <option>GBP - British Pound (£)</option>
                            <option>JPY - Japanese Yen (¥)</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Multi-currency Support</p>
                            <p className="text-xs text-slate-500">Allow checkout in customers local currency</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#106c7e]"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Tax Card */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-[#106c7e]/10 flex items-center justify-center text-[#106c7e]">
                          <span className="material-symbols-outlined">description</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tax Config</h3>
                          <p className="text-xs text-slate-500">Tax IDs and rate overrides</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Default Rate (%)</label>
                            <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 px-4 text-sm focus:border-[#106c7e] focus:ring-1 focus:ring-[#106c7e] outline-none transition-all" type="number" defaultValue="7.5" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">VAT Number</label>
                            <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 px-4 text-sm focus:border-[#106c7e] focus:ring-1 focus:ring-[#106c7e] outline-none transition-all" placeholder="GB12345678" type="text" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Tax-Inclusive Pricing</p>
                            <p className="text-xs text-slate-500">Display prices with taxes included</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#106c7e]"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Notifications */}
                <section id="notifications">
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600">
                        <span className="material-symbols-outlined">notifications_active</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Critical Alerts</h3>
                        <p className="text-xs text-slate-500">Automated messaging for account and payment health</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                        <div className="pt-1">
                          <input defaultChecked className="w-4 h-4 text-[#106c7e] bg-white border-slate-300 rounded focus:ring-[#106c7e]" type="checkbox" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Failed Payment Alerts</p>
                          <p className="text-xs text-slate-500 mt-0.5">Notify the growth team immediately when a high-value subscription fails renewal.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                        <div className="pt-1">
                          <input defaultChecked className="w-4 h-4 text-[#106c7e] bg-white border-slate-300 rounded focus:ring-[#106c7e]" type="checkbox" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">New Subscriber Digest</p>
                          <p className="text-xs text-slate-500 mt-0.5">Receive a daily summary of new active subscriptions and upgrades.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        <div className="pt-1">
                          <input className="w-4 h-4 text-[#106c7e] bg-white border-slate-300 rounded focus:ring-[#106c7e]" type="checkbox" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Webhook Failure Warnings</p>
                          <p className="text-xs text-slate-500 mt-0.5">Alert technical contacts if a production endpoint returns 5xx errors.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        <div className="pt-1">
                          <input className="w-4 h-4 text-[#106c7e] bg-white border-slate-300 rounded focus:ring-[#106c7e]" type="checkbox" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Churn Risk Signals</p>
                          <p className="text-xs text-slate-500 mt-0.5">Notify when a customer cancels their subscription during the billing cycle.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* Footer Help */}
              <div className="mt-16 text-center border-t border-slate-200 dark:border-slate-800 pt-10">
                <p className="text-slate-500 text-sm">Facing issues with your configuration?</p>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <a className="text-[#106c7e] font-bold text-sm hover:underline" href="#">Contact Support</a>
                  <a className="text-[#106c7e] font-bold text-sm hover:underline" href="#">Community Forum</a>
                  <a className="text-[#106c7e] font-bold text-sm hover:underline" href="#">Developer Hub</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
