import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import { Smile, Heart, Lightbulb, Leaf, CheckCircle, Users } from 'lucide-react';

const galleryImages = [
    { src: 'Images/Gallery-1.jpg' },
    { src: 'Images/Gallery-2.jpg' },
    { src: 'Images/Gallery-3.jpg' },
    { src: 'Images/Gallery-4.jpg' },
    { src: 'Images/Gallery-5.jpg' },
]

const valuesList = [
    {
        title: 'Comfort First',
        description: 'We design every product to feel gentle, soft, and secure—so you can focus on living your life.',
        icon: <Smile className="w-10 h-10 text-orange-500" />,
        gradient: 'from-orange-100 to-orange-50',
    },
    {
        title: 'Empowerment',
        description: 'We believe in supporting women\'s confidence, dignity, and independence—every day of the month.',
        icon: <Heart className="w-10 h-10 text-pink-500" />,
        gradient: 'from-pink-100 to-orange-50',
    },
    {
        title: 'Innovation',
        description: 'We\'re always improving—bringing you the latest in period care technology and design.',
        icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
        gradient: 'from-yellow-100 to-orange-50',
    },
    {
        title: 'Sustainability',
        description: 'We use eco-friendly materials and responsible practices to protect our planet for future generations.',
        icon: <Leaf className="w-10 h-10 text-green-500" />,
        gradient: 'from-green-100 to-orange-50',
    },
    {
        title: 'Quality',
        description: 'Every product is dermatologically tested and quality-assured for your safety and peace of mind.',
        icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
        gradient: 'from-blue-100 to-orange-50',
    },
    {
        title: 'Community',
        description: 'We\'re more than a brand—we\'re a movement for better period care, education, and support.',
        icon: <Users className="w-10 h-10 text-purple-500" />,
        gradient: 'from-purple-100 to-orange-50',
    },
];

