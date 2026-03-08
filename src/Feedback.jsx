import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Amazing service and support!",
    name: "John Doe",
  },
  {
    quote: "Delivered on time with great quality.",
    name: "Jane Smith",
  },
  {
    quote: "Highly recommend for exports.",
    name: "Ali Khan",
  },
];

const Feedback = () => {
  return (
    <section
      id="feedback"
      className="bg-gradient-to-br from-blue-50 to-blue-300 py-16 px-4"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
      >
        What Our Clients Say
      </motion.h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-5xl text-cyan-400 mb-4 leading-none">“</div>
            <p className="text-gray-700 text-lg italic">{item.quote}</p>
            <p className="mt-4 font-semibold text-blue-600 text-right">– {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
