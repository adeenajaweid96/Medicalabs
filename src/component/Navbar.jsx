import React from 'react'
import logo from "../assets/MedicalAbs.png";
import { Moon, Sun } from 'lucide-react';


const Navbar = () => {
  return (
<div className='flex  bg-[#f6f7fb]  h-[100px] max-w-screen-2xl  mx-auto '>
  <div  className='my-10 mx-38'>
    <img src={logo} alt="Medicalabs"/>
    </div>


<div className='flex '>
    <ul className='flex  justify-between items-center gap-8 text-[#737373] font-medium text-[20px]'>
      <li className='hover:border-b-5 hover:border-b-[#8d5cf6] hover:delay-100'><a href="./Hero.jsx">Home</a></li>
      <li className='hover:border-b-5 hover:border-b-[#8d5cf6] hover:delay-100'><a href="./Section3.jsx">Products</a></li>
      <li className='hover:border-b-5 hover:border-b-[#8d5cf6] hover:delay-100'><a href="">Pricing</a></li>
      <li className='hover:border-b-5 hover:border-b-[#8d5cf6] hover:delay-100'><a href="">Contact</a></li>
    </ul>
    </div>

    <div className='flex ml-48 gap-8'>
      <button className='text-[#8d5cf6] font-bold text-[20px] hover:text-gray-300 hover:border-b-4 '>Login</button>
      <button className='bg-[#8d5cf6] my-6 text-white font-medium w-32 h-12 text-[16px] rounded-md hover:border-3 hover:bg-gray-100 hover:font-bold hover: hover:text-[#8d5cf6] delay-300'>JOIN US</button>
     <div className='flex '>
      {/* <Moon/>
      <Sun/> */}
      </div>
    </div>
</div>
  )
}

export default Navbar
