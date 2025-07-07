import React from 'react'
import logo from "../assets/MedicalAbs.png";

const Navbar = () => {
  return (
<div className='flex  bg-[#f6f7fb]  h-[100px] max-w-screen-2xl  mx-auto '>
  <div  className='my-10 mx-38'>
    <img src={logo} alt="Medicalabs"/>
    </div>


<div className='flex '>
    <ul className='flex  justify-between items-center gap-8 text-[#737373] font-medium text-[20px]'>
      <li>Home</li>
      <li>Products</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
    </div>

    <div className='flex ml-48 gap-8'>
      <button className='text-[#8d5cf6] font-bold text-[20px]'>Login</button>
      <button className='bg-[#8d5cf6] my-6 text-white font-medium w-32 h-12 text-[16px] rounded-md'>JOIN US</button>
    </div>
</div>
  )
}

export default Navbar
