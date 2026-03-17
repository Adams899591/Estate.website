import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

const Settings = () => {
  const [notifications, setNotifications] = useState({
    newProperties: true,
    newMessages: true,
    weeklySummary: false,
  });

  return (
      <>
        <Head title="Settings" />

        {/* Page Header */}
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your account and site settings.</p>
        </div>

        <div className="space-y-8">
            {/* Profile Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Profile Information</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                        <input id="name" type="text" defaultValue="John Doe" className="w-full md:w-1/2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
                        <input id="email" type="email" defaultValue="admin@devluxestates.com" className="w-full md:w-1/2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                </div>
            </div>

            {/* Update Password Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Update Password</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="current_password" className="block text-sm font-medium text-slate-600 mb-1">Current Password</label>
                        <input id="current_password" type="password" className="w-full md:w-1/2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="new_password" className="block text-sm font-medium text-slate-600 mb-1">New Password</label>
                        <input id="new_password" type="password" className="w-full md:w-1/2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-slate-600 mb-1">Confirm New Password</label>
                        <input id="confirm_password" type="password" className="w-full md:w-1/2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                </div>
            </div>

            {/* Notification Settings Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Notifications</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="font-medium text-slate-700">New property alerts</p>
                            <p className="text-sm text-slate-500">Get notified when a new property is listed.</p>
                        </div>
                        <label htmlFor="newProperties" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="newProperties" className="sr-only" checked={notifications.newProperties} onChange={() => setNotifications(prev => ({...prev, newProperties: !prev.newProperties}))} />
                                <div className="block bg-slate-200 w-14 h-8 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"></div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="font-medium text-slate-700">New messages</p>
                            <p className="text-sm text-slate-500">Get notified when you receive a new message.</p>
                        </div>
                        <label htmlFor="newMessages" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="newMessages" className="sr-only" checked={notifications.newMessages} onChange={() => setNotifications(prev => ({...prev, newMessages: !prev.newMessages}))} />
                                <div className="block bg-slate-200 w-14 h-8 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4">
                <button type="button" className="px-6 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    Save Changes
                </button>
            </div>
        </div>
        <style>{`
            input:checked ~ .dot {
              transform: translateX(1.5rem);
            }
            input:checked ~ .block {
                background-color: #3b82f6;
            }
        `}</style>
      </>
  )
}

Settings.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>
export default Settings