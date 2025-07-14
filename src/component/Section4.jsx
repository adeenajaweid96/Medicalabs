import img1 from "../assets/product-cover-133 sec-.png";
import img2 from "../assets/product-cover-131.png";
import img3 from "../assets/product-cover-130 sec-.png";
import img4 from "../assets/product-cover-132 sec-.jpg";


const Section4 = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col px-60 py-10">
      <p className='text-[#8D5CF6] font-bold text-[16px] '>Get your best looking smile now!</p>
      <h1 className='text-[#252B42] text-4xl font-bold'>Our Doctors Specialize in you</h1>
      <p className='text-gray-400 py-4 font-bold pb-28'>Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
     
     <div className="flex flex-row gap-7">
     <img src={img1} alt="card1" className="" />
      <img src={img2} alt="card2" className="" />
     <img src={img3} alt="card3" className="" />
     <img src={img4} alt="card4" className="" />
     </div>
     
     <p>English</p>
     <h1>sit amet nulla facilisi morbi</h1>
     <p>We focus on ergonomics 
and meeting you....</p>
     <p>$16.48 <span className="text-orange-600">$6.48</span></p>
     <button>Learn More</button>
    

    </div>
  )
}

export default Section4
