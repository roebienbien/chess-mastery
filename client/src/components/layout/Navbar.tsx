import Logo from '../../assets/chess-mastery-logo.svg';
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
    <nav className='primary-theme px-2 py-2 text-white md:px-12'>
      <div className='flex justify-between'>
        <img src={Logo} alt='chess-mastery-logo' className='h-10 w-10 md:h-14 md:w-20' />
        <ul className='flex items-center text-lg font-semibold md:text-xl'>
          {NavLinks.map((item, index) => {
            return (
              <li key={index} className='inline-block cursor-pointer px-4 align-middle hover:text-zinc-300'>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
