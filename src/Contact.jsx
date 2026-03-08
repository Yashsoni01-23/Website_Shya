import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate a network request (Fake API call)
    setTimeout(() => {
      // Save to localStorage
      const savedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
      savedMessages.push(formData);
      localStorage.setItem('contactMessages', JSON.stringify(savedMessages));

      // Clear form and show success
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');

      // Reset button after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative bg-[#0B1120] py-20 px-6 overflow-hidden">
      
      {/* Background Decor (Glow Effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-bold tracking-widest uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mt-2"
          >
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Conversation</span>
          </motion.h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Whether you need custom web development or bulk export solutions, we are here to help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Information Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h4 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h4>
            <p className="text-slate-400 mb-10 relative z-10">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 relative z-10">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl border border-slate-700">
                   <FaPhoneAlt />
                </div>
                <div>
                   <h5 className="text-white font-semibold text-lg">Phone</h5>
                   <p className="text-slate-400">+91 94075-82843</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl border border-slate-700">
                   <FaEnvelope />
                </div>
                <div>
                   <h5 className="text-white font-semibold text-lg">Email</h5>
                   <p className="text-slate-400">shyaventure@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl border border-slate-700">
                   <FaMapMarkerAlt />
                </div>
                <div>
                   <h5 className="text-white font-semibold text-lg">Headquarters</h5>
                   <p className="text-slate-400">Sagar, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 ml-1">Your Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-slate-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-slate-400">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button with Animation */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-cyan-500/30 hover:scale-[1.02]'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    Message Sent! <FaCheckCircle />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;