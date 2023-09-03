import React from 'react';
import coachList from './coach-list';
import CoachCard from './CoachCard';

function Coaches() {
  const coachIntro = 'These brilliant minds will surely help you ';
  return (
    <section>
      <div className='grid min-h-screen place-items-center bg-zinc-100 px-4 py-10'>
        <div className='grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {/* <h1 className=' font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4 md:col-span-2 md:grid-cols-2 md:text-4xl '>
            <span className='self-center md:col-span-3 md:text-7xl'>Meet Your Coaches</span>
          </h1> */}
          <h1 className=' grid font-extrabold sm:col-span-2 sm:gap-4 md:col-span-2 md:text-4xl '>
            <span className='self-center md:text-6xl'>Meet Your Coaches</span>
          </h1>
          <p className=' text-xs sm:row-start-2 sm:self-center'>{coachIntro}</p>
          <CoachCard />
        </div>
      </div>
    </section>
  );
}

export default Coaches;

// <div
//   key={index}
//   style={{ backgroundImage: `url(${student.portrait})`, boxShadow: '2px 2px #cec7c759' }}
//   className={`from sm:square h-16 bg-gradient-to-b from-cyan-600 bg-cover bg-no-repeat shadow-lg backdrop-grayscale sm:h-auto`}
// />

// <div
//   className={`sm:square relative h-16 overflow-hidden ${coach.color} bg-gradient-to-b bg-cover bg-no-repeat shadow-lg backdrop-grayscale sm:h-auto`}>
//   <img src={coach.portrait} alt='coach-portrait' className='object-cover shadow-xl' />
// </div>
