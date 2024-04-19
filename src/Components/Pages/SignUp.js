import React from 'react';
import register from "../../Images/register.png";
import fb from "../../Images/fb.png";
import search from "../../Images/search.png";
import { FiX } from 'react-icons/fi';

const CreateAccount = ({ onSignInClick,closer }) => {
  return (
    <div>
    <FiX  onClick={closer}  className="absolute top-0 right-60 bg-white w-4 h-4 rounded-full text-gray-700   m-4 font-white cursor-pointer" />

    <div className="flex w-full md:items-center items-end justify-center  min-h-screen">

      <div className="relative w-full md:w-3/4 lg:w-9/10 bg-white rounded-md shadow-lg p-4 z-10">
        <div className="bg-green-100 hidden md:block text-green-700 py-2 text-center text-sm">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <FiX  onClick={closer}  className="absolute md:hidden top-0 right-0 bg-white w-4 h-4 rounded-full text-gray-700   m-4 font-white cursor-pointer" />

        <div className='flex flex-col md:flex-row relative z-10'>

          <div className='md:w-1/2 md:pr-4 relative z-10'>

            <div className="text-xl font-bold mb-3">Create Account</div>
            <div className='border border-1'>
              <div className="flex ">
                <input type="text" id="firstName" name="firstName" placeholder="First Name" className="w-1/2 h-6 border border-t-0 rounded-none px-2 text-xs" />
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="w-1/2 h-6 border border-t-0 rounded-none px-2 text-xs" />
              </div>

              <div className="">
                <input type="email" id="email" name="email" placeholder="Email" className="w-full h-5 border border-t-0 rounded-none px-2 text-xs" />
              </div>

              <div className="">
                <input type="password" id="password" name="password" placeholder="Password" className="w-full h-5 border border-t-0 rounded-none px-2 text-xs" />
              </div>

              <div className="mb-4">
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="w-full h-5 border border-t-0 rounded-none px-2 text-xs" />
              </div>
            </div>
            <div className='flex flex-col md:justify-between  mb-3'>
              <button className='w-full md:w-auto h-8 bg-blue-500 text-white rounded-md mb-1 md:mb-0 text-xs'>Create Account</button>
              <button className='w-full md:w-auto h-8 flex items-center justify-center border rounded-md px-2 mb-1 mt-3 md:mb-0 text-xs'>
                <img src={fb} alt='Facebook' className='w-3 h-3 mr-2' /> Sign Up with Facebook
              </button>
              <button className='w-full md:w-auto h-8 flex items-center justify-center border rounded-md px-2 mt-1 text-xs'>
                <img src={search} alt='Google' className='w-3 h-3 mr-2' /> Sign Up With Google
              </button>
            </div>

            <div className="md:text-right text-center text-gray-600 mb-3 md:hidden text-xs">
              <span onClick={onSignInClick} className='text-blue-500 cursor-pointer block md:hidden'>Already had an account? Sign In</span>
              <span onClick={onSignInClick} className='text-blue-500 cursor-pointer hidden md:block'>Already had an account? Sign In</span>
            </div>

          </div>

          <div className='md:w-1/2 hidden md:block relative z-10'>
            <div className="text-right text-gray-600 mb-3 text-xs">
              Already had an account? <span onClick={onSignInClick} className='text-blue-500 cursor-pointer'>Sign In</span>
            </div>

            <div className='w-48 h-48 mx-auto'>
              <img src={register} alt='Auto' className='w-full h-full object-cover z-0' />
            </div>
          </div>

        </div>

        <div className='md:text-right text-center text-sm text-gray-700 relative z-10 text-xs'>
          By signing up, you agree to our Terms & conditions, Privacy policy
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateAccount;
