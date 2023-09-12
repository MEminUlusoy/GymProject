import React, { useRef } from 'react'

function Trainers() {


  

  const leftSlide = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const rightSlide = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  

  return (
    <div className="snap-start h-[calc(100vh-100px)] w-screen bg-black flex" id='trainers'>
      <div className='border-2 w-1/4 h-full'></div>
      <div className='border-2 w-3/4 h-full flex items-center'>
        <div className='h-[400px]  w-1/4 border-2 border-red-500 relative flex items-end'>
          <img className='w-full h-full object-cover absolute z-20' src="assets/others/o3.png" alt="/" />
          <div className=' bg-white h-full w-full rounded-full absolute z-10'></div>
        </div>
        <div className='h-[400px] w-3/4 border-2 border-green-500 '>
          <div className='relative h-full'>
            <div id='slider' className='h-full border-2 border-black flex overflow-auto scroll-smooth scrollbar-hide items-center px-6' >
              <div className='h-3/4 w-[250px]   ml-[35px] mr-[35px] bg-white  flex flex-shrink-0'></div>
              <div className='h-3/4  w-[250px]  ml-[35px] mr-[35px] bg-blue-500 flex flex-shrink-0'></div>
              <div className='h-3/4  w-[250px]  ml-[35px] mr-[35px] bg-red-500 flex flex-shrink-0'></div>
              <div className='h-3/4  w-[250px]  ml-[35px] mr-[35px] bg-purple-500 flex flex-shrink-0'></div>
              <div className='h-3/4  w-[250px]  ml-[35px] mr-[35px] bg-white flex flex-shrink-0'></div>
              <div className='h-3/4  w-[250px]  ml-[35px] mr-[35px] bg-green-500 flex flex-shrink-0'></div>
            </div>
            <div className=''>
              <div onClick={leftSlide} className='absolute top-1/2 -translate-y-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-g left-5 cursor-pointer'><i class="fa-solid fa-angles-left text-white text-2xl"></i></div>
              <div onClick={rightSlide} className='absolute top-1/2 -translate-y-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-g right-5 cursor-pointer'><i className="fa-solid fa-angles-right text-white text-2xl"></i></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Trainers