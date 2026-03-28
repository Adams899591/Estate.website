import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react'

const Dashboard = () => {

      const {properties, statusCount} = usePage().props;
  
    // Helper function to format large numbers (e.g., 1500 to 1.5K, 2000000 to 2M)
    const formatNumber = (num) => {

        if (num >= 1000000) {
          return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
          return (num / 1000).toFixed(1) + 'K';
        } else {
          return num;
        }
        
    }

  // Stats Grid Mock data for the dashboard
  const stats = [
    { title: 'Total Properties', value: `${formatNumber(statusCount.status_total)}`, change: '+12%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, color: 'bg-blue-500' },
    { title: 'Total Views', value: `${formatNumber(statusCount.total_view)}`, change: '+5.4%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>, color: 'bg-emerald-500' },
    { title: 'New Leads', value: '38', change: '-2%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: 'bg-amber-500' },
    { title: 'Revenue', value: '$12.5k', change: '+18%', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: 'bg-indigo-500' },
  ];

  // Calculate percentages for each property status to display in the chart
  const forRent  =  ((statusCount.for_rent / statusCount.status_total) * 100).toFixed(0);
  const forSale  =  ((statusCount.for_sale / statusCount.status_total) * 100).toFixed(0);
  const sold  =  ((statusCount.sold / statusCount.status_total) * 100).toFixed(0);

  

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
                        {/* table head */}
                        <thead className="bg-slate-50 text-slate-700 uppercase font-semibold">
                          <tr>
                            <th className="px-6 py-4">Property Name</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date Added</th>
                            <th className="px-6 py-4">Action</th>
                          </tr>
                        </thead>

                        {/* table body */}
                        <tbody className="divide-y divide-slate-100 whitespace-nowrap">
                         
                          {properties.data.map((property) => (
                            
                              <tr key={property.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="font-medium text-slate-900">{property.title}</div>
                                  <div className="text-xs text-slate-500">{property.city}</div>
                                </td>
                                <td className="px-6 py-4 font-medium">${property.price}</td>
                                <td className="px-6 py-4">
                                  {   property.status == "For Sale" ?  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">For Sale</span> 
                                      : property.status == "For Rent" ? <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">For Rent</span>
                                      : property.status == "Sold" ? <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Sold</span> : ""
                                   }
                                </td>
                                <td className="px-6 py-4">{property.created_at}</td>
                                <td className="px-6 py-4">
                                  <Link href={route('page.editProperty',{id : property.id})} className="text-slate-400 hover:text-blue-600 transition-colors font-medium">Edit</Link>
                                </td>
                              </tr>

                          ))}

                        </tbody>
                        
                      </table>
                    </div>
                  </div>

                  {/* Quick Actions / Chart Placeholder */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="font-bold text-lg text-slate-800 mb-6">Property Distribution</h3>
                    
                    {/* Simple CSS Chart Placeholder */}
                    <div className="space-y-6">

                        {/* For Sale */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-slate-700">For Sale</span>
                            <span className="text-slate-500">{forSale}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${forSale}%` }}></div>
                          </div>
                        </div>

                        {/* For Rent */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-slate-700">For Rent</span>
                            <span className="text-slate-500">{forRent}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2.5">
                            <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${forRent}%` }}></div>
                          </div>
                        </div>

                        {/* <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-slate-700">Industrial</span>
                            <span className="text-slate-500">10%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2.5">
                            <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div> */}

                      {/* Sold */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-slate-700">Sold</span>
                            <span className="text-slate-500">{sold}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2.5">
                            <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${sold}%` }}></div>
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