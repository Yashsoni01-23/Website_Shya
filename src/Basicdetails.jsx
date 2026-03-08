import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaGlobeAfrica, FaShoppingCart, FaCode } from 'react-icons/fa';

function Basicdetails() {
  
  // Animation Variant
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <div className="bg-slate-50 text-slate-600 font-sans border-t border-slate-200">
      
      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Core Expertise</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Three pillars driving Shya Venture: Global Logistics, Retail Dominance, and Digital Innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            
            {/* 1. Export Services Card (Clean Green) */}
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-green-100 border border-slate-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-6">
                <FaGlobeAfrica />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Exports</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                Specializing in exporting high-demand essentials like Paraffin Candles and Pharmaceuticals to African markets.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Key Markets</p>
                <div className="flex flex-wrap gap-2">
                   {['Nigeria 🇳🇬', 'Kenya 🇰🇪', 'Ghana 🇬🇭'].map(c => (
                     <span key={c} className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-100">{c}</span>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* 2. Domestic Selling Card (Clean Amber) */}
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-amber-100 border border-slate-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-3xl mb-6">
                <FaShoppingCart />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">D2C Retail</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                A robust Pan-India retail network selling Home Organizing & Lifestyle products via major marketplaces.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Platforms</p>
                <div className="flex gap-3 items-center text-sm font-medium text-slate-700">
                   <span>Amazon</span>
                   <span className="text-slate-300">|</span>
                   <span>Flipkart</span>
                   <span className="text-slate-300">|</span>
                   <span>Meesho</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Web Development Card (Clean Blue) */}
            <motion.div 
              custom={2} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100 border border-slate-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6">
                <FaCode />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Tech Solutions</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                Developing blazing fast Single Page Applications (SPAs) and corporate portfolios for global clients.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Client Base</p>
                <div className="flex flex-wrap gap-2">
                   {['USA 🇺🇸', 'UK 🇬🇧', 'UAE 🇦🇪'].map(c => (
                     <span key={c} className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100">{c}</span>
                   ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-10 md:p-16 text-center relative z-10 shadow-xl shadow-slate-200/50">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Partner with <span className="text-green-600">Shya Venture?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you need bulk exports, want to list your products, or build a website – we are just a message away.
          </p>
          
          <a
            href="https://wa.me/919407582843"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-green-200 hover:shadow-green-300 hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 group"
          >
            <FaWhatsapp className="text-2xl group-hover:animate-bounce" />
            Chat Directly on WhatsApp
          </a>
          
          <p className="mt-6 text-sm text-slate-400">
            Typically replies within <span className="text-slate-600 font-semibold">1 Hour</span>
          </p>
        </div>
      </section>

    </div>
  );
}

export default Basicdetails;