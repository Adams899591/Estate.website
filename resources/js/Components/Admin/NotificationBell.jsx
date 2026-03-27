import { Link, router, usePage } from '@inertiajs/react';
import React from 'react'

const NotificationBell = ({isNotificationsOpen}) => {

    // Note: the fetchNotifications is comming from AppServiceProvider.php so it can be globaly accessable
    const {fetchNotifications} = usePage().props;

    function handleButton($id) {
       const notifyId = $id
       router.get("/admin/notify_id",{notifyId: notifyId })
    }


  return (
      <>
      
            {isNotificationsOpen && (
                <div className="absolute top-full mt-4 right-0 w-80 max-w-sm bg-white rounded-lg shadow-xl border border-slate-200 z-30">
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <h4 className="font-semibold text-slate-800">Notifications</h4>
                    <Link href={route("page.messages")} className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</Link>
                  </div>
                  <div className="max-h-60 overflow-y-auto">


                    {/* Payment Notification */}
                    {/* <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-green-100 text-green-600 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug"><span className="font-bold">Payment Received</span> for <span className="font-semibold text-slate-800">"Luxury Penthouse"</span>.</p>
                        <p className="text-xs text-slate-500 mt-1">Just now</p>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                    </a> */}


                   {/* maping of data start hear */}
                   {fetchNotifications && fetchNotifications.map(notify => (
                   

                      <span key={notify.id}>

                            {/* New Admin Notification */}
                            {notify.title == "Team Update" && 

                                <span onClick={() => handleButton(notify.id)} className="flex items-start p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-purple-100 text-purple-600 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-700 leading-snug">{notify.message}</p>
                                    <p className="text-xs text-slate-500 mt-1">{notify.created_at}</p>
                                </div>
                                </span >
                            }


                            {/*  Property */}
                            {notify.title == "New Property Added" &&   

                                <span onClick={() => handleButton(notify.id)} className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50 cursor-pointer">
                                <div className="w-10 h-10 rounded-full flex-shrink-0 mr-4 mt-1 bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-700 leading-snug">{notify.message}.</p>
                                    <p className="text-xs text-slate-500 mt-1">{notify.created_at}</p>
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                                </span>
                            }


                      </span>

                   // maping of data end hear
                   ))}

                    {/* <a href="#" className="flex items-start p-4 hover:bg-slate-50 transition-colors bg-blue-50/50">
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
                    </a> */}


                  </div>
                  <Link href={route("bell.notify")}  className="block w-full text-center text-sm font-medium text-blue-600 hover:bg-slate-100 rounded-b-lg py-3 border-t border-slate-200">
                    Mark all as read
                  </Link>
                </div>
            )}
      
      </>
  )
}

export default NotificationBell