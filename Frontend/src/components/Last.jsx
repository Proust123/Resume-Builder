import Sidebar from './Sidebar'
import RightSide from './RightSide'
import { Link } from 'react-router-dom'
import {updateLast, updateCurrentPage} from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Last = () => {

    const last = useSelector((state) => state.forms.last)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(updateLast({[name] : value}))
    }

    useEffect(() => {
        dispatch(updateCurrentPage('last'))
      },[])

  return (
    <>
        <div className='flex'>
        <Sidebar />
        <div className='w-[58%] h-[100vh] ml-[80px]'>
            <div className='flex justify-center items-center h-[100%] w-[100%]'>
                <div className='h-[85%] w-[80%]  lex flex-col'>
                    <div className='h-[34%] w-[100%] flex flex-col justify-evenly'>
                        <h1 className='text-[35px] font-bold leading-[48px] font-display'>Is there anything else you'd like to add?</h1>
                        <p className='font-normal'>We recommend adding optional sections to stand out from the crowd</p>
                    </div>
                    <div className='flex flex-col gap-x-8 gap-y-3 h-auto w-[100%] '>
                        <div className='flex flex-col gap-y-3 items-start'>
                            <p className='font-bold'>It's a good idea to include the following on your CV:</p>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="languages" id="Languages" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Languages">Languages</label>
                            </div>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="certifications" id="Certifications" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Certifications">Certifications</label>
                            </div>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="hobbies" id="Hobbies and Interests" style={{ width: 20, height: 20 }} />
                                <label className = "ml-4" htmlFor="Hobbies and Interests">Hobbies and Interests</label>
                            </div>
                            
                        </div>
                        <div className='flex flex-col gap-y-3 items-start'>
                            <p className='font-bold'>Candidates like you added the following sections:</p>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="projects" id="Projects" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Projects">Projects</label>
                            </div>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="accomplishments" id="Accomplishments and Awards" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Accomplishments and Awards">Accomplishments and Awards</label>
                            </div>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="career" id="Career Goals" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Career Goals">Career Goals</label>
                            </div>
                            <div className='flex items-center'>
                                <input onChange={handleChange} type="checkbox" name="social" id="Social Networks" style={{ width: 20, height: 20 }}/>
                                <label className = "ml-4" htmlFor="Social Networks">Social Networks</label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-3 items-start'>
                            <p className='font-bold'>Add your name</p>
                            <div className='flex items-center'>
                                <input type="checkbox" name="" id="Projects" style={{ width: 20, height: 20 }}/>
                                <input 
                                    type="text" 
                                    name="name"   
                                    id="School name" 
                                    className='border border-gray-400 h-[40px] w-[290px] pl-3 ml-3'
                                    placeholder='e.g Name'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='h-[18%] w-[100%] pb-2 flex justify-between items-end'>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center border border-black text-lg font-bold' to={'/summary'}>BACK</Link>
                        <Link className='h-[45px] w-[170px] flex justify-center items-center bg-[rgb(245,102,0)] text-lg text-white font-bold' to={'/cv'}>Submit</Link>
                    </div>
                </div>
            </div>
        </div>
        <RightSide />
    </div>
    </>
  )
}

export default Last