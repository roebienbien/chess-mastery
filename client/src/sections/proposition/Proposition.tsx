import kingSurround from '../../assets/king-surround.jpg';
import AmenitiesCards from './AmenitiesCards';

function Proposition() {
  const proposition = 'For over a decades, we have produce hundreds of titled chess masters through our thorough courses.';
  return (
    <section>
      <div className={` my-32 flex items-center justify-center bg-cover bg-no-repeat `}>
        <div className='grid justify-items-center opacity-100'>
          <h2 className='text-center text-3xl font-semibold tracking-wider sm:text-6xl md:text-7xl'>Why Choose Us?</h2>
          {/* <p className=' mt-4  px-4 text-center leading-relaxed tracking-wider sm:max-w-lg sm:text-xl md:max-w-7xl md:text-2xl'> */}
          <p className=' mt-2  max-w-xs px-2 text-center text-sm leading-relaxed tracking-wider'>{proposition}</p>
          <AmenitiesCards />
        </div>
      </div>
    </section>
  );
}

export default Proposition;
