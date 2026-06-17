import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaGlobeAfrica, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "India-wide E-Commerce",
    subtitle: "D2C Retail",
    desc: "Selling trending home organizing & lifestyle products under the Nexvoy brand on India's top marketplaces.",
    icon: <FaStore />,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
    tags: ["Amazon", "Flipkart", "Meesho"],
    stat: "4.5/5 Rated",
    statIcon: <FaStar className="text-yellow-500" />,
  },
  {
    id: 2,
    title: "Exporting Globally",
    subtitle: "International Trade",
    desc: "Expanding Indian horizons by exporting petroleum essentials, candles, and handicrafts to African & Middle-East markets.",
    icon: <FaGlobeAfrica />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["DGFT", "IEC", "Logistics"],
    stat: "Verified Partner",
    statIcon: <FaCheckCircle className="text-blue-600" />,
  }
];

function Overview() {
  return (
    <section className="py-24 px-6 bg-[#0F172A] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Operational Overview
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="mt-8 text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Nexvoy combines strategic retail and global trade to build a sustainable business ecosystem.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-slate-900 shadow-sm">
                  {service.statIcon} {service.stat}
                </div>
              </div>

              <div className="p-10">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  {service.icon}
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;