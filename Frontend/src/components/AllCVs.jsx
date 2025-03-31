import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AllCVs = () => {

    const [cv, setCV] = useState([])

    async function fetchData() {
        const res = await axios.get('http://localhost:4000/')
    
        setCV(res.data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    console.log(cv);
    

  return (
    <>
        {cv.map((ele) => {
            return (
                <div className='p-10 flex justify-center'>
            <div className='grid grid-cols-1 gap-y-4'>
              <div className='flex flex-col'>
                <div>
                  <h1 className='text-[50px] font-bold text-[rgb(0,153,153)]'>
                    {ele.user.firstName.toUpperCase()} {ele.user.surname.toUpperCase()}
                  </h1>
                </div>
                <div className='flex gap-x-2'>
                  <h3>
                    {ele.user.cityState}, {ele.user.country}
                  </h3>{' '}
                  |<h3>{ele.user.phone}</h3> |<h3>{ele.user.email}</h3>
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
                    {ele.summary.map((summ, index) => (
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
                    {ele.experience.start} to {ele.experience.end}
                  </h3>
                  <h3 className='font-bold'>{ele.experience.job}</h3>
                  <div className='flex gap-x-1'>
                    <h3 className='font-bold'>{ele.experience.employer}</h3> -
                    <h3 className='ml-3'>{ele.experience.city}</h3>,
                    <h3>{ele.experience.country}</h3>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className='text-[25px] font-bold text-[rgb(0,153,153)]'>
                  Skills:
                </h2>
                <ul className='list-disc ml-5'>
                  {ele.skills.map((skill, index) => (
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
                    {ele.education.school}
                  </h3>
                  <h3>
                    <span className='font-bold'>Location </span>:&nbsp;
                    {ele.education.location}
                  </h3>
                  <h3>
                    <span className='font-bold'>Field </span>:&nbsp;
                    {ele.education.field}
                  </h3>
                  <h3>
                    <span className='font-bold'>Qualification </span>:&nbsp;
                    {ele.education.qualification}
                  </h3>
                  <h3>
                    <span className='font-bold'>Start </span>:&nbsp;
                    {ele.education.start}
                  </h3>
                  <h3>
                    <span className='font-bold'>End </span>:&nbsp;
                    {ele.education.graduation}
                  </h3>
                </div>
              </div>
            </div>
          </div>
            )
        })}
    </>
  )
}

export default AllCVs