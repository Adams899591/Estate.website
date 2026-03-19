import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head } from '@inertiajs/react'

const Properties = () => {
  return (
      <>
        <Head title="Our Properties" />

        {/* Page Title & Hero Area */}
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Home</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse our exclusive list of properties. Whether you are buying, selling, or renting, we have the perfect match for you.
                </p>
            </div>
        </div>

        {/* Search & Filter Section (Static) */}
        <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3">
                        <input 
                            type="text" 
                            placeholder="Search by location, city or zip..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-full md:w-auto flex gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option>Property Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Condo</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option>Price Range</option>
                            <option>$100k - $200k</option>
                            <option>$200k - $500k</option>
                            <option>$500k+</option>
                        </select>
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Properties Grid */}
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Property Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            {/* Placeholder Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1600596542815-e32c2159940c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Modern Villa" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Sale
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $1,250,000
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Modern Luxury Villa</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> Beverly Hills, CA
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>5</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>4</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>4,500</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Property Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="City Apartment" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Rent
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $3,500 / mo
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Downtown Penthouse</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> New York, NY
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>3</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>2</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>2,100</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Property Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cozy Cottage" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Sale
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $450,000
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Cozy Family Cottage</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> Austin, TX
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>4</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>3</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>2,800</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Property Card 4 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Suburban Home" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Sale
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $850,000
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Contemporary Home</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> Seattle, WA
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>4</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>3</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>3,200</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Property Card 5 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Executive Condo" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Rent
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $2,800 / mo
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Executive City Condo</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> Chicago, IL
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>2</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>2</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>1,500</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Property Card 6 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Beachfront Villa" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                For Sale
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                $2,100,000
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Exclusive Beachfront Villa</h3>
                            <p className="text-gray-500 mb-4 flex items-center text-sm">
                                <span className="mr-1">📍</span> Miami, FL
                            </p>
                            <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                <span className="flex items-center gap-1"><strong>6</strong> Beds</span>
                                <span className="flex items-center gap-1"><strong>5</strong> Baths</span>
                                <span className="flex items-center gap-1"><strong>5,200</strong> Sq Ft</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Static Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                            1
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            2
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            3
                        </button>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                            ...
                        </span>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            8
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
      
      </>
  )
}


Properties.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>

export default Properties














































            

