import Layout from './components/layout/Layout';
import Coaches from './sections/coaches/Coaches';
import Hero from './sections/Hero';
import Pricing from './sections/pricing/Pricing';

function App() {
  return (
    <Layout>
      <div className=' bg-darkTheme-200 px-10 py-10 text-white '>
        <Hero />
        <Coaches />
        <Pricing />
      </div>
    </Layout>
  );
}

export default App;
