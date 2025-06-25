import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <Header />
            <main className="flex-1 pt-32 pb-16 px-0 sm:px-0 md:px-0 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 w-full">
                    <div className="text-center mb-12 px-4 sm:px-8 md:px-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4 font-serif">Terms & Conditions</h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">Please read these Terms & Conditions carefully before using Orange Lilies' website or services.</p>
                    </div>

                    {/* Main Terms Content */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16 space-y-8 text-base sm:text-lg text-gray-700">
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Use of Platform</h2>
                            <p>Welcome to www.orangelilies.com ("Site"). The website is owned and operated by The Kutumb Group ("Orange Lilies"), with its registered office at E 44 Okhla phase 2, Delhi 110020, India. By accessing or using our Site, you agree to be bound by these Terms & Conditions, our Privacy Policy, and our Shipping & Return Policy. If you do not agree, please do not use our Site.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Privacy Practices</h2>
                            <p>Your privacy is important to us. Please review our <a href="/privacy" className="text-orange-500 underline">Privacy Policy</a> to understand how we collect, use, and protect your information.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">3. Your Account</h2>
                            <p>Our Site is intended for adults. You are responsible for maintaining the confidentiality of your account and password. If you believe your account security has been compromised, contact us immediately at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a>.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Product & Service Information</h2>
                            <p>We strive to provide accurate product descriptions and images, but do not guarantee that all information is error-free. Product colors and details may vary. We reserve the right to correct errors and update information at any time.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Product Use</h2>
                            <p>Our products are for personal use only and should not be resold. Please read all product instructions and consult a specialist if you have concerns. Orange Lilies is not responsible for any adverse effects from product use.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Pricing & Payment</h2>
                            <p>Prices and availability are subject to change without notice. We accept various payment methods, including credit/debit cards, net banking, wallets, and COD (for eligible orders within India). Orders may be cancelled or refunded as per our policies.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">7. Shipping, Returns & Cancellations</h2>
                            <p>Please refer to our <a href="/shipping" className="text-orange-500 underline">Shipping & Return Policy</a> for details on delivery, returns, and cancellations.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">8. User Content</h2>
                            <p>You are responsible for any content you upload or share on our Site. Do not post unlawful, offensive, or infringing material. We reserve the right to remove content and terminate accounts that violate these terms.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">9. Intellectual Property</h2>
                            <p>All content, trademarks, and materials on this Site are the property of Orange Lilies or its licensors. You may not use, reproduce, or distribute any content without our written permission.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">10. Limitation of Liability</h2>
                            <p>Our Site and products are provided "as is" without warranties of any kind. Orange Lilies is not liable for any indirect, incidental, or consequential damages arising from your use of the Site or products.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">11. Links to Third-Party Sites</h2>
                            <p>Our Site may contain links to third-party websites. We are not responsible for their content or privacy practices. Please review their terms and policies before using those sites.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">12. Changes to Terms</h2>
                            <p>We may update these Terms & Conditions at any time. Changes will be posted on this page. Continued use of the Site constitutes acceptance of the updated terms.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">13. Governing Law</h2>
                            <p>These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Delhi, India.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">14. Contact Us</h2>
                            <p>If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp <a href="https://api.whatsapp.com/send?phone=918368615088" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">+91-8368615088</a>.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