const About = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleImageClick = (idx) => {
        setCurrentImageIdx(idx);
        setIsPreviewOpen(true);
    };

    const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.2, 3));
    const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.2, 0.5));
    const handleFlip = () => setIsFlipped((f) => !f);

    useEffect(() => {
        setZoomLevel(1);
        setIsFlipped(false);
    }, [currentImageIdx, isPreviewOpen]);

    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <Header />
            <main className="flex-1 pt-32 pb-16 px-0 sm:px-0 md:px-0 bg-gradient-to-br from-orange-50 to-orange-100/50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 w-full">
                    {/* About Us Title */}
                    <div className="text-center mb-12 px-4 sm:px-8 md:px-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4 font-serif">About Us</h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">Empowering women with comfort, confidence, and care—every day, everywhere.</p>
                    </div>

                    {/* Brand Story */}
                    <section className="flex flex-col md:flex-row items-center gap-10 mb-16 px-4 sm:px-8 md:px-16">
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
                                    src="Images/about2.png"
                                    alt="Orange Lilies Period Panties"
                                    className="rounded-lg shadow-lg w-full h-auto bg-orange-100 relative z-10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-orange-300/40"
                                    style={{ height: "23rem" }}
                                />

                                {/* Enhanced floating elements - smaller */}
                                <div className="absolute top-0 right-0 transform -translate-x-3 -translate-y-3 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                                <div className="absolute bottom-0 left-0 transform translate-x-3 translate-y-3 w-8 h-8 bg-orange-200 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm"></div>
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-orange-300 rounded-full opacity-60 z-0 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-30"></div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">Our Story</h2>
                            <p className="text-base sm:text-lg text-gray-700 mb-4">Orange Lilies was born from a simple idea: to make period care easy, dignified, and empowering for every woman. Founded by a passionate, women-led team in India, we set out to create products that blend comfort, hygiene, and freedom—so you can live every day with confidence.</p>
                            <p className="text-base sm:text-lg text-gray-700 mb-4">From our innovative disposable panties to our commitment to sustainability and quality, every detail is designed with you in mind. We believe that period care should never hold you back—it should help you thrive.</p>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="mb-16 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">Gallery</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-2xl shadow-xl border-2 border-orange-100 bg-white transition-all duration-300 hover:shadow-2xl hover:border-orange-300"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-48 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                                        onClick={() => handleImageClick(idx)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section className="grid md:grid-cols-2 gap-10 mb-16 px-4 sm:px-8 md:px-16">
                        {/* Mission Card */}
                        <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
                            <div className={
                                `p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden z-10 border bg-gradient-to-br from-orange-50 to-orange-100/70 border-orange-200/50 group-hover:border-orange-300`
                            }>
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-200/30 to-orange-300/20"></div>
                                {/* Decorative icon */}
                                <div className="absolute -top-4 -left-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500 text-orange-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-orange-600 mb-3 relative z-10">Our Mission</h3>
                                <p className="text-gray-700 relative z-10">To redefine period comfort and hygiene for women everywhere, through innovative, safe, and accessible products that inspire confidence and well-being.</p>
                                <div className="w-12 h-0.5 mx-auto my-4 group-hover:w-20 transition-all duration-500 bg-orange-300"></div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-2 left-10 w-24 h-1.5 rounded-full transform rotate-3 opacity-0 group-hover:opacity-70 transition-all duration-500 bg-orange-400"></div>
                            <div className="absolute -top-2 right-10 w-20 h-1.5 rounded-full transform -rotate-3 opacity-0 group-hover:opacity-60 transition-all duration-500 bg-orange-500"></div>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
                            <div className={
                                `p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden z-10 border bg-gradient-to-br from-pink-50 to-pink-100/70 border-pink-200/50 group-hover:border-pink-300`
                            }>
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-200/30 to-pink-300/20"></div>
                                {/* Decorative icon */}
                                <div className="absolute -top-4 -left-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500 text-pink-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-pink-600 mb-3 relative z-10">Our Vision</h3>
                                <p className="text-gray-700 relative z-10">A world where every woman can embrace her period with pride, comfort, and freedom—without compromise.Together, we strive to uplift, educate, and empower women everywhere.</p>
                                <div className="w-12 h-0.5 mx-auto my-4 group-hover:w-20 transition-all duration-500 bg-pink-300"></div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-2 left-10 w-24 h-1.5 rounded-full transform rotate-3 opacity-0 group-hover:opacity-70 transition-all duration-500 bg-pink-400"></div>
                            <div className="absolute -top-2 right-10 w-20 h-1.5 rounded-full transform -rotate-3 opacity-0 group-hover:opacity-60 transition-all duration-500 bg-pink-500"></div>
                        </div>
                    </section>

                    {/* Values as Cards Section */}
                    <section className="mb-16 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">Our Values</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {valuesList.map((value, idx) => (
                                <Card
                                    key={idx}
                                    index={idx}
                                    className={`bg-gradient-to-br ${value.gradient} group`}
                                    hoverScale={1.03}
                                    hoverRotate={1}
                                >
                                    <div className="flex flex-col items-center text-center relative">
                                        <div className="mb-4 p-4 rounded-full bg-white/80 backdrop-blur-sm relative z-10">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 relative z-10">
                                            {value.title}
                                        </h3>
                                        <p className="text-neutral-600 relative z-10">
                                            {value.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Team Section (optional, can be expanded) */}
                    <section className="mb-10 px-4 sm:px-8 md:px-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-3xl mx-auto">
                            {/* Founder Card 1 */}
                            <div className="group relative">
                                <div className="bg-white p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:translate-x-1">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Title with underline animation */}
                                    <h4 className="font-semibold text-lg mb-2 text-orange-800 relative z-10 text-center w-full">
                                        <span className="inline-block relative group-hover:text-orange-600 transition-colors duration-300">
                                            Kanika Tomar
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-300 transition-all duration-500 group-hover:w-full"></span>
                                        </span>
                                    </h4>
                                    <p className="text-gray-700 text-sm mb-1 text-center">Founder & CEO</p>
                                    <p className="text-gray-600 text-xs text-center">
                                        Kanika is the visionary force behind Orange Lilies, blending innovation with compassion to create products that empower women and set new standards in quality and care. 
                                        <br /><br />
                                        With a background in product development and a deep understanding of women's needs, Kanika is dedicated to breaking taboos around menstrual health. She believes in making period care accessible, dignified, and comfortable for all. Her leadership inspires the team to always put women first, ensuring that every product reflects empathy, quality, and empowerment.
                                    </p>
                                </div>
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-transparent border-r-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {/* Founder Card 2 */}
                            <div className="group relative">
                                <div className="bg-white p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:translate-x-1">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Title with underline animation */}
                                    <h4 className="font-semibold text-lg mb-2 text-orange-800 relative z-10 text-center w-full">
                                        <span className="inline-block relative group-hover:text-orange-600 transition-colors duration-300">
                                            Sanam Lamba
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-300 transition-all duration-500 group-hover:w-full"></span>
                                        </span>
                                    </h4>
                                    <p className="text-gray-700 text-sm mb-1 text-center">Founder & CEO</p>
                                    <p className="text-gray-600 text-xs text-center">
                                        Sanam brings strategic insight and creative energy to Orange Lilies, building a vibrant community and driving the brand's mission to inspire confidence and positive change.
                                        <br /><br />
                                        With expertise in business strategy and a passion for women's wellness, Sanam ensures that Orange Lilies is not just a product, but a movement. He is committed to fostering open conversations about periods, supporting education initiatives, and making a real difference in the lives of women. His vision is to create a supportive, inclusive space where every woman feels heard and empowered.
                                    </p>
                                </div>
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-transparent border-r-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
            {isPreviewOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: "#000000c2" }}>
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        style={{ backgroundColor: "black" }}
                        onClick={() => setIsPreviewOpen(false)}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 text-white text-3xl"
                        style={{ backgroundColor: "black" }}
                        onClick={() => setCurrentImageIdx((currentImageIdx - 1 + galleryImages.length) % galleryImages.length)}
                    >
                        &#8592;
                    </button>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img
                                src={galleryImages[currentImageIdx].src}
                                alt={galleryImages[currentImageIdx].alt}
                                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
                                style={{
                                    transform: `scale(${zoomLevel}) scaleX(${isFlipped ? -1 : 1})`,
                                    transition: "transform 0.3s",
                                }}
                            />
                            <div className="flex justify-center gap-4 mt-4 w-full absolute left-1/2 -translate-x-1/2 bottom-2">
                                <button
                                    className="bg-transparent text-white px-4 py-2 rounded-full text-2xl hover:bg-white/10 focus:outline-none"
                                    style={{ backgroundColor: "black" }}
                                    onClick={handleZoomIn}
                                    title="Zoom In"
                                >
                                    ➕
                                </button>
                                <button
                                    className="bg-transparent text-white px-4 py-2 rounded-full text-2xl hover:bg-white/10 focus:outline-none"
                                    style={{ backgroundColor: "black" }}
                                    onClick={handleZoomOut}
                                    title="Zoom Out"
                                >
                                    ➖
                                </button>
                                <button
                                    className="bg-transparent text-white px-4 py-2 rounded-full text-2xl hover:bg-white/10 focus:outline-none"
                                    style={{ backgroundColor: "black" }}
                                    onClick={handleFlip}
                                    title="Flip"
                                >
                                    🔄
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        className="absolute right-4 text-white text-3xl"
                        style={{ right: "1rem", left: "auto", backgroundColor: "black" }}
                        onClick={() => setCurrentImageIdx((currentImageIdx + 1) % galleryImages.length)}
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
};

export default About;
