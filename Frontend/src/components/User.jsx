import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import RightSide from './RightSide';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateCurrentPage } from '../redux/userSlice'; // Import the action creator

const User = () => {
  const user = useSelector((state) => state.forms.user)
  const dispatch = useDispatch();

  // Function to handle input changes and dispatch updates to Redux
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the field ID and value
    dispatch(updateUser({ [name]: value })); // Dispatch the update to Redux
  };

  useEffect(() => {
    dispatch(updateCurrentPage('user'))
  }, [])
 
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-[58%] h-[100vh] ml-[80px]'>
        <div className='flex justify-center items-center h-[100%] w-[100%]'>
          <div className='h-[85%] w-[80%] lex flex-col'>
            <div className='h-[34%] w-[100%] flex flex-col justify-around '>
              <h1 className='text-[35px] font-bold leading-[48px] font-display'>
                How do you want recruiters to contact you?
              </h1>
              <p className='font-normal'>Include your full name and at least email or phone number</p>
            </div>
            <div className='flex flex-wrap gap-x-8 gap-y-3 h-[48%] w-[100%] '>
              <div className='flex flex-col'>
                <label className='text-[10px] font-bold' htmlFor='firstName'>
                  First name
                </label>
                <input
                  type='text'
                  name='firstName'
                  value={user.firstName}
                  className='border border-gray-400 h-[40px] w-[290px] pl-3'
                  placeholder='Gulnar'
                  onChange={handleInputChange} // Handle change
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-[10px] font-bold' htmlFor='surname'>
                  Surname
                </label>
                <input
                  type='text'
                  name='surname'
                  value={user.surname}
                  className='border border-gray-400 h-[40px] w-[290px] pl-3'
                  placeholder='Abdul'
                  onChange={handleInputChange} // Handle change
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-[10px] font-bold' htmlFor='cityState'>
                  City - State
                </label>
                <input
                  type='text'
                  name='cityState'
                  value={user.cityState}
                  className='border border-gray-400 h-[40px] w-[290px] pl-3'
                  placeholder='Karachi - Sindh'
                  onChange={handleInputChange} // Handle change
                />
              </div>

              <div className='gap-x-7 flex'>
                <div className='flex flex-col'>
                  <label className='text-[10px] font-bold' htmlFor='postalCode'>
                    Postal code
                  </label>
                  <input
                    type='text'
                    name='postalCode'
                    value={user.postalCode}
                    className='border border-gray-400 h-[40px] w-[130px] pl-3'
                    placeholder='24700'
                    onChange={handleInputChange} // Handle change
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-[10px] font-bold' htmlFor='country'>
                    Country
                  </label>
                  <input
                    type='text'
                    name='country'
                    value={user.country}
                    className='border border-gray-400 h-[40px] w-[130px] pl-3'
                    placeholder='Pakistan'
                    onChange={handleInputChange} // Handle change
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='text-[10px] font-bold' htmlFor='phone'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  value={user.phone}
                  className='border border-gray-400 h-[40px] w-[290px] pl-3'
                  placeholder='+92 21 31111111 '
                  onChange={handleInputChange} // Handle change
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-[10px] font-bold' htmlFor='email'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  value={user.email}
                  className='border border-gray-400 h-[40px] w-[290px] pl-3'
                  placeholder='b.pathak@sample.pk'
                  onChange={handleInputChange} // Handle change
                />
              </div>
            </div>
            <div className='h-[18%] w-[100%] flex justify-between items-end'>
              <button className='h-[45px] w-[170px] border border-black text-lg font-bold' disabled>
                BACK
              </button>
              <Link
                className='h-[45px] w-[170px] flex justify-center items-center bg-[rgb(245,102,0)] text-lg text-white font-bold'
                to={'/experience'}
              >
                CONTINUE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RightSide />
    </div>
  );
};

export default User;
