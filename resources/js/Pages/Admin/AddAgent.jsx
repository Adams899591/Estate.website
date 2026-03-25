import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const AddAgent = () => {
  const { data, setData, put, processing, errors } = useForm({
    name: '',
    email: "",
    phone: "",
    role: '',
    status: '',
    password: '',
    password_confirmation: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
       
     put(route('addAgent'), {
        // You can add callbacks here, e.g., for success
        onSuccess: () => {
            // Optionally, reset the form or show a success message
        }
    });
  
  }

  return (
    <>
      <Head title="Add Property" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Add New Agent</h1>
          <p className="text-slate-500 text-sm mt-1">Fill in the details to add a new Agent.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Agent Name</label>
              <input id="name" type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. Modern Suburban Villa" />
              {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
            </div>
            <div >
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Agent Email</label>
              <input id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. example@gmail.com" />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div> 
            <div >
              <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-1">phone</label>
              <input id="phone" type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 9018827571" />
              {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
            </div> 
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-600 mb-1">Role</label>
              <select id="role" value={data.role} onChange={e => setData('role', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sellect Role</option>
                <option>admin</option>
                <option>agent</option>
              </select>
              {errors.status && <div className="text-red-500 text-xs mt-1">{errors.status}</div>}
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-600 mb-1">Status</label>
              <select id="status" value={data.status} onChange={e => setData('status', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sellect Status</option>
                <option>active</option>
                <option>inactive</option>
              </select>
              {errors.status && <div className="text-red-500 text-xs mt-1">{errors.status}</div>}
            </div>
          </div>
        </div>


        {/* Location Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">Password</label>
              <input id="password" type="password" value={data.password} onChange={e => setData('password', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. *********" />
              {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
            </div>
            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-slate-600 mb-1">Confirm Password</label>
              <input id="password_confirmation" type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. *********" />
               {errors.password_confirmation && <div className="text-red-500 text-xs mt-1">{errors.password_confirmation}</div>}
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <button type="button" className="px-6 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:bg-blue-300">
            {processing ? 'Saving...' : 'Save Property'}
          </button>
        </div>
      </form>
    </>
  )
}

AddAgent.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default AddAgent