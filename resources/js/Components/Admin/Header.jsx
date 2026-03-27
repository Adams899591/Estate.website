import React from 'react'
import NotificationBell from './NotificationBell'
import { usePage } from '@inertiajs/react'

const Header = ({isNotificationsOpen,notificationsRef,isSidebarOpen,setIsSidebarOpen,setIsMobileMenuOpen,setIsNotificationsOpen }) => {

   // the notificationsCount is coming from AppServiceProvider.php so it can be globally accessable
    const {notificationsCount} = usePage().props;


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
                {notificationsCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/4 -translate-y-1/4">
                    {notificationsCount}
                  </span>
                )}
              </button>


                {/* header notification bell */}
                <NotificationBell isNotificationsOpen={isNotificationsOpen}/>

            </div>
          </div>
        </header>
     </>
  )
}

export default Header