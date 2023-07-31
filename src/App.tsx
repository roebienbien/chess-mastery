import Layout from './components/layout/Layout';
import Hero from './sections/Hero';

function App() {
  return (
    <Layout>
      <div className='h-screen bg-slate-100'>
        <Hero />
      </div>
    </Layout>
  );
}

export default App;
