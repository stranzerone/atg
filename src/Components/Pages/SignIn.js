import React from 'react';
import register from "../../Images/register.png";
import fb from "../../Images/fb.png";
import search from "../../Images/search.png";

const LoginPage = ({ createClicked,change }) => {

    const siginIn =()=>{
        localStorage.setItem("log","true")
    }
  return (
    <div className="flex w-full justify-center  items-end md:items-center min-h-screen">
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-md shadow-lg p-4">
        <div className="bg-green-100 hidden md:block text-green-700 py-2 text-center text-xs">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <div className="text-lg hidden md:block font-bold mb-2">Log In</div>
            <div className="text-lg md:hidden font-bold mb-2">Welcome Back</div>

<div className='border border-1'>
            <div className="mb-2">
              <input type="email" id="email" name="email" placeholder="Email" className="w-full h-10 bg-white border border-t-0 rounded-none px-2 text-sm" />
            </div>

            <div className="mb-2">
              <input type="password" id="password" name="password" placeholder="Password" className="w-full bg-white h-10 border border-t-0 rounded-none px-2 text-sm" />
            </div>
</div>
            <div className="flex flex-col mb-2">
            <div className='flex justify-between'>
            <button onClick={siginIn} className="w-1/3 md:w-full h-10 bg-blue-500 text-white rounded-md mb-1 text-sm">Sign In</button>

<div  className='w-2/3 md:w-0 md:hidden flex justify-center items-center underline'>
<h1 className='text-center pointer-cursor' onClick={change}>create a account</h1>
</div>
            </div>
              <button className="w-full h-10 flex items-center justify-center border rounded-md px-2 mb-1 text-sm">
                <img src={fb} alt='Facebook' className='w-4 h-4 mr-2' /> Sign In with Facebook
              </button>
              <button className="w-full h-10 flex items-center justify-center border rounded-md px-2 text-sm">
                <img src={search} alt='Google' className='w-4 h-4 mr-2' /> Sign In With Google
              </button>
              <h1 className=' md:hidden text-center p-3 text-blue-400'>Forgot Password</h1>
            </div>
          </div>

          <div className="md:w-1/2 flex hidden md:block">
            <div className="text-right text-gray-600 mb-2 text-xs">
              Don't have an account yet? <span onClick={createClicked} className='text-blue-500 cursor-pointer'>Create for Free</span>
            </div>

            <div className="w-48 h-48 mx-auto">
              <img src={register} alt='Auto' className='w-full h-full object-cover' />
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
