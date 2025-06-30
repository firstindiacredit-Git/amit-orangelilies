import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavigation = (e, section) => {
        e.preventDefault();
        
        if (location.pathname !== '/') {
            // If not on home page, navigate to home page first
            navigate('/');
            // Use setTimeout to ensure navigation completes before scrolling
            setTimeout(() => {
                const element = document.querySelector(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // If already on home page, just scroll
            const element = document.querySelector(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 sm:top-6 w-full left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-50 sm:w-[90%] max-w-7xl px-4 sm:px-0">
                <div className="bg-orange-400/90 backdrop-blur-md sm:rounded-full py-3 px-4 sm:px-8 flex items-center justify-between shadow-lg sm:border border-white/10">
                    {/* Logo on the left */}
                    <div onClick={() => navigate('/#hero')} className="flex items-center transition-all duration-500 hover:scale-105 cursor-pointer">
                        <img
                            src='Images/logo.png'
                            alt="Orange Lilies"
                            style={{ height: "3rem" }}
                            className="filter drop-shadow-md"
                        />
                    </div>
                    {/* Navigation on the right - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/#hero" onClick={(e) => handleNavigation(e, '#hero')} className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Home</span>
                        </a>
                        <a href="/about" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">About</span>
                        </a>
                        {/* <a href="#products" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Products</span>
                        </a> */}
                        <a href="/#why-choose" onClick={(e) => handleNavigation(e, '#why-choose')} className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Why Choose Us</span>
                        </a>
                        <div className="relative group">
                            <a href="/contact" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1 flex items-center">
                                <span className="text-white">Contact Us</span>
                            </a>
                        </div>
                        <a href="https://amzn.in/d/5SllMbz" target="_blank" rel="noopener noreferrer" className="bg-[#fff] hover:bg-orange-200 px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                            <span className="text-orange-500">Shop Now</span>
                        </a>
                    </nav>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-orange-400/95 to-orange-500/95 backdrop-blur-md mt-1 py-6 px-6 shadow-xl rounded-b-2xl animate-fadeIn border-t border-orange-300/30">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300/50 via-orange-400/50 to-orange-300/50"></div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-300/70 rounded-full"></div>

                        <nav className="flex flex-col space-y-5 relative">
                            {[
                                { href: "/#about", label: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { href: "/#why-choose", label: "Why Choose Us", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                { href: "/#faq", label: "FAQs", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => handleNavigation(e, item.href.split('/')[1])}
                                    className="group flex items-center space-x-3 text-white hover:text-orange-100 transition-all duration-300 px-4 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                                >
                                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300" style={{ color: "white" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-base" style={{ color: "white" }}>{item.label}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "white" }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}

                            {/* Shop Now Button */}
                            <div className="pt-2">
                                <a
                                    href="#contact"
                                    className="block w-full bg-white hover:bg-orange-100 px-6 py-3 rounded-xl transition-all duration-300 text-center transform hover:scale-[1.02] hover:shadow-lg group"
                                >
                                    <span className="text-orange-500 font-semibold text-base group-hover:text-orange-600 transition-colors duration-300">
                                        Shop Now
                                    </span>
                                    <div className="w-0 h-0.5 bg-orange-400 mx-auto mt-1 transition-all duration-300 group-hover:w-12"></div>
                                </a>
                            </div>
                        </nav>

                        {/* Bottom decorative elements */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-300/50 via-orange-400/50 to-orange-300/50"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-300/70 rounded-full"></div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header; 