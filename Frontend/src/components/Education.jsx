import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import RightSide from './RightSide'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEducation, updateCurrentPage } from '../redux/userSlice';

const Education = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Function to handle input changes and dispatch updates to Redux
    const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the field ID and value
    dispatch(updateEducation({ [name]: value })); // Dispatch the update to Redux
  };

  useEffect(() => {
    dispatch(updateCurrentPage('education'))
  },[])

  return (
    <>
        <div className='flex'>
        <Sidebar />
        <div className='w-[58%] h-[100vh] ml-[80px]'>
            <div className='flex justify-center items-center h-[100%] w-[100%]'>
                <div className='h-[85%] w-[80%]  lex flex-col'>
                    <div className='h-[34%] w-[100%] flex flex-col justify-evenly'>
                        <h1 className='text-[35px] font-bold leading-[48px] font-display'>Add your <span className='text-[rgb(245,102,0)]'>education</span></h1>
                        <p className='font-normal'>List all qualifications or degrees that you've earned or which are in progress</p>
                    </div>
                    <div className='flex flex-wrap gap-x-8 gap-y-3 h-[48%] w-[100%] '>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="School name">School name</label>
                            <input 
                                type="text" 
                                name="school"   
                                id="School name" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='e.g Yale'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="School location">School location</label>
                            <input 
                                type="text" 
                                name="location"   
                                id="School location" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='e.g New Haven, Connecticut'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Field Of Study">Field Of Study</label>
                            <input 
                                type="text" 
                                name="field"   
                                id="Field Of Study" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                placeholder='B.A in I.T'
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='gap-x-7 flex'>
                            <div className='flex flex-col'>
                                <label className = "text-[10px] font-bold" htmlFor="Qualification">Qualification</label>
                                    {/* <input 
                                        type="date" 
                                        name=""   
                                        id="Qualification" 
                                        className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                        
                                    /> */}
                                    <select className='border border-gray-400 h-[40px] w-[290px] pl-3' name="qualification" id="Qualification" onChange={handleInputChange}>
                                        <option value="">Qualification</option>
                                        <option value="Matric">Matric</option>
                                        <option value="FSC">FSC</option>
                                        <option value="GRADUATE">GRADUATE</option>
                                        <option value="POST-GRADUATE">POST-GRADUATE</option>
                                        <option value="Phd">Phd</option>
                                    </select>
                            </div>
            
                        </div>
                            <div className='flex flex-col'>
                                <label className = "text-[10px] font-bold" htmlFor="Start Year">Start Year</label>
                                <input 
                                    type="date" 
                                    name="start"   
                                    id="Start Year" 
                                    className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                    onChange={handleInputChange}
                                />
                            </div>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Graduation Date">Graduation Date</label>
                            <input 
                                type="date" 
                                name="graduation"   
                                id="Graduation Date" 
                                className='border border-gray-400 h-[40px] w-[290px] pl-3'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='h-[18%] w-[100%]  flex justify-between items-end'>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center border border-black text-lg font-bold' to={'/experience'}>BACK</Link>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center bg-[rgb(245,102,0)] text-lg text-white font-bold' to={'/skill'}>CONTINUE</Link>
                    </div>
                </div>
            </div>
        </div>
        <RightSide />
    </div>
    </>
  )
}

export default Education
