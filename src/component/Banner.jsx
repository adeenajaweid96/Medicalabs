
const Banner = () => {
  return (
    <div className='bg-gray-100 max-w-screen-2xl mx-auto flex flex-col justify-center items-center py-24'>
      <p className='text-[#8D5CF6] font-bold text-[16px] py-4'>Newsletter</p>
      <h1 className='text-[#252B42] text-4xl font-bold'>JOIN US</h1>
      <p className='text-gray-400 py-4 font-medium text-center'>Problems trying to resolve the conflict between<br/> 
      the two major realms of Classical physics: Newtonian mechanics </p>
      <input type="email" name="email" id="" placeholder='Your Email' className=' my-14 p-3 w-[40%] border-gray-200 border-3 outline-none'/>
      {/* <button className='bg-[#8D5CF6] text-white -'>Subscribe</button> */}
   
    </div>
  )
}

export default Banner
