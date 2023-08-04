import React from 'react';
import priceList from './priceList';

function PricingCards() {
  return (
    <div className='py-14'>
      <ul className=' flex flex-col lg:flex-row lg:space-x-20'>
        {priceList.map((price, index) => {
          return (
            <li key={index} className='mt-10 space-y-10 rounded-lg border p-8 text-center shadow-lg'>
              <div className='flex justify-center'>
                <price.icon className=' text-4xl' />
              </div>
              <h3>{price.name}</h3>
              <h4>₱{price.price.toLocaleString('en-us')}</h4>
              <button className='rounded-lg bg-mainTheme p-4 shadow-lg'>Start your 30 day trial</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PricingCards;
