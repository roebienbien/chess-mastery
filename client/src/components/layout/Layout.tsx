import React from 'react';
import Footer from './Footer';
import Navbar from '../navbar/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='overflow-y-hidden font-poppins'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
