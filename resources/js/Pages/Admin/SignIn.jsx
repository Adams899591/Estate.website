import React from 'react';
import { Head } from '@inertiajs/react';

// --- Header Component ---
// Responsible for the top navigation bar of the website.
const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-slate-800">
                    DEVLUX <span className="text-blue-600">ESTATES</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Home</a>
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Properties</a>
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Agents</a>
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">About Us</a>
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Login</a>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Register</a>
                </div>
                <div className="md:hidden">
                    <button className="text-slate-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

// --- Hero Component ---
// The main banner section at the top of the homepage to grab user attention.
const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">With a wide range of properties, we are here to help you find the perfect place to call home.</p>
                
                {/* Search Form */}
                <form className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4">
                    <input type="text" placeholder="Enter location, city, or zip code" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-700" />
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-700">
                        <option>Property Type</option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                    </select>
                    <button type="submit" className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Search</button>
                </form>
            </div>
        </div>
    );
};

// --- Featured Properties Component ---
// A section to showcase a selection of top properties.
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

// --- Features/Why Choose Us Component ---
// Highlights the key selling points of the service.
const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Why Choose Us?</h2>
                <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">We provide full service at every step.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Feature Item 1 */}
                    <div className="p-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Wide Range of Properties</h3>
                        <p className="text-slate-500">From luxury villas to cozy apartments, we have a home for every taste and budget.</p>
                    </div>
                    {/* Feature Item 2 */}
                    <div className="p-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Experienced Agents</h3>
                        <p className="text-slate-500">Our team of dedicated professionals is here to guide you through every step of the process.</p>
                    </div>
                    {/* Feature Item 3 */}
                    <div className="p-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Transparent Process</h3>
                        <p className="text-slate-500">We believe in clear communication and a straightforward process from start to finish.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Footer Component ---
// The bottom section of the website, containing links, contact info, and copyright.
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">DEVLUX ESTATES</h3>
                        <p className="text-slate-400">Your partner in finding the perfect property. We are committed to excellence and customer satisfaction.</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Properties</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <p className="text-slate-400">123 Real Estate St, Suite 100<br/>City, State, 12345</p>
                        <p className="text-slate-400 mt-2">Email: contact@devlux.com</p>
                        <p className="text-slate-400">Phone: (123) 456-7890</p>
                    </div>
                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Instagram</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg></a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Devlux Estates. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// --- Main Home Page Component ---
// This component assembles all the individual sections into the final homepage layout.
const Home = () => {
  return (
     <>
        <Head title="Welcome to Devlux Estates" />
        
        {/* The main container for the entire page */}
        <div className="bg-white font-sans">
            {/* Header Section */}
            <Header />

            {/* Main Content Area */}
            <main>
                {/* Hero Banner Section */}
                <Hero />

                {/* Featured Properties Section */}
                <FeaturedProperties />

                {/* Why Choose Us/Features Section */}
                <Features />

                {/* You can add more sections like Testimonials, Our Agents, etc. here */}

            </main>

            {/* Footer Section */}
            <Footer />
        </div>
     </>
  )
}

export default Home;

