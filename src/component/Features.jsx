import React from 'react';
import { Shield, Clock, Heart, Smile, Check, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

const featuresList = [
  {
    title: "360° Leak Protection",
    description: "All-around security with a snug fit and absorbent design, keeping you dry and confident from every angle, day or night.",
    icon: <Shield className="w-10 h-10 text-orange-500" />,
    gradient: "from-orange-100 to-orange-50",
    color: "orange",
  },
  {
    title: "Snug, Panty-like Fit",
    description: "Hugs your body comfortably, just like regular underwear. No shifting, no bunching—just seamless protection and all-day ease.",
    icon: <Heart className="w-10 h-10 text-orange-500" />,
    gradient: "from-pink-100 to-orange-50",
    color: "pink",
  },
  {
    title: "8–10 Hours of Protection",
    description: "Long-lasting absorbency and comfort, keeping you safe and worry-free for up to 10 hours—even on busy, heavy-flow days.",
    icon: <Clock className="w-10 h-10 text-orange-500" />,
    gradient: "from-yellow-100 to-orange-50",
    color: "yellow",
  },
  {
    title: "No Rashes, Cottony Soft Feel",
    description: "Gentle on the skin with a soft, breathable fabric that keeps irritation away and comfort in—all through your period.",
    icon: <Smile className="w-10 h-10 text-orange-500" />,
    gradient: "from-green-100 to-orange-50",
    color: "green",
  },
  {
    title: "Available in 4 Sizes",
    description: "Designed to offer a perfect fit for every body type. From teens to adults, experience comfort and protection.",
    icon: <Check className="w-10 h-10 text-orange-500" />,
    gradient: "from-blue-100 to-orange-50",
    color: "blue",
  },
  {
    title: "Proudly Made in India",
    description: "Locally crafted with care, ensuring high-quality period protection that supports women across the nation.",
    icon: <Sun className="w-10 h-10 text-orange-500" />,
    gradient: "from-purple-100 to-orange-50",
    color: "purple",
  },
];

const FeatureCard = ({ feature, index }) => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const textVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const colorMap = {
    orange: "from-orange-200/50 to-orange-300/50",
    pink: "from-pink-200/50 to-orange-300/50",
    yellow: "from-yellow-200/50 to-orange-300/50",
    green: "from-green-200/50 to-orange-300/50",
    blue: "from-blue-200/50 to-orange-300/50",
    purple: "from-purple-200/50 to-orange-300/50",
  };

  return (
    <Card
      index={index}
      className={`bg-gradient-to-br ${feature.gradient} group`}
      hoverScale={1.03}
      hoverRotate={1}
    >
      <div className="flex flex-col items-center text-center relative">
        <motion.div 
          className="mb-4 p-4 rounded-full bg-white/80 backdrop-blur-sm relative z-10"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${colorMap[feature.color]} rounded-full blur-sm`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {feature.icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-bold mb-3 relative z-10"
          variants={textVariants}
          whileHover="hover"
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="text-neutral-600 relative z-10"
          whileHover={{ scale: 1.02 }}
        >
          {feature.description}
        </motion.p>
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colorMap[feature.color]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </Card>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose <motion.span 
            className="text-orange-500 inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >Orange Lilies</motion.span></h2>
          <p className="section-subtitle">
            The most convenient period care solution for young girls, working women, sportswomen, and travelers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="inline-block p-4 bg-orange-50 rounded-lg mb-4"
            whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
          >
            <span className="text-orange-700 font-medium">Perfect for your lifestyle</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 font-serif"
            whileHover={{ scale: 1.02 }}
          >
            All-day comfort, <motion.span 
              className="text-orange-500 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >even on heavy flow days</motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8"
            whileHover={{ scale: 1.01 }}
          >
            Orange Lilies Disposable Panties are crafted for maximum absorption and softness, giving you worry-free protection and comfort from morning to night.
          </motion.p>
          <motion.a 
            href="#pricing" 
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Comfort Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 