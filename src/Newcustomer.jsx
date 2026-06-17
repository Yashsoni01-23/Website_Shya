import React from 'react';
import { Link } from 'react-router-dom';

const Newcustomer = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        
        {/* Welcome Icon / Animation */}
        <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎉</span>
        </div>

        <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome to Nexvoy!</h1>
        <p className="text-slate-600 mb-8">
          Your account has been successfully created. We're thrilled to have you on board to organize your next journey.
        </p>

        {/* Special Offer Box */}
        <div className="bg-slate-900 text-white rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-300 uppercase tracking-wider font-bold mb-1">New Member Bonus</p>
          <p className="text-xl font-black text-cyan-400">Use Code: NEXTVOY10</p>
          <p className="text-xs text-slate-400 mt-1">Get 10% off your first domestic order.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <Link 
            to="/shop" 
            className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Start Shopping Now
          </Link>
          <Link 
            to="/profile" 
            className="w-full bg-white text-slate-700 border border-slate-300 font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Complete Your Profile
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Newcustomer;