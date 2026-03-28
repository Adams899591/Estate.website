import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head, Link, router, usePage } from '@inertiajs/react'
import PayPalPayment from '@/Components/DevLux/PayPalPayment'

const ViewProperty = () => {

    const {property} = usePage().props;

    // handle Direct To ContactUs Page
    function handleDirectToContactUsPage() {
       router.get("/DevLux/contactUs");
    }

    
  return (
      <>
        <Head title="Modern Luxury Villa - Details" />

        <div className="bg-gray-100 min-h-screen py-4">
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Back Link */}
                <div className="mb-4">
                    <Link href={route("page.properties")} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Properties
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Left Side: Property Image */}
                        <div className="relative h-56 lg:h-auto">
                            <img 
                                src={property.image} 
                                alt="Modern Luxury Villa" 
                                className="absolute inset-0 w-full h-full object-cover" 
                            />

                             {/* if and else if condition to display property status */}
                            {  property.status == "For Sale" ?  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide"> For Sale</div>
                               : property.status == "For Rent" ?  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide"> For Rent</div>
                               : property.status == "Sold" ?      <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide"> Sold</div>
                               : ""
                            }

                        </div>

                        {/* Right Side: Description, Details & Purchase */}
                        <div className="p-4 md:p-6 flex flex-col justify-between">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Modern Luxury Villa</h1>
                                <p className="text-gray-500 text-sm flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {property.title}
                                </p>

                                {/* Property Specs (Bedrooms, Bathrooms, Sqft) */}
                                <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-3 my-3">
                                    <div className="text-center">
                                        <span className="block text-xl font-bold text-gray-800">{property.bedrooms}</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bedrooms</span>
                                    </div>
                                    <div className="text-center border-l border-gray-100">
                                        <span className="block text-xl font-bold text-gray-800">{property.bathrooms}</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bathrooms</span>
                                    </div>
                                    <div className="text-center border-l border-gray-100">
                                        <span className="block text-xl font-bold text-gray-800">{property.area}</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Sq Ft</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <h3 className="text-base font-semibold text-gray-800 mb-1">About this Property</h3>
                                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                                      {property.description.substring(0,130)}
                                    </p>
                                </div>
                            </div>

                            {/* Purchase Section */}
                            <div className="bg-gray-50 rounded-xl p-2 border border-gray-200 shadow-sm mt-1">
                                <div className="flex items-end justify-between mb-1">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0">Listed Price</p>
                                       {/* <p className="text-xl font-bold text-blue-600">${Number(property.price).toLocaleString()}</p> */}

                                        <p className="text-xl font-bold text-blue-600">${property.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {/* Replace the static button with our PayPal component */}
                                    <PayPalPayment 
                                        price={property.price} 
                                        propertyName={property.title} 
                                    />

                                    <button onClick={handleDirectToContactUsPage} className="w-full bg-blue-600 text-white font-bold py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-xs shadow-md">
                                        Contact Agent
                                    </button >
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
