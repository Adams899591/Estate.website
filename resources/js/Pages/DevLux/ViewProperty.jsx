import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head, Link } from '@inertiajs/react'

const ViewProperty = () => {
  return (
      <>
        <Head title="Modern Luxury Villa - Details" />

        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Back Link */}
                <div className="mb-6">
                    <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Properties
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                        
                        {/* Left Side: Property Image */}
                        <div className="relative h-full min-h-[400px] lg:min-h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                                alt="Modern Luxury Villa" 
                                className="absolute inset-0 w-full h-full object-cover" 
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide">
                                For Sale
                            </div>
                        </div>

                        {/* Right Side: Description, Details & Purchase */}
                        <div className="p-8 lg:p-12 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Modern Luxury Villa</h1>
                                <p className="text-gray-500 text-lg flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    Beverly Hills, CA
                                </p>

                                {/* Property Specs (Bedrooms, Bathrooms, Sqft) */}
                                <div className="grid grid-cols-3 gap-4 border-y border-gray-100 py-6 mb-6">
                                    <div className="text-center">
                                        <span className="block text-2xl font-bold text-gray-800">5</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bedrooms</span>
                                    </div>
                                    <div className="text-center border-l border-gray-100">
                                        <span className="block text-2xl font-bold text-gray-800">4</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bathrooms</span>
                                    </div>
                                    <div className="text-center border-l border-gray-100">
                                        <span className="block text-2xl font-bold text-gray-800">4,500</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Sq Ft</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">About this Property</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        This stunning modern estate offers the ultimate in luxury living. 
                                        Featuring an open-concept floor plan, gourmet chef's kitchen with top-of-the-line appliances, 
                                        and floor-to-ceiling windows that flood the home with natural light. 
                                        The master suite is a private retreat with a spa-like bath and walk-in closets. 
                                        Step outside to your private oasis with a sparkling pool, spa, and outdoor kitchen perfect for entertaining.
                                    </p>
                                </div>
                            </div>

                            {/* Purchase Section */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="flex items-end justify-between mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Listed Price</p>
                                        <p className="text-3xl font-bold text-blue-600">$1,250,000</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                        </svg>
                                        Purchase Now
                                    </button>
                                    <button className="w-full bg-white text-gray-700 font-bold py-4 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                                        Contact Agent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

ViewProperty.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>

export default ViewProperty
