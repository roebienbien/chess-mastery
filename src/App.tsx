import Layout from './components/layout/Layout';
import Coaches from './sections/coaches/Coaches';
import Hero from './sections/Hero';
// import Hero1 from './sections/Hero1';
import Pricing from './sections/pricing/Pricing';

function App() {
  return (
    <Layout>
      <Hero />
      <div className=' bg-darkTheme-dark px-10 py-10 text-white '>
        <Coaches />
        <Pricing />
      </div>
    </Layout>
  );
}

export default App;
