import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://orangelilies-emailsender-backend.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800 relative py-8 px-8 sm:px-12 lg:px-16">
                <div className="w-full max-w-screen-xl mx-auto mt-25 mb-25 px-4 sm:px-6 lg:px-8">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-4">Contact Us</h1>
                        <p className="text-gray-600 text-lg">
                            Have questions or want to learn more about Orange Lilies? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Container for Introduction and Image */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                        {/* Introduction Section */}
                        <div className="text-gray-700 text-center md:text-left md:w-1/2">
                            <p className="text-base sm:text-lg mb-4">
                                Orange Lilies is committed to offering high-quality and innovative products for women's hygiene and health. Focusing on essentials such as disposable period panties, intimate soaps, and other personal care products, Orange Lilies commits to giving women comfort, convenience, and confidence in everyday life.
                            </p>
                            <p className="text-base sm:text-lg">
                                We are a women-led, India-based group dedicated to transforming period care with care, compassion, and confidence. If you have any questions about our products, partnership opportunities, or anything else, please reach out using the form below.
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                                <img
                                    src="/Images/contact2.jpg"
                                    alt="Orange Lilies Product"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* Key Benefits Section */}
                        <div className="text-center lg:text-left lg:w-1/2">
                            <h3 className="text-2xl font-bold text-orange-800 mb-6">Why Choose Orange Lilies?</h3>
                            <div className="grid grid-cols-1 gap-8 text-gray-700">
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="font-semibold text-lg mb-2 text-orange-700">Superior Absorbency</p>
                                    <p className="text-base">Stay dry and comfortable for hours with our multi-layered protection. Our advanced technology ensures maximum absorption while maintaining comfort throughout the day.</p>
                                </div>
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="font-semibold text-lg mb-2 text-orange-700">Gentle on Skin</p>
                                    <p className="text-base">Made with breathable, hypoallergenic materials for ultimate comfort. Our products are dermatologically tested and free from harmful chemicals, ensuring the best care for your intimate health.</p>
                                </div>
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="font-semibold text-lg mb-2 text-orange-700">Secure Fit</p>
                                    <p className="text-base">Designed to stay in place for worry-free movement. Our innovative design provides a perfect fit that adapts to your body, giving you confidence in any situation.</p>
                                </div>
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="font-semibold text-lg mb-2 text-orange-700">Eco-Friendly</p>
                                    <p className="text-base">Committed to sustainability with biodegradable materials and eco-conscious packaging. We care for both your comfort and the environment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-transparent rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 lg:w-1/2">
                            <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Get in Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent hover:border-orange-400 transition-all duration-200"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent hover:border-orange-400 transition-all duration-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent hover:border-orange-400 transition-all duration-200"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="10"
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent hover:border-orange-400 transition-all duration-200"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    {/* <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button> */}
                                    <button
                                        style={{ borderRadius: '2rem', backgroundColor: '#ec751e' }}
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-medium relative overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 transform hover:-translate-y-1 active:translate-y-0"
                                    >
                                        <span className="relative z-10">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                        <span className="absolute top-0 left-0 w-full h-0 bg-orange-600 transition-all duration-300 group-hover/btn:h-full -z-0"></span>
                                        <span className="absolute top-0 left-0 w-0 h-full bg-orange-500 transition-all duration-300 group-hover/btn:w-full -z-0"></span>
                                        {/* Animated sparkle effect */}
                                        <span className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full -translate-x-full -translate-y-1/2 group-hover/btn:translate-x-full group-hover/btn:translate-y-1/2 transition-all duration-1000 ease-in-out"></span>
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="text-center text-green-600 mt-4">
                                        Thank you for your message! We'll get back to you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="text-center text-red-600 mt-4">
                                        Sorry, there was an error sending your message. Please try again.
                                    </div>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage; 