import React from 'react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <div className="bg-white pt-16 pb-10 px-6 text-center shadow-sm">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 tracking-tight">
          🛒 Shya Venture Store
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto mb-2">
          Premium Home Organizing & Lifestyle Solutions
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          We specialize in decluttering your space with smart, durable, and aesthetic storage products. 
          Elevate your living spaces with organizers designed for modern homes.
        </p>

        {/* Amazon Store Button */}
        <div className="flex justify-center mb-16">
          <a 
            href="https://www.amazon.in/storefront?me=A2N8SYDU1PFMSN&ref_=ssf_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#232F3E] rounded-full hover:bg-[#FF9900] hover:text-black shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {/* UPDATED: Added 'group-hover:brightness-0' to turn logo black on hover */}
            <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                alt="Amazon Logo" 
                className="h-7 mr-4 mt-1 object-contain transition-all duration-200 group-hover:brightness-0"
            />
            Visit Our Official Amazon Store
          </a>
        </div>

        {/* IMAGE GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
           
           {/* Card 1 */}
           <div className="relative rounded-xl overflow-hidden shadow-lg h-72 bg-gray-200 group">
              <img 
                src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80" 
                alt="Organized Bedroom Closet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                  <h3 className="text-white font-bold text-xl drop-shadow-md">Bedroom & Closet</h3>
              </div>
           </div>

           {/* Card 2 */}
           <div className="relative rounded-xl overflow-hidden shadow-lg h-72 bg-gray-200 group">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Living Room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                  <h3 className="text-white font-bold text-xl drop-shadow-md">Drawing Hall & Living</h3>
              </div>
           </div>

           {/* Card 3 - UPDATED IMAGE */}
           <div className="relative rounded-xl overflow-hidden shadow-lg h-72 bg-gray-200 group">
              {/* Changed URL to a better Modular Kitchen image */}
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                alt="Modular Kitchen" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                  <h3 className="text-white font-bold text-xl drop-shadow-md">Modular Kitchen</h3>
              </div>
           </div>

        </div>
      </div>

      {/* B2B / EXPORT SECTION */}
      <div className="bg-slate-900 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-indigo-400 font-bold text-sm">Business to Business</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Bulk Orders & Global Export Solutions</h2>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Looking for wholesale quantities? <strong>Shya Venture</strong> is a trusted B2B partner for businesses across India and overseas. 
            We facilitate seamless bulk exports and sample orders via trusted trade platforms.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-white mb-2">📦 Bulk & Wholesale</h4>
              <p className="text-slate-400">
                Whether you need 100 units or 10,000, we supply high-quality goods with consistent manufacturing standards perfect for retailers and distributors.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-white mb-2">🌏 Export via Trade Partners</h4>
              <p className="text-slate-400">
                We are verified suppliers on <strong>IndiaMart</strong> and <strong>TradeIndia</strong>, ensuring secure payments and reliable logistics for Pan-India and International delivery.
              </p>
            </div>
          </div>

          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors">
            Contact for Corporate Inquiries
          </button>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center py-10 pb-20 bg-gray-50">
        <Link
          to="/"
          className="inline-flex items-center text-slate-500 hover:text-indigo-600 font-medium transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>

    </div>
  );
};

export default Ecommerce;