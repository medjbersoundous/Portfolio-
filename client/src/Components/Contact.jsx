import React from 'react'
import { TbSend } from "react-icons/tb";

export default function Contact() {
  return (
    <div className='h-[700px] bg-black flex flex-col items-center pt-10'>
      <h1 className='text-[55px] text-gray-200'>Contact.</h1>
      <h3 className='mt-5 text-gray-300'>Get in touch or shoot me an email directly on <span className='font-bold'>medjbersoundous@gmail.com</span> </h3>
      <div className='pt-6'>
       <div className='flex w-[550px] justify-between mt-6'>
        <div className='flex flex-col'>
            <label className='text-gray-600 font-thin' >Your name</label>
            <input type="text" name="" id="" placeholder='Name' className='p-4 bg-transparent border-gray-400 font-thin mt-2  border-b w-[240px] h-[23px]' />
        </div>
        <div className='flex flex-col'>
            <label  className='text-gray-600 font-thin' >Email address</label>
            <input type="email" name="" id="" placeholder='Email' className='p-4 bg-transparent border-gray-400 font-thin mt-2  border-b w-[240px] h-[23px]' />
        </div>
       </div>
       <div className='flex flex-col mt-10'>
        <label className='text-gray-600 font-thin' >Your message</label>
        <textarea name="" id="" cols="30" rows="3" placeholder='Hi, I think we need a web developer  for our products at Company X. How soon can you hop on to discuss this?
         ' className='p-4 bg-transparent border-gray-400 mt-1 font-thin  border-b '></textarea>
       </div>
      </div>
       <button className='w-[170px] bg-white text-black p-3 mt-10 rounded flex items-center justify-between font-thin'>SEND MESSAGE <TbSend className='text-[20px]' /> </button>
    </div>
  )
}
