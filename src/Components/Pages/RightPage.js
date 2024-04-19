import React from 'react';
import RecommendationPage from './RecomendationPage';

export default function RightBox({log}) {
  return (
    <div className="flex flex-col w-70vw h-screen mt-8 mx-auto">
      <div className="flex items-center">
        <i className="bi bi-geo-alt-fill"></i>
        <input className="ml-2 w-40 border-b border-gray-300 outline-none" placeholder='Enter Your Location' />
        <i className="bi bi-pencil-fill"></i>
      </div>

      <div className="flex my-4 text-sm text-gray-500">
        <i className="bi bi-info-circle"></i>
        Your location will help us serve better and extend a personalised experience.
      </div>

  {log?<RecommendationPage />:null}
    </div>
  );
}
