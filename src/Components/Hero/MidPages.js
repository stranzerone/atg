import React, { useEffect, useState } from 'react';
 import RightBox from '../Pages/RightPage';
 import LeftBox from '../Pages/LeftPage';
import DownBox from '../Pages/DownPage';
import { IoMdArrowDropdown } from "react-icons/io";
export default function MainBox() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
const [log,setLog]  =useState('')
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false); // Close the filter dropdown after selecting an option
  };


  useEffect(()=>{

const check = localStorage.getItem('log')
setLog(check)
  },[log])
  return (
    <div className='flex flex-col '>

      {/* Filter Section for Mobile Devices */}
      <div className='flex flex-col md:hidden w-full mx-auto my-4 border-b border-gray-300'>
        <div >
        <div className='flex justify-between w-full'>
  <button 
    className='text-sm md:hidden font-bold text-gray-700 flex items-center justify-between px-4 py-2 '
  >
    {selectedFilter} 
  </button>
  <button 
    className='text-sm md:hidden font-medium text-gray-700 flex items-center justify-between px-4  bg-gray-200 rounded'
    onClick={handleFilterToggle}
  >
    Filter All <IoMdArrowDropdown />
  </button>
</div>

          {isFilterOpen && (
            <div className='absolute top-full left-0 w-full bg-white border border-gray-300 z-10'>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'All' ? 'font-semibold text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleFilterChange('All')}
              >
                All
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Article' ? 'font-semibold text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleFilterChange('Article')}
              >
                Article
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Events' ? 'font-semibold text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleFilterChange('Events')}
              >
                Events
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Education' ? 'font-semibold text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleFilterChange('Education')}
              >
                Education
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Job' ? 'font-semibold text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleFilterChange('Job')}
              >
                Job
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row w-full md:w-3/4 mx-auto my-4 md:my-8 '>
        <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-3/4'>
          <div className='flex space-x-4 hidden md:flex'>
          <h1 className='text-base font-medium text-gray-700 mb-2 md:mb-0 md:mr-4'>All Posts(32)</h1>

            <h2 className='text-base font-medium text-gray-700'>Article</h2>
            <h2 className='text-base font-medium text-gray-700'>Events</h2>
            <h2 className='text-base font-medium text-gray-700'>Education</h2>
            <h2 className='text-base font-medium text-gray-700'>Job</h2>
          </div>
        </div>
        <div className='md:flex hidden  space-x-4 mt-4 md:mt-0'>
          <button className='text-sm font-medium text-gray-700'>Write a Post <i className="bi bi-caret-down-fill ml-2"></i></button>
      {  log?
        <button className='flex items-center text-sm font-medium text-black border border-gray-400 bg-white px-4 py-1 rounded'>
          Leave Group
          </button>
      :  <button className='flex items-center text-sm font-medium text-white bg-blue-500 px-4 py-1 rounded'>
           Join Group
          </button>}
        </div>
      </div>

      <div className='flex'>
        <div className='w-full flex md:w-3/4 mx-auto'>
          <div className='flex flex-col md:w-3/5  justify-between'>
            <LeftBox />
            <DownBox />
          </div>
          <div className='ml-0 md:ml-12 md:w-2/5 mt-4 hidden md:block'>
            <RightBox  log={log}/>
          </div>
        </div>
      </div>

    </div>
  );
}
