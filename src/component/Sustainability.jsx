import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Sustainability = () => {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <Header />
            <main className="flex-1 pt-32 pb-16 px-0 sm:px-0 md:px-0 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 w-full">
                    <div className="text-center mb-12 px-4 sm:px-8 md:px-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4 font-serif">Sustainability</h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">Our promise: Comfort for you, care for the planet. Discover how Orange Lilies is making period care more sustainable.</p>
                    </div>

                    <section className="mb-10 px-4 sm:px-8 md:px-16 space-y-8 text-base sm:text-lg text-gray-700">
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Why Sustainability Matters</h2>
                            <p>At Orange Lilies, we believe that every small step towards sustainability makes a big difference. The personal care industry generates significant waste, and we are committed to reducing our impact on the environment while supporting the well-being of our customers and communities.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Eco-Friendly Materials</h2>
                            <p>We use biodegradable and responsibly sourced materials in our products wherever possible. Our disposable panties are designed to minimize environmental impact while providing maximum comfort and protection.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Responsible Packaging</h2>
                            <p>Our packaging is made from recycled cardboard and paper fillers, reducing plastic use and waste. We are committed to further reducing our environmental footprint and are always exploring new, greener solutions.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Sustainable Practices</h2>
                            <p>From sourcing to shipping, we prioritize sustainability at every step. We work with partners who share our values and continuously review our processes to ensure we are as eco-friendly as possible.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Green Initiatives</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We are working towards making all our packaging 100% recyclable and plastic-free.</li>
                                <li>We encourage our suppliers to adopt sustainable and ethical practices.</li>
                                <li>We support local communities and women-led initiatives for environmental awareness.</li>
                                <li>We regularly review and improve our supply chain to reduce carbon footprint.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Certifications & Partnerships</h2>
                            <p>We are proud to collaborate with organizations and partners who share our vision for a greener future. Our products and processes are regularly reviewed to meet high standards of safety, quality, and sustainability. We are working towards obtaining more eco-certifications and welcome partnerships that help us do better for the planet.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">How You Can Help</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Dispose of used products responsibly—never flush them, always use a sanitary bin.</li>
                                <li>Recycle our packaging wherever possible.</li>
                                <li>Spread awareness about sustainable period care among your friends and family.</li>
                                <li>Share your ideas and feedback with us to help us improve further!</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Commitment</h2>
                            <p>We believe that period care should never come at the cost of the planet. Orange Lilies is dedicated to ongoing improvement, transparency, and innovation in sustainability. We welcome your feedback and ideas!</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h2>
                            <p>Have questions or suggestions about our sustainability efforts? Email us at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp <a href="https://api.whatsapp.com/send?phone=918368615088" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">+91-8368615088</a>.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Sustainability;
