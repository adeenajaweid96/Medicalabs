import img1 from "../assets/product-cover-133 sec-.png";
import img2 from "../assets/product-cover-131.png";
import img3 from "../assets/product-cover-130 sec-.png";
import img4 from "../assets/product-cover-132 sec-.jpg";
import { Heart , ShoppingCart , Eye , ChevronRight }   from 'lucide-react';



const Section4 = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col px-60 py-10">
      <p className='text-[#8D5CF6] font-bold text-[16px] '>Get your best looking smile now!</p>
      <h1 className='text-[#252B42] text-4xl font-bold'>Our Doctors Specialize in you</h1>
      <p className='text-gray-400 py-4 font-bold pb-28'>Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
     
     {/* <Heart/><ShoppingCart/><Eye/> */}

     {/* <div className="flex flex-row gap-7">
     <img src={img1} alt="card1" className="" />
      <img src={img2} alt="card2" className="" />
     <img src={img3} alt="card3" className="" />
     <img src={img4} alt="card4" className="" />
     </div>
     
     <div className="">
     <div className="">
     <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
     <h1 className="font-bold text-black px-6 text-[18px]">sit amet nulla<br/>facilisi morbi</h1>
     <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br/>
and meeting you....</p>
     <p className="text-gray-500 font-medium px-6 pt-4">$16.48 <span className="text-orange-600 font-bold ">$6.48</span></p>
    
   <button className="rounded-full border-2  border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[15%] h-11 font-bold ">Learn More</button>
     </div>
    {/* <ChevronRight/> */}
     {/* <div className="">
     <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
     <h1 className="font-bold text-black px-6 text-[18px]">sit amet nulla<br/>facilisi morbi</h1>
     <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br/>
and meeting you....</p>
     <p className="text-gray-500 font-medium px-6 pt-4">$16.48 <span className="text-orange-600 font-bold ">$6.48</span></p>
     <button className="rounded-full border-2  border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[15%] h-11 font-bold ">Learn More</button>
     </div>

    <div className="">
  <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
     <h1 className="font-bold text-black px-6 text-[18px]">sit amet nulla<br/>facilisi morbi</h1>
     <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br/>
and meeting you....</p>
     <p className="text-gray-500 font-medium px-6 pt-4">$16.48 <span className="text-orange-600 font-bold ">$6.48</span></p>
     <button className="rounded-full border-2  border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[15%] h-11 font-bold ">Learn More</button>
    </div>

    <div className="">
  <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
     <h1 className="font-bold text-black px-6 text-[18px]">sit amet nulla<br/>facilisi morbi</h1>
     <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br/>
and meeting you....</p>
     <p className="text-gray-500 font-medium px-6 pt-4">$16.48 <span className="text-orange-600 font-bold ">$6.48</span></p>
     <button className="rounded-full border-2  border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[15%] h-11 font-bold ">Learn More</button>
 
    </div> */}
{/* </div> */}

<div className="flex flex-row gap-7">
  <div className="flex flex-col items-center">
    <img src={img1} alt="card1" />
    <div className="text-center">
      <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
      <h1 className="font-bold text-black px-6 text-[18px]">
        sit amet nulla<br />facilisi morbi
      </h1>
      <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br />and meeting you....</p>
      <p className="text-gray-500 font-medium px-6 pt-4">
        $16.48 <span className="text-orange-600 font-bold ">$6.48</span>
      </p>
      <button className="rounded-full border-2 border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[80%] h-11 font-bold">
        Learn More
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={img2} alt="card2" />
    <div className="text-center">
       <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
      <h1 className="font-bold text-black px-6 text-[18px]">
        sit amet nulla<br />facilisi morbi
      </h1>
      <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br />and meeting you....</p>
      <p className="text-gray-500 font-medium px-6 pt-4">
        $16.48 <span className="text-orange-600 font-bold ">$6.48</span>
      </p>
      <button className="rounded-full border-2 border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[80%] h-11 font-bold">
        Learn More
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={img3} alt="card3" />
    <div className="text-center">
       <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
      <h1 className="font-bold text-black px-6 text-[18px]">
        sit amet nulla<br />facilisi morbi
      </h1>
      <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br />and meeting you....</p>
      <p className="text-gray-500 font-medium px-6 pt-4">
        $16.48 <span className="text-orange-600 font-bold ">$6.48</span>
      </p>
      <button className="rounded-full border-2 border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[80%] h-11 font-bold">
        Learn More
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={img4} alt="card4" />
    <div className="text-center">
       <p className="text-[#8D5CF6] font-bold text-[16px] p-5">English</p>
      <h1 className="font-bold text-black px-6 text-[18px]">
        sit amet nulla<br />facilisi morbi
      </h1>
      <p className="text-gray-500 px-6 pt-2">We focus on ergonomics<br />and meeting you....</p>
      <p className="text-gray-500 font-medium px-6 pt-4">
        $16.48 <span className="text-orange-600 font-bold ">$6.48</span>
      </p>
      <button className="rounded-full border-2 border-[#8D5CF6] text-[#8D5CF6] mx-4 my-6 w-[80%] h-11 font-bold">
        Learn More
      </button>
    </div>
  </div>
</div>


</div>
  )
}

export default Section4
