import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onTicketsClick }) => {
  return (
    <div className="app-container">
      <Navbar onTicketsClick={onTicketsClick} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
