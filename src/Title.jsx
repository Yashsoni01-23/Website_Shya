import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Title = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0F172A] flex items-center justify-center overflow-hidden py-24">
      {/* Dynamic Background Grid Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-4 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
          >
            Nexvoy Executive Operations
          </motion.div>

          <h1 className="text-[60px] md:text-[110px] font-black leading-[0.8] text-white mb-10 tracking-tighter">
            NEXVOY<br />
            <span className="font-serif italic font-light text-[50px] md:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Global</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
            Architecting the future of international trade. Precision, scale, and excellence across every border.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 bg-white text-[#0F172A] font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
              Explore Strategy <FaArrowRight />
            </button>
          </div>
        </motion.div>

        {/* Complex Animated Core */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Main Orbit */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center relative"
          >
            {/* Secondary Orbit */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[280px] h-[280px] border border-blue-500/30 rounded-full flex items-center justify-center"
            >
              {/* Central Core */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.2)]"
              >
                <span className="text-[#0F172A] font-black text-2xl tracking-tighter">NEXVOY</span>
              </motion.div>
            </motion.div>

            {/* Floating Nodes */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]"
            ></motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Title;