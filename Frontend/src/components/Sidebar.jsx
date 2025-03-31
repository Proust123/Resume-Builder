import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaFolder } from 'react-icons/lia';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { CiSettings } from 'react-icons/ci';
import { FaRegAddressCard } from 'react-icons/fa6';
import { RiFileEditLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { PiReadCvLogoDuotone } from "react-icons/pi"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { currentPage } = useSelector((state) => state.forms);

  // console.log(currentPage, 'currentPage');

  return (
    <>
      <div className='w-[80px] h-[100vh] fixed bg-[rgb(0,99,112)] flex items-center justify-center'>
        <div className='h-[60%] w-[50%] flex'>
          <ul className='w-[100%] text-2xl text-[#488f98] flex flex-col justify-between items-center'>
            
            <Link to={'/AllCVs'}><li><PiReadCvLogoDuotone /></li></Link>
            
            <li>
              <FaRegUserCircle
                className={` ${
                  currentPage == 'user' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
            <li>
              <LiaFolder 
                className={` ${
                  currentPage == 'experience' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
            <li>
              <HiOutlineAcademicCap 
                className={` ${
                  currentPage == 'education' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
            <li>
              <CiSettings 
                className={` ${
                  currentPage == 'skill' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
            <li>
              <FaRegAddressCard 
                className={` ${
                  currentPage == 'summary' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
            <li>
              <RiFileEditLine 
                className={` ${
                  currentPage == 'last' ? 'text-orange-600' : 'text-green-500'
                } `}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
