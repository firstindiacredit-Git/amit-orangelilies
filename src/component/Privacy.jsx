import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <Header />
            <main className="flex-1 pt-32 pb-16 px-0 sm:px-0 md:px-0 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 w-full">
                    <div className="text-center mb-12 px-4 sm:px-8 md:px-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4 font-serif">Privacy Policy</h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">Your privacy matters to us. This policy explains how Orange Lilies collects, uses, and protects your personal information.</p>
                    </div>

                    {/* Main Policy Content */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16 space-y-8 text-base sm:text-lg text-gray-700">
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Who We Are</h2>
                            <p>Orange Lilies (The Kutumb Group) is a women-led company based in India, dedicated to providing high-quality, innovative period care and personal hygiene products. Our registered office is at E 44 Okhla phase 2, Delhi 110020, India.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Commitment</h2>
                            <p>We are committed to protecting your privacy and handling your personal information responsibly and transparently. This policy applies to all personal data collected through our website, online store, and customer support channels.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><b>Contact details:</b> Name, email address, phone number, shipping address.</li>
                                <li><b>Account details:</b> Login credentials, order history, preferences.</li>
                                <li><b>Payment details:</b> Transaction amount, payment method (we do not store your card details).</li>
                                <li><b>Technical data:</b> IP address, device information, browser type, cookies, and usage data.</li>
                                <li><b>Communications:</b> Messages, emails, and support requests you send to us.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To process and deliver your orders.</li>
                                <li>To communicate with you about your orders, products, and offers.</li>
                                <li>To improve our products, services, and website experience.</li>
                                <li>To personalize your experience and recommend relevant products.</li>
                                <li>To comply with legal obligations and prevent fraud.</li>
                                <li>For marketing (with your consent) and customer support.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Cookies & Tracking</h2>
                            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences in your browser settings. Disabling certain cookies may affect site functionality.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">How We Share Your Data</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>With trusted third-party service providers (e.g., payment processors, delivery partners) to fulfill your orders and improve our services.</li>
                                <li>With government authorities or law enforcement if required by law.</li>
                                <li>With your consent, for marketing or promotional purposes.</li>
                                <li>We do not sell your personal information to third parties.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Data Security</h2>
                            <p>We use industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. Only authorized personnel and trusted partners have access to your data for legitimate business purposes.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Data Retention</h2>
                            <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When no longer needed, your data is securely deleted or anonymized.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Your Rights</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You can access, update, or correct your personal information by contacting us.</li>
                                <li>You can request deletion of your data, subject to legal requirements.</li>
                                <li>You can opt out of marketing communications at any time.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Children's Privacy</h2>
                            <p>Our website and products are intended for adults. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal data, please contact us for removal.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Links to Other Websites</h2>
                            <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before providing any personal information.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h2>
                            <p>If you have any questions, concerns, or requests regarding your privacy or this policy, please contact us at <a href="mailto:info@orangelilies.com" className="text-orange-500 underline">info@orangelilies.com</a> or WhatsApp <a href="https://api.whatsapp.com/send?phone=918368615088" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">+91-8368615088</a>.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Policy Updates</h2>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page. Please review this policy regularly for updates.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
