import React from 'react'
import hero from "../assets/hero-cover-1.png";

const Hero = () => {
  return (
    <div className=" flex justify-between flex-wrap  bg-[#f6f7fb] max-w-screen-2xl mx-auto ">
      <div className='mx-32 mt-28'>
        <h3 className='text-[#9953DD] font-bold font-poppins text-xl' >For Better Future</h3>
        <h1 className='text-[#252B42] font-bold text-6xl/[1.3] mt-8'>Meet the Best <br/>Hospital</h1>
        <h3 className='text-[#252B42] font-bold text-xl/[1.6] mt-3'>DentalCare is most focused in helping you discover<br/> 
        your most beauiful smile</h3>
        <div className="">
        <button className='bg-[#8d5cf6] my-6 text-white font-medium w-44 h-12 text-[18px] rounded-md'>Get Quote Now</button>
        <button className='font-semibold w-40 h-12 text-[18px] mx-6 rounded-md text-[#8d5cf6] border-3 border-[#8d5cf6] '>Learn More</button>
        </div>
      </div>
      <div>
        <img src={hero} alt="hero-section-image" />
      </div>
    </div>
  )
}

export default Hero
