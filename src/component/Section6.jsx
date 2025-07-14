import img1 from "../assets/user-cover-1.png"
import img2 from "../assets/fixed-height sec-.png";
import img3 from "../assets/user-cover-2.png";
import img4 from "../assets/user-cover-4.png";
import { Facebook, Instagram , Twitter } from 'lucide-react';


const Section6 = () => {
  return (
  <section className="max-w-screen-2xl mx-auto flex flex-col px-60 py-10">
     <p className='text-[#8D5CF6] font-bold text-[16px]'>Team</p>
     <h1 className='text-[#252B42] text-4xl font-bold'>Our Team</h1>
     <p className='text-gray-400 py-4 font-bold'>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics. Newtonion mechanins</p>

<div className="flex gap-10 py-20">
     <div className="shadow-md w-[25%] rounded-b-2xl">
      <img src={img1} alt="card1" className="rounded-t-2xl" />
      <h1 className="text-black font-bold text-center py-3">Julian Jameson</h1>
      <p className="text-gray-500 font-medium text-center">Profession</p>
      <div className="flex justify-center p-6 gap-5">
       <Facebook className="text-[#ea4c89]"/>
      <Instagram className="text-[#ea4c89]"/>
      <Twitter className="text-[#ea4c89]"/></div>
</div>

 <div className="bg-white shadow-md w-[25%] rounded-b-2xl">
      <img src={img2} alt="card2" className="rounded-t-2xl" />
      <h1 className="text-black font-bold text-center py-3">Julian Jameson</h1>
      <p className="text-gray-500 font-medium text-center">Profession</p>
      <div className="flex justify-center p-6 gap-5">
       <Facebook className="text-[#ea4c89]"/>
      <Instagram className="text-[#ea4c89]"/>
      <Twitter className="text-[#ea4c89]"/></div></div>

 <div className="bg-white shadow-md w-[25%] rounded-b-2xl">
      <img src={img3} alt="card3" className="rounded-t-2xl " />
      <h1 className="text-black font-bold text-center py-3">Julian Jameson</h1>
      <p className="text-gray-500 font-medium text-center">Profession</p>
      <div className="flex justify-center p-6 gap-5">
      <Facebook className="text-[#ea4c89]"/>
      <Instagram className="text-[#ea4c89]"/>
      <Twitter className="text-[#ea4c89]"/></div>
</div>

 <div className="bg-white shadow-md w-[25%] rounded-b-2xl">
      <img src={img4} alt="card4" className="rounded-t-2xl" />
      <h1 className="text-black font-bold text-center py-3">Julian Jameson</h1>
      <p className="text-gray-500 font-medium text-center">Profession</p>
      <div className="flex justify-center p-6 gap-5">
      <Facebook className="text-[#ea4c89]"/>
      <Instagram className="text-[#ea4c89]"/>
      <Twitter className="text-[#ea4c89]"/></div>
</div>


      </div>
  </section>
  )
}

export default Section6
