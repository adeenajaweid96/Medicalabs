import client1 from "../assets/testimonial-user-cover-1.png";
import client2 from "../assets/testimonial-user-cover-2.png";
import { Star } from 'lucide-react';

const Section5 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col px-60 py-10'>
        <p className='text-[#8D5CF6] font-bold text-[16px]'>Testimonals</p>
        <h1 className='text-[#252B42] text-4xl font-bold'>Our Department</h1>
        <p className='text-gray-400 py-4 font-bold'>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics. Newtonion mechanins</p>
      <div className='flex justify-center gap-28 py-16'>


      <div className='flex flex-col items-center p-8'>
        <img src={client1} alt="testimonal" className='rounded-full'/>
        <p className='text-center p-4 text-gray-500 font-medium'>Slate help you see how many more days<br/>you need to work to reach your financial<br/> goal for the month and year.</p>
       <div className='flex px-4'> <Star className=' fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='stroke-yellow-400  '/>
        </div>

        <p className='text-black font-bold m-2'>Regina Miles</p>
        <p className='text-gray-600 font-medium'>Designer</p>

      </div>
      <div className='flex flex-col items-center p-8'>
          <img src={client2} alt="testimonal" className='rounded-full'/>
        <p className='text-center p-4 text-gray-500 font-medium'>Slate help you see how many more days<br/>you need to work to reach your financial<br/> goal for the month and year.</p>
       <div className='flex px-4'> <Star className=' fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='fill-yellow-400 stroke-yellow-400  '/>
        <Star className='stroke-yellow-400  '/>
        </div>

        <p className='text-black font-bold m-2'>Regina Miles</p>
        <p className='text-gray-600 font-medium'>Designer</p>
      </div>
      
          </div>
  
  
  </div>
  )
}

export default Section5
