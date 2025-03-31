import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import RightSide from './RightSide'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addSummary, updateCurrentPage} from '../redux/userSlice'

const Summary = () => {
    
    
    const [sumary, setSummary] = useState('')
    const summary = useSelector((state) => state.forms.summary)
    const dispatch = useDispatch()

    function handleChange() {
        if(sumary.trim()) {
            dispatch(addSummary(sumary))
            setSummary('')
        }
    }

    useEffect(() => {
        dispatch(updateCurrentPage('summary'))
      },[])
  
    return (


    <>
       <div className='flex'>
        <Sidebar />
        <div className='w-[58%] h-[100vh] ml-[80px]'>
            <div className='flex justify-center items-center h-[100%] w-[100%]'>
                <div className='h-[85%] w-[80%]  lex flex-col'>
                    <div className='h-[34%] w-[100%] flex flex-col justify-evenly'>
                        <h1 className='text-[35px] font-bold leading-[48px] font-display'>Add your <span className='text-[rgb(245,102,0)]'>Summary</span></h1>
                    </div>
                    <div className='flex flex-wrap gap-x-8 gap-y-3 h-auto w-[100%] '>
                        <div className='flex flex-col'>
                            <label className = "text-[10px] font-bold" htmlFor="Summary">Summary</label>
                            <textarea 
                                type="text" 
                                name="summary"   
                                rows={15} 
                                cols={100} 
                                id="Summary" 
                                className='border border-gray-400 h-[100px] w-[100%] pl-3 rounded'
                                placeholder='e.g'
                                value={sumary}
                                onChange = {(e) => setSummary(e.target.value)}
                            />
                            <button 
                                onClick={handleChange}
                                className="mt-2 bg-[rgb(245,102,0)] text-white py-1 px-3"

                            >
                                Add Summary
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold text-lg">Summary:</h2>
                        <ul className="list-disc ml-5">
                            {summary.map((summ, index) => (
                            <li key={index}>
                                {summ}
                            </li>
                            ))}
                        </ul>   
                    </div>
                    <div className='h-[18%] w-[100%]  flex justify-between items-end'>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center border border-black text-lg font-bold' to={'/skill'}>BACK</Link>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center bg-[rgb(245,102,0)] text-lg text-white font-bold' to={'/last'}>CONTINUE</Link>
                    </div>
                </div>
            </div>
        </div>
        <RightSide />
    </div>
    </>
  )
}

export default Summary