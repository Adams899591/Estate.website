import React from 'react'

const Header = ({isNotificationsOpen,notificationsRef,isSidebarOpen,setIsSidebarOpen,setIsMobileMenuOpen,setIsNotificationsOpen }) => {
  return (
     <>
        {/* Header */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md hover:bg-slate-100 text-slate-600 focus:outline-none hidden md:block"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-slate-100 text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <h2 className="text-xl font-semibold text-slate-800">Dashboard Overview</h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
              />
              <span className="absolute left-3 top-2.5 text-slate-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
            </div>
            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={() => setIsNotificationsOpen(prev => !prev)}
                className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                {2 > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/4 -translate-y-1/4">
                    2
                  </span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute top-full mt-4 right-0 w-80 max-w-sm bg-white rounded-lg shadow-xl border border-slate-200 z-30">
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <h4 className="font-semibold text-slate-800">Notifications</h4>
                    <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</a>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {/* Payment Notification */}
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-green-100 text-green-600 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">Payment Received</span> for <span className="font-semibold text-slate-800">"Luxury Penthouse"</span>.</p>
                        <p className="text-xs text-slate-500 mt-1">Just now</p>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                    </a>
                    {/* New Admin Notification */}
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-purple-100 text-purple-600 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug">New Admin <span className="font-bold">Robert Smith</span> was added to the system.</p>
                        <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-blue-100 text-blue-600 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">John Doe</span> added a new property <span className="font-semibold text-slate-800">"Modern Suburban Villa"</span>.</p>
                        <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                    </a>
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-blue-100 text-blue-600 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">Jane Smith</span> sent you a message.</p>
                        <p className="text-xs text-slate-500 mt-1">15 minutes ago</p>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                    </a>
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-slate-100 text-slate-500 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">System</span> monthly report is ready <span className="font-semibold text-slate-800">"October 2023 Report"</span>.</p>
                        <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-slate-100 text-slate-500 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">Alice Johnson</span> updated property status <span className="font-semibold text-slate-800">"Seaside Retreat to Pending"</span>.</p>
                        <p className="text-xs text-slate-500 mt-1">3 hours ago</p>
                      </div>
                    </a>
                  </div>
                  <a href="#" className="block w-full text-center text-sm font-medium text-blue-600 hover:bg-slate-100 rounded-b-lg py-3 border-t border-slate-200">
                    Mark all as read
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
     </>
  )
}

export default Header