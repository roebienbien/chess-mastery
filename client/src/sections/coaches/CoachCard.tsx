import React from 'react';
import coachList from './coach-list';

function CoachCard() {
  return (
    <>
      {coachList.map((coach, index) => {
        return (
          <div key={index}>
            <div className={`bg-gradient-to-b ${coach.color} shadow-lg`}>
              <img
                src={coach.portrait}
                alt='coach-portrait'
                className={`sm:square relative mx-auto h-60 bg-cover bg-no-repeat sm:h-auto`}></img>
            </div>
            <div className='mt-2 flex items-center justify-center space-x-1'>
              <h2 className='text-center text-sm md:text-lg  '>
                <span className='mr-1 rounded bg-cyan-500 px-1 font-bold'>{coach.title}</span>
                {coach.name}
                <span className='ml-1'>({coach.rating})</span>
              </h2>
              <img src={coach.flag} alt='country-flag' className='h-4 w-4' />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CoachCard;
