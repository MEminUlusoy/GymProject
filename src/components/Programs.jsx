import React from 'react'

function Programs() {
  return (
    <div className="snap-start h-[calc(100vh-100px)] w-screen bg-white flex items-center justify-center" id='programs'>
      <div className=' h-[80%] w-[80%] grid xl:grid-cols-7 xl:grid-rows-2 md:grid-rows-4 md:grid-cols-7 gap-4 '>

        <div className='hidden md:row-span-4 xl:row-span-2 col-span-1 md:flex justify-center items-center '>
          <h1 className='md:text-5xl lg:text-6xl tracking-tight text-black font-bold  rotate-180' style={{ writingMode: 'vertical-rl' }}><span className='text-[#158009]'>Our</span> Programs</h1>
        </div>

        {/* Daily Workout Programs */}
        <div className='md:row-span-1 xl:row-span-1 md:col-span-6  xl:col-span-3 rounded flex border-2 border-[#78C72C] px-4'>
          <div className='flex items-center justify-center w-[40%] relative'>
            <img className='absolute h-[70%] w-[100%] object-scale-down z-20' src="assets/men/m7.png" alt="" />
            <div className='absolute h-[70%] w-[80%] bg-orange-100 z-10 rounded'></div>
          </div>
          <div className='flex w-[60%] h-[100%] flex-col justify-center '>
            <h4 className='text-base sm:text-lg md:text-xl xl:text-2xl text-black tracking-tight font-f2'>Daily Workout Programs</h4>
            <p className='text-[#A4A6A6] my-[1px] sm:my-[5px] md:my-[10px] xl:my-[30px] text-xs sm:text-sm md:text-base xl:text-lg '>Get in shape with our pro trainers. Reach your body goals in no time contact us. </p>
            <div className='flex'>
              <a className='text-[#158009] font-bold text-sm sm:text-base  md:text-md xl:text-lg' href="/">Join now</a>
              <i className="fa-solid fa-arrow-right-long text-[#158009] -rotate-45 text-xs ml-2"></i>
            </div>
          </div>
        </div>
        {/* Weekly Workout Programs */}
        <div className='md:row-span-1 xl:row-span-1 md:col-span-6  xl:col-span-3 rounded flex border-2 border-[#78C72C] px-4'>
          <div className='flex items-center justify-center w-[40%] relative'>
            <img className='absolute h-[70%] w-[100%] object-scale-down z-20' src="assets/men/m11.png" alt="" />
            <div className='absolute h-[70%] w-[80%] bg-blue-100 rounded z-10'></div>
          </div>
          <div className='flex w-[60%] h-[100%] flex-col justify-center '>
            <h4 className='text-base sm:text-lg md:text-xl xl:text-2xl text-black tracking-tight font-f2'>Weekly Workout Programs</h4>
            <p className='text-[#A4A6A6] my-[1px] sm:my-[5px] md:my-[10px] xl:my-[30px] text-xs sm:text-sm md:text-base xl:text-lg'>Get in shape with our pro trainers.Reach your body goals in no time contact us. </p>
            <div className='flex'>
              <a className='text-[#158009] font-bold text-sm sm:text-base  md:text-md xl:text-lg' href="/">Join now</a>
              <i className="fa-solid fa-arrow-right-long text-[#158009] -rotate-45 text-xs ml-2"></i>
            </div>
          </div>
        </div>
        {/* Women Workout Programs */}
        <div className='md:row-span-1 xl:row-span-1 md:col-span-6  xl:col-span-3 rounded flex border-2 border-[#78C72C] px-4 '>
          <div className='flex items-center  justify-center w-[40%] relative'>
            <img className='absolute h-[70%] w-[100%] object-scale-down z-20' src="assets/women/w8.png" alt="" />
            <div className='absolute h-[70%] w-[80%] bg-[#FFBDC2] z-10 rounded'></div>
          </div>
          <div className='flex w-[60%] h-[100%] flex-col justify-center '>
            <h4 className='text-base sm:text-lg md:text-xl xl:text-2xl text-black tracking-tight font-f2'>Women Workout Programs</h4>
            <p className='text-[#A4A6A6] my-[1px] sm:my-[5px] md:my-[10px] xl:my-[30px] text-xs sm:text-sm md:text-base xl:text-lg'>Get in shape with our pro trainers.Reach your body goals in no time contact us. </p>
            <div className='flex'>
              <a className='text-[#158009] font-bold text-sm sm:text-base  md:text-md xl:text-lg' href="/">Join now</a>
              <i className="fa-solid fa-arrow-right-long text-[#158009] -rotate-45 text-xs ml-2"></i>
            </div>
          </div>
        </div>
        {/* Couple Workout Programs */}
        <div className='md:row-span-1 xl:row-span-1 md:col-span-6  xl:col-span-3 rounded flex border-2 border-[#78C72C] px-4'>
          <div className='flex items-center justify-center w-[40%] relative'>
            <img className='absolute h-[70%] w-[100%] object-scale-down z-20' src="assets/others/o5.png" alt="" />
            <div className='absolute h-[70%] w-[80%] bg-yellow-200 rounded z-10'></div>
          </div>
          <div className='flex w-[60%] flex-col justify-center '>
            <h4 className='text-base sm:text-lg md:text-xl xl:text-2xl text-black tracking-tight font-f2'>Couple Workout Programs</h4>
            <p className='text-[#A4A6A6] my-[1px] sm:my-[5px] md:my-[10px] xl:my-[30px] text-xs sm: text-sm md:text-base xl:text-lg'>Get in shape with our pro trainers.Reach your body goals in no time contact us. </p>
            <div className='flex'>
              <a className='text-[#158009] font-bold text-sm sm:text-base md:text-md xl:text-lg' href="/">Join now</a>
              <i className="fa-solid fa-arrow-right-long text-[#158009] -rotate-45 text-xs ml-2"></i>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Programs