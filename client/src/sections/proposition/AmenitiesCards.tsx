import React from 'react';
import Amenities from './amenities';

function AmenitiesCards() {
  return (
    <div className='mt-10 flex flex-col space-y-10 px-10 md:flex-row md:justify-center md:space-y-0'>
      {Amenities.map((amenity, index) => {
        const AmenityIcon = amenity.icon;
        return (
          // <div
          //   key={index}
          //   className='h-52 min-w-[320px] max-w-xs bg-zinc-100   pt-10  hover:bg-black hover:text-white  md:min-w-0 md:max-w-[230px]'>
          <div
            key={index}
            className='h-52 min-w-[300px] bg-zinc-100 pt-10  hover:bg-black hover:text-white  md:min-w-0 md:max-w-[230px]'>
            <AmenityIcon className='mx-auto fill-cyan-500   text-center text-4xl md:text-3xl ' />
            <h2 className='text-center text-2xl font-semibold md:text-xl'>{amenity.title}</h2>
            <p className='text-center md:text-sm'>{amenity.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AmenitiesCards;
