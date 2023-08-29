import React from 'react';
import CourseList from './courseList';
import { BsBookmarkPlus } from 'react-icons/bs';
import { BsMortarboardFill } from 'react-icons/bs';
import { FaChessKing } from 'react-icons/fa';

function CourseCard() {
  return (
    <div className=' flex flex-col justify-center space-y-16'>
      {CourseList.map((course, index) => {
        return (
          <div key={index} className='relative mx-auto max-w-sm bg-zinc-900'>
            <BsBookmarkPlus className='absolute right-2 top-2 fill-cyan-500 text-4xl' />
            <div>
              <img src={course.cover} alt='course-image' />
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-bold capitalize'>{course.title}</h3>
              <p className=' mt-2 text-sm'>{course.description}</p>
              <span className='mt-4 flex text-xs'>
                <text className='rounded bg-cyan-500 px-1'>{course.coachTitle}</text>
                <h4 className='ml-1'>{course.coach}</h4>
              </span>
              <div className='mt-5 flex items-center justify-between text-xs'>
                <div className='flex space-x-5'>
                  <div className='flex'>
                    <BsMortarboardFill />
                    <span className='ml-1 '>5 Lessons</span>
                  </div>
                  <div className='flex'>
                    <FaChessKing />
                    <span className='ml-1'>mastery</span>
                  </div>
                </div>
                <div className='text-lg text-cyan-500'>
                  <span>₱{course.price}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseCard;
