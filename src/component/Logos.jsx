import React from 'react'
import hooli from "../assets/fa-brands-1.png";
import lyfe from "../assets/fa-brands-2.png";
import boat from "../assets/col-md-2 sec-.png";
import stripe from "../assets/col-md-2 sec- (1).png";
import aws from "../assets/col-md-2 sec- (2).png";
import smile from "../assets/fa-brands-6.png";

const Logos = () => {
  return (
    <div className='flex justify-center gap-18 my-32 max-w-screen-2xl mx-auto flex-wrap '>
      
      <img src={hooli} alt="" />
      <img src={lyfe} alt="" />
      <img src={boat} alt="" />
      <img src={stripe} alt="" />
      <img src={aws} alt="" />
      <img src={smile} alt="" />
    </div>
  )
}

export default Logos
