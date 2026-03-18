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


export default Features