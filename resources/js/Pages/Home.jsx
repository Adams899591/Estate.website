
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* ==================== HEADER SECTION START ==================== */}
      {/* This header is positioned absolutely over the hero section for a professional look */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="text-3xl font-bold text-white tracking-wider">
            ADAMS<span className="text-blue-500">.</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Property</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Login Button */}
          <div>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300 shadow-md transform hover:scale-105">
              Login
            </a>
          </div>
        </nav>
      </header>
      {/* ==================== HEADER SECTION END ==================== */}

      {/* ==================== HERO SECTION START ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {/* Using a placeholder estate video. You can replace the src with your own video file later. */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Find Your <span className="text-blue-500">Dream</span> Home
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Experience luxury living with our curated selection of properties. 
            We help you find the perfect place to call home.
          </p>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/3 relative">
              <input 
                type="text" 
                placeholder="Search Location..." 
                className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 relative">
              <select className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer">
                <option value="">Property Type</option>
                <option value="house">Modern House</option>
                <option value="apartment">Luxury Apartment</option>
                <option value="villa">Exclusive Villa</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-lg transition duration-300 shadow-md">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== HERO SECTION END ==================== */}

      {/* ==================== FOOTER SECTION START ==================== */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Footer Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold text-white mb-6">
                ADAMS<span className="text-blue-500">.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in real estate. We make finding your next home simple, efficient, and enjoyable.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-6 text-blue-500">Quick Links</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Properties</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Agents</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-6 text-blue-500">Contact Us</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span>123 Real Estate Blvd, City, Country</span>
                </li>
                <li>+1 (555) 123-4567</li>
                <li>info@estate.website</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-6 text-blue-500">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get the latest property updates.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Adams Estate. All rights reserved.
          </div>
        </div>
      </footer>
      {/* ==================== FOOTER SECTION END ==================== */}

    </div>
  )
}

export default Home
