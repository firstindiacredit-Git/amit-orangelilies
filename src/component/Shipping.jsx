import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Shipping = () => {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <Header />
            <main className="flex-1 pt-32 pb-16 px-0 sm:px-0 md:px-0 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 w-full">
                    <div className="text-center mb-12 px-4 sm:px-8 md:px-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4 font-serif">Shipping & Return Policy</h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">Everything you need to know about how we deliver comfort to your doorstep and handle returns.</p>
                    </div>

                    {/* Shipping Policy Section */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">Shipping Policy</h2>
                        <div className="space-y-6 text-base sm:text-lg text-gray-700">
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">How does the delivery process work?</h3>
                                <p>Once you place your order, our team carefully inspects each product to ensure it meets our quality standards. After passing the final quality check, your items are securely packed and handed over to our trusted delivery partners. They will deliver your Orange Lilies products to your doorstep as quickly as possible. If there are any issues with your address or delivery timing, our partners will contact you directly to resolve them.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">How are items packaged?</h3>
                                <p>We are committed to sustainability and safety in our packaging. Your order will arrive in eco-friendly, recycled cardboard boxes, with paper fillers used wherever possible. We are continuously working to reduce plastic in our packaging and innovate greener solutions, while ensuring your products arrive safely and discreetly.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Where do you ship?</h3>
                                <p>We currently ship across India. International shipping is not available at this time.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">How can I track my order?</h3>
                                <p>After placing your order, you will receive a confirmation email and SMS. Once your order is shipped (usually within 24-48 hours), you can track its status via the link provided in your email or in the 'My Orders' section of your account. You can also opt to receive updates on WhatsApp.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Estimated delivery time</h3>
                                <p>We dispatch most orders within 1-4 business days (excluding Sundays and public holidays). During sales or high-demand periods, dispatch may take up to 5 days. Delivery times may vary based on your location.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Multiple shipments</h3>
                                <p>Sometimes, your order may arrive in multiple shipments if items are sourced from different warehouses. You will only be charged shipping (if applicable) on the first package.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Shipping charges</h3>
                                <ul className="list-disc pl-6">
                                    <li>Free shipping on all orders above ₹299.</li>
                                    <li>₹70 shipping charge for orders below ₹299.</li>
                                    <li>We do not accept orders below ₹149.</li>
                                    <li>Cash on Delivery (COD) is available for orders between ₹249 and ₹50,000.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Return & Cancellation Policy Section */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">Return & Cancellation Policy</h2>
                        <div className="space-y-6 text-base sm:text-lg text-gray-700">
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Returns</h3>
                                <p>Due to the intimate and hygienic nature of our products, we do not accept returns or exchanges unless the item you received is defective, damaged, or incorrect. If you receive a faulty or wrong product, please contact us within 48 hours of delivery with your order details and photos at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp us at <a href="https://api.whatsapp.com/send?phone=918368615088" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">+91-8368615088</a>. We will resolve your issue promptly.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Cancellations</h3>
                                <p>You may cancel your order before it is shipped by contacting us at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp. Once your order is shipped, it cannot be cancelled.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-orange-600 mb-2">Refunds</h3>
                                <p>If your return/cancellation is approved, your refund will be processed to your original payment method within 5-7 business days. For COD orders, refunds will be processed via bank transfer after confirmation.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">Need Help?</h2>
                        <p className="text-base sm:text-lg text-gray-700">If you have any questions about shipping, returns, or your order, please contact us at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp <a href="https://api.whatsapp.com/send?phone=918368615088" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">+91-8368615088</a>. We're here to help!</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Shipping;
