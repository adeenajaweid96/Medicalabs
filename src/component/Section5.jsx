import React from 'react'
import client1 from "../assets/testimonial-user-cover-1.png";
import client2 from "../assets/testimonial-user-cover-2.png";
import { Star } from 'lucide-react';

const Section5 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <p>Testimonals</p>
        <h1>Our Department</h1>
        <p>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics. Newtonion mechanins</p>
      
      <div>
        <img src={client1} alt="" />
        <p>Slate help you see how many more days<br/>you need to work to reach your financial goal for the month and year.</p>
       <div className='flex'> <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='stroke-yellow-400  '/>
        </div>

        <p>Regina Miles</p>
        <p>Designer</p>

      </div>
      <div></div>
      
          </div>
  )
}

export default Section5
