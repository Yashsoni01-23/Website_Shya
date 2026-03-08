import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShoppingCart, FaLaptopCode, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-[#0B1120] overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Since 2025
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Local Innovation</span> <br className="hidden md:block" /> 
            with Global Opportunities
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            At <strong>Shya Venture</strong>, we don't just build businesses; we architect ecosystems. 
            We are a multi-disciplinary firm dedicated to delivering excellence across borders and digital landscapes.
          </p>
        </motion.div>

        {/* 3 PILLARS / SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Card 1: Global Trade */}
          <motion.div variants={itemVariants} className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Trade</h3>
            <p className="text-slate-400 leading-relaxed">
              Exporting premium essential goods, including pharmaceuticals and artisanal candles, to diverse international markets with precision logistics.
            </p>
          </motion.div>

          {/* Card 2: E-Commerce */}
          <motion.div variants={itemVariants} className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-pink-400 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">E-Commerce Retail</h3>
            <p className="text-slate-400 leading-relaxed">
              Dominating the domestic market with high-quality consumer products on platforms like Amazon and Flipkart, focusing on customer delight.
            </p>
          </motion.div>

          {/* Card 3: Tech */}
          <motion.div variants={itemVariants} className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-green-400 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Digital Solutions</h3>
            <p className="text-slate-400 leading-relaxed">
              Crafting modern, scalable Single Page Applications (SPAs) using React & Vite to help businesses establish a powerful online presence.
            </p>
          </motion.div>
        </motion.div>

        {/* FOUNDER SIGNATURE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-[#0f1623] rounded-2xl p-10 md:p-14 text-center border border-slate-800 shadow-2xl"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1120] p-3 rounded-full border border-slate-700 text-cyan-500 text-2xl">
            <FaQuoteLeft />
          </div>

          <p className="text-slate-300 text-xl md:text-2xl font-light italic leading-relaxed mb-8">
            "Driven by trust, transparency, and a relentless pursuit of quality. We aim to put India on the global map of innovation."
          </p>
          
          <div className="inline-flex flex-col items-center">
            {/* Signature effect using a cursive font or just bold styling */}
            <h4 className="text-white font-bold text-2xl tracking-wide font-serif">Yash Soni</h4>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2 mb-2"></div>
            <p className="text-cyan-500 text-xs font-bold uppercase tracking-[0.2em]">Founder, Shya Venture</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;