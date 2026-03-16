import React, { useState, useRef, useEffect } from 'react';
import Sidebar from "@/Components/Admin/Sidebar";
import MobileSidebar from '@/Components/Admin/MobileSidebar';
import Header from '@/Components/Admin/Header';
import { Link } from '@inertiajs/react';

const AdminDashboardLayout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">


      
      {/* ==================== SIDEBAR START ==================== */}
         <Sidebar isSidebarOpen={isSidebarOpen}  SidebarItem={SidebarItem}/>
      {/* ==================== SIDEBAR END ==================== */}



      {/* ==================== MOBILE SIDEBAR START ==================== */}
          <MobileSidebar isMobileMenuOpen={isMobileMenuOpen}  setIsMobileMenuOpen={setIsMobileMenuOpen}  SidebarItem={SidebarItem}/>
      {/* ==================== MOBILE SIDEBAR END ==================== */}



      {/* ==================== MAIN CONTENT START ==================== */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        
        {/* Header */}
        <Header isNotificationsOpen={isNotificationsOpen} notificationsRef={notificationsRef} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsNotificationsOpen={setIsNotificationsOpen}/>

        {/* Dashboard Content */}
        <main className="p-6 overflow-y-auto">
          
          {/* All content from all pages goes hear */}
          {children}

        </main>

      </div>
      {/* ==================== MAIN CONTENT END ==================== */}
    </div>
  );
};



const SidebarItem = ({pageLink, icon, text, active = false, isOpen, count }) => {
  return (
    <Link href={pageLink || '#'} className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
      <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
      <span className={`ml-4 font-medium transition-all duration-300 ${!isOpen && 'hidden w-0 overflow-hidden'}`}>{text}</span>
      {count && isOpen && (
        <span className="ml-auto bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
      )}
    </Link>
  );
};



export default AdminDashboardLayout;
