import React from 'react'

function MainPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center mx-auto space-y-12 mt-20 max-w-md md:max-w-4xl md:space-y-2">
      <div className='bg-[#110CC1] shadow-3xl mt-20 md:mb-6 '>
       <p className='text-[#FFFFFF] text-2xl px-8 py-3 font-prime font-bold md:text-4xl '>futuredays</p> 
      </div>
      
        <div className='font-prime md:text-xl text-justify'>
        <p clasName='text-[#000] text-xs text-justify p-6 '>A loose crypto collective working to accelerate progress towards the future.</p>
        </div>
        <div className='border-dotted border-[1px] border-black w-full p-6 h-48'>
          <h2 className='text-lg text-[#110CC1] font-extrabold my-3 font-prime md:text-xl md:font-bold' >PROJECTS</h2>
          <div className='font-prime md:text-xl'>
            <p><a href='unison.gg' target='_blank'>unison</a> - asset management platform.</p> 
        </div>
      </div>
    </div>
  )
}

export default MainPage