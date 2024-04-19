import React, { useState } from 'react';
 import CreateAccount from '../Pages/SignUp';
 import LoginPage from '../Pages/SignIn';

const heroImage = {
  backgroundImage: "url('https://images.pexels.com/photos/4499765/pexels-photo-4499765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
};

export default function HeroPage() {
  const [open, setOpen] = useState(false);
  const [signin, setSignin] = useState(false);

  const opner2 = () => {
    setOpen(true);
  };
  const change =()=>{
    setSignin(false)
    setOpen(true)
  }

  const closer = () => {
    setOpen(false);
    setSignin(false);
  };

  const nextOpen = () => {
    setSignin(true);
    setOpen(false);
  };

  return (
    <div className='bg-cover bg-center bg-no-repeat h-[27.5rem]' style={heroImage}>
            <button className='absolute right-0  p-2 rounded m-5  md:hidden text-white font-bold border border-2-white ' onClick={opner2}>Join Group</button>

      <div className='py-16 '>
        {open && (
          <div className='fixed bottom-0 w-full'>
            <CreateAccount onSignInClick={nextOpen} closer={closer} />
          </div>
        )}
        {signin && (
          <div className='fixed bottom-0 w-full'>
            <LoginPage change={change} />
          </div>
        )}
      </div>

      <div className='mx-4 md:mx-20 mt-32 text-white'>
        <h1 className='text-4xl font-semibold'>Computer Engineering</h1>
        <p className='text-lg'>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}
