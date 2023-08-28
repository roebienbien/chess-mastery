import { useState } from 'react';
import kingToKing from '../assets/king-topple-king.jpg';
import Login from '../pages/login/Login';
import Navbar from '../components/layout/Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Membership from './membership/Membership';
import Coaches from './coaches/Coaches';

function Hero() {
  const greetings = `Chess Mastery`;
  const slogan = 'Forging grandmasters one move at a time.';
  const callToAction = `Let's embark on this chess adventure together.`;

  const [showLogin, setShowLogin] = useState(false);

  const handleOnClose = () => setShowLogin(false);

  return (
    <section className='text-white'>
      {/* <div style={{ backgroundImage: `url(${kingToKing})` }} className='relative h-screen bg-cover bg-no-repeat'> */}
      <div style={{ backgroundImage: `url(${kingToKing})` }} className={`h-screen bg-cover bg-no-repeat `}>
        <div className='grid grid-cols-12 pt-40'>
          <div className='col-span-7 col-start-6 grid'>
            <div>
              <h1 className='bold tracking-widest md:text-7xl'>{greetings}</h1>
              <h2 className='mt-2 tracking-wide md:text-3xl'>{slogan}</h2>
            </div>
            <div className='mt-20'>
              <p>{callToAction}</p>
              <button className='mt-2 flex items-center rounded-lg  border-2 border-cyan-400 p-4'>
                Join Now
                <AiOutlineArrowRight className='ml-1 fill-cyan-500' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

//    <div className=VjV'px-10'>
//     <div className='space-y-3'>
//       <h1 className='text-5xl font-bold lg:text-8xl'>{greetings}</h1>
//       <h2 className='font-semibold lg:text-4xl'>{slogan}</h2>
//     </div>
//     <div className='pt-12'>
//       <p>{callToAction}</p>
//       <div className='mt-4'>
//         <button onClick={() => setShowLogin(true)} className='primary-theme primary-hover rounded-lg p-4 '>
//           Join Chess Mastery
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// {/* <Login visible={showLogin} onClose={handleOnClose} /> */}
