import React from 'react'
// bg-[#65c72c]
function Groups() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-white flex flex-col items-center " id='groups'>

      <div className='group hover:bg-black h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-black h-full w-2/4 flex group-hover:translate-x-14 sm:group-hover:translate-x-36 md:group-hover:translate-x-40 transition duration-500 ease-in'>
          <div className='w-full h-full sm:w-2/5 sm:h-full flex flex-col justify-evenly items-center px-5 sm:px-0'>
            <h3 className='text-[#cfc63d] text-base  sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-f7 font-bold text-center'>Power Lifting <br/> Groups</h3>
            <ul className='text-white font-bold list-[disc]'>
              <li className='font-f2 text-xs sm:text-xs  md:text-xs   lg:text-xs xl:text-sm  '>Gain Power</li>
              <li className='font-f2 text-xs sm:text-xs  md:text-xs  lg:text-xs xl:text-sm '>Be Fit</li>
              <li className='font-f2 text-xs sm:text-xs  md:text-xs  lg:text-xs xl:text-sm '>Get In Form</li>
            </ul>
            <button className='text-xs h-7 w-20 sm:text-xs md:text-xs xl:text-sm sm:h-7 sm:w-16 md:h-7 md:w-20 lg:h-8 lg:w-24 xl:h-8 xl:w-28 hover:bg-[#ceb008]  text-white font-bold font-f2 tracking-wider rounded-lg bg-[#ddc018] transition duration-150 ease-in'>Review</button>
          </div>
          <div className='hidden sm:block w-3/5 h-full '>
            <img className='h-full w-full object-scale-down' src="assets/women/w9.png" alt="" loading='lazy'/>
          </div>
        </div>
      </div>
      <div className='group hover:bg-[#FFDE17] h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-[#FFDE17] h-full w-2/4 flex justify-evenly group-hover:translate-x-14 sm:group-hover:translate-x-36 md:group-hover:translate-x-40 transition duration-500 ease-in '>
          <div className='hidden sm:block w-2/5 h-full '>
            <img className=' object-[center_top] h-full w-full object-cover ' src="assets/women/w16.png" alt="" loading='lazy' />
          </div>
          <div className='w-full h-full sm:w-2/5 sm:h-full flex flex-col justify-evenly items-center px-5 sm:px-0'>
            <h3 className='text-red-500 text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-f7 font-bold text-center'>Crossfit Groups</h3>
            <p className='text-gray-500 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm font-f2 text-align'>In this group, you work entire body rather than a regional workout.In this way, this group provides rapid calorie burning and helps lose weight.</p>
            <button className='text-xs h-7 w-20 sm:text-xs md:text-xs  xl:text-sm sm:h-7 sm:w-16 md:h-7 md:w-20 lg:h-8 lg:w-24 xl:h-8 xl:w-28 bg-red-500 text-white font-bold font-f2 tracking-wider rounded-lg hover:bg-[#30302f] hover:text-white transition duration-150 ease-in'>Review</button>
          </div>
        </div>
      </div>
      <div className='group hover:bg-red-500 h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-red-500 h-full w-2/4 flex group-hover:translate-x-14 sm:group-hover:translate-x-36 md:group-hover:translate-x-40 transition duration-500 ease-in'>
          <div className='w-full sm:w-2/5  lg:w-3/5 h-full flex flex-col justify-evenly items-center px-5 sm:px-0'>
            <h3 className='text-white text-base  sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-f7 font-bold text-center'>Cardio Groups</h3>
            <ul className='text-black font-bold list-[disc] text-align'>
              <li className='font-f2 text-xs  sm:text-xs sm:ml-6 md:text-xs  lg:text-xs xl:text-sm '>High Tempo Running</li>
              <li className='font-f2 text-xs  sm:text-xs sm:ml-6 md:text-xs  lg:text-xs xl:text-sm  my-2'>Fast Burning Calorie</li>
              <li className='font-f2 text-xs  sm:text-xs sm:ml-6 md:text-xs  lg:text-xs xl:text-sm '>Cycling With Music</li>
            </ul>
            <button className='text-xs h-7 w-20  sm:text-xs md:text-xs xl:text-sm sm:h-7 sm:w-16 md:h-7 md:w-20 lg:h-8 lg:w-24 xl:h-8 xl:w-28  bg-white text-black font-bold font-f2 tracking-wider rounded-lg hover:bg-black hover:text-white transition duration-150 ease-in'>Review</button>
          </div>
          <div className='hidden sm:block md:w-3/5 lg:w-2/5 h-full '>
            <img className='h-full w-full lg:object-cover  xl:object-cover 2xl:object-cover' src="assets/women/w13.png" alt=""  loading='lazy'/>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Groups