// src/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all">
        <img
          src="public\25 PIECES\25 PCS.png" // Ensure this path exists in the public folder
          alt="Wall Adhesive Hooks"
          className="w-full h-64 object-cover"
        />
        <div className="p-5 text-left">
          <Link to="/product/wall-adhesive-hooks">
            <h4 className="text-xl font-bold text-blue-700 hover:underline">Wall Adhesive Hooks</h4>
          </Link>
          <p className="text-gray-600 mt-1">Brand: <span className="font-semibold">Shya Venture</span></p>
          <p className="text-green-700 mt-1">Pack of 25 — <span className="font-bold">$5</span></p>
          <p className="text-red-600 font-semibold mt-1">Flat 30% Off on MRP</p>
          <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
