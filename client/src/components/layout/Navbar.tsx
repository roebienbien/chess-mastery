import Logo from '../../assets/chess-mastery-logo.svg';
import kingToKing from '../../assets/king-topple-king.jpg';
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
  return (
    <nav className='blur-backdrop-filter fixed top-0 z-50 w-full bg-zinc-900 bg-opacity-80 bg-clip-padding px-2 py-4 text-white sm:bg-blue-500 md:bg-red-500 md:px-12 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-violet-200'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          {/* <img src={Logo} alt='chess-mastery-logo' className='h-10 w-10 md:h-14 md:w-20' /> */}
          <img src={Logo} alt='chess-mastery-logo' className='h-8 w-8 fill-cyan-500' />
          <span className='-ml-2 text-xl font-bold tracking-wide'>Chess Mastery</span>
        </div>
        <ul className='flex items-center text-lg  md:text-xl'>
          {NavLinks.map((item, index) => {
            return (
              <li key={index} className='inline-block cursor-pointer px-4 align-middle hover:text-cyan-500 '>
                {item.title}
              </li>
            );
          })}
          {/* <div className='ml-20'>
            <button>Sign in now</button>
          </div> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
