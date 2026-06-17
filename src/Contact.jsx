import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-[#0F172A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Connect With Us
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Reach out for business inquiries, export partnerships, or retail distribution opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Direct Details</h3>
            
            {[
              { icon: <FaPhoneAlt />, title: "Phone", val: "+91 94075-82843" },
              { icon: <FaEnvelope />, title: "Email", val: "contact@nexvoy.com" },
              { icon: <FaMapMarkerAlt />, title: "Headquarters", val: "Sagar, Madhya Pradesh, India" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-white font-bold">{item.title}</h5>
                  <p className="text-slate-400 text-sm">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all" required />
              </div>
              
              <div>
                <label className="block text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all" required />
              </div>

              <div>
                <label className="block text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we assist you?" rows="4" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all resize-none" required></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full font-bold text-sm uppercase tracking-widest py-5 rounded-xl transition-all flex items-center justify-center gap-3 ${
                  status === 'success' ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'
                }`}
              >
                {status === 'idle' && <>Send Message <FaPaperPlane /></>}
                {status === 'sending' && "Processing..."}
                {status === 'success' && <>Message Sent <FaCheckCircle /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;