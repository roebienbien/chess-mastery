import kingSurround from '../../assets/king-surround.jpg';
import AmenitiesCards from './AmenitiesCards';

function Proposition() {
  const proposition = 'For over a decades, we have produce hundreds of titled chess masters through our thorough courses.';
  return (
    <section>
      <div className='mb-72 mt-20 grid h-screen justify-items-center sm:mb-96 lg:mb-0'>
        {/* <div className='grid justify-items-center opacity-100'> */}
        <div className=''>
          <h2 className='text-center text-3xl font-bold tracking-wide xs:text-4xl sm:text-6xl md:text-7xl'>
            Why Choose Us?
          </h2>
          <p className=' mx-auto mt-2 max-w-xs px-2 text-center text-sm leading-relaxed tracking-wider sm:max-w-lg sm:text-base'>
            {proposition}
          </p>
          <AmenitiesCards />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Proposition;
