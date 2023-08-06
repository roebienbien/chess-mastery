import CoachCards from './CoachCards';

function Coaches() {
  const sectionTitle = `Let's meet the Coaches`;
  return (
    <section className='min-h-screen'>
      <div className='mt-14 py-12'>
        <h2 className='font-bold lg:text-5xl'>{sectionTitle}</h2>
      </div>
      <CoachCards />
    </section>
  );
}

export default Coaches;
