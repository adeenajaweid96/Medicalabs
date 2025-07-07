import React from 'react'
import { Facebook, Instagram , Twitter} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='max-w-screen-2xl  mx-auto'>
        <div></div>
        <div className='flex'>
            <p className='text-gray-500'>Made With Love By Figmaland All Right Reserved </p>
            <div className='flex '>
            <Facebook className='text-[#8D5CF6]'/>
            <Instagram className='text-[#8D5CF6]'/>
            <Twitter className='text-[#8D5CF6]'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
