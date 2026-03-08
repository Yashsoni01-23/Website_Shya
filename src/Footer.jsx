import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaPaperPlane,
  FaArrowUp 
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1120] text-slate-300 font-sans relative border-t border-slate-800">
      
      {/* 1. NEWSLETTER SECTION (Top Band) */}
      <div className="bg-[#111827] py-10 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-2">Join Our Global Network</h3>
            <p className="text-slate-400 text-sm">Subscribe to get updates on new Indian exports, e-commerce deals, and tech trends.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex w-full relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-slate-800 text-white px-5 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-700"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-r-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2">
                Subscribe <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <img
            src="/•SHYAVENTURE•(1).png"
            alt="Shya Venture Logo"
            className="h-20 object-contain"
          />
          <p className="text-sm leading-relaxed text-slate-400">
            Shya Venture is a premier bridge connecting authentic Indian goods and digital innovation with the global market. Quality, Trust, and Excellence.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 group"
              >
                <Icon className="text-slate-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
            Company
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {['About Us', 'Our Projects', 'Careers', 'Blog & News', 'Testimonials'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support & Legal (Professional Addition) */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
            Support
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {['Help Center', 'Terms of Service', 'Privacy Policy', 'Return Policy', 'Shipping Info'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-cyan-500 mt-1 text-lg" />
              <span>
                Regional Office:<br />
                Sagar, Madhya Pradesh, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-500" />
              <a href="tel:+919407582843" className="hover:text-white transition">+91 94075-82843</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-500" />
              <a href="mailto:shyaventure@gmail.com" className="hover:text-white transition">shyaventure@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="bg-[#050911] py-6 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          
          <div className="mb-2 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Shya Venture</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <span>Made with ❤️ in India</span>
            <div className="h-3 w-px bg-slate-700"></div>
            <div className="flex gap-2">
               {/* Just text placeholders for professionalism, or use icons if available */}
               <span>Privacy</span>
               <span>•</span>
               <span>Terms</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FLOATING BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg shadow-cyan-500/40 transition-all duration-300 z-50 hover:-translate-y-1 group"
        aria-label="Back to top"
      >
        <FaArrowUp className="group-hover:animate-bounce" />
      </button>

    </footer>
  );
};

export default Footer;