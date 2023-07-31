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
    {
      title: 'Hire Us',
      goto: '/',
    },
  ];
  return (
    <nav className='bg-blue-500 p-8'>
      <div className='flex justify-between'>
        <div>logo</div>
        <div>
          <ul className='flex text-xl'>
            {NavLinks.map((item, index) => {
              return (
                <li key={index} className='px-4'>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
