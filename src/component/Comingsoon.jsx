import React from 'react';

const Comingsoon = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen h-screen w-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800 text-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    >
                        <div className="w-2 h-2 bg-orange-400 rounded-full opacity-30"></div>
                    </div>
                ))}
            </div>

            {/* Header/Navigation */}
            <header className="w-full sm:w-[90%] max-w-7xl px-4 sm:px-0 pt-6">
                <div className="bg-orange-400/90 backdrop-blur-md sm:rounded-full py-3 px-4 sm:px-8 flex items-center justify-center shadow-lg sm:border border-white/10 hover:bg-orange-500/90 transition-all duration-300">
                    <a href="#hero">
                        <div className="flex items-center transition-all duration-500 hover:scale-105">
                            <img
                                src='Images/logo.png'
                                alt="Orange Lilies"
                                style={{ height: "4rem" }}
                                className="filter drop-shadow-md"
                            />
                        </div>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent animate-fade-in leading-tight py-2">
                        Something Amazing is Coming Soon!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        We're working hard to bring you an exceptional experience. Stay tuned for our grand launch!
                    </p>

                    {/* Features Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">✨ Premium Quality</div>
                            <p className="text-gray-600">Experience the finest selection of products</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">🚚 Fast Delivery</div>
                            <p className="text-gray-600">Quick and reliable shipping nationwide</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">💎 Exclusive Offers</div>
                            <p className="text-gray-600">Special deals for our early customers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-4">
                <div className="text-sm text-gray-600 mb-2">
                    © Orange Lilies - Confidence of Freshness 2025
                </div>
                <div className="flex justify-center gap-4">
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Comingsoon;
