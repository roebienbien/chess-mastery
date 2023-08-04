import React from 'react';
import coachList from './coachList';

function CoachCards() {
  const introduction =
    'Get ready to elevate your game and embark on a rewarding chess journey with these accomplished mentors.';
  return (
    <div className='grid gap-y-10 md:grid-cols-3 md:gap-x-10'>
      {coachList.map((coach, index) => {
        return (
          <div key={index} className='rounded-lg border border-white p-2 shadow-lg'>
            {/* <div className='aspect-h-1 aspect-w-1 lg:aspect-h-2 lg:aspect-w-2 sm:aspect-1'> */}
            <div className='aspect-square'>
              <img src={coach.portrait} alt='coach-portrait' className='rounded-lg' />
            </div>
            <div>
              {/* <div className='-mt-44 py-2'> */}
              <div className='py-2'>
                <h2 className='text-2xl font-bold lg:text-4xl'>{coach.name}</h2>
                <h3 className='text-xs lg:text-base'>{coach.title}</h3>
              </div>
              <p className='pt-2 text-lg'>{coach.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoachCards;

// <div className=''>
//   {/* <h2>{introduction}</h2> */}
//   {/* <div className=' md:flex md:flex-row md:justify-center md:space-x-28'> */}
//   <div>
//     {coachList.map((coach, index) => {
//       return (
//         // <div key={index} className=' bg-darkTheme-100 p-2'>
//         <div className=' md:flex md:flex-row md:justify-center md:space-x-28'>
//           <div className='aspect-h-2 aspect-w-3 sm:aspect-w-1 lg:aspect-h-4 lg:aspect-w-3 sm:aspect-1'>
//             {/* <div className='w-full'> */}
//             <img
//               src={coach.portrait}
//               alt='coach-portrait'
//               className='max-h-96  rounded-lg object-cover object-top shadow-lg md:object-center'
//               // className='rounded-lg object-cover object-top shadow-lg sm:object-center'
//             />
//             <h3 className='text-2xl font-semibold md:text-3xl'> {coach.name}</h3>
//             <h4 className='text-sm'>{coach.title}</h4>
//             <p className='text-md pt-4'>{coach.description}</p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
