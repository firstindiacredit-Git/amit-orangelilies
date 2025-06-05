import React, { useState } from 'react';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://orangelilies-emailsender-backend.vercel.app/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Subscription failed');
            }

            setSubscriptionStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            setSubscriptionStatus('error');
        }
    };

    return (
        <>
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
                                links: [
                                    { text: "FAQs", href: "#faq" },
                                    { text: "Shipping & Returns", href: "#" },
                                    { text: "Care Instructions", href: "#" },
                                    { text: "Contact Us", href: "/contact" }
                                ]
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
                                                href={typeof link === 'string' ? '#' : link.href}
                                                className="text-orange-700 hover:text-orange-500 transition-colors duration-300 relative overflow-hidden group/link inline-block text-xs sm:text-sm"
                                            >
                                                <span className="relative z-10 text-orange-700">{typeof link === 'string' ? link : link.text}</span>
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
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        required
                                        className="px-3 py-2 bg-white border border-orange-200 rounded-full sm:rounded-r-none text-orange-800 placeholder-orange-400 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-400 text-xs sm:text-sm shadow-sm"
                                    />
                                    <button
                                        type="submit"
                                        style={{ borderRadius: "0rem 2rem 2rem 0rem" }}
                                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-full sm:rounded-l-none text-white font-medium transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                {subscriptionStatus === 'success' && (
                                    <p className="text-green-600 text-xs mt-2">Thank you for subscribing!</p>
                                )}
                                {subscriptionStatus === 'error' && (
                                    <p className="text-red-600 text-xs mt-2">Something went wrong. Please try again.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="pt-4 border-t border-orange-300 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-orange-700 text-xs mb-2 md:mb-0 transform transition-all duration-500 hover:text-orange-600">
                            © 2025 Orange Lilies (A unit of The Kutumbaka Group). All rights reserved. | Developed by
                            <a href="https://pizeonfly.com/" target="_blank" rel="noopener noreferrer" className='ml-1'>
                                <span className="text-orange-700 hover:text-orange-500 transition-colors duration-300">Pizeonfly</span>
                            </a>
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
        </>
    );
};

export default Footer; 