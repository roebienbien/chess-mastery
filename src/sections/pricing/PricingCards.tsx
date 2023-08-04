import React from 'react';
import priceList from './priceList';

function PricingCards() {
  return (
    <div className='py-10'>
      <ul className=' flex flex-col px-10 lg:flex-row lg:space-x-20'>
        {priceList.map((price, index) => {
          const priceTag = price.price.toLocaleString('en-US');
          return (
            <li
              key={index}
              className='space-y-10 rounded-lg border bg-darkTheme-lightDark px-28 py-14 text-center text-white shadow-lg'>
              <div className='flex justify-center'>
                <price.icon className=' text-7xl' />
              </div>
              <h3>{price.name}</h3>
              <h4>₱ {priceTag}</h4>
              <div className='grid space-y-4'>
                <button className=' primary-theme rounded-lg p-4 text-white shadow-lg'>Join Premium</button>
                <button className='cursor-pointer text-xs underline '>Start your 30 days trial</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PricingCards;
