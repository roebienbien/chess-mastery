import { useState } from 'react';
import Layout from './components/layout/Layout';
import Coaches from './sections/coaches/Coaches';
import Hero from './sections/Hero';
import Membership from './sections/membership/Membership';
import Login from './pages/login/Login';

function App() {
  return (
    <Layout>
      <Hero />
      <div className=' bg-darkTheme-dark px-10 py-10 text-white '>
        <Coaches />
        <Membership />
      </div>
    </Layout>
  );
}

export default App;