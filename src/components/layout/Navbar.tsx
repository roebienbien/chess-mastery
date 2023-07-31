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
    <nav className='bg-mainTheme py-8 md:px-8 px-2 text-white'>
      <div className='flex justify-between'>
        <img src={Logo} alt='chess-mastery-logo' className='w-10 h-10 md:w-20 md:h-14' />
        <ul className='flex md:text-xl text-lg font-semibold items-center'>
          {NavLinks.map((item, index) => {
            return (
              <li key={index} className='px-4 hover:text-zinc-300 cursor-pointer inline-block align-middle'>
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
