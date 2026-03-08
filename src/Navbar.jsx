// src/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'; // Make sure to install react-icons

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-xl py-3' : 'bg-[#0B1120] py-4'
    } border-b border-slate-800`}>
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- LEFT: LOGO SECTION --- */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/•SHYAVENTURE•(1).png" 
            alt="Shya Venture Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-6"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              SHYA VENTURE
            </h1>
            <span className="hidden md:block text-[10px] text-slate-400 tracking-[0.2em] uppercase font-medium">
              Global & Domestic
            </span>
          </div>
        </Link>

        {/* --- CENTER: NAVIGATION LINKS --- */}
        <ul className="hidden lg:flex items-center space-x-8">
          {['/', '/projects', '/ecommerce'].map((path) => (
            <li key={path}>
              <Link 
                to={path} 
                className={`text-base font-medium transition-all duration-200 ${
                  isActive(path) 
                    ? 'text-cyan-400 font-bold' 
                    : 'text-slate-300 hover:text-white hover:scale-105'
                }`}
              >
                {path === '/' ? 'Home' : path === '/projects' ? 'Projects' : 'Domestic Store'}
              </Link>
            </li>
          ))}
          
          {/* Global Exports Link */}
          <li>
            <Link 
               to="/exports"
               className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:text-cyan-300 transition-all"
            >
              Global Exports 🌏
            </Link>
          </li>
        </ul>

        {/* --- RIGHT: DIRECT ACTIONS (Trendy & Useful) --- */}
        <div className="hidden md:flex items-center space-x-5">
          
          {/* 1. Cart Icon (Kept for Ecommerce) */}
          <Link to="/cart" className="relative p-2 text-slate-400 hover:text-cyan-400 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse border border-[#0B1120]"></span>
          </Link>

          {/* 2. WhatsApp Direct (Very Useful for Indian Business) */}
          <a 
            href="https://wa.me/919407582843" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition-transform hover:scale-110"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="h-7 w-7" />
          </a>

          {/* Divider */}
          <div className="h-6 w-px bg-slate-700 mx-1"></div>

          {/* 3. "Let's Talk" CTA Button (Replaces Login/Signup) */}
          {/* This scrolls to contact section or goes to contact page */}
          <a 
            href="#contact" // Or Link to="/contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            Let's Talk
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;