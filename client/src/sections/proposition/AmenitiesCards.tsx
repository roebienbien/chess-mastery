import React from 'react';
import Amenities from './amenities';

function AmenitiesCards() {
  return (
    <div className='mt-10 flex flex-col space-y-10 md:flex-row md:justify-center md:space-x-10'>
      {Amenities.map((amenity, index) => {
        const AmenityIcon = amenity.icon;
        return (
          <div
            key={index}
            className=' mx-auto h-52 min-w-[384px] max-w-sm  bg-zinc-100  px-10 pt-10 hover:bg-black hover:text-white'>
            <AmenityIcon className='mx-auto fill-cyan-500   text-center text-4xl ' />
            <h2 className='text-center text-2xl font-semibold'>{amenity.title}</h2>
            <p className='text-center'>{amenity.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AmenitiesCards;
