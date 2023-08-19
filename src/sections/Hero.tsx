import { useState } from 'react';
import kingToKing from '../assets/king-topple-king.jpg';
import Login from '../pages/login/Login';

function Hero() {
  const greetings = `Chess Mastery`;
  const slogan = 'Forging grandmasters one move at a time.';
  const callToAction = `Let's embark on this chess adventure together and unlock your full potential as a chess player!`;

  const [showLogin, setShowLogin] = useState(false);

  const handleOnClose = () => setShowLogin(false);

  return (
    <section className='text-white'>
      <div className='h-screen '>
        <div
          className=' flex h-full w-full  items-center bg-cover bg-no-repeat '
          style={{ backgroundImage: `url(${kingToKing})` }}>
          <div className='px-10'>
            <div className='space-y-3'>
              <h1 className='text-5xl font-bold lg:text-8xl'>{greetings}</h1>
              <h2 className='font-semibold lg:text-4xl'>{slogan}</h2>
            </div>
            <div className='pt-12'>
              <p>{callToAction}</p>
              <div className='mt-4'>
                <button onClick={() => setShowLogin(true)} className='primary-theme primary-hover rounded-lg p-4 '>
                  Join Chess Mastery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Login visible={showLogin} onClose={handleOnClose} />
    </section>
  );
}

export default Hero;
