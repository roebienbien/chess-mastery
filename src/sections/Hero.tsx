import heroImage from '../assets/chess-black-pawn.jpg';
function Hero() {
  const greetings = `Welcome to Chess Mastery!`;
  const introduction = `Whether you're a beginner eager to learn the basics or an experienced player looking to sharpen your skills, Our proficient titled coaches are here to guide you on your chess journey.`;
  const callToAction = `Let's embark on this chess adventure together and unlock your full potential as a chess player!`;

  return (
    <section>
      <div className='flex flex-col space-y-10'>
        <span>{greetings}</span>
        <div className=''>
          <img
            src={heroImage}
            alt='chess-black-pawn'
            className='md:max-w-lg h-[500] w-[500] rounded shadow-lg shadow-zinc-900'
          />
        </div>
        <div className='flex flex-col space-y-4'>
          <span>{introduction}</span>
          <span>{callToAction}</span>
          <button className='bg-mainTheme rounded p-4 hover:bg-[#4D7F3C]'>Let's get coaching</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
