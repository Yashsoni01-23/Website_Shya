// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Title from './Title';
import About from './About';
import Basicdetail from './Basicdetails';
import Overview from './Overview';
import Feedback from './Feedback';
import Contact from './Contact';
import Footer from './Footer';

import Myprojects from './Myprojects';
import Ecommerce from './Ecommerce';
import Export from './Export';
import ScrollToTop from './ScrollToTop';
import Newcustomer from './Newcustomer'; // Yeh import hona zaroori hai

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        {/* This always shows on all pages */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-grow">
          <Routes>
            
            {/* 1. HOME PAGE - Yahan se Newcustomer hata diya gaya hai */}
            <Route path="/" element={
              <>
                <Title />
                <About />
                <Basicdetail />
                <Overview />
                <Feedback />
                <Contact />
              </>
            } />

            {/* 2. NEW CUSTOMER WELCOME PAGE - Yeh ek alag route hona chahiye */}
            {/* Jab Navbar se 'navigate("/newcustomer")' chalega, tab yeh page khulega */}
            <Route path="/newcustomer" element={<Newcustomer />} />

            {/* Other Pages */}
            <Route path="/projects" element={<Myprojects />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/exports" element={<Export />} />
            
          </Routes>
        </main>

        {/* This also always shows on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;