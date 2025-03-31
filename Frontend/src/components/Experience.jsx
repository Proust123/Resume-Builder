import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import RightSide from './RightSide'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateExperience, updateCurrentPage } from '../redux/userSlice';

const Experience = () => {
    
    const experience = useSelector((state) => state.forms.experience)
    const dispatch = useDispatch();

    // Function to handle input changes and dispatch updates to Redux
    const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the field ID and value
    dispatch(updateExperience({ [name]: value })); // Dispatch the update to Redux
  };


  useEffect(() => {
    dispatch(updateCurrentPage('experience'))
  }, [])


  return (
    <>
        <div className='flex'>
        <Sidebar />
        <div className='w-[58%] h-[100vh] ml-[80px]'>
            <div className='flex justify-center items-center h-[100%] w-[100%]'>
                <div className='h-[85%] w-[80%]  lex flex-col'>
                    <div className='h-[34%] w-[100%] flex flex-col justify-evenly'>
                        <h1 className='text-[35px] font-bold leading-[48px] font-display'>Add your <span className='text-[rgb(245,102,0)]'>experience</span></h1>
                        <p className='font-normal'>Start with your most recent job first – you can also add voluntary work, internships or extracurricular activities</p>
                    </div>
                    <div className='flex flex-wrap gap-x-8 gap-y-3 h-[48%] w-[100%] '>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Job Title">JOB TITLE</label>
                            <input 
                                type="text" 
                                name="job"   
                                value={experience.job}
                                id="Job Title" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='e.g Retail Associate'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="EMPLOYER">EMPLOYER</label>
                            <input 
                                type="text" 
                                name="employer"   
                                value={experience.employer}
                                id="EMPLOYER" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='e.g Sapphire'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Start date">Start date</label>
                            <input 
                                type="date" 
                                name="start"   
                                value={experience.start}
                                id="Start date" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='gap-x-7 flex'>
                            <div className='flex flex-col'>
                                <label className = "text-[10px] font-bold" htmlFor="End date">End date</label>
                                <input 
                                    type="date" 
                                    name="end"   
                                    value={experience.end}
                                    id="End date" 
                                    className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                    onChange={handleInputChange}
                                />
                            </div>
            
                        </div>
                            <div className='flex flex-col'>
                                <label className = "text-[10px] font-bold" htmlFor="City - State(OPTIONAL)">City - State (OPTIONAL)</label>
                                <input 
                                    type="text" 
                                    name="city"   
                                    value={experience.city}
                                    id="City - State(OPTIONAL)" 
                                    className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                    placeholder='e.g Islamabad'
                                    onChange={handleInputChange}
                                />
                            </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Country(OPTIONAL)">Country (OPTIONAL)</label>
                            <input 
                                type="text" 
                                name="country"   
                                value={experience.country}
                                id="Country(OPTIONAL)" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='e.g Pakistan'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='h-[18%] w-[100%]  flex justify-between items-end'>
                        <Link className='h-[45px] flex justify-center items-center w-[170px] border border-black text-lg font-bold' to={'/'}>BACK</Link>
                        <Link className='h-[45px] flex justify-center items-center w-[170px] bg-[rgb(245,102,0)] text-lg text-white font-bold' to={'/education'}>CONTINUE</Link>
                    </div>
                </div>
            </div>
        </div>
        <RightSide />
    </div>
    </>
  )
}

export default Experience