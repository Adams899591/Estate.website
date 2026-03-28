import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head, Link, router, usePage } from '@inertiajs/react'

const Properties = () => {

    const {properties} = usePage().props;

  return (
      <>
        <Head title="Our Properties" />

        {/* Page Title & Hero Area */}
        <div className="relative bg-gray-900 py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Dream Home</h1>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                    Browse our exclusive list of properties. Whether you are buying, selling, or renting, we have the perfect match for you.
                </p>
            </div>
        </div>

        {/* Search & Filter Section (Static) */}
        <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
            <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3">
                        <input 
                            type="text" 
                            placeholder="Search by location, city or zip..." 
                            className="w-full px-3 py-2 md:px-4 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-full md:w-auto flex gap-2 md:gap-4">
                        <select className="flex-1 md:flex-none px-3 py-2 md:px-4 text-sm md:text-base border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option>Property Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Condo</option>
                        </select>
                        <select className="flex-1 md:flex-none px-3 py-2 md:px-4 text-sm md:text-base border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option>Price Range</option>
                            <option>$100k - $200k</option>
                            <option>$200k - $500k</option>
                            <option>$500k+</option>
                        </select>
                        <button className="px-4 py-2 md:px-6 bg-blue-600 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
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
                    {properties.data.map(property => (

                        <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            
                            <div className="relative h-64 overflow-hidden">
                                {/* Placeholder Image */}
                                <img 
                                    src={property.image} 
                                    alt={property.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                />

                                {/*  if condition that handles displaying status*/}
                                {property.status == "For Sale" && <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">For Sale</div>}
                                {property.status == "For Rent" && <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">For Rent</div>}
                                {property.status == "Sold" && <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">Sold</div>}

                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg font-bold px-3 py-1 rounded">
                                    ${property.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Modern Luxury Villa</h3>
                                <p className="text-gray-500 mb-4 flex items-center text-sm">
                                    <span className="mr-1">📍</span> {property.title}
                                </p>
                                <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                                    <span className="flex items-center gap-1"><strong>{property.bedrooms}</strong> Beds</span>
                                    <span className="flex items-center gap-1"><strong>{property.bathrooms}</strong> Baths</span>
                                    <span className="flex items-center gap-1"><strong>{property.area}</strong> Sq Ft</span>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Link href={route("page.viewProperty", {singlePropertyId : property.id})}  className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                        View
                                    </Link>
                                </div>
                            </div>

                        </div>

                    ))}

                    {/* Property Card 2 */}
                    {/* <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
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
                            <div className="mt-4 flex justify-end">
                                <Link href="#" className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    View
                                </Link>
                            </div>
                        </div>
                    </div> */}

                

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
