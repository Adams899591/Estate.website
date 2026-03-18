import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head } from '@inertiajs/react'

const ContactUs = () => {
  return (
       <>
        <Head title="Contact Us" />

        {/* Hero Section */}
        <div className="relative bg-gray-900 py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                    We're here to help. Whether you have a question about a property or need guidance, our team is ready to answer all your questions.
                </p>
            </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Regarding Property #12345" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your message here..."></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <p className="flex items-center"><svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>123 Real Estate St, Suite 100, City, State, 12345</span></p>
                                <p className="flex items-center"><svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>contact@devlux.com</span></p>
                                <p className="flex items-center"><svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>(123) 456-7890</span></p>
                            </div>
                        </div>
                        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
  )
}

ContactUs.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>

export default ContactUs