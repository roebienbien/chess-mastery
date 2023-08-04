import React from 'react';
import PricingCards from './PricingCards';

function Pricing() {
  return (
    <section>
      <div className='mt-20 grid justify-center border'>
        <h2 className='p-4 text-center text-5xl font-bold'>Pricing</h2>
        <PricingCards />
      </div>
    </section>
  );
}

export default Pricing;
