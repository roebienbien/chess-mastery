import { useState } from 'react';
import kingToKing from '../assets/king-topple-king.jpg';
import Login from '../pages/login/Login';
import Navbar from '../components/layout/Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Membership from './membership/Membership';
import Coaches from './coaches/Coaches';

function Hero() {
  const greetings = `Chess Mastery`;
  const slogan = 'Training grandmasters one move at a time.';
  // const slogan = 'Bringing out the grandmaster in you one move at a time.';
  const callToAction = `Let's embark on this chess adventure together.`;

  const [showLogin, setShowLogin] = useState(false);

  const handleOnClose = () => setShowLogin(false);

  return (
    <section className='text-white'>
      <div
        style={{ backgroundImage: `url(${kingToKing})` }}
        className={`flex h-screen items-center justify-start bg-no-repeat object-cover px-10 md:justify-end lg:bg-cover`}>
        <div className='sm:mt-40 md:max-w-3xl'>
          {/* <div className=''> */}
          <h1 className='bold text-4xl leading-snug tracking-wider sm:text-5xl md:text-7xl'>{slogan}</h1>
          {/* </div> */}
          <div className='mt-20'>
            <p>{callToAction}</p>
            <button className='mt-2 flex items-center rounded-lg  border-2 border-cyan-400 p-4'>
              Join Now
              <AiOutlineArrowRight className='ml-1 fill-cyan-500' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// <div style={{ backgroundImage: `url(${kingToKing})` }} className={`h-screen bg-cover bg-no-repeat `}>
//   <div className='grid grid-cols-12 pt-40'>
//     <div className='col-span-7 col-start-6 grid'>
//       <div>
//         <h1 className='bold tracking-widest md:text-7xl'>{greetings}</h1>
//         <h2 className='mt-2 tracking-wide md:text-3xl'>{slogan}</h2>
//       </div>
//       <div className='mt-20'>
//         <p>{callToAction}</p>
//         <button className='mt-2 flex items-center rounded-lg  border-2 border-cyan-400 p-4'>
//           Join Now
//           <AiOutlineArrowRight className='ml-1 fill-cyan-500' />
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
