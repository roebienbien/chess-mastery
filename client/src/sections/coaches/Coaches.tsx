import React from 'react';
import studentList from './coach-list';

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
          {studentList.map((student, index) => {
            return (
              <div>
                <div
                  key={index}
                  style={{ backgroundImage: `url(${student.portrait})` }}
                  className={`${student.color} sm:square h-16 bg-cover bg-no-repeat shadow-xl  backdrop-grayscale sm:h-auto`}
                />
                <div className='mt-2 flex items-center justify-center space-x-1'>
                  <h2 className='text-center text-lg '>
                    <span className='mr-1 rounded bg-cyan-500 px-1 font-bold'>{student.title}</span>
                    {student.name}
                    <span className='ml-1'>({student.rating})</span>
                  </h2>
                  <img src={student.flag} alt='country-flag' className='h-4 w-4' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Coaches;
