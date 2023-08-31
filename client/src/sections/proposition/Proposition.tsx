import React from 'react';
// import kingSurround from '../../assets/king-surround.jpg';
import kingSurround from '../../assets/king-surround.jpg';
import AmenitiesCards from './AmenitiesCards';

function Proposition() {
  // const imageKo = `https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80`;
  const proposition = 'For over two decades, we have produced countless titled chess masters through our thorough courses.';
  // const proposition =
  //   ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita a adipisci aut autem aperiam. Cum reprehenderit minima dicta dolorem?';
  return (
    <section>
      <div className={` my-32 flex items-center justify-center bg-cover bg-no-repeat `}>
        <div className='grid justify-items-center opacity-100'>
          <h2 className='text-center text-3xl font-semibold tracking-wider sm:text-6xl md:text-7xl'>Why Choose Us?</h2>
          {/* <p className=' mt-4  px-4 text-center leading-relaxed tracking-wider sm:max-w-lg sm:text-xl md:max-w-7xl md:text-2xl'> */}
          <p className=' mt-2 max-w-xs px-2 text-center text-xs leading-relaxed tracking-wider'>{proposition}</p>
          <AmenitiesCards />
        </div>
      </div>
    </section>
  );
}

export default Proposition;
