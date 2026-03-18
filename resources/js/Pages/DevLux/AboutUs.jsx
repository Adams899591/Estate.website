import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head } from '@inertiajs/react'

const AboutUs = () => {
  return (
     <>
        <Head title="About Us" />

        {/* Hero Section */}
        <div className="relative bg-gray-900 py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About DevLux Estates</h1>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                    Building dreams and creating legacies. We are your trusted partners in finding the perfect property.
                </p>
            </div>
        </div>

        {/* Our Mission & Stats */}
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Our Team" 
                            className="rounded-lg shadow-xl w-full object-cover h-96"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At DevLux Estates, we believe that real estate is more than just transactions; it's about building relationships and helping people find a place they can truly call home. Our mission is to provide an exceptional experience through integrity, expertise, and innovation.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We strive to redefine the standard of luxury living by offering a curated selection of properties that meet the unique needs of our clients. This cutting-edge platform is meticulously developed and maintained by Dev Usman Adams, reflecting our commitment to innovation in every aspect of our business.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
                                <p className="text-gray-500">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">1.5k+</h3>
                                <p className="text-gray-500">Properties Sold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Meet The Team */}
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our dedicated team of professionals is here to guide you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "John Doe", role: "Senior Broker", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                        { name: "Jane Smith", role: "Real Estate Agent", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                        { name: "Robert Johnson", role: "Property Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow">
                            <div className="h-64 overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-blue-600 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     </>
  )
}

AboutUs.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>
export default AboutUs