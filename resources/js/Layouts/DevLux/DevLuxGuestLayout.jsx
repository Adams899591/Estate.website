import Header from '@/Components/DevLux/Header';
import Footer from '@/Components/DevLux/Footer';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'

const DevLuxGuestLayout = ({children}) => {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
        <Head title="Welcome to Devlux Estates" />
        
        {/* The main container for the entire page */}
        <div className="bg-white font-sans">
            {/* Header Section */}
            <Header isMobileMenuOpen={isMobileMenuOpen}  setIsMobileMenuOpen={setIsMobileMenuOpen}/>

            {/* Main Content Area */}
            <main>

                {children}

            </main>

            {/* Footer Section */}
            <Footer />
        </div>
     </>
  )
}

export default DevLuxGuestLayout





