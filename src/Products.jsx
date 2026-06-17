import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Wall Adhesive Hooks",
    brand: "Nexvoy",
    price: "₹499",
    discount: "Flat 30% Off",
    img: "/25 PIECES/25 PCS.png" 
  },
  {
    id: 2,
    name: "Silicone Roti Mat",
    brand: "Nexvoy",
    price: "₹399",
    discount: "Flat 20% Off",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403ccc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Silicone Hand Gloves",
    brand: "Nexvoy",
    price: "₹599",
    discount: "Flat 25% Off",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Cotton Saree Covers",
    brand: "Nexvoy",
    price: "₹799",
    discount: "Flat 40% Off",
    img: "https://images.unsplash.com/photo-1583947215259-38e31be0b5d8?auto=format&fit=crop&w=800&q=80"
  }
];

const Products = () => {
  return (
    <section className="bg-[#0F172A] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Collection</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600 mb-1">{product.brand}</p>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h4>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-black text-slate-900">{product.price}</span>
                  <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-1 rounded">{product.discount}</span>
                </div>
                <button className="w-full py-3 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                  View Details <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;