import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShoppingCart, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-[#0F172A] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Scaling Indian Excellence to Global Markets
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            At <strong>Nexvoy</strong>, we bridge the gap between quality manufacturing and global demand. 
            We are a multi-disciplinary venture dedicated to operational excellence across domestic retail and international trade.
          </p>
        </motion.div>

        {/* PILLARS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {/* Card 1: Global Trade */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-white text-2xl mb-8 group-hover:bg-blue-600 transition-colors">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Global Logistics & Export</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              We streamline the movement of high-demand essential goods. Our focus is on regulatory compliance, precision logistics, and reliable supply chain delivery to African and Middle-Eastern markets.
            </p>
          </motion.div>

          {/* Card 2: E-Commerce */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-white text-2xl mb-8 group-hover:bg-blue-600 transition-colors">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic D2C Retail</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Nexvoy commands a robust presence in the Indian e-commerce landscape. By optimizing product visibility on platforms like Amazon and Flipkart, we establish quality lifestyle products as market leaders.
            </p>
          </motion.div>
        </motion.div>

        {/* FOUNDER SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto bg-white rounded-2xl p-12 text-center shadow-2xl border border-slate-100"
        >
          <FaQuoteLeft className="text-blue-600 text-3xl mx-auto mb-6" />
          <p className="text-slate-800 text-lg md:text-xl font-medium italic leading-relaxed mb-8">
            "Transparency and quality are the bedrock of our operations. At Nexvoy, we are committed to building long-term value and placing Indian innovation on the global stage."
          </p>
          
          <div className="inline-flex flex-col items-center">
            <h4 className="text-slate-900 font-bold text-xl tracking-wide">Yash Soni</h4>
            <div className="h-0.5 w-16 bg-blue-600 rounded-full mt-3 mb-2"></div>
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">Founder & MD, Nexvoy</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;