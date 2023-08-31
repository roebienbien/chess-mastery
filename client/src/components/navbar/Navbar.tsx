import { useState } from 'react';
import Logo from '../../assets/chess-mastery-logo.svg';
import kingToKing from '../../assets/king-topple-king.jpg';
import HamburgerButton from './HamburgerButton';
function Navbar() {
  type TNavLink = {
    title: string;
    goto: string;
  };
  const NavLinks: TNavLink[] = [
    {
      title: 'Home',
      goto: '/',
    },
    {
      title: 'About',
      goto: '/',
    },
    {
      title: 'Contact',
      goto: '/',
    },
    // {
    //   title: 'Hire Us',
    //   goto: '/',
    // },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className='blur-backdrop-filter  sticky top-0 z-10  w-full bg-zinc-900 bg-opacity-80 bg-clip-padding py-2 text-white min-[320px]:bg-red-300 min-[375px]:bg-cyan-300 min-[425px]:bg-amber-600 sm:bg-blue-900 md:bg-red-900 md:px-12 lg:bg-green-900 xl:bg-cyan-900 2xl:bg-violet-900'>
      <nav className=' hidden justify-between md:flex  md:px-0 lg:px-20 xl:px-32'>
        <div className='flex items-center'>
          <img src={Logo} alt='chess-mastery-logo' className='h-8 w-8 fill-cyan-500' />
          <span className='-ml-2 text-xl font-bold tracking-wide'>Chess Mastery</span>
        </div>
        <ul className='flex items-center justify-center text-lg  md:text-xl'>
          {NavLinks.map((item, index) => {
            return (
              <li key={index} className='cursor-pointer px-4 py-2 hover:text-cyan-500 '>
                {item.title}
              </li>
            );
          })}
          <button className='ml-20'>Sign up</button>
        </ul>
      </nav>
      <nav className='flex justify-between px-4 md:hidden'>
        <div className='flex items-center'>
          <img src={Logo} alt='chess-mastery-logo' className='h-8 w-8 fill-cyan-500' />
          <span className='-ml-2 text-xl font-bold tracking-wide'>Chess Mastery</span>
        </div>
        <div className='flex items-center justify-center px-4  '>
          <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

{
  /* <img src={Logo} alt='chess-mastery-logo' className='h-10 w-10 md:h-14 md:w-20' /> */
}
