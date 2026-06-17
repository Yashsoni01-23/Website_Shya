import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0F172A] border-t border-white/10 text-white font-sans">
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-xl font-bold tracking-tighter">NEXVOY</h3>
          <p className="text-[11px] leading-relaxed text-slate-400 uppercase tracking-widest">
            Scaling Indian excellence to global markets. Operational integrity and innovation.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Navigation</h4>
          <ul className="space-y-4 text-xs text-slate-400">
            {['Home', 'Products', 'Distribution', 'Contact'].map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Legal/Support */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Legal</h4>
          <ul className="space-y-4 text-xs text-slate-400">
            {['Privacy Policy', 'Terms of Service', 'Export Compliance', 'Returns'].map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Headquarters</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sagar, Madhya Pradesh<br />
            India
          </p>
          <a href="mailto:contact@nexvoy.com" className="block text-xs text-blue-400 mt-4 hover:underline">contact@nexvoy.com</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Nexvoy Global. All rights reserved.</p>
        <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center gap-2 hover:text-white transition-colors">
          Back to top <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;