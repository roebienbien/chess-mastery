function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className='primary-theme flex justify-center p-10 text-white'>
      <h2>Roe Bien Arnaiz (C) {currentYear}</h2>
    </div>
  );
}

export default Footer;
