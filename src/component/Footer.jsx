import React from 'react'
import { Facebook, Instagram , Twitter ,  Mail , MapPin,  Phone} from 'lucide-react';

const Footer = () => {
  return (
    <>
    <footer className='flex justify-center gap-14 p-18 max-w-screen-2xl  mx-auto'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-900 font-bold pb-4'>Company Info</h1>
          <p className='text-gray-500 font-bold'>About Us</p>
          <p className='text-gray-500 font-bold'>Carrier</p>
          <p className='text-gray-500 font-bold'>We are Hiring</p>
          <p className='text-gray-500 font-bold'>Blog</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-900 font-bold pb-4'>Legal</h1>
          <p className='text-gray-500 font-bold'>About Us</p>
          <p className='text-gray-500 font-bold'>Carrier</p>
          <p className='text-gray-500 font-bold'>We are Hiring</p>
          <p className='text-gray-500 font-bold'>Blog</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-900 font-bold pb-4'>Features</h1>
          <p className='text-gray-500 font-bold'>Business Marketing</p>
          <p className='text-gray-500 font-bold'>User Analytics</p>
          <p className='text-gray-500 font-bold'>Live Chat</p>
          <p className='text-gray-500 font-bold'>Unlimited Support</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-900 font-bold pb-4'>Resources</h1>
          <p className='text-gray-500 font-bold'>IOS & Android</p>
          <p className='text-gray-500 font-bold'>Watch a Demo</p>
          <p className='text-gray-500 font-bold'>Customers</p>
          <p className='text-gray-500 font-bold'>API</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-900 font-bold pb-4'>Get In Touch</h1>
          <div className='flex gap-3'><Phone className='text-[#8D5CF6] w-7 h-7'/> <p className='text-gray-500 font-bold'>(480) 555-0103</p></div>
          <div className='flex gap-3'><MapPin className='mt-3 text-[#8D5CF6] w-7 h-7'/><p className='text-gray-500 font-bold'>4517 Washington Ave. Manchester,<br/>Kentucky 39495</p></div>
          <div className='flex gap-3'><Mail className='text-[#8D5CF6] w-7 h-7'/><p className='text-gray-500 font-bold'>debra.holt@example.com</p></div>
        </div>

       
    </footer>
     <div className='flex justify-around bg-gray-100 p-8 max-w-screen-2xl  mx-auto'>
            <p className='text-gray-500 font-bold'>Made With Love By Figmaland All Right Reserved </p>
            <div className='flex gap-4 '>
            <Facebook className='text-[#8D5CF6] w-7 h-7'/>
            <Instagram className='text-[#8D5CF6] w-7 h-7'/>
            <Twitter className='text-[#8D5CF6] w-7 h-7'/>
            </div>
        </div>
  
  </>
  )
}

export default Footer
