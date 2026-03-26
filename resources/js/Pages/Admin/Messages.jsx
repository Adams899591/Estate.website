import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Messages = () => {
  return (
    <>
      <Head title="Messages" />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Messages</h1>
          <p className="text-slate-500 text-sm mt-1">View and manage inquiries</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Messages</option>
            <option>Unread</option>
            <option>Read</option>
          </select>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
            {/* Payment Notification with Download Receipt */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-green-500 bg-green-50/30">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">System Notification</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Payment</span>
                    </div>
                    <span className="text-xs text-slate-500">Just now</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-sm font-medium text-slate-800 mb-1">Payment Confirmed: Luxury Penthouse</h3>
                        <p className="text-sm text-slate-600">The full payment for the Luxury Penthouse has been received and verified.</p>
                    </div>
                    <button className="flex-shrink-0 bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 w-fit">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Receipt
                    </button>
                </div>
            </div>

            {/* New Product Notification (Duplicated from Header) */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">Admin Activity</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">New Property</span>
                    </div>
                    <span className="text-xs text-slate-500">10 mins ago</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800 mb-1">New Property Added: Modern Suburban Villa</h3>
                <p className="text-sm text-slate-600 line-clamp-2">John Doe has successfully added a new property listing to the database.</p>
            </div>

            {/* New Admin Notification */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">Team Update</span>
                    </div>
                    <span className="text-xs text-slate-500">1 hour ago</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800 mb-1">New Administrator Joined</h3>
                <p className="text-sm text-slate-600 line-clamp-2">Robert Smith has been added as a new administrator. You can now assign tasks to them.</p>
            </div>

            {/* Mock Message Item 1 */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-blue-500 bg-blue-50/30">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">John Buyer</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">New</span>
                    </div>
                    <span className="text-xs text-slate-500">2 hours ago</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800 mb-1">Inquiry about Modern Suburban Villa</h3>
                <p className="text-sm text-slate-600 line-clamp-2">Hi, I'm interested in viewing this property. Is it available for a tour this weekend? I am available on Saturday afternoon.</p>
            </div>

            {/* Mock Message Item 2 */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-transparent">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">Sarah Renter</span>
                    </div>
                    <span className="text-xs text-slate-500">Yesterday</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800 mb-1">Question regarding pet policy</h3>
                <p className="text-sm text-slate-600 line-clamp-2">Hello, I saw the Skyline Penthouse listing. Does the building allow small dogs? I have a pug.</p>
            </div>

             {/* Mock Message Item 3 */}
             <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-transparent">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">Real Estate Weekly</span>
                    </div>
                    <span className="text-xs text-slate-500">Oct 20, 2023</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800 mb-1">Newsletter: Market Trends</h3>
                <p className="text-sm text-slate-600 line-clamp-2">Check out the latest trends in the housing market for Q4. Prices are stabilizing in most regions...</p>
            </div>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing 1 to 3 of 3 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-600 text-sm disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-600 text-sm" disabled>Next</button>
          </div>
        </div>
      </div>
    </> 
  )
}

Messages.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Messages