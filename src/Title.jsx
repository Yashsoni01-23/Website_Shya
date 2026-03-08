import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaShoppingCart, FaLaptopCode, FaArrowRight, FaGlobeAmericas } from 'react-icons/fa';

const Title = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1120] text-white font-sans flex items-center justify-center">
      
      {/* 1. ANIMATED BACKGROUND (Moving Grid) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-cyan-500 rounded-full w-1 h-1"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
              animate={{ y: [null, Math.random() * -100], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: Math.random() * 5 + 3, ease: "linear" }}
            />
        ))}
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Global Trade & Digital Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Bridging <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Global Borders
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We empower businesses through seamless <strong>Global Exports</strong>, dominating <strong>E-Commerce</strong> strategies, and cutting-edge <strong>Web Technologies</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Explore Services <FaArrowRight />
                </button>
                <button className="px-8 py-4 rounded-full border border-slate-600 text-white font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all backdrop-blur-md">
                    View Portfolio
                </button>
            </div>
        </motion.div>

        {/* RIGHT SIDE: ORBIT ANIMATION */}
        <div className="relative flex justify-center items-center h-[500px]">
           
           {/* --- UPDATED CENTRAL CORE --- */}
           <motion.div 
             animate={{ 
               boxShadow: ["0 0 20px #06b6d4", "0 0 50px #06b6d4", "0 0 20px #06b6d4"],
             }}
             transition={{ duration: 3, repeat: Infinity }}
             // SIZE REDUCED: w-32 h-32 (Standard)
             // Padding reduced: p-1 so image fills space
             className="w-32 h-32 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center z-20 relative overflow-hidden p-1"
           >
              {/* Image rounded-full aur object-cover lagaya taaki square na dikhe */}
              <img 
                src="/•SHYAVENTURE•(1).png" 
                alt="Shya Venture Logo" 
                className="w-full h-full object-cover rounded-full"
              />
           </motion.div>
           {/* --------------------------- */}

           {/* Orbit Ring 1 */}
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute w-[280px] h-[280px] border border-slate-700/50 rounded-full"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-3 rounded-full border border-blue-500 text-blue-400 shadow-lg">
                  <FaPlaneDeparture className="text-2xl transform -rotate-0" />
              </div>
              <div className="absolute bottom-8 left-8 bg-slate-900 p-3 rounded-full border border-pink-500 text-pink-400 shadow-lg">
                  <FaShoppingCart className="text-2xl" />
              </div>
               <div className="absolute bottom-8 right-8 bg-slate-900 p-3 rounded-full border border-green-500 text-green-400 shadow-lg">
                  <FaLaptopCode className="text-2xl" />
              </div>
           </motion.div>

           {/* Orbit Ring 2 */}
           <motion.div
             animate={{ rotate: -360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute w-[400px] h-[400px] border border-slate-800/50 rounded-full border-dashed"
           >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 bg-slate-800 p-2 rounded-full text-slate-500">
                  <FaGlobeAmericas className="text-xl" />
              </div>
           </motion.div>

           <div className="absolute w-full h-full bg-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

        </div>

      </div>
    </div>
  );
}

export default Title;