import CourseList from './courseList';
import { BsBookmarkPlus } from 'react-icons/bs';
import { BsMortarboardFill } from 'react-icons/bs';
import { FaChessKing } from 'react-icons/fa';

function CourseCard() {
  return (
    <div className='my-10 flex flex-col justify-center '>
      {CourseList.map((course, index) => {
        return (
          <div key={index} className='relative mx-auto my-10 max-w-xs bg-zinc-900 md:flex  md:max-w-4xl '>
            <BsBookmarkPlus className='absolute right-2 top-2 fill-cyan-500 text-4xl' />
            <div>
              <img src={course.cover} alt='course-image' />
            </div>
            <div className='p-4 md:mt-10 md:flex md:min-w-[500px] md:flex-col md:justify-between'>
              <div>
                <h3 className='text-xl font-bold capitalize md:text-3xl'>{course.title}</h3>
                <p className=' mt-2 text-sm md:mt-8'>{course.description}</p>
                <div className='mt-4 flex text-xs'>
                  <span className='rounded bg-cyan-500 px-1'>{course.coachTitle}</span>
                  <h4 className='ml-1'>{course.coach}</h4>
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between text-xs'>
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

//       <div key={index} className='relative my-10 max-w-xs bg-zinc-900 '>
//         <BsBookmarkPlus className='absolute right-2 top-2 fill-cyan-500 text-4xl' />
//         <div>
//           <img src={course.cover} alt='course-image' />
//         </div>
//         <div className='p-4'>
//           <h3 className='text-xl font-bold capitalize'>{course.title}</h3>
//           <p className=' mt-2 text-sm'>{course.description}</p>
//           <div className='mt-4 flex text-xs'>
//             <span className='rounded bg-cyan-500 px-1'>{course.coachTitle}</span>
//             <h4 className='ml-1'>{course.coach}</h4>
//           </div>
//           <div className='mt-5 flex items-center justify-between text-xs'>
//             <div className='flex space-x-5'>
//               <div className='flex'>
//                 <BsMortarboardFill />
//                 <span className='ml-1 '>5 Lessons</span>
//               </div>
//               <div className='flex'>
//                 <FaChessKing />
//                 <span className='ml-1'>mastery</span>
//               </div>
//             </div>
//             <div className='text-lg text-cyan-500'>
//               <span>₱{course.price}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>
