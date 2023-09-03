import coachList from './filllist';

function CoachCards() {
  const introduction =
    'Get ready to elevate your game and embark on a rewarding chess journey with these accomplished mentors.';
  return (
    <div className='grid gap-y-10 md:grid-cols-3 md:gap-x-10'>
      {coachList.map((coach, index) => {
        return (
          <div key={index} className=' rounded-lg bg-darkTheme-lightDark shadow-lg'>
            {/* <div className='aspect-h-1 aspect-w-1 lg:aspect-h-2 lg:aspect-w-2 sm:aspect-1'> */}
            <div className='aspect-square'>
              {/* <img src={coach.portrait} alt='coach-portrait' className='max-w-full rounded-t-lg' /> */}
            </div>
            <div>
              {/* <div className='-mt-44 py-2'> */}
              <div className='p-4'>
                <h2 className='text-2xl font-bold lg:text-4xl'>{coach.name}</h2>
                <h3 className='text-xs text-green-400 lg:text-base'>{coach.title}</h3>
                <p className='pt-2 text-lg'>{coach.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoachCards;
