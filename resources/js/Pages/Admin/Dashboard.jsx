import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head } from '@inertiajs/react';
import React from 'react'

const Dashboard = () => {

  // Stats Grid Mock data for the dashboard
  const stats = [
    { title: 'Total Properties', value: '124', change: '+12%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, color: 'bg-blue-500' },
    { title: 'Total Views', value: '45.2k', change: '+5.4%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>, color: 'bg-emerald-500' },
    { title: 'New Leads', value: '38', change: '-2%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: 'bg-amber-500' },
    { title: 'Revenue', value: '$12.5k', change: '+18%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: 'bg-indigo-500' },
  ];


  return (
     <>
        <Head title="Dashboard" />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                      <h3 className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color} text-white bg-opacity-90`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className={`${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'} font-semibold`}>
                      {stat.change}
                    </span>
                    <span className="text-slate-400 ml-2">from last month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
                  {/* Recent Properties Table */}
                  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                      <h3 className="font-bold text-lg text-slate-800">Recent Properties</h3>
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700 uppercase font-semibold">
                          <tr>
                            <th className="px-6 py-4">Property Name</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date Added</th>
                            <th className="px-6 py-4">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 whitespace-nowrap">
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">Modern Suburban Villa</div>
                              <div className="text-xs text-slate-500">Los Angeles, CA</div>
                            </td>
                            <td className="px-6 py-4 font-medium">$2,800,000</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">For Sale</span>
                            </td>
                            <td className="px-6 py-4">2023-10-15</td>
                            <td className="px-6 py-4">
                              <button className="text-slate-400 hover:text-blue-600 transition-colors font-medium">Edit</button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">Skyline Penthouse</div>
                              <div className="text-xs text-slate-500">New York, NY</div>
                            </td>
                            <td className="px-6 py-4 font-medium">$25,000/mo</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">For Rent</span>
                            </td>
                            <td className="px-6 py-4">2023-10-14</td>
                            <td className="px-6 py-4">
                              <button className="text-slate-400 hover:text-blue-600 transition-colors font-medium">Edit</button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">The Grand Oak Mansion</div>
                              <div className="text-xs text-slate-500">Greenwich, CT</div>
                            </td>
                            <td className="px-6 py-4 font-medium">$7,500,000</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">For Sale</span>
                            </td>
                            <td className="px-6 py-4">2023-10-12</td>
                            <td className="px-6 py-4">
                              <button className="text-slate-400 hover:text-blue-600 transition-colors font-medium">Edit</button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">Seaside Retreat</div>
                              <div className="text-xs text-slate-500">Malibu, CA</div>
                            </td>
                            <td className="px-6 py-4 font-medium">$4,200,000</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">Pending</span>
                            </td>
                            <td className="px-6 py-4">2023-10-10</td>
                            <td className="px-6 py-4">
                              <button className="text-slate-400 hover:text-blue-600 transition-colors font-medium">Edit</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Quick Actions / Chart Placeholder */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="font-bold text-lg text-slate-800 mb-6">Property Distribution</h3>
                    
                    {/* Simple CSS Chart Placeholder */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700">Residential</span>
                          <span className="text-slate-500">65%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700">Commercial</span>
                          <span className="text-slate-500">20%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5">
                          <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700">Industrial</span>
                          <span className="text-slate-500">10%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5">
                          <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700">Land</span>
                          <span className="text-slate-500">5%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5">
                          <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
     </>
  )
}



Dashboard.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Dashboard