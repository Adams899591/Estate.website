import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">

      {/* ==================== HEADER SECTION START ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl font-bold text-white tracking-wider">
                ADAMS<span className="text-amber-400">.</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-8">
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Properties</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Contact</a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-5">
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Login</a>
              <a href="#" className="px-6 py-2 border border-amber-400 rounded-md shadow-sm text-base font-medium text-white bg-amber-500/20 hover:bg-amber-500/40 transition-colors duration-300">
                Get Started
              </a>
            </div>
            
            {/* Mobile menu button (for future implementation) */}
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="bg-slate-800/50 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* ==================== HEADER SECTION END ==================== */}

      {/* ==================== HERO SECTION START ==================== */}
      <main>
        <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <img 
            src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Luxurious modern house with a pool"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
              Luxury Living, Redefined.
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-gray-300">
              Discover an exclusive collection of the world's most prestigious properties.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-2xl mx-auto">
              <form className="sm:flex sm:gap-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl border border-white/20">
                <input 
                  type="text" 
                  className="w-full sm:flex-1 px-6 py-3 border-0 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0 rounded-md"
                  placeholder="Enter a location, or property type..."
                />
                <button 
                  type="submit" 
                  className="mt-2 sm:mt-0 w-full sm:w-auto px-8 py-3 border border-transparent text-base font-semibold rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-all"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ==================== FEATURED PROPERTIES SECTION START ==================== */}
        <section className="py-24 bg-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-slate-600">
                Explore our handpicked selection of premier properties from around the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Suburban Villa" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">For Sale</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Modern Suburban Villa</h3>
                  <p className="mt-2 text-slate-600">Los Angeles, CA</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-slate-800">$2,800,000</p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">View Details</a>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Classic Mansion" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">For Sale</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">The Grand Oak Mansion</h3>
                  <p className="mt-2 text-slate-600">Greenwich, CT</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-slate-800">$7,500,000</p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">View Details</a>
                  </div>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Penthouse" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">For Rent</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Skyline Penthouse</h3>
                  <p className="mt-2 text-slate-600">New York, NY</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-slate-800">$25,000/mo</p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== FEATURED PROPERTIES SECTION END ==================== */}

        {/* ==================== ABOUT / PHOTO SECTION START ==================== */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400 rounded-tl-3xl opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-br-3xl opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Luxury Modern Home" 
                  className="relative rounded-xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Experience the Art of <span className="text-amber-500">Exceptional Living</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  At Adams Estate, we believe a home is more than just a place to live—it's a lifestyle. Our curated collection of properties represents the pinnacle of design, comfort, and luxury.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Whether you're seeking a contemporary city apartment or a secluded villa, we bridge the gap between your dreams and reality with unmatched expertise.
                </p>
                <a href="#" className="inline-block px-8 py-3 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-900 transition-colors shadow-lg hover:shadow-xl">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== ABOUT / PHOTO SECTION END ==================== */}
      </main>

      {/* ==================== FOOTER SECTION START ==================== */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <a href="/" className="text-3xl font-bold text-white tracking-wider">
                ADAMS<span className="text-amber-400">.</span>
              </a>
              <p className="text-gray-400 text-base leading-relaxed">
                Your premier partner in luxury real estate. We make finding your next home simple, efficient, and enjoyable.
              </p>
              {/* Social links can be added here */}
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Explore</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">Featured Properties</a></li>
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">All Properties</a></li>
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">For Rent</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">About Us</a></li>
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">Our Agents</a></li>
                    <li><a href="#" className="text-base text-slate-300 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0 col-span-2 md:col-span-1">
                  <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Subscribe</h3>
                  <ul className="mt-4 space-y-4">
                    <p className="text-base text-slate-400">Get the latest properties and news.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                      <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      <button type="submit" className="px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-md hover:bg-amber-600 transition-colors">Subscribe</button>
                    </form>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8">
            <p className="text-base text-slate-400 xl:text-center">&copy; {new Date().getFullYear()} Adams Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* ==================== FOOTER SECTION END ==================== */}

    </div>
  );
}

export default Welcome;