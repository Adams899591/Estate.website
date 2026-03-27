import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import React from 'react'

const Messages = () => {

    const {messages, flash} = usePage().props;

    //  console.log(messages);

    // this function handles Message Select Search
     function handlesMessageSelectSearch(e) {

      const value = e.target.value; // this get the value selected

        router.get("/admin/message",{message: value}, // send the value selected as a get parameter
                                       {preserveState: true, // ensure the velue sent stays during pagination
                                        preserveScroll: true // ensure the velue sent stay during pagination
                                       });


     }

    //   handle Update Notification
     function handleUpdateNotification(notifyId) {

        router.get("/admin/message-notify_id",{notifyId : notifyId})
     }
     
     

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


        {/* show success message */}
        { flash.success && (
            <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-6">
            {flash.success}
            </div>
        )}
        {/* show error message */}
        { flash.error && (
            <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-6">
            {flash.error}
            </div>
        )}



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
          <select onChange={handlesMessageSelectSearch} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Messages</option>
            <option value={0}>Un Read</option>
            <option value={1}>Read</option>
          </select>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">


            {/* Payment Notification with Download Receipt */}
            <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4">
                <div className="flex-shrink-0 pt-1">
                    {/* Example: Read Icon */}
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7m-6 0l4 4L19 7" />
                    </svg>
                </div>
                <div className="flex-1">
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
            </div>

          {/* start data maping */}
          {messages.data.map(message => (     
            
              <span key={message.id}>
              {/* spain that wrap all element and hold the key id */}


                   {/* map through this if message title is Team Update */}
                 {message.title == "Team Update" &&  

                    <div onClick={() => handleUpdateNotification(message.id)} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4" >
                                      <div className="flex-shrink-0 pt-1">
                                          {/* Dynamic Status Icon */}
                                          {message.is_read == 1 ? (
                                              <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                              </svg> 
                                          ) : (
                                              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1.5 ml-1"></div>
                                          )}
                                      </div>
                                      <div className="flex-1">
                                          <div className="flex justify-between items-start mb-2">
                                              <div className="flex items-center gap-2">
                                                  <span className="font-semibold text-slate-900">{message.title}</span>
                                                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">Administrator</span>
                                              </div>
                                              <span className="text-xs text-slate-500">{message.created_at}</span>
                                          </div>
                                          <h3 className={`text-sm mb-1 ${!message.is_read ? 'font-bold text-slate-900' : 'font-medium text-slate-800'}`}>
                                              {message.summary}
                                          </h3>
                                          <p className="text-sm text-slate-600 line-clamp-2">{message.message}</p>
                                      </div>
                    </div>

                  }


                  {/* map through this if message title is New Property Added */}
                  { message.title == "New Property Added" && 

                      <div onClick={() => handleUpdateNotification(message.id)} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4" >
                          <div className="flex-shrink-0 pt-1">
                              {/* Dynamic Status Icon */}
                              {message.is_read == 1 ? (
                                  <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg> 
                              ) : (
                                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1.5 ml-1"></div>
                              )}
                          </div>
                          <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center gap-2">
                                      <span className="font-semibold text-slate-900">{message.title}</span>
                                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">Property</span>
                                  </div>
                                  <span className="text-xs text-slate-500">{message.created_at}</span>
                              </div>
                              <h3 className={`text-sm mb-1 ${!message.is_read ? 'font-bold text-slate-900' : 'font-medium text-slate-800'}`}>
                                  {message.summary}
                              </h3>
                              <p className="text-sm text-slate-600 line-clamp-2">{message.message}</p>
                          </div>
                      </div>
                  }


              
              {/* spain that close all element and hold the key id */}
              </span>

          //  End data maping 
          ))} 
 

        </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center gap-2">
              {(messages.meta?.links || messages.links).map((link, index) => (
                  link.url ? (
                      <Link key={index} href={link.url} className={`px-3 py-1 border rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`} dangerouslySetInnerHTML={{__html: link.label}} />
                  ) : (
                      <span key={index} className="px-3 py-1 border rounded text-gray-400" dangerouslySetInnerHTML={{__html: link.label}}></span>
                  )
              ))}
          </div>


      </div>
    </> 
  )
}

Messages.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Messages