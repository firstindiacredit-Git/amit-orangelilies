import React, { useState } from 'react';
import Features from './Features';

const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">

            {/* Header/Navigation - Responsive Version with Logo */}
            <header className="fixed top-0 sm:top-6 w-full left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-50 sm:w-[90%] max-w-7xl px-4 sm:px-0">
                <div className="bg-orange-400/90 backdrop-blur-md sm:rounded-full py-3 px-4 sm:px-8 flex items-center justify-between shadow-lg sm:border border-white/10">
                    {/* Logo on the left */}
                    <a href="#hero"><div className="flex items-center transition-all duration-500 hover:scale-105">
                        <img
                            src='Images/logo.png'
                            alt="Orange Lilies"
                            style={{ height: "3rem" }}
                            className="filter drop-shadow-md"
                        />
                    </div>
                    </a>
                    {/* Navigation on the right - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">About</span>
                        </a>
                        {/* <a href="#products" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Products</span>
                        </a> */}
                        <a href="#why-choose" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Why Choose Us</span>
                        </a>
                        <div className="relative group">
                            <a href="#faq" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1 flex items-center">
                                <span className="text-white">FAQs</span>
                            </a>
                        </div>
                        <a href="#footer" className="bg-[#fff] hover:bg-orange-200 px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
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
                                { href: "#about", label: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { href: "#why-choose", label: "Why Choose Us", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                { href: "#faq", label: "FAQs", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center space-x-3 text-white hover:text-orange-100 transition-all duration-300 px-4 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                                    onClick={() => setMobileMenuOpen(false)}

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
                                    onClick={() => setMobileMenuOpen(false)}
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

            {/* Hero Section with Enhanced Animations and Hover Effects */}
            <section id="hero" className="md:ml-25 py-32 md:py-40 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute top-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-pulse delay-700"></div>
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-70"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-70 animation-delay-1000"></div>

                {/* Text Content Side with Enhanced Animations */}
                <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8 z-10 transform transition-all duration-700 hover:translate-x-2 group">
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-orange-500 leading-tight relative">
                            <span className="inline-block transform transition-all duration-500 hover:text-orange-600 hover:scale-105">Period Care Redefined</span>
                            <br />
                            <div className="h-1 w-24 bg-orange-400 mt-4 rounded-full transform transition-all duration-500 group-hover:w-40"></div>
                        </h2>

                        <p className="text-base sm:text-lg mb-6 text-gray-600 leading-relaxed animate-fadeIn group-hover:text-gray-700 transition-colors duration-300">
                            <span className="text-orange-500 font-medium relative inline-block group/link">
                                Orange Lilies Disposable Panties –
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover/link:w-full"></span>
                            </span> the ultimate blend of comfort, hygiene, and freedom. Say goodbye to leaks, discomfort, and bulky products.
                        </p>

                        <p className="text-base sm:text-lg mb-8 text-gray-600 leading-relaxed animate-fadeIn delay-300 group-hover:text-gray-700 transition-colors duration-300">
                            <span className="text-orange-500 font-medium relative inline-block group/link">
                                Designed for young girls, working women, travelers, and athletes
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover/link:w-full"></span>
                            </span> Orange Lilies make period days worry-free, anywhere, anytime.
                        </p>

                        {/* Enhanced buttons with more animations */}
                        <div className="flex flex-wrap gap-4">
                            <button style={{ borderRadius: '2rem', backgroundColor: '#ec751e' }} className=" px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-medium relative overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 transform hover:-translate-y-1 active:translate-y-0">
                                <span className="relative z-10">Shop Now</span>
                                <span className="absolute top-0 left-0 w-full h-0 bg-orange-600 transition-all duration-300 group-hover/btn:h-full -z-0"></span>
                                <span className="absolute top-0 left-0 w-0 h-full bg-orange-500 transition-all duration-300 group-hover/btn:w-full -z-0"></span>
                                {/* Animated sparkle effect */}
                                <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover/btn:translate-x-full group-hover/btn:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                            </button>
                            <button style={{ borderRadius: '2rem', backgroundColor: '#fff', color: '#ec751e', border: '2px solid #ec751e' }} className="px-6 sm:px-8 py-3 sm:py-4 text-orange-500 rounded-full font-medium relative group">
                                <span className="relative z-10">Learn More</span>
                                <span className="ml-1 relative z-10 inline-block transition-all duration-300 group-hover:translate-x-3">→</span>
                            </button>


                        </div>
                    </div>
                </div>

                {/* Image Side with Enhanced Effects */}
                <div className="w-full md:w-1/2 flex justify-center z-10 relative group">
                    <div className="relative p-2 max-w-[300px] md:max-w-[450px] mx-auto">
                        {/* Animated border */}
                        <div className="absolute inset-0 p-1">
                            <div className="h-full w-full rounded-lg border-2 border-dashed border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Enhanced glow effect - smaller */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500 group-hover:animate-pulse"></div>

                        {/* Corner accents - smaller */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-500 rounded-tl-lg transition-all duration-500 group-hover:w-10 group-hover:h-10 opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-500 rounded-br-lg transition-all duration-500 group-hover:w-10 group-hover:h-10 opacity-0 group-hover:opacity-100"></div>

                        {/* Image with enhanced effects */}
                        <img
                            src="Images/herose.png"
                            alt="Orange Lilies Period Pads"
                            className="rounded-lg shadow-lg w-full h-auto bg-orange-100 relative z-10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-orange-300/40"
                            style={{ height: "23rem" }}
                        />

                        {/* Enhanced floating elements - smaller */}
                        <div className="absolute top-0 right-0 transform -translate-x-3 -translate-y-3 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                        <div className="absolute bottom-0 left-0 transform translate-x-3 translate-y-3 w-8 h-8 bg-orange-200 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-orange-300 rounded-full opacity-60 z-0 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-30"></div>
                    </div>
                </div>
            </section>

            {/* About Section with Enhanced Animations */}
            <section id="about" className="md:ml-30 py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Enhanced Decorative elements */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-70"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-70 animation-delay-700"></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70 animation-delay-300"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center relative z-10">
                        {/* Text content side with enhanced animations */}
                        <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12 transform transition-all duration-700 hover:translate-x-1 group">
                            <div className="relative inline-block mb-4">
                                <h3 className="text-sm font-semibold text-orange-500 mb-2 tracking-wider relative z-10">ABOUT OUR PRODUCTS</h3>
                                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-orange-600 relative">
                                <span className="relative inline-block group/head">
                                    <span className="inline-block transform transition-all duration-500 hover:text-orange-700 hover:scale-105">Redefining Period Comfort</span>
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200/50 transform origin-left transition-transform duration-300 scale-x-0 group-hover/head:scale-x-100 -z-10"></span>
                                </span>
                                <div className="h-1 w-24 bg-orange-400 mt-4 rounded-full transform transition-all duration-500 group-hover:w-40"></div>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed transform transition-opacity duration-500 hover:text-gray-700 animate-fadeIn">
                                    Orange Lilies is committed to offering high-quality and innovative products for women's hygiene and health. Focusing on essentials such as disposable period panties, intimate soaps, and other personal care products, Orange Lilies commits to giving women comfort, convenience, and confidence in everyday life.
                                </p>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed transform transition-opacity duration-500 hover:text-gray-700 animate-fadeIn delay-300">
                                    From young girls to working professionals, travelers to athletes — Orange Lilies Disposable Panties offer a snug, rash-free fit with 360° leak protection, so you can live every day with confidence.
                                </p>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed transform transition-opacity duration-500 hover:text-gray-700 animate-fadeIn delay-500">
                                    Behind Orange Lilies is a passionate team of innovators, designers, and wellness advocates dedicated to transforming period care. We are a women-led, India-based group committed to comfort, hygiene, and empowerment.
                                </p>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed transform transition-opacity duration-500 hover:text-gray-700 animate-fadeIn delay-700">
                                    Together, we're redefining the way women experience their periods—with care, compassion, and confidence.
                                </p>
                            </div>

                            {/* <div className="mt-8 transform transition-all duration-300 hover:translate-x-1">
                                <button style={{ borderRadius: '2rem' }} className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-medium relative overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="relative z-10">See our full range</span>
                                    <span className="absolute top-0 left-0 w-full h-0 bg-orange-600 transition-all duration-300 group-hover/btn:h-full -z-0"></span>
                                    <span className="ml-3 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                    <span className="absolute top-0 left-0 w-0 h-full bg-orange-500 transition-all duration-300 group-hover/btn:w-full -z-0"></span>
                                    
                                    <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover/btn:translate-x-full group-hover/btn:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                                </button>
                            </div> */}
                        </div>

                        {/* Image Side with Enhanced Effects */}
                        <div className="w-full md:w-1/2 flex justify-center z-10 relative group">
                            <div className="relative p-2 max-w-[300px] md:max-w-[450px] mx-auto">
                                {/* Animated border */}
                                <div className="absolute inset-0 p-1">
                                    <div className="h-full w-full rounded-lg border-2 border-dashed border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Enhanced glow effect - smaller */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500 group-hover:animate-pulse"></div>

                                {/* Corner accents - smaller */}
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-500 rounded-tl-lg transition-all duration-500 group-hover:w-10 group-hover:h-10 opacity-0 group-hover:opacity-100"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-500 rounded-br-lg transition-all duration-500 group-hover:w-10 group-hover:h-10 opacity-0 group-hover:opacity-100"></div>

                                {/* Image with enhanced effects */}
                                <img
                                    src="Images/about.avif"
                                    alt="Orange Lilies Period Pads"
                                    className="rounded-lg shadow-lg w-full h-auto bg-orange-100 relative z-10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-orange-300/40"
                                    style={{ height: "23rem" }}
                                />

                                {/* Enhanced floating elements - smaller */}
                                <div className="absolute top-0 right-0 transform -translate-x-3 -translate-y-3 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                                <div className="absolute bottom-0 left-0 transform translate-x-3 translate-y-3 w-8 h-8 bg-orange-200 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-orange-300 rounded-full opacity-60 z-0 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="why-choose" className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70 animation-delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-70 animation-delay-1000"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="items-center">
                        {/* Content side */}
                        <div className="text-center mb-12"  style={{marginBottom:"-2rem"}}>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">Why Choose Us</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">The Perfect Blend of Comfort & Protection</h2>
                        </div>
                        <Features/>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400/60 rounded-full animate-ping opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        {/* Section subtitle with animation */}
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">How to Use</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>

                        {/* Section title with highlight effect */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 relative inline-block group">
                            <span className="relative">
                                Simple Steps for Maximum Comfort
                                <span className="absolute bottom-2 left-0 h-3 w-full bg-orange-200/50 -z-10 transform -skew-x-3"></span>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* How to Use Card */}
                        <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:from-orange-100 hover:to-orange-200 border border-orange-200/50 relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-100/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-orange-300/40 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-orange-300/40 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            <h4 className="text-lg sm:text-xl font-semibold text-orange-800 mb-6 group-hover:text-orange-900 relative z-10 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                How to Use
                            </h4>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Unpack the sealed disposable panty.",
                                    "Slip it on like regular underwear—no pads or tampons needed.",
                                    "Stay protected with its snug fit and 360° leak guard for all-day comfort."
                                ].map((step, index) => (
                                    <li key={index} className="flex items-start group/item transform transition-all duration-300 hover:translate-x-2">
                                        <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-orange-200 transition-colors duration-300">
                                            <span className="text-orange-500 font-medium group-hover/item:text-orange-600">{index + 1}</span>
                                        </span>
                                        <span className="text-orange-700 group-hover/item:text-orange-800">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* How to Dispose Card */}
                        <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:from-pink-100 hover:to-pink-200 border border-pink-200/50 relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-100/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-pink-300/40 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-300/40 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            <h4 className="text-lg sm:text-xl font-semibold text-pink-800 mb-6 group-hover:text-pink-900 relative z-10 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                How to Dispose
                            </h4>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Wrap the used panty in the disposal cover provided or in tissue/paper.",
                                    "Dispose responsibly in a sanitary waste bin.",
                                    "Do not flush—it may clog drainage systems."
                                ].map((step, index) => (
                                    <li key={index} className="flex items-start group/item transform transition-all duration-300 hover:translate-x-2">
                                        <span className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-pink-200 transition-colors duration-300">
                                            <span className="text-pink-500 font-medium group-hover/item:text-pink-600">{index + 1}</span>
                                        </span>
                                        <span className="text-pink-700 group-hover/item:text-pink-800">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-orange-600 font-medium text-lg relative inline-block group">
                            Simple, hygienic, and hassle-free!
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-orange-50 to-orange-100/40 relative overflow-hidden">
                <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-400/60 rounded-full animate-ping opacity-70"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">Love & Support</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 relative inline-block">
                            <span className="relative">
                                Celebrate womanhood with
                                <span className="text-orange-500 relative mx-2">
                                    Orange Lilies™
                                    <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fff3e0" opacity=".3" className="shape-fill"></path>
                                    </svg>
                                </span>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Sarah J.",
                                review: "These pads have changed my period experience completely. So comfortable and reliable - I won't use anything else now!",
                                color: "orange"
                            },
                            {
                                name: "Mia L.",
                                review: "I have very sensitive skin and these are the only pads that don't cause irritation. Plus, they're super absorbent!",
                                color: "pink"
                            },
                            {
                                name: "Rachel W.",
                                review: "After trying so many brands, I finally found Orange Lilies. They're amazingly comfortable and I feel secure all day.",
                                color: "blue"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="group relative transform transition-all duration-500 hover:-translate-y-2">
                                {/* Card with effects */}
                                <div className={`p-6 sm:p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden z-10 border ${testimonial.color === 'orange'
                                    ? 'bg-gradient-to-br from-orange-50 to-orange-100/70 border-orange-200/50 group-hover:border-orange-300'
                                    : testimonial.color === 'pink'
                                        ? 'bg-gradient-to-br from-pink-50 to-pink-100/70 border-pink-200/50 group-hover:border-pink-300'
                                        : 'bg-gradient-to-br from-blue-50 to-blue-100/70 border-blue-200/50 group-hover:border-blue-300'
                                    }`}>
                                    {/* Background pattern */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${testimonial.color === 'orange'
                                        ? 'bg-gradient-to-br from-orange-200/30 to-orange-300/20'
                                        : testimonial.color === 'pink'
                                            ? 'bg-gradient-to-br from-pink-200/30 to-pink-300/20'
                                            : 'bg-gradient-to-br from-blue-200/30 to-blue-300/20'
                                        }`}></div>

                                    {/* Quote icon */}
                                    <div className={`absolute -top-4 -left-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${testimonial.color === 'orange'
                                        ? 'text-orange-300'
                                        : testimonial.color === 'pink'
                                            ? 'text-pink-300'
                                            : 'text-blue-300'
                                        }`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                        </svg>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex justify-center mb-5 relative z-10">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-300 group-hover:scale-110 delay-${star * 100} ${testimonial.color === 'orange'
                                                        ? 'text-orange-500'
                                                        : testimonial.color === 'pink'
                                                            ? 'text-pink-500'
                                                            : 'text-blue-500'
                                                        }`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review text */}
                                    <p className={`text-sm sm:text-base mb-5 leading-relaxed relative z-10 transition-all duration-500 ${testimonial.color === 'orange'
                                        ? 'text-orange-800/80 group-hover:text-orange-900'
                                        : testimonial.color === 'pink'
                                            ? 'text-pink-800/80 group-hover:text-pink-900'
                                            : 'text-blue-800/80 group-hover:text-blue-900'
                                        }`}>
                                        "{testimonial.review}"
                                    </p>

                                    <div className={`w-12 h-0.5 mx-auto mb-3 group-hover:w-20 transition-all duration-500 ${testimonial.color === 'orange'
                                        ? 'bg-orange-300'
                                        : testimonial.color === 'pink'
                                            ? 'bg-pink-300'
                                            : 'bg-blue-300'
                                        }`}></div>

                                    {/* Name */}
                                    <p className={`font-medium text-base sm:text-lg relative z-10 ${testimonial.color === 'orange'
                                        ? 'text-orange-700 group-hover:text-orange-800'
                                        : testimonial.color === 'pink'
                                            ? 'text-pink-700 group-hover:text-pink-800'
                                            : 'text-blue-700 group-hover:text-blue-800'
                                        }`}>{testimonial.name}</p>
                                </div>

                                {/* Decorative elements */}
                                <div className={`absolute -bottom-2 left-10 w-24 h-1.5 rounded-full transform rotate-3 opacity-0 group-hover:opacity-70 transition-all duration-500 ${testimonial.color === 'orange'
                                    ? 'bg-orange-400'
                                    : testimonial.color === 'pink'
                                        ? 'bg-pink-400'
                                        : 'bg-blue-400'
                                    }`}></div>
                                <div className={`absolute -top-2 right-10 w-20 h-1.5 rounded-full transform -rotate-3 opacity-0 group-hover:opacity-60 transition-all duration-500 ${testimonial.color === 'orange'
                                    ? 'bg-orange-500'
                                    : testimonial.color === 'pink'
                                        ? 'bg-pink-500'
                                        : 'bg-blue-500'
                                    }`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-1/3 right-10 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-orange-300/60 rounded-full animate-ping opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        {/* Section subtitle with animation */}
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">For Premium, Real Comfort</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-16 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>

                        {/* Section title with highlight effect */}
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 relative inline-block group">
                            <span className="relative">
                                Thoughtfully Designed for Ultimate Care
                                {/* <span className="relative text-orange-500 ml-2">
                                    Ultimate Care
                                    <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffedd5" opacity=".6" className="shape-fill"></path>
                                    </svg>
                                </span> */}
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                        {/* Image side with effects */}
                        <div className="w-full md:w-1/2 mb-12 md:mb-0 group perspective-1000">
                            <div className="relative mx-auto max-w-[250px] md:max-w-[350px] transform transition-all duration-700 group-hover:rotate-y-3 group-hover:scale-105">
                                {/* Image container with effects */}
                                <div className="relative p-3">
                                    {/* Animated border */}
                                    <div className="absolute inset-0 p-2 rounded-lg">
                                        <div className="h-full w-full rounded-lg border-2 border-dashed border-orange-300/50 opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                                    </div>

                                    {/* Glow effect - smaller */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/30 to-orange-500/30 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:animate-pulse"></div>

                                    {/* Corner accents - smaller */}
                                    <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-orange-400 rounded-tl-lg transition-all duration-500 group-hover:w-12 group-hover:h-12 opacity-0 group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-orange-400 rounded-br-lg transition-all duration-500 group-hover:w-12 group-hover:h-12 opacity-0 group-hover:opacity-100"></div>

                                    {/* Image */}
                                    <img
                                        src="Images/showcase.jpg"
                                        alt="Orange Lilies Product Range"
                                        className="rounded-lg shadow-lg w-full h-auto relative z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-orange-300/30"
                                    />

                                    {/* Floating circles - smaller */}
                                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-200/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-orange-300/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content side with feature cards */}
                        <div className="md:w-1/2 md:pl-12 space-y-8">
                            {[
                                {
                                    title: "Superior Absorbency",
                                    description: "Our multi-layered design keeps you dry and comfortable for up to 12 hours, even on your heaviest days.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Breathable Cotton Cover",
                                    description: "Soft, hypoallergenic cotton top layer feels gentle against your skin while allowing air circulation.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Secure Fit Technology",
                                    description: "Unique wing design and adhesive backing ensure your pad stays in place, no matter how active your day.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:translate-x-1 hover:-translate-y-1 relative overflow-hidden"
                                >
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-50 via-orange-100/30 to-orange-50 z-0"></div>

                                    {/* Content */}
                                    <div className="flex items-start relative z-10">
                                        {/* Icon */}
                                        <div className="mr-4 p-2.5 bg-orange-200/70 group-hover:bg-orange-300/80 text-orange-600 rounded-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                                            {feature.icon}
                                        </div>

                                        <div className="flex-1">
                                            {/* Title with animated underline */}
                                            <h4 className="font-semibold text-lg mb-2 text-orange-800 relative inline-block group-hover:text-orange-700 transition-colors duration-300">
                                                {feature.title}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400/70 transition-all duration-500 group-hover:w-full"></span>
                                            </h4>

                                            {/* Description */}
                                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-200/40 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                                </div>
                            ))}

                            {/* Call to action */}

                            {/* <button style={{ borderRadius: "2rem" }} className="mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-medium relative overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 transform hover:-translate-y-1 active:translate-y-0">
                                <span className="relative z-10">Learn More About Our Technology</span>
                                <span className="absolute top-0 left-0 w-full h-0 bg-orange-600 transition-all duration-300 group-hover/btn:h-full -z-0"></span>
                                <span className="ml-1 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                <span className="absolute top-0 left-0 w-0 h-full bg-orange-500 transition-all duration-300 group-hover/btn:w-full -z-0"></span>
                                
                                <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover/btn:translate-x-full group-hover/btn:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                            </button> */}
                            {/* <div className="mt-8 transform transition-all duration-300 hover:translate-x-1 relative opacity-0 animate-fadeIn animation-delay-700" style={{ animationFillMode: 'forwards' }}>
                                <a
                                    href="#"
                                    className="inline-flex items-center group px-6 py-3 bg-orange-500 text-white rounded-full overflow-hidden relative"
                                >
                                    <span className="relative z-10 font-medium transition-all duration-300 group-hover:pr-2">Learn More About Our Technology</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-0 transition-all duration-300 group-hover:w-5 opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-1 transform translate-y-px"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                    </svg>
                                    <span className="absolute inset-0 bg-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Features */}
            <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/30 z-0"></div>
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">Comfortable & Reliable</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 relative inline-block group">
                            <span className="relative z-10">Stay worry-free with Orange Lilies™</span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-100 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Ultra-Thin & Secure",
                                description: "Discreet protection that moves with your body.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "12-hour Protection",
                                description: "Stay confident with all-day coverage.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                )
                            },
                            {
                                title: "Hypoallergenic",
                                description: "Gentle on even the most sensitive skin.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                    </svg>
                                )
                            },
                            {
                                title: "Odor Control",
                                description: "Stay fresh with advanced odor neutralizing technology.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group relative perspective-1000 transform transition-transform duration-500 hover:scale-105">
                                {/* 3D card container */}
                                <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-10">
                                    {/* Icon container with 3D effect */}
                                    <div className="relative z-20 mb-6 transform transition-all duration-500 group-hover:translate-y-4 group-hover:scale-110">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-orange-200/50 transition-all duration-500">
                                            {/* Animated ring */}
                                            {/* <div className="absolute inset-0 border-2 border-orange-300/20 rounded-full scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"></div>
                                            <div className="absolute inset-0 border-2 border-orange-300/20 rounded-full scale-100 opacity-0 group-hover:scale-120 group-hover:opacity-70 transition-all duration-1000 delay-100"></div> */}

                                            {/* Icon */}
                                            <div className="relative transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="text-center relative z-10 px-4 transform transition-all duration-500">
                                        <h4 className="text-lg font-semibold mb-3 text-orange-800 group-hover:text-orange-600 transition-colors duration-300">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom glow */}
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-300 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promotion Banner */}
            <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-white">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-orange-100 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full blur-2xl"></div>
                </div>

                {/* Animated particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-1/4 w-3 h-3 bg-orange-200 rounded-full animate-float opacity-40"></div>
                    <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-orange-200 rounded-full animate-float-slow opacity-40" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-200 rounded-full animate-float-slow opacity-40" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/70 p-6 sm:p-8 md:p-12 rounded-2xl border border-orange-200/40 shadow-xl relative overflow-hidden">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-4 border-l-4 border-orange-300/40 rounded-tl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-4 border-r-4 border-orange-300/40 rounded-br-xl"></div>

                        {/* Floating circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-100/20 rounded-full blur-lg"></div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Text content */}
                            <div className="text-left">
                                <div className="inline-block mb-4 relative">
                                    <h3 className="text-sm font-semibold tracking-wider uppercase relative z-10 text-orange-600">Price & Offer</h3>
                                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-orange-600 group">
                                    <span className="inline-block transform transition-all duration-500 hover:translate-x-1">Comfort</span>
                                    <span className="inline-block transform transition-all duration-500 hover:translate-x-1"> That</span>
                                    <span className="inline-block transform transition-all duration-500 hover:translate-x-1"> Saves</span>
                                </h2>

                                <div className="mb-6">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 bg-orange-200/50 px-4 py-2 rounded-lg inline-block transform transition-all duration-300 hover:scale-105 hover:shadow-lg">MRP: ₹299</span>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
                                    Get 5 high-absorbency, disposable period panties in one pack. Orange Lilies™ offers premium comfort, leak protection, and convenience—all at an affordable price.
                                </p>

                                <div className="mb-6 sm:mb-8 bg-orange-100/70 p-4 rounded-lg border border-orange-200 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                    <div className="font-bold text-orange-800 mb-2 text-base sm:text-lg">Use Code: <span className="bg-orange-500 text-white px-3 py-1 rounded-md ml-2 tracking-wider">FIRST15</span></div>
                                    <p className="text-sm sm:text-base text-gray-700">
                                        Enjoy 15% off on your first purchase of Orange Lilies™ Disposable Panties. Comfort, protection, and savings—all in one pack!
                                    </p>
                                </div>

                                <p className="text-gray-600 italic mb-6 text-sm sm:text-base">Say goodbye to leaks and hello to peace of mind.</p>
                            </div>

                            {/* Right Side - Call To Action */}
                            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-orange-100/70 to-orange-200/50 p-5 sm:p-6 md:p-8 rounded-xl border border-orange-200/40">
                                <div className="text-center mb-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-3">Orange Lilies™</h3>
                                    <p className="text-base sm:text-lg text-orange-700 italic">– Confidence of Freshness</p>
                                    <div className="w-16 h-1 bg-orange-400 mx-auto my-4 rounded-full"></div>
                                    <p className="text-sm sm:text-base text-gray-700 mb-6">
                                        Experience the next level of period care with our disposable panties.
                                    </p>
                                    <p className="text-sm sm:text-base text-orange-700 font-medium">
                                        Coming soon to select stores and online! Stay tuned for the comfort you've been waiting for.
                                    </p>
                                </div>

                                <button style={{ borderRadius: "2rem" }} className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-300/20">
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Now</span>
                                    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-600 to-orange-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                                    {/* Button effects */}
                                    <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover:translate-x-full group-hover:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                                    <span className="absolute bottom-0 right-0 w-20 h-20 bg-white/20 rounded-full translate-x-full translate-y-1/2 group-hover:-translate-x-full group-hover:-translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Benefits */}
            <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-200/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-300/10 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">Reliable & Helpful</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 relative inline-block">
                            <span className="relative">
                                Enjoy The Soothing Service
                                {/* <span className="text-orange-500 relative mx-2">
                                    Soothing
                                    <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffedd5" opacity=".6" className="shape-fill"></path>
                                    </svg>
                                </span>
                                Service */}
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
                        {[
                            {
                                title: "QUALITY ASSURED",
                                description: "Each product undergoes rigorous quality checks to ensure the highest standards of safety and comfort for our customers.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                color: "orange"
                            },
                            {
                                title: "CONVENIENT SUBSCRIPTION",
                                description: "Never run out of supplies with our flexible subscription service delivered right to your door.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                ),
                                color: "pink"
                            },
                            {
                                title: "FAST COMFORT GUARANTEE",
                                description: "Experience complete satisfaction or we'll refund your purchase within 30 days, no questions asked.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                color: "blue"
                            }
                        ].map((service, index) => (
                            <div key={index} className="group relative">
                                {/* Card with hover effects */}
                                <div className={`bg-white p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:translate-x-1`}>
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-50/0 to-${service.color}-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Icon with animation */}
                                    <div className={`w-20 h-20 bg-${service.color}-100 group-hover:bg-${service.color}-200 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-${service.color}-200/30 relative z-10`}>
                                        {/* Animated pulse rings */}
                                        <div className={`absolute inset-0 rounded-full border-2 border-${service.color}-200 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}></div>
                                        <div className={`absolute inset-0 rounded-full border-2 border-${service.color}-200 opacity-0 group-hover:opacity-70 group-hover:scale-125 transition-all duration-1000 delay-100`}></div>

                                        {/* Icon */}
                                        <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title with underline animation */}
                                    <h4 className={`font-semibold text-lg mb-4 text-${service.color}-800 relative inline-block group-hover:text-${service.color}-600 transition-colors duration-300 z-10`}>
                                        {service.title}
                                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${service.color}-300 transition-all duration-500 group-hover:w-full`}></span>
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                                        {service.description}
                                    </p>

                                    {/* Hidden learn more link that appears on hover */}
                                    <div className="mt-5 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                                        <a href="#" className={`text-${service.color}-500 font-medium inline-flex items-center group/link`}>
                                            <span>Learn more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Corner accent */}
                                <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-transparent border-r-${service.color}-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400/60 rounded-full animate-ping opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        {/* Section subtitle with animation */}
                        <div>
                            <div className="inline-block relative mb-3">
                                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 relative z-10">FAQs</h3>
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto w-8 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                            </div>
                        </div>

                        {/* Section title with highlight effect */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 relative inline-block">
                            <span className="relative z-10">Frequently Asked Questions</span>
                            <span className="absolute bottom-2 left-0 h-3 w-full bg-orange-200/50 -z-10 transform -skew-x-3"></span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                        {[
                            {
                                question: "How often should I change my pad?",
                                answer: "We recommend changing your pad every 4-8 hours, depending on your flow. Our pads are designed to provide protection for up to 12 hours, but changing regularly promotes better hygiene."
                            },
                            {
                                question: "Are Orange Lilies pads suitable for sensitive skin?",
                                answer: "Yes! Our pads are hypoallergenic and dermatologically tested, making them ideal for those with sensitive skin. They're free from harsh chemicals, fragrances, and dyes that can cause irritation."
                            },
                            {
                                question: "Do you offer different absorbencies?",
                                answer: "Absolutely. Our range includes light, regular, heavy, and overnight absorbencies to suit your needs throughout your cycle."
                            },
                            {
                                question: "Can I swim with your pads?",
                                answer: "Our pads are not designed for swimming. For water activities, we recommend using tampons or menstrual cups."
                            },
                            {
                                question: "How do Orange Lilies pads compare to other brands?",
                                answer: "Our pads offer superior absorbency, better comfort, and are made with eco-friendly materials. Many customers who switch to Orange Lilies report fewer leaks and greater comfort compared to other brands."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-white p-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:translate-y-[-2px]"
                            >
                                {/* FAQ item with accordion-like behavior */}
                                <div className="cursor-pointer" onClick={() => toggleFaq(index)}>
                                    {/* Question part */}
                                    <div className="p-4 sm:p-6 flex justify-between items-center relative">
                                        {/* Question text */}
                                        <h4 className="font-semibold text-base sm:text-lg text-orange-800 group-hover:text-orange-600 transition-colors duration-300 pr-6">
                                            {faq.question}
                                        </h4>

                                        {/* Expand/collapse icon */}
                                        <div className="flex-shrink-0 relative">
                                            <div className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-all duration-300 ${openFaqIndex === index ? 'rotate-90' : ''}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-4 w-4 sm:h-5 sm:w-5 text-orange-500 transition-transform duration-500 ease-in-out ${openFaqIndex === index ? 'rotate-90' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>

                                            {/* Animated rings */}
                                            <div className="absolute inset-0 rounded-full border border-orange-200 scale-0 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500"></div>
                                            <div className="absolute inset-0 rounded-full border border-orange-200 scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-70 transition-all duration-700 delay-100"></div>
                                        </div>

                                        {/* Left border accent that grows on hover */}
                                        <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-orange-500 transition-all duration-300"></div>
                                    </div>

                                    {/* Answer part with slide-down animation */}
                                    <div className={`max-h-0 overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'} bg-gradient-to-br from-white to-orange-50/30`}>
                                        <div className={`p-4 sm:p-6 pt-0 border-t border-orange-100 transition-all duration-500 delay-100 ${openFaqIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional question CTA */}
                    <div className="mt-10 sm:mt-12 text-center animate-fadeIn opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>

                        <button style={{ borderRadius: "2rem" }} className=" px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-medium relative overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 transform hover:-translate-y-1 active:translate-y-0">
                            <span className="relative z-10">Ask Us Directly</span>
                            <span className="absolute top-0 left-0 w-full h-0 bg-orange-600 transition-all duration-300 group-hover/btn:h-full -z-0"></span>
                            <span className="ml-1 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                            <span className="absolute top-0 left-0 w-0 h-full bg-orange-500 transition-all duration-300 group-hover/btn:w-full -z-0"></span>
                            {/* Animated sparkle effect */}
                            <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover/btn:translate-x-full group-hover/btn:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="py-6 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-300 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Logo and social media */}
                    <div className="flex flex-col items-center mb-5">
                        <div className="mb-3 transform transition-transform duration-500 hover:scale-110">
                            <img src="Images/footer.png" alt="Orange Lilies" className="h-10 sm:h-12 drop-shadow-md" />
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'youtube', 'threads', 'linktree'].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg group"
                                >
                                    {social === 'facebook' && (
                                        <a href="https://www.facebook.com/orangelilies" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover:text-orange-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        </a>
                                    )}
                                    {social === 'twitter' && (
                                        <a href="https://x.com/orangelilies_" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover:text-orange-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                    )}
                                    {social === 'instagram' && (
                                        <a href="https://www.instagram.com/orangelilies.in" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover:text-orange-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    )}
                                    {social === 'youtube' && (
                                        <a href="https://www.youtube.com/@orangelilies" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover:text-orange-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                        </a>
                                    )}
                                    {social === 'threads' && (
                                        <a href="https://www.threads.com/@orangelilies_" target="_blank" rel="noopener noreferrer"  >
                                            <img src="Images/threads.png" alt="Threads" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        </a>
                                    )}
                                    {social === 'linktree' && (
                                        <a href="https://linktr.ee/orangelilies_" target="_blank" rel="noopener noreferrer">
                                            <img src="Images/linktree.png" alt="Linktree" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        </a>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-5">
                        {[
                            {
                                title: "Shop",
                                links: ["All Products", "Bestsellers", "New Arrivals", "Bundles & Kits"]
                            },
                            {
                                title: "Help",
                                links: ["FAQs", "Shipping & Returns", "Care Instructions", "Contact Us"]
                            },
                            {
                                title: "About",
                                links: ["Our Story", "Sustainability", "Blog", "Reviews"]
                            },
                            {
                                title: "Contact",
                                links: ["info@orangelilies.com", "+91-8368615088", "E 44 Okhla phase 2, Delhi 110020", "The Kutumb group is ISO 9001:2015 certified"]
                            }
                        ].map((category, index) => (
                            <div key={index} className="text-center md:text-left transform transition-all duration-500 hover:translate-y-[-3px] group">
                                <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-orange-800 relative inline-block">
                                    {category.title}
                                    <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-orange-500 rounded-full transform transition-all duration-300 group-hover:w-full"></span>
                                </h4>
                                <ul className="space-y-1.5 sm:space-y-2">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className="text-orange-700 hover:text-orange-500 transition-colors duration-300 relative overflow-hidden group/link inline-block text-xs sm:text-sm"
                                            >
                                                <span className="relative z-10 text-orange-700">{link}</span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover/link:w-full"></span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter signup */}
                    <div className="mb-5 bg-white/60 rounded-lg p-4 shadow-md transform transition-all duration-500 hover:shadow-lg hover:bg-white/80">
                        <div className="grid md:grid-cols-2 gap-4 items-center">
                            <div>
                                <h4 className="font-bold text-base sm:text-lg mb-1 text-orange-800">Join Our Newsletter</h4>
                                <p className="text-orange-700 text-xs sm:text-sm">Get updates on new products, special offers, and period care tips.</p>
                            </div>
                            <div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="px-3 py-2 bg-white border border-orange-200 rounded-full sm:rounded-r-none text-orange-800 placeholder-orange-400 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-400 text-xs sm:text-sm shadow-sm"
                                    />
                                    <button style={{ borderRadius: "0rem 2rem 2rem 0rem" }} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-full sm:rounded-l-none text-white font-medium transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="pt-4 border-t border-orange-300 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-orange-700 text-xs mb-2 md:mb-0 transform transition-all duration-500 hover:text-orange-600">
                            © 2025 Orange Lilies (A unit of The Kutumbaka Group). All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs">
                            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map((policy, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-orange-700 hover:text-orange-500 transition-colors duration-300 relative group"
                                >
                                    <span className="relative z-10 text-orange-700">{policy}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            {/* CSS Animation Styles */}
            <style jsx>{`
            @keyframes wave {
                0% { transform: translateX(0) translateZ(0) scaleY(1); }
                50% { transform: translateX(-25%) translateZ(0) scaleY(0.8); }
                100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
            }
            @keyframes wave-slow {
                0% { transform: translateX(0) translateZ(0) scaleY(1); }
                50% { transform: translateX(-25%) translateZ(0) scaleY(0.9); }
                100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
            }
            .animate-wave {
                animation: wave 18s linear infinite;
                animation-fill-mode: forwards;
                transform-origin: center bottom;
                width: 200%;
            }
            .animate-wave-slow {
                animation: wave-slow 25s linear infinite;
                animation-fill-mode: forwards;
                transform-origin: center bottom;
                width: 200%;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 0.8s ease-out forwards;
            }
            .delay-300 {
                animation-delay: 0.3s;
            }
            .delay-700 {
                animation-delay: 0.7s;
            }
            .animation-delay-300 {
                animation-delay: 0.3s;
            }
            .animation-delay-700 {
                animation-delay: 0.7s;
            }
            .animation-delay-1000 {
                animation-delay: 1s;
            }
            .perspective-500 {
                perspective: 500px;
            }
            .perspective-1000 {
                perspective: 1000px;
            }
            .preserve-3d {
                transform-style: preserve-3d;
            }
            .rotate-y-3 {
                transform: rotateY(3deg);
            }
            .rotate-y-10 {
                transform: rotateY(10deg);
            }
            @media (max-width: 640px) {
                .text-xs-adjust {
                    font-size: 0.75rem;
                }
                .btn-xs-adjust {
                    padding-left: 1rem;
                    padding-right: 1rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }
            }
        `}</style>
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
              @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 4s ease-in-out infinite;
              }
              .animate-float-slow {
                animation: float-slow 6s ease-in-out infinite;
              }
            `}</style>

        </div>
    );
};

export default HomePage;

