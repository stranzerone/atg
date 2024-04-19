import React, { useState } from 'react';
import { data } from './PostData';

export default function LeftBox() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.key} className='border w-screen md:w-full md:p-4 mb-4 rounded-md '>
          <div className='w-full '>
            <img className='w-full   h-40 ' src={item.img} alt='auto' />
          </div>

          <div className='mt-4 px-4'>
            <h1 className='font-bold'>{item.type}</h1>
            <div className='flex items-center justify-between mt-2'>
              <h2 className='font-bold truncate w-2/3'>{item.text1}</h2>
              <div
                onClick={() => toggleDropdown(item.key)}
                className='cursor-pointer w-1/3 flex justify-end font-extrabold text-lg'
              >
                ...
              </div>
            </div>
            
            {/* Placeholder for the dropdown to prevent UI shift */}
            

            {openDropdown === item.key && (
  <div className='absolute bg-white border rounded-md p-2 z-50 right-0'>
    <div className='p-2 hover:bg-gray-100 cursor-pointer'>Option 1</div>
    <div className='p-2 hover:bg-gray-100 cursor-pointer'>Option 2</div>
    <div className='p-2 hover:bg-gray-100 cursor-pointer'>Option 3</div>
  </div>
)}


            <h3 className='mt-2'>{item.text2}</h3>
            <div className='flex items-center mt-2'>
              <img className='w-8 h-8 rounded-full' src={item.avatar} alt='1' />

              <div className='ml-2'>
                <h4 className='font-semibold'>{item.name}</h4>
                <h3>1.4k views</h3>
              </div>

              <div className='flex items-center ml-auto space-x-2'>
                <h3>1.4k views</h3>
                <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                  <i className='bi bi-share-fill'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
