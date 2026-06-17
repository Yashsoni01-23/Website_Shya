import React from 'react';
import { FaCheckCircle, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Myprojects = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="py-24 px-6 text-center border-b border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Nexvoy Digital Solutions</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          High-performance web architecture tailored for modern business growth. 
          Scalable, responsive, and SEO-optimized.
        </p>
      </div>

      {/* PRICING PLANS */}
      <div className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Engagement Models</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Starter", desc: "For portfolios & landing pages.", price: "Standard", color: "border-slate-700" },
            { title: "Professional", desc: "For startups & growth brands.", price: "Premium", color: "border-blue-500 shadow-xl" },
            { title: "Advanced", desc: "Full-scale corporate solutions.", price: "Custom", color: "border-slate-700" }
          ].map((plan, i) => (
            <div key={i} className={`bg-white text-slate-900 rounded-2xl p-10 border-t-4 ${plan.color}`}>
              <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
              <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
              <div className="text-3xl font-bold mb-8">₹ {plan.price}</div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-600"/> SPA Architecture</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-600"/> React + Vite Performance</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-600"/> Mobile Responsive</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all">Select Plan</button>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PROJECTS */}
      <div className="bg-white py-24 px-6 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">Featured Deployments</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Luxury Hospitality Platform", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
              { title: "Premium E-Commerce Store", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" }
            ].map((proj, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <div className="h-64 overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL FOOTER */}
      <div className="py-20 text-center">
        <p className="text-slate-400 mb-8 font-medium">Explore our technical documentation & professional profile</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
            <FaGithub /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center pb-12">
        <Link to="/" className="text-slate-500 hover:text-blue-500 font-bold uppercase tracking-widest text-xs transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Myprojects;