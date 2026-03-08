// src/Export.jsx
import React from 'react';
import { FaGlobe, FaBalanceScale, FaShippingFast } from 'react-icons/fa';
import { SiEtsy, SiAmazon } from 'react-icons/si';

const Export = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10 text-left">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">🌍 Exporting from India with Shya Venture</h2>

        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Shya Venture is committed to expanding the reach of Indian goods to global markets. We follow strict export policies and are present on major international trade platforms to ensure smooth, legal, and scalable business practices.
        </p>

        {/* Export Platforms */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 border border-gray-200">
            <FaGlobe className="text-orange-500 text-4xl" />
            <div>
              <h4 className="text-xl font-bold">Alibaba</h4>
              <p className="text-sm text-gray-600">Buy directly from our Alibaba store for bulk export orders.</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 border border-gray-200">
            <SiEtsy className="text-pink-500 text-4xl" />
            <div>
              <h4 className="text-xl font-bold">Etsy</h4>
              <p className="text-sm text-gray-600">Our creative crafts and decor items are also available internationally on Etsy.</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 border border-gray-200">
            <SiAmazon className="text-yellow-500 text-4xl" />
            <div>
              <h4 className="text-xl font-bold">Amazon Global</h4>
              <p className="text-sm text-gray-600">Reach our curated products via Amazon’s global selling program.</p>
            </div>
          </div>
        </div>

        {/* Export Regulations */}
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">📋 Export Guidelines & Policies</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 border">
            <FaBalanceScale className="text-blue-600 text-3xl mb-3" />
            <h4 className="text-lg font-bold mb-2">DGFT & IEC Code</h4>
            <p className="text-sm text-gray-600">Every exporter must register with DGFT and obtain an Import Export Code (IEC) to legally ship goods outside India.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border">
            <FaShippingFast className="text-green-600 text-3xl mb-3" />
            <h4 className="text-lg font-bold mb-2">Shipping & Logistics</h4>
            <p className="text-sm text-gray-600">We partner with reliable logistics services for safe and timely international delivery.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border">
            <FaGlobe className="text-purple-600 text-3xl mb-3" />
            <h4 className="text-lg font-bold mb-2">Trade Compliance</h4>
            <p className="text-sm text-gray-600">We comply with global trade laws, including product packaging, HS codes, and customs documentation.</p>
          </div>
        </div>

        {/* Exporting Countries */}
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">🌐 Countries We Export To</h3>
        <ul className="list-disc pl-6 text-gray-700 text-md mb-10">
          <li>Nigeria</li>
          <li>United Arab Emirates</li>
          <li>United States</li>
          <li>South Africa</li>
          <li>United Kingdom</li>
          <li>Kenya</li>
          <li>Saudi Arabia</li>
          <li>Bangladesh</li>
        </ul>

        {/* Call to Action */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-inner text-center">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">Want to buy from our export store?</h4>
          <p className="text-sm text-gray-600 mb-4">You can also place orders via our verified accounts on Alibaba, Etsy, and Amazon Global.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Visit Alibaba Store</a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Visit Etsy Store</a>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Visit Amazon Store</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
