import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaStore, FaGlobeAfrica, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
// SiAlibaba hata diya gaya hai taaki error na aaye
import { SiReact, SiAmazon, SiFlipkart, SiTailwindcss } from 'react-icons/si';

// Professional Data Array
const services = [
  {
    id: 1,
    title: "Modern Web Projects",
    subtitle: "Digital Solutions",
    desc: "Crafting blazing-fast Single Page Applications (SPAs), corporate portfolios, and scalable web apps for global clients.",
    icon: <FaLaptopCode />,
    color: "blue", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Vite", "Tailwind"],
    stat: "High Performance",
    statIcon: <FaCheckCircle className="text-blue-500" />,
    link: "/projects"
  },
  {
    id: 2,
    title: "India-wide E-Commerce",
    subtitle: "D2C Retail",
    desc: "Selling trending home organizing & lifestyle products under the Shya Venture brand on India's top marketplaces.",
    icon: <FaStore />,
    color: "pink", 
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
    tags: ["Amazon", "Flipkart", "Meesho"],
    stat: "4.5/5 Rated",
    statIcon: <FaStar className="text-yellow-500" />,
    link: "/ecommerce"
  },
  {
    id: 3,
    title: "Exporting Globally",
    subtitle: "International Trade",
    desc: "Expanding Indian horizons by exporting petroleum essentials, candles, and handicrafts to African & Middle-East markets.",
    icon: <FaGlobeAfrica />,
    color: "green", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["DGFT", "IEC", "Alibaba"],
    stat: "Verified Seller",
    statIcon: <FaCheckCircle className="text-green-500" />,
    link: "/exports"
  }
];

function Overview() {
  return (
    <section className="py-24 px-6 bg-[#0B1120] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold tracking-widest uppercase mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Overview of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Operations</span>
          </motion.h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Shya Venture combines technology, retail, and logistics to build a sustainable business ecosystem.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group flex flex-col relative"
            >
              
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                
                {/* Stat Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  {service.statIcon}
                  {service.stat}
                </div>
              </div>

              {/* Icon */}
              <div className={`absolute top-40 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl text-${service.color}-600 z-10 group-hover:-translate-y-2 transition-transform duration-300 border border-slate-100`}>
                {service.icon}
              </div>

              {/* Content Section */}
              <div className="pt-16 pb-8 px-8 flex flex-col flex-grow">
                <span className={`text-xs font-bold uppercase tracking-wider text-${service.color}-600 mb-1`}>
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100 mb-6"></div>

                {/* Tags & Action */}
                <div className="flex items-center justify-between">
                   <div className="flex -space-x-2 overflow-hidden">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-white ring-2 ring-white z-0">
                          {tag}
                        </span>
                      ))}
                   </div>
                   
                   <a href={service.link} className={`w-10 h-10 rounded-full bg-${service.color}-50 flex items-center justify-center text-${service.color}-600 group-hover:bg-${service.color}-600 group-hover:text-white transition-all duration-300`}>
                     <FaArrowRight className="text-sm" />
                   </a>
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