import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='font-poppins'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
