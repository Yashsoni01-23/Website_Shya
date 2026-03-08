import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaCheckCircle } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Myprojects = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION: Professional Intro */}
      <div className="bg-[#0B1120] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            We Build Digital Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Professional Web Development <br /> by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Shya Venture</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We craft high-performance **Single Page Applications (SPAs)** using cutting-edge technologies like **React & Vite**. 
            Fast, responsive, and SEO-friendly solutions tailored to your business needs.
          </p>
          
          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-6 md:gap-10 text-slate-400 text-3xl md:text-4xl mt-8">
            <FaReact className="hover:text-cyan-400 transition-colors" title="React" />
            <SiVite className="hover:text-purple-500 transition-colors" title="Vite" />
            <SiTailwindcss className="hover:text-cyan-500 transition-colors" title="Tailwind CSS" />
            <SiJavascript className="hover:text-yellow-400 transition-colors" title="JavaScript" />
            <FaNodeJs className="hover:text-green-500 transition-colors" title="Node.js" />
          </div>
        </div>
      </div>

      {/* 2. PRICING / SERVICES SECTION (3 Categories) */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900">Choose Your Web Package</h3>
          <p className="text-slate-600 mt-2"> tailored for speed, design, and performance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Plan 1: Basic */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-gray-400 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">Basic Starter</h4>
            <p className="text-gray-500 text-sm mb-6">Perfect for personal portfolios & landing pages.</p>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">₹ Standard</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Single Page Application (SPA)</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> React + Vite Performance</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Mobile Responsive</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Contact Form Integration</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition">Select Basic</button>
          </div>

          {/* Plan 2: Intermediate (Highlight) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-cyan-500 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
            <h4 className="text-2xl font-bold text-slate-800 mb-2">Professional</h4>
            <p className="text-gray-500 text-sm mb-6">For small businesses and startups.</p>
            <div className="text-4xl font-extrabold text-cyan-600 mb-6">₹ Premium</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-500"/> Everything in Basic</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-500"/> Modern UI/UX Animations</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-500"/> Interactive Sections</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-500"/> SEO Optimization</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-500"/> Social Media Integration</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-cyan-500/50 transition">Select Professional</button>
          </div>

          {/* Plan 3: Advanced */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">Advanced Business</h4>
            <p className="text-gray-500 text-sm mb-6">For full-scale corporate requirements.</p>
            <div className="text-4xl font-extrabold text-purple-600 mb-6">₹ Custom</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500"/> Advanced Custom Logic</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500"/> API Integration</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500"/> Payment Gateway Setup</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500"/> Admin Dashboard</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition">Contact for Price</button>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center bg-blue-50 text-blue-800 px-4 py-3 rounded-lg text-sm border border-blue-100 inline-block mx-auto">
          <strong>Note:</strong> Pricing above is for Single Page Applications (SPA). For Multi-page websites or complex backends, charges will vary accordingly.
        </div>
      </div>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <div className="bg-white py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">🚀 Our Featured Projects</h3>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Project 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <div className="h-56 overflow-hidden">
               {/* Professional Hotel Image */}
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Hotel Website" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-2">🏨 Luxury Hotel Booking System</h3>
              <p className="text-slate-600 mb-4">A complete reservation platform featuring real-time room availability, interactive maps, and secure payment processing.</p>
              <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">React</span>
              <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded ml-2">Node.js</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <div className="h-56 overflow-hidden">
              {/* Professional Jewelry Image */}
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" alt="Jewelry Store" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-2">💍 Premium Jewelry E-Commerce</h3>
              <p className="text-slate-600 mb-4">An elegant storefront with high-resolution galleries, inventory management, and seamless filtering options.</p>
              <span className="text-xs font-bold px-2 py-1 bg-cyan-100 text-cyan-700 rounded">Tailwind</span>
              <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-700 rounded ml-2">Firebase</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4. GITHUB & SOCIALS */}
      <div className="py-16 text-center bg-gray-50">
         <p className="text-slate-500 mb-6">Want to see the code behind these projects?</p>
         
         <a
          href="https://github.com/Yashsoni01-23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#24292e] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-xl"
        >
          <FaGithub className="mr-3 text-2xl" />
          Visit Shya Venture GitHub
        </a>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/yash-soni-6a7304126/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-[#0077b5] px-6 py-3 rounded-full font-medium hover:bg-[#005582] transition shadow-md"
          >
            <FaLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center pb-12">
        <Link
          to="/"
          className="inline-flex items-center text-slate-500 hover:text-cyan-600 font-semibold text-lg transition-colors"
        >
          <span>⬅️ Back to Home</span>
        </Link>
      </div>

    </div>
  );
};

export default Myprojects;