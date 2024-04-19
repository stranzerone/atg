import React, { useEffect, useState } from 'react';
import whole from "../../Images/whole.svg";
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi';
 import CreateAccount from '../Pages/SignUp';
import LoginPage from '../Pages/SignIn';
import ava from "../../Images/ava4.png"
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSignInClicked, setIsSignInClicked] = useState(false);
const [log,setLog] =useState()
  const openSignIn = () => {
    setIsSignInClicked(!isSignInClicked);
    setOpen(false);
  };

  const handlecreate = () => {
    setIsSignInClicked(false);
    setOpen(true);
  };

  const closer = () => {
    setOpen(false);
    setIsSignInClicked(false);
  };

  const register = () => {
    setOpen(!open);
  };


useEffect(()=>{
const check = localStorage.getItem('log')
setLog(check)
},[log])

  return (
    <div className='py-2'>
      <div className=' hidden md:flex items-center justify-between bg-white h-18'>
        <div className='pl-6 md:pl-16'>
          <img src={whole} alt='logo-img' className='w-32 md:w-40' />
        </div>
        <div className='hidden md:flex justify-center items-center flex-grow'>
          <div className='relative'>
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input className="pl-10 w-48 h-10 rounded-full bg-gray-200 text-sm font-medium" placeholder="Search for group at ATG" />
          </div>
        </div>
      {log?<div className='p-2 mx-4 flex'>

<div className='rounded-full w-7 h-7'>
  <img src={ava} alt='auto'   />
</div>
<div className='flex items-center justify-center'><h1 className='text-sm px-2 text-center'>Siddhart Goyal</h1> </div>

      </div>:<div className='pr-6 md:pr-16'>
        <h1 className='flex items-center text-sm font-medium'>
          Create account.<span className='text-blue-500 font-semibold'>It's free</span>
          <FiChevronDown onClick={register} className="ml-1 text-gray-500 w-6 h-6 cursor-pointer" />
        </h1>
      </div>}
        <div className='md:hidden pr-6'>
          <FiSearch className="text-gray-500 w-6 h-6 cursor-pointer" />
          <FiChevronDown onClick={register} className="ml-4 text-gray-500 w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className={`fixed z-50 ${open || isSignInClicked ? 'block' : 'hidden'}`}>
        <div className='flex  fixed justify-center inset-0'>
          {open && <div><CreateAccount closer={closer} onSignInClick={openSignIn} />
  </div>}
          {isSignInClicked && <LoginPage createClicked={handlecreate} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
