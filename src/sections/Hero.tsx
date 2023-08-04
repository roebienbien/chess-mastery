// import heroImage from '../assets/chess-black-pawn.jpg';
import pawnKing from '../assets/pawn-to-king.jpg';
function Hero() {
  const greetings = `Chess Mastery`;
  // const slogan = 'Where minds meet mastery';
  const slogan = 'Forging grandmasters one move at a time.';
  const introduction = `Whether you're a beginner eager to learn the basics or an experienced player looking to sharpen your skills, Our proficient titled coaches are here to guide you on your chess journey.`;
  const callToAction = `Let's embark on this chess adventure together and unlock your full potential as a chess player!`;

  return (
    <section className='h-screen'>
      <div className='flex flex-col justify-center lg:flex-row'>
        <div className='flex flex-col justify-center text-center '>
          <div className='space-y-2 text-center font-bold'>
            <h1 className='text-7xl '>{greetings}</h1>
            <h2 className='text-5xl '>{slogan}</h2>
          </div>
          <div className='flex flex-col space-y-4 pt-14'>
            {/* <span>{introduction}</span> */}
            <p className='text-xl'> {callToAction}</p>
            <div>
              <button className='rounded bg-mainTheme p-4 hover:bg-[#4D7F3C]'>Join Chess Mastery</button>
            </div>
          </div>
          <div className='flex justify-center pt-14'>
            <img
              src={pawnKing}
              alt='chess-black-pawn'
              className=' w-full rounded 
            shadow-lg shadow-zinc-900 md:max-h-[500px] md:max-w-4xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
