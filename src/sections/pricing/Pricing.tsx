import PricingCards from './PricingCards';

function Pricing() {
  return (
    <section>
      <div className='mt-20 grid justify-center'>
        <h2 className='pt-10 text-center text-4xl font-bold lg:text-6xl'>Pricing</h2>
        <PricingCards />
      </div>
    </section>
  );
}

export default Pricing;
