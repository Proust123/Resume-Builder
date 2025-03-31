import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, updateCurrentPage } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import RightSide from './RightSide'

const Skill = () => {
  const [skill, setSkill] = useState('');
  const skills = useSelector((state) => state.forms.skills);
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill));
      setSkill(''); // Clear input after adding
    }
  };

  useEffect(() => {
    dispatch(updateCurrentPage('skill'))
  },[])

//   const handleRemoveSkill = (skillToRemove) => {
//     dispatch(removeSkill(skillToRemove));
//   };

  return (
    <div className="flex">
        <Sidebar />
      <div className="w-[58%] h-[100vh] ml-[80px]">
        <div className="flex justify-center items-center h-[100%] w-[100%]">
          <div className="h-[85%] w-[80%] flex flex-col">
            <div className="h-[34%] w-[100%] flex flex-col justify-evenly">
              <h1 className="text-[35px] font-bold leading-[48px] font-display">
                Add your <span className="text-[rgb(245,102,0)]">skills</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 h-auto w-[100%] ">
              <div className="flex flex-col">
                <label className="text-[10px] font-bold" htmlFor="Skills">
                  Skills
                </label>
                <input
                  type="text"
                  id="Skills"
                  className="border border-gray-400 h-[40px] w-[290px] pl-3"
                  placeholder="Enter a skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
                <button
                  onClick={handleAddSkill}
                  className="mt-2 bg-[rgb(245,102,0)] text-white py-1 px-3"
                >
                  Add Skill
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="font-bold text-lg">Your Skills:</h2>
              <ul className="list-disc ml-5">
                {skills.map((skill, index) => (
                  <li key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[18%] w-[100%] flex justify-between items-end">
              <Link
                className="h-[45px] w-[170px] flex justify-center items-center border border-black text-lg font-bold"
                to={'/education'}
              >
                BACK
              </Link>
              <Link
                className="h-[45px] w-[170px] flex justify-center items-center bg-[rgb(245,102,0)] text-lg text-white font-bold"
                to={'/summary'}
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

export default Skill;
