import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const AddProperty = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    status: '',
    type: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
 
     post(route('addProperty'), {
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
          <h1 className="text-2xl font-bold text-slate-800">Add New Property</h1>
          <p className="text-slate-500 text-sm mt-1">Fill in the details to add a new property listing.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">Property Title</label>
              <input id="title" type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. Modern Suburban Villa" />
              {errors.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-slate-600 mb-1">Description</label>
              <textarea id="description" value={data.description} onChange={e => setData('description', e.target.value)} rows="4" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Enter a detailed description of the property..."></textarea>
              {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-600 mb-1">Status</label>
              <select id="status" value={data.status} onChange={e => setData('status', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-slate-600 mb-1">Type</label>
              <select id="type" value={data.type} onChange={e => setData('type', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing and Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Pricing & Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-slate-600 mb-1">Price ($)</label>
              <input id="price" type="number" value={data.price} onChange={e => setData('price', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 2800000" />
              {errors.price && <div className="text-red-500 text-xs mt-1">{errors.price}</div>}
            </div>
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-slate-600 mb-1">Bedrooms</label>
              <input id="bedrooms" type="number" value={data.bedrooms} onChange={e => setData('bedrooms', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 4" />
              {errors.bedrooms && <div className="text-red-500 text-xs mt-1">{errors.bedrooms}</div>}
            </div>
            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-slate-600 mb-1">Bathrooms</label>
              <input id="bathrooms" type="number" value={data.bathrooms} onChange={e => setData('bathrooms', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 3" />
              {errors.bathrooms && <div className="text-red-500 text-xs mt-1">{errors.bathrooms}</div>}
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-slate-600 mb-1">Area (sqft)</label>
              <input id="area" type="number" value={data.area} onChange={e => setData('area', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 3200" />
              {errors.area && <div className="text-red-500 text-xs mt-1">{errors.area}</div>}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-slate-600 mb-1">Address</label>
              <input id="address" type="text" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 123 Main St" />
              {errors.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-slate-600 mb-1">City</label>
              <input id="city" type="text" value={data.city} onChange={e => setData('city', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. Los Angeles" />
               {errors.city && <div className="text-red-500 text-xs mt-1">{errors.city}</div>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-slate-600 mb-1">State/Province</label>
              <input id="state" type="text" value={data.state} onChange={e => setData('state', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. CA" />
              {errors.state && <div className="text-red-500 text-xs mt-1">{errors.state}</div>}   
            </div>
            <div>
              <label htmlFor="zipcode" className="block text-sm font-medium text-slate-600 mb-1">ZIP/Postal Code</label>
              <input id="zipcode" type="text" value={data.zipcode} onChange={e => setData('zipcode', e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="e.g. 90001" />
              {errors.zipcode && <div className="text-red-500 text-xs mt-1">{errors.zipcode}</div>} 
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Media</h2>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-slate-600 mb-1">Property Image</label>
            <input id="image" type="file" onChange={e => setData('image', e.target.files[0])} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            {errors.image && <div className="text-red-500 text-xs mt-1">{errors.image}</div>}
            <p className="text-xs text-slate-500 mt-1">PNG, JPG, GIF up to 10MB.</p>
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

AddProperty.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default AddProperty