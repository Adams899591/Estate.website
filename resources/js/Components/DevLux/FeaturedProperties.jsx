import { Link } from "@inertiajs/react";

const FeaturedProperties = ({properties}) => {

 
    return (

        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Featured Properties</h2>
                <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">Discover our exclusive selection of the finest properties available, tailored to meet your highest standards.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {properties.data.map(property => (
                        <div key={property.id}  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={property.image} alt={`Property at ${property.title}`} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <p className="text-2xl font-bold text-blue-600 mb-2">${property.price}</p>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{property.title}</h3>
                                <div className="flex text-slate-500 text-sm space-x-4">
                                    <span>beds: {property.bedrooms} Beds</span>
                                    <span>&bull;</span>
                                    <span>baths: {property.bathrooms} Baths</span>
                                    <span>&bull;</span>
                                    <span>sqft: {property.area?.toLocaleString()} sqft</span>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Link  href={route("page.viewProperty", {singlePropertyId : property.id})} className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
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

                </div>
                <div className="text-center mt-12">
                    <Link href={route("page.properties")} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">View All Properties</Link>
                </div>
            </div>
        </section>
        
    );
};

export default FeaturedProperties