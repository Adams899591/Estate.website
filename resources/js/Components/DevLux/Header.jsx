import { Link } from "@inertiajs/react";

const Header = ({isMobileMenuOpen,setIsMobileMenuOpen}) => {


    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-slate-800">
                    DEVLUX <span className="text-blue-600">ESTATES</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link href={route("page.home")} className="text-slate-600 hover:text-blue-600 font-medium">Home</Link >
                    <Link  href={route("page.properties")} className="text-slate-600 hover:text-blue-600 font-medium">Properties</Link >
                    <Link  href="#" className="text-slate-600 hover:text-blue-600 font-medium">Agents</Link >
                    <Link  href={route("page.aboutUs")} className="text-slate-600 hover:text-blue-600 font-medium">About Us</Link >
                    <Link  href="#" className="text-slate-600 hover:text-blue-600 font-medium">Contact</Link >
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    {/* <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Login</a> */}
                    {/* <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Register</a> */}
                </div>
                <div className="md:hidden">
                    <button className="text-slate-800 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-white border-t border-slate-100 shadow-lg">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <Link  href={route("page.home")} className="text-slate-600 hover:text-blue-600 font-medium">Home</Link >
                        <Link  href={route("page.properties")} className="text-slate-600 hover:text-blue-600 font-medium">Properties</Link >
                        <Link   className="text-slate-600 hover:text-blue-600 font-medium">Agents</Link >
                        <Link  href={"page.aboutUs"} className="text-slate-600 hover:text-blue-600 font-medium">About Us</Link >
                        <Link  href="#" className="text-slate-600 hover:text-blue-600 font-medium">Contact</Link >
                        <div className="pt-4 flex flex-col space-y-3 border-t border-slate-100">
                             {/* <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Login</a> */}
                             {/* <a href="#" className="bg-blue-600 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Register</a> */}
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};


export default Header