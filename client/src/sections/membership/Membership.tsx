import MembershipCards from './MembershipCards';

function Membership() {
  const sectionTitle = 'Membership';

  return (
    <section>
      <div className='mt-10 grid justify-center py-40'>
        <h2 className='pt-10 text-center text-4xl font-bold lg:text-6xl'>{sectionTitle}</h2>
        <MembershipCards />
      </div>
    </section>
  );
}

export default Membership;
