import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Agents = () => {
  return (
     <>
        <Head title="Agents" />

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Agents</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your agents</p>
          </div>
          <Link href='#' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Add Agent
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
            <input 
                type="text" 
                placeholder="Search agents..." 
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <span className="absolute left-3 top-2.5 text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
            <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            </div>
        </div>

        {/* Agents Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 uppercase font-semibold">
                <tr>
                    <th className="px-6 py-4 whitespace-nowrap">Agent</th>
                    <th className="px-6 py-4 whitespace-nowrap">Contact</th>
                    <th className="px-6 py-4 whitespace-nowrap">Properties</th>
                    <th className="px-6 py-4 whitespace-nowrap">Status</th>
                    <th className="px-6 py-4 whitespace-nowrap">Joined Date</th>
                    <th className="px-6 py-4 text-right whitespace-nowrap">Actions</th>
                </tr>
              </thead>
                <tbody className="divide-y divide-slate-100 whitespace-nowrap">
                {/* Agent 1 */}
                <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-slate-200 flex items-center justify-center text-slate-400">
                        <span className="font-bold text-slate-600">JD</span>
                        </div>
                        <div>
                        <div className="font-medium text-slate-900">John Doe</div>
                        <div className="text-xs text-slate-500">john.doe@example.com</div>
                        </div>
                    </div>
                    </td>
                    <td className="px-6 py-4">+1 234 567 890</td>
                    <td className="px-6 py-4">12</td>
                    <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Active
                    </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">2023-01-15</td>
                    <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    </td>
                </tr>
                {/* Agent 2 */}
                <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-slate-200 flex items-center justify-center text-slate-400">
                        <span className="font-bold text-slate-600">JS</span>
                        </div>
                        <div>
                        <div className="font-medium text-slate-900">Jane Smith</div>
                        <div className="text-xs text-slate-500">jane.smith@example.com</div>
                        </div>
                    </div>
                    </td>
                    <td className="px-6 py-4">+1 987 654 321</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Active
                    </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">2022-11-20</td>
                    <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    </td>
                </tr>
                {/* Agent 3 */}
                <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-slate-200 flex items-center justify-center text-slate-400">
                        <span className="font-bold text-slate-600">AJ</span>
                        </div>
                        <div>
                        <div className="font-medium text-slate-900">Alice Johnson</div>
                        <div className="text-xs text-slate-500">alice.j@example.com</div>
                        </div>
                    </div>
                    </td>
                    <td className="px-6 py-4">+1 555 123 456</td>
                    <td className="px-6 py-4">5</td>
                    <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        Inactive
                    </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">2023-05-10</td>
                    <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            
            {/* Pagination */}
                    {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing 1 to 4 of 4 entries</span>
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
Agents.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Agents