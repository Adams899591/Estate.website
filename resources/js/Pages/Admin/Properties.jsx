import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import React from 'react'

const Properties = () => {
    const {properties,flash,inputSearch} = usePage().props;
         
    //  this is used to shorten title text
    const shortenText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + '...';
    };

    // this function handle Statuse Change
    function handleStatuseChange(e){
        const value = e.target.value; // this get the value selected

        router.get("/admin/properties",{status: value}, // send the value selected as a get parameter
                                       {preserveState: true, // ensure the velue sent stays during pagination
                                        preserveScroll: true // ensure the velue sent stay during pagination
                                       }); 
    };

    // this function handle Types Change
    function handleTypesChange(e){
        const value = e.target.value; // this get the value selected

        router.get("/admin/properties",{type: value}, // send the value selected as a get parameter
                                       {preserveState: true, // ensure the velue sent stays during pagination
                                        preserveScroll: true // ensure the velue sent stay during pagination
                                       });       
    }

    // this function handle Inpute Search Change
    function handleInputeSearchChange(e) {

        const value = e.target.value; // this get the value selected

        router.get("/admin/properties",{inputSearch: value}, // send the value selected as a get parameter
                                       {preserveState: true, // ensure the velue sent stays during pagination
                                        preserveScroll: true // ensure the velue sent stay during pagination
                                       }); 
    }


  return (
    <>
      <Head title="Properties" />
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Properties</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your property listings</p>
        </div>
        <Link href={route("page.addProperty")} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          Add Property
        </Link>
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
            onChange={handleInputeSearchChange}
            type="text"
            value={inputSearch || ""}
            placeholder="Search properties..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <select onChange={handleStatuseChange} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>For Sale</option>
            <option>For Rent</option>
            <option>Sold</option>
          </select>
          <select onChange={handleTypesChange} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Types</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Commercial</option>
          </select>
        </div>
      </div>


      {/* Properties Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            {/* table header */}
            <thead className="bg-slate-50 text-slate-700 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Agent</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* table body */}
             <tbody className="divide-y divide-slate-100 whitespace-nowrap">
              
              {properties.data.map(property => (

                <tr key={property.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-slate-200 flex items-center justify-center text-slate-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{shortenText(property.title,15)}</div>
                        <div className="text-xs text-slate-500">{property.city}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{property.type}</td>
                  <td className="px-6 py-4">
                    {  property.status == "For Sale" ? <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">For Sale</span>
                       : property.status == "For Rent" ? <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">For Rent</span>
                       : property.status == "Sold" ?  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Sold</span> : ""                                                                                                                                
                    }
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">${property.price}</td>
                  <td className="px-6 py-4">{property.name}</td>
                  <td className="px-6 py-4 text-slate-500">{property.created_at}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={route("page.editProperty",{id: property.id})} className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </Link >
                      <Link  href={route("deleteProperty",{id: property.id})}  className="p-2 hover:bg-slate-200 rounded text-slate-500 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </Link >
                    </div>
                  </td>
                </tr>

              ))}

            </tbody>

          </table>
        </div>

            {/* Pagination Links - Moved outside table */}
          <div className="mt-4 flex justify-center gap-2">
              {(properties.meta?.links || properties.links).map((link, index) => (
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

Properties.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Properties
