const FeaturedProperties = () => {
    const properties = [
        { id: 1, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', price: '$750,000', address: '123 Luxury Ave, Beverly Hills, CA', beds: 4, baths: 3, sqft: 2800 },
        { id: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', price: '$1,200,000', address: '456 Modern St, Miami, FL', beds: 5, baths: 5, sqft: 4200 },
        { id: 3, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop', price: '$550,000', address: '789 Suburb Ln, Austin, TX', beds: 3, baths: 2, sqft: 2100 },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Featured Properties</h2>
                <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">Discover our exclusive selection of the finest properties available, tailored to meet your highest standards.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map(prop => (
                        <div key={prop.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={prop.image} alt={`Property at ${prop.address}`} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <p className="text-2xl font-bold text-blue-600 mb-2">{prop.price}</p>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{prop.address}</h3>
                                <div className="flex text-slate-500 text-sm space-x-4">
                                    <span>{prop.beds} Beds</span>
                                    <span>&bull;</span>
                                    <span>{prop.baths} Baths</span>
                                    <span>&bull;</span>
                                    <span>{prop.sqft.toLocaleString()} sqft</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">View All Properties</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties