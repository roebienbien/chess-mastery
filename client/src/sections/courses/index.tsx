import React from 'react';
import CourseCard from './CourseCard';

function Courses() {
  return (
    <section>
      <div className='bg-black px-2 py-20 text-white'>
        <h2 className='text-center text-4xl font-semibold tracking-wider sm:text-6xl'>Courses</h2>
        <CourseCard />
      </div>
    </section>
  );
}

export default Courses;
