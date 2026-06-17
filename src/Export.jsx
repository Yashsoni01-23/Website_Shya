import React from 'react';
import { FaGlobe, FaBalanceScale, FaShippingFast, FaArrowRight } from 'react-icons/fa';

const Export = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nexvoy Global Trade</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Expanding the reach of Indian quality to global markets. We ensure seamless international trade through rigorous compliance, precision logistics, and a commitment to global standards.
          </p>
        </div>

        {/* Trade Platforms */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { name: "Alibaba", desc: "Trusted bulk export partner for international procurement." },
            { name: "Amazon Global", desc: "Curated lifestyle products accessible worldwide." },
            { name: "Direct Trade", desc: "Seamless cross-border shipping for enterprise clients." }
          ].map((platform, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500 transition-all">
              <h4 className="text-xl font-bold mb-3">{platform.name}</h4>
              <p className="text-sm text-slate-400">{platform.desc}</p>
            </div>
          ))}
        </div>

        {/* Regulatory Framework */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-10 text-center">Trade Compliance & Operations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaBalanceScale />, title: "Legal Compliance", desc: "Fully registered with DGFT and maintaining valid IEC certification." },
              { icon: <FaShippingFast />, title: "Global Logistics", desc: "Reliable, end-to-end shipping solutions for safe international arrival." },
              { icon: <FaGlobe />, title: "Trade Standards", desc: "Adherence to international HS codes, packaging, and customs documentation." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-slate-900">
                <div className="text-blue-600 text-3xl mb-6">{item.icon}</div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Destinations */}
        <div className="bg-white rounded-3xl p-12 text-slate-900 mb-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Strategic Export Destinations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Nigeria', 'UAE', 'USA', 'South Africa', 'UK', 'Kenya', 'Saudi Arabia', 'Bangladesh'].map(country => (
              <span key={country} className="px-6 py-2 bg-slate-100 rounded-full text-sm font-bold tracking-widest uppercase">
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h4 className="text-xl font-bold mb-8">Ready to initiate a bulk order?</h4>
          <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all">
            Contact Export Team <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;