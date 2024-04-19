import React, { useState } from 'react';
import image3 from '../../Images/image3.png';
import ava3 from '../../Images/ava3.png';
import ava4 from '../../Images/ava4.png';
import { FaShareNodes } from "react-icons/fa6";
export default function DownBox() {
    // State for the dropdowns
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);

    // Toggle function for the first dropdown
    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    // Toggle function for the second dropdown
    const toggleDropdown2 = () => {
        setOpenDropdown2(!openDropdown2);
    };

    return (
        <div className="flex flex-col">
            {/* First Box */}
            <div className="border rounded w-screen md:w-full  ">
                {/* Image */}
                <div className='w-screen  md:w-full '>
                <img className="w-full h-40" src={image3} alt="auto" />

                </div>
                
                {/* Text Content */}
                <div className="flex flex-col p-4">
                    <h1 className="text-xl">💼️ Job</h1>
                    
                    {/* Top Box */}
                    <div className="flex items-center justify-between mt-2">
                        <h2 className="text-base font-extrabold w-2/3">Finance & Investment Elite Social Mixer @Lujiazui</h2>
                        
                        {/* More Options Dropdown Button */}
                        <div onClick={toggleDropdown2} className="cursor-pointer w-1/3 flex justify-end">...</div>
                        
                        {/* More Options Dropdown Content */}
                        {openDropdown2 && (
                            <div className="absolute bg-white border shadow-lg right-0 mt-3">
                                <div className="p-2">Option 1</div>
                                <div className="p-2">Option 2</div>
                                <div className="p-2">Option 3</div>
                            </div>
                        )}
                        
                    </div>
                    
                </div>
    <div className="border-t  pt-4 flex-col items-center justify-between">
    <div className="flex space-x-4 justify-between">
        <div className="flex text-md space-x-2">
            <i className="bi bi-calendar-event"></i>
            <h3>Fri, 12 Oct, 2018</h3>
        </div>
        <div className="flex items-center text-md px-4 space-x-2">
           
            <h3>Ahmedabad, India</h3>
        </div>
    </div>
<div className='flex  justify-center items-center'>
<button className="bg-transparent  text-red-500 w-full  px-4 py-2 my-2 mx-4 rounded border border-2-gray ">View Website</button>

</div>

    <div className="flex items-center px-4 space-x-4">
        <img className="h-10 w-10" src={ava3} alt="1" />
     
        <div className='gap-20 flex-col  md:flex-row justify-between' >
        <div className="flex ">
            <h1 className="text-md">Ronal Johns</h1>
        </div>
        <div className="flex items-center  space-x-2">
           
            <h3>1.4k views</h3>
        </div>
        </div>
     
    </div>
</div>

            </div>

            {/* Second Box */}
            










            <div className="border rounded w-screen md:w-full p-4 ">
                {/* Image */}
                
                {/* Text Content */}
                <div className="flex flex-col p-4">
                    <h1 className="text-xl">💼️ Job</h1>
                    
                    {/* Top Box */}
                    <div className="flex items-center  justify-between mt-2">
                        <h2 className="text-base w-2/3">Software Devloper</h2>
                        
                        {/* More Options Dropdown Button */}
                        <div onClick={toggleDropdown2} className="cursor-pointer w-1/3 justify-end flex font-extrabold">...</div>
                        
                        {/* More Options Dropdown Content */}
                        {openDropdown2 && (
                            <div className="absolute bg-white border shadow-lg right-0 mt-3">
                                <div className="p-2">Option 1</div>
                                <div className="p-2">Option 2</div>
                                <div className="p-2">Option 3</div>
                            </div>
                        )}
                        
                    </div>
                    
                </div>
    <div className="border-t  pt-4 flex-col items-center justify-between">
    <div className="flex space-x-4 justify-between ">
        <div className="flex text-md space-x-2 w-1/2 ">
            <i className="bi bi-calendar-event"></i>
            <h3 className='text-md truncate md:truncate-none font-extrabold '>Innovaccer Analytics Private ltd. </h3>

        </div>
        <div className="flex items-start w-1/2 text-md space-x-2">
            <i className="bi bi-geo-alt-fill"></i>
            <h3 className='text-sm '>Ahmedabad, India</h3>
        </div>
    </div>
<div className='flex  justify-center items-center'>
<button className="bg-transparent  text-green-600  text-sm md:text-md px-4 py-2 my-2 rounded border border-2-gray w-full">Apply On TimesJobs</button>

</div>

    <div className="flex items-center justify-start space-x-4">
        <img className="h-10 w-10" src={ava4} alt="1" />
     
        <div className=' flex flex-col items-start gap-10   md:flex-row justify-between'>
       
            <h1 className="text-md">Joseph Gray</h1>
     
        <div className="relative right-0  items-end   ">
            <h3>1.4k views</h3>
        </div>
        </div>
      
    </div>
</div>

            </div>


        </div>
    );
}
