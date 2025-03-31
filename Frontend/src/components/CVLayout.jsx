import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { usePDF } from 'react-to-pdf';

const CVLayout = () => {
  const { user, experience, education, skills, summary } = useSelector(
    (state) => state.forms,
  );

  console.log(user, experience, education, skills, summary);

  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  async function save() {
    const res = await axios.post('http://localhost:4000/postItem', {user, experience, education, skills, summary})
  }

  return (
    <>
      <button onClick={() => toPDF()}>Download PDF</button>
      <button onClick={save}>Save</button>

      {!user?.firstName &&
      !experience?.employer &&
      !education?.qualification &&
      skills.length == 0 &&
      summary.length == 0 ? (
        <h1>User Data Not Found!</h1>
      ) : (
        <>
          <div ref={targetRef} className='p-10 flex justify-center'>
            <div className='grid grid-cols-1 gap-y-4'>
              <div className='flex flex-col'>
                <div>
                  <h1 className='text-[50px] font-bold text-[rgb(0,153,153)]'>
                    {user.firstName.toUpperCase()} {user.surname.toUpperCase()}
                  </h1>
                </div>
                <div className='flex gap-x-2'>
                  <h3>
                    {user.cityState}, {user.country}
                  </h3>{' '}
                  |<h3>{user.phone}</h3> |<h3>{user.email}</h3>
                </div>
              </div>

              <div className='flex flex-col gap-y-2'>
                <div>
                  <h1 className='text-[25px] font-bold text-[rgb(0,153,153)]'>
                    SUMMARY:
                  </h1>
                </div>
                <div>
                  <ul className='list-disc ml-5'>
                    {summary.map((summ, index) => (
                      <li key={index}>{summ}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='flex flex-col gap-y-2'>
                <div>
                  <h1 className='text-[25px] font-bold text-[rgb(0,153,153)]'>
                    EXPERIENCE:
                  </h1>
                </div>
                <div className=''>
                  <h3>
                    {experience.start} to {experience.end}
                  </h3>
                  <h3 className='font-bold'>{experience.job}</h3>
                  <div className='flex gap-x-1'>
                    <h3 className='font-bold'>{experience.employer}</h3> -
                    <h3 className='ml-3'>{experience.city}</h3>,
                    <h3>{experience.country}</h3>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className='text-[25px] font-bold text-[rgb(0,153,153)]'>
                  Skills:
                </h2>
                <ul className='list-disc ml-5'>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-col gap-y-2'>
                <div>
                  <h1 className='text-[25px] font-bold text-[rgb(0,153,153)]'>
                    EDUCATION:
                  </h1>
                </div>
                <div className=''>
                  <h3>
                    <span className='font-bold'>School </span>:&nbsp;
                    {education.school}
                  </h3>
                  <h3>
                    <span className='font-bold'>Location </span>:&nbsp;
                    {education.location}
                  </h3>
                  <h3>
                    <span className='font-bold'>Field </span>:&nbsp;
                    {education.field}
                  </h3>
                  <h3>
                    <span className='font-bold'>Qualification </span>:&nbsp;
                    {education.qualification}
                  </h3>
                  <h3>
                    <span className='font-bold'>Start </span>:&nbsp;
                    {education.start}
                  </h3>
                  <h3>
                    <span className='font-bold'>End </span>:&nbsp;
                    {education.graduation}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CVLayout;
