import React from 'react';
import studentList from './students-list';

function Students() {
  return (
    <section>
      <div className='my-4 grid min-h-screen place-items-center bg-zinc-100'>
        <div className='grid max-w-5xl grid-cols-2 gap-4 px-4 md:grid-cols-3'>
          <h1 className='col-span-2 text-2xl font-extrabold'>We have trained excellent students</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita ea ut magni inventore fuga.</p>
          <table>
            <tbody>
              {studentList.map((student, index) => {
                return (
                  <tr key={index} className='odd:bg-blue-400 even:bg-red-400'>
                    <td className='h-16'>{student.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Students;
