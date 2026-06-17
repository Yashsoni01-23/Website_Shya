import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaGlobeAfrica, FaShoppingCart } from 'react-icons/fa';

function Basicdetails() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <div className="bg-[#0F172A] text-slate-300 font-sans relative overflow-hidden">
      
      {/* Services Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Operational Excellence
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Nexvoy bridges the gap between quality manufacturing and global market demand through strategic operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Global Exports */}
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white text-3xl mb-8 group-hover:bg-white group-hover:text-[#0F172A] transition-colors">
                <FaGlobeAfrica />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Trade & Logistics</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                We streamline the supply chain for essential goods, ensuring regulatory compliance and precision delivery to high-demand international markets.
              </p>
              <div className="flex flex-wrap gap-2">
                 {['Nigeria', 'Kenya', 'Ghana'].map(c => (
                   <span key={c} className="text-[10px] uppercase tracking-widest font-bold text-white/60 border border-white/20 px-3 py-1 rounded-full">{c}</span>
                 ))}
              </div>
            </motion.div>

            {/* D2C Retail */}
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white text-3xl mb-8 group-hover:bg-white group-hover:text-[#0F172A] transition-colors">
                <FaShoppingCart />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic D2C Retail</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Nexvoy establishes market leadership by optimizing product visibility and customer experience across India's premier digital marketplaces.
              </p>
              <div className="flex gap-4 items-center text-[10px] uppercase tracking-widest font-bold text-white/60">
                 <span>Amazon</span>
                 <span>•</span>
                 <span>Flipkart</span>
                 <span>•</span>
                 <span>Meesho</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Direct Business Inquiries</h2>
          <p className="text-slate-400 mb-12 leading-relaxed max-w-lg mx-auto">
            Connect with our leadership team for global trade partnerships or retail distribution opportunities.
          </p>
          
          <a
            href="https://wa.me/919407582843"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#0F172A] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-blue-50 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Connect via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Basicdetails;