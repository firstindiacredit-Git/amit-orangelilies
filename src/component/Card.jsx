import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Card = ({ 
  children, 
  className = "", 
  index = 0,
  hoverScale = 1.05,
  hoverRotate = 0,
  hoverShadow = true,
  delay = 0,
  ...props 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: 0,
      rotateY: 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: hoverScale,
      rotate: hoverRotate,
      boxShadow: hoverShadow 
        ? "0 25px 50px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.1)"
        : "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`bg-white rounded-2xl border border-orange-100 hover:border-orange-200 
        transition-all duration-300 backdrop-blur-sm bg-opacity-90
        perspective-1000 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.25)]
        ${className}`}
      {...props}
    >
      <motion.div
        variants={hoverVariants}
        className="p-6 h-full relative"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={floatingAnimation}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
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
        <div style={{ transform: "translateZ(75px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card; 