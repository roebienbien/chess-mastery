import priceList from './priceList';

function PricingCards() {
  return (
    <div className='mt-10 '>
      <ul className='grid space-y-10 lg:flex lg:space-x-10 lg:space-y-0'>
        {priceList.map((price, index) => {
          const priceTag = price.price.toLocaleString('en-US');
          return (
            <li
              key={index}
              className='flex flex-col justify-center rounded-lg bg-darkTheme-lightDark px-32  py-20  shadow-lg'>
              <div className='space-y-4 text-center '>
                <div className='flex justify-center '>
                  <price.icon className='text-6xl' />
                </div>
                <h3>{price.name}</h3>
                <h4>₱ {priceTag}</h4>
              </div>
              <div className='mt-4 grid gap-y-8 text-center'>
                <button className=' primary-theme text-md rounded-lg p-4 text-white shadow-lg'>Join Premium</button>
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
