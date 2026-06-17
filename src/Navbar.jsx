import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Distribution', path: '/distribution' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0F172A] shadow-lg py-4' : 'bg-[#0F172A] py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-white uppercase leading-none">NEXVOY</span>
          <span className="text-[9px] font-medium tracking-[0.25em] text-blue-200 uppercase mt-1">
            Explore Your Next
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  location.pathname === link.path 
                  ? 'text-white border-b border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] border border-white text-white px-6 py-2 hover:bg-white hover:text-[#0F172A] transition-all">
          Enquire
        </Link>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden text-white text-2xl z-[60] relative" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - This was missing */}
      <div className={`md:hidden fixed inset-0 bg-[#0F172A] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="text-xl font-bold text-white uppercase tracking-[0.2em]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="mt-8 px-8 py-3 border border-white text-white font-bold text-sm uppercase tracking-[0.2em]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Enquire
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;