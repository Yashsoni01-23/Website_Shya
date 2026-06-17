import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] font-sans">
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Nexvoy Retail Store
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          Premium lifestyle and home organization solutions designed for modern spaces. 
          Available across India's leading digital marketplaces.
        </p>

        {/* Amazon Store Button */}
        <a 
          href="https://www.amazon.in/storefront?me=A2N8SYDU1PFMSN&ref_=ssf_share" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-[#0F172A] bg-white rounded-full hover:bg-blue-50 transition-all duration-300"
        >
          Visit Official Amazon Store
        </a>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Bedroom & Closet", img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80" },
             { title: "Living & Decor", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" },
             { title: "Modular Kitchen", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" }
           ].map((item, i) => (
             <div key={i} className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group cursor-pointer">
               <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent p-8 flex flex-col justify-end">
                 <h3 className="text-white font-bold text-xl">{item.title}</h3>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* B2B / EXPORT SECTION */}
      <div className="bg-white py-24 px-6 text-center text-slate-900">
        <div className="max-w-4xl mx-auto">
          <span className="uppercase tracking-[0.2em] text-blue-600 font-bold text-[10px]">Strategic Partnerships</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-10">Bulk Orders & Global Trade</h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-16">
            <strong>Nexvoy</strong> is a trusted B2B partner for domestic and international distributors. 
            We ensure consistent manufacturing standards, secure payments, and reliable logistics for all wholesale requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            {[
              { title: "Bulk & Wholesale", desc: "Scalable supply chain solutions for retailers requiring consistent, high-quality inventory." },
              { title: "Export Excellence", desc: "Verified operations on global trade platforms ensuring secure cross-border delivery." }
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all">
            Corporate Inquiry
          </button>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center py-16 bg-white">
        <Link to="/" className="text-slate-400 hover:text-blue-600 font-bold uppercase tracking-widest text-xs transition-colors">
          ← Back to Home
        </Link>
      </div>

    </div>
  );
};

export default Ecommerce;