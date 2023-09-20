import React from 'react'
// bg-[#65c72c]
function Groups() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-white flex flex-col items-center " id='groups'>

      <div className='group hover:bg-black h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-black h-full w-2/4 flex group-hover:translate-x-40 transition duration-500 ease-in'>
          <div className='w-2/5 h-full flex flex-col justify-evenly items-center'>
            <h3 className='text-[#cfc63d] text-4xl font-f7 font-bold text-center'>Power Lifting <br/> Groups</h3>
            <ul className='text-white font-bold list-[disc]'>
              <li className='font-f2 '>Gain Power</li>
              <li className='font-f2'>Be Fit</li>
              <li className='font-f2'>Get In Form</li>
            </ul>
            <button className='h-10 w-32 hover:bg-[#ceb008]  text-white font-bold font-f2 tracking-wider rounded-lg bg-[#ddc018] transition duration-150'>Review</button>
          </div>
          <div className='w-3/5 h-full '>
            <img className='h-full w-full object-scale-down' src="assets/women/w9.png" alt="" loading='lazy'/>
          </div>
        </div>
      </div>
      <div className='group hover:bg-[#FFDE17] h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-[#FFDE17] h-full w-2/4 flex justify-evenly group-hover:translate-x-40 transition duration-500 ease-in '>
          <div className='w-2/5 h-full '>
            <img className=' object-[center_top] h-full w-full object-cover ' src="assets/women/w16.png" alt="" loading='lazy' />
          </div>
          <div className='w-2/5 h-full flex flex-col justify-evenly items-center '>
            <h3 className='text-red-500 text-4xl font-f7 font-bold text-center'>Crossfit Groups</h3>
            <p className='text-gray-500 font-f2 text-align'>In this group, you work entire body rather than a regional workout.In this way, this group provides rapid calorie burning and helps lose weight.</p>
            <button className='h-10 w-32 bg-red-500 text-white font-bold font-f2 tracking-wider rounded-lg hover:bg-[#30302f] hover:text-white transition duration-150 ease-in'>Review</button>
          </div>
        </div>
      </div>
      <div className='group hover:bg-red-500 h-1/3 w-full flex justify-center transition duration-500 ease-in '>
        <div className='bg-red-500 h-full w-2/4 flex group-hover:translate-x-40 transition duration-500 ease-in'>
          <div className='w-3/5 h-full flex flex-col justify-evenly items-center'>
            <h3 className='text-white text-4xl font-f7 font-bold text-center'>Cardio Groups</h3>
            <ul className='text-black font-bold list-[disc] text-align'>
              <li className='font-f2'>High Tempo Running</li>
              <li className='font-f2 my-2'>Fast Burning Calorie</li>
              <li className='font-f2'>Cycling With Music</li>
            </ul>
            <button className='h-10 w-32 bg-white text-black font-bold font-f2 tracking-wider rounded-lg hover:bg-black hover:text-white transition duration-150 ease-in'>Review</button>
          </div>
          <div className='w-2/5 h-full '>
            <img className='h-full w-full object-scale-down' src="assets/women/w13.png" alt=""  loading='lazy'/>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Groups