import img from "../assets/thumb-concept-3.png";

const Section2 = () => {
  return (
    <div className='bg-[#f6f7fb] overflow-hidden flex justify-center flex-wrap  gap-20 py-20 max-w-screen-2xl mx-auto'>
        <div className="">
        <img src={img} alt="section2-image" />
        </div>
        <div className='my-20 border-t-8 border-[#ea4c89] py-10 flex  flex-col flex-wrap'>
            <h1 className='text-[#252B42] font-bold text-5xl/[1.4] '>The Best <br/>Reference</h1>
            <p className='text-gray-500  text-[18px]/[1.5] my-10'>Problems trying to resolve the conflict between <br/>
the two major realms of Classical physics: <br/>
Newtonian mechanics </p>
            <h3 className='text-[#8d5cf6] font-medium text-[18px]'>Learn More</h3>
        </div>
    </div>
  )
}

export default Section2
