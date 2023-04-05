import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { RiTrademarkLine } from 'react-icons/ri'

function MainPage() {
  return (
    <div className="h-screen w-full p-6 flex flex-col items-center mx-auto space-y-12 mt-20 max-w-md md:max-w-5xl md:space-y-2 md:p-10">
      
      <div className='bg-[#110CC1] shadow-3xl flex mt-20 md:mb-6 px-8 py-3'>
       <p className='text-[#FFFFFF] text-2xl  font-prime m-0 font-bold md:text-4xl '>futuredays </p>
       <RiTrademarkLine size={15} color='#FFFFFF'/> 
      </div>
      
        <div className='font-prime md:text-xl text-center'>
        <p clasName='text-[#000] text-xs text-center p-6 '>A loose crypto collective working to accelerate progress towards the future.</p>
        </div>
        <div className='border-dotted border-[1px] border-black w-full p-6 h-96'>
          <h2 className='text-lg text-[#110CC1] font-extrabold my-3 font-prime md:text-xl md:font-bold' >PROJECTS</h2>
          <div className='font-prime md:text-xl flex items-center'>
          <BiPlay color='#110CC1 ' size={15} />
            <p className=''>  <a href='//unison.gg'>unison</a> - asset management platform.</p> 
        </div>
      </div>
    </div>
  )
}

export default MainPage