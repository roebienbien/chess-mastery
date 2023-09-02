import React from 'react';
import Amenities from './amenities';

function AmenitiesCards() {
  return (
    <div className='my-10 grid gap-y-6 px-4 lg:flex lg:justify-center lg:gap-y-0 lg:space-x-8'>
      {Amenities.map((amenity, index) => {
        const AmenityIcon = amenity.icon;
        return (
          // <div key={index} className='bg-zinc-100 py-20 hover:bg-black hover:text-white sm:px-8  lg:max-w-xs'>
          <div
            key={index}
            className='grid place-items-center bg-zinc-100 py-16 hover:bg-black hover:text-white sm:px-4  lg:min-w-[300px] lg:max-w-xs'>
            <div>
              <AmenityIcon className='mx-auto fill-cyan-500 text-center text-4xl sm:text-6xl lg:text-5xl ' />
              <h2 className='text-center text-2xl font-semibold sm:text-3xl lg:text-2xl'>{amenity.title}</h2>
              <p className=' text-center xs:px-2 sm:text-lg lg:text-base'>{amenity.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AmenitiesCards;
