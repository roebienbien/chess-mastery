import { useState } from 'react';
import kingToKing from '../assets/king-topple-king.jpg';
import Login from '../pages/login/Login';
import { BsArrowRight } from 'react-icons/bs';

function Hero() {
  const greetings = `Chess Mastery`;
  const slogan = 'Training grandmasters one move at a time.';
  const callToAction = `Let's embark on this chess adventure together.`;

  const [showLogin, setShowLogin] = useState(false);

  const handleOnClose = () => setShowLogin(false);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${kingToKing})` }}
        className={` grid h-screen justify-end bg-right bg-no-repeat object-cover px-10 text-white lg:aspect-h-9 lg:aspect-w-16 lg:grid-cols-12 lg:bg-cover`}>
        <div className='grid place-items-center px-4 lg:col-span-full lg:col-start-6'>
          <div>
            <h1 className='text-3xl font-bold leading-snug tracking-wider sm:text-5xl md:text-7xl'>{slogan}</h1>
            <div className='mt-20'>
              <p>{callToAction}</p>
              <button className='mt-2 flex items-center rounded-lg  border-2 border-cyan-400 p-4'>
                Join Now
                <BsArrowRight className='ml-1 fill-cyan-500 text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// <section className='text-white'>
//   <div
//     style={{ backgroundImage: `url(${kingToKing})` }}
//     className={`flex h-screen items-center bg-no-repeat object-cover px-10 md:justify-end lg:bg-cover`}>
//     <div className='sm:mt-40'>
//       <h1 className='text-3xl font-bold leading-snug tracking-wider sm:text-5xl md:text-7xl'>{slogan}</h1>
//       <div className='mt-20'>
//         <p>{callToAction}</p>
//         <button className='mt-2 flex items-center rounded-lg  border-2 border-cyan-400 p-4'>
//           Join Now
//           {/* <AiOutlineArrowRight className='ml-1 fill-cyan-500' /> */}
//           <BsArrowRight className='ml-1 fill-cyan-500 text-2xl' />
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
