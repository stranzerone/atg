import React from 'react';
import { Raw } from './rec-data';

const RecommendationPage = () => {
  return (
    <div className="container mx-auto p-4">

      <div className='flex items-center mb-4'>
        <i className="bi bi-hand-thumbs-up text-xl mr-2"></i>
        <div className='text-base font-medium'>
          Recommended Groups
        </div>
      </div>

      {Raw.map((data) => (
        <div key={data.id} className="flex items-center mb-4">
          <div className='w-1/5'>
            <img
              className="w-10 h-10 rounded-full"
              src={data.ava}
              alt="Avatar"
            />
          </div>

          <div className='w-1/2 pl-4'>
            <h3 className="text-sm font-medium">{data.name}</h3>
          </div>

          <div className='w-1/4'>
            <button className="px-2 py-1 bg-gray-200 rounded-md">Follow</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default RecommendationPage;
