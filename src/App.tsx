import Layout from './components/layout/Layout';
import Hero from './sections/Hero';

function App() {
  return (
    <Layout>
      <div className='h-screen bg-darkTheme-200 text-white px-10 py-10 '>
        <Hero />
      </div>
    </Layout>
  );
}

export default App;
