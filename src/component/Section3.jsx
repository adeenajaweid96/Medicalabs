import card1 from "../assets/Group.png"
import card2 from "../assets/004-stethoscope.png"
import card3 from "../assets/005-medical-history.png";
import card4 from "../assets/006-caduceus.png";

const Section3 = () => {
  return (
    <div className='bg-#fffff flex flex-col px-60 py-10 max-w-screen-2xl  mx-auto'>
      <p className='text-[#8D5CF6] font-bold text-[16px]'>Cancer Care</p>
      <h1 className="text-[#252B42] text-4xl font-bold">Our <br/>Activity</h1>
      <p className="text-gray-500 py-4 ">Problems trying to resolve the conflict between <br/>
      the two major realms of Classical physics: Newtonian mechanics </p>


   <div className="flex gap-12">
   <div className="bg-white shadow-md w-[22%] h-[45%] p-5 my-18">
    <img src={card1} alt="heart-image" className="bg-[#EA4C89] p-3 rounded-[30px]"/>
    <h1 className="text-[#252B42] font-bold py-3">Book now</h1>
    <hr  className="text-[#EA4C89] w-12 border-2 my-2"/>
    <p className="text-gray-500 py-4 font-medium">The gradual <br/>acumulation of information about</p>
   </div>

    <div className="bg-white shadow-md w-[22%] h-[45%] p-5 my-18">
    <img src={card2} alt="stethoscope-image" className="bg-[#EA4C89] p-3 rounded-[30px]"/>
    <h1 className="text-[#252B42] font-bold py-3">Emergency Case</h1>
    <hr  className="text-[#EA4C89] w-12 border-2 my-2"/>
    <p className="text-gray-500 py-4 font-medium">The gradual <br/>acumulation of information about</p>
   </div>

    <div className="bg-white shadow-md w-[22%] h-[45%] p-5 my-18">
    <img src={card3} alt="files-image" className="bg-[#EA4C89] p-3 rounded-[30px]"/>
    <h1 className="text-[#252B42] font-bold py-3">Painless Procedures</h1>
    <hr  className="text-[#EA4C89] w-12 border-2 my-2"/>
    <p className="text-gray-500 py-4 font-medium">The gradual <br/>acumulation of information about</p>
   </div>

    <div className="bg-white shadow-md w-[22%] h-[45%] p-5 my-18">
    <img src={card4} alt="health-image" className="bg-[#EA4C89] p-3 rounded-[30px]"/>
    <h1 className="text-[#252B42] font-bold py-3">Health Queries</h1>
    <hr  className="text-[#EA4C89] w-12 border-2 my-2"/>
    <p className="text-gray-500 py-4 font-medium">The gradual <br/>acumulation of information about</p>
   </div>
   
   </div>
   
    </div>
  )
}

export default Section3
