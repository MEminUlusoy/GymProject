import React from 'react'

// outline outline-orange-300 outline-offset-4 outline-8 border-2 border-orange-200

function Membership() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-black flex flex-col" id='membership' >
      <div className='w-full h-1/6 bg-white flex items-center justify-center'><h1 className='font-f6 text-4xl text-g'><span className='font-f6 text-black'>Choose Your</span> Membership</h1></div>
      <div className='w-full h-5/6  flex justify-center'>


        <div className='group/Silver w-1/4 h-full relative overflow-hidden'>
          {/* <div className='bg-gradient-to-br from-zinc-400 to-zinc-300  h-1/2 w-1/3 rounded-lg shadow-2xl shadow-zinc-100 flex flex-wrap hover:scale-110 transition-all ease-in duration-300'>
          </div> */}
          <div className='h-full w-full flex items-center justify-center absolute group-hover/Silver:h-[10%]  transition-all duration-300 ease-in'>
            <h1 className='group-hover/Silver:text-3xl absolute z-30 text-center font-bold font-f5 text-7xl text-white'><span className='text-white font-f5 mr-3 group-hover/Silver:mr-0 '>Silver </span>  Membership </h1>
            <img className='group-hover/Silver:hidden h-3/4 w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/women/w10.png" alt=""  loading='lazy'/>
            <div className='absolute h-full w-full z-10 bg-gradient-to-br from-zinc-400 opacity-50'></div>
          </div>
          <div className='group-hover/Silver:top-[10%] top-full left-0 w-full h-full bg-gradient-to-br from-zinc-400 to-zinc-300 absolute transition-all duration-300 ease-in'>
            <div className='h-1/6 w-full flex flex-col items-center justify-end mb-1'>
              <h1 className='text-white font-f2 text-5xl font-bold'>Fitness</h1>
              <h1 className='text-white font-f2 text-md font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-2/6 w-full flex flex-col items-center justify-center'>
              <h1 className='text-white font-f2 text-9xl font-bold'>40<span className='text-5xl inline-block -translate-y-[70px] font-bold'>$</span><span className='text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-2xl font-bold'>$400 Total</h1>
              <h1 className='text-white font-f2 text-md font-thin'>per year</h1>
            </div>
            <div className='h-3/6 w-full flex items-start justify-center'>
              <ul className='list-none mt-4'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Ability to use a shower cabin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='group/Gold w-1/4 h-full relative overflow-hidden '>

          <div className='h-full w-full flex items-center justify-center absolute group-hover/Gold:h-[10%] transition-all duration-300 ease-in'>
            <h1 className='group-hover/Gold:text-3xl absolute z-30 text-center font-bold font-f5 text-7xl text-white'><span className='text-white font-f5 mr-3 group-hover/Gold:mr-0 '>Gold </span>  Membership </h1>
            <img className='group-hover/Gold:hidden h-3/4 w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/women/w14.png" alt="" loading='lazy' />
            <div className=' absolute h-full w-full z-10 bg-gradient-to-t from-orange-400 to-yellow-500 opacity-50'></div>
          </div>
          <div className='group-hover/Gold:top-[10%]  top-full left-0 w-full h-full bg-gradient-to-t from-orange-400 to-yellow-500 absolute transition-all duration-300 ease-in'>
            <div className='h-1/6 w-full flex flex-col items-center justify-end mb-1'>
              <h1 className='text-white font-f2 text-5xl font-bold'>Bodybuilding</h1>
              <h1 className='text-white font-f2 text-md font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-2/6 w-full flex flex-col items-center justify-center'>
              <h1 className='text-white font-f2 text-9xl font-bold'>50<span className='text-5xl inline-block -translate-y-[70px] font-bold'>$</span><span className='text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-2xl font-bold'>$500 Total</h1>
              <h1 className='text-white font-f2 text-md font-thin'>per year</h1>
            </div>
            <div className='h-3/6 w-full flex items-start justify-center'>
              <ul className='list-none mt-4'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Ability to use a shower cabin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='group/Bronze w-1/4 h-full relative overflow-hidden'>

          <div className='h-full w-full flex items-center justify-center absolute group-hover/Bronze:h-[10%] transition-all duration-300 ease-in'>
            <h1 className='group-hover/Bronze:text-3xl absolute z-30 text-center font-bold font-f5 text-7xl text-white'><span className='text-white font-f5 mr-3 group-hover/Bronze:mr-0 '>Bronze </span>  Membership </h1>
            <img className=' group-hover/Bronze:hidden h-3/4 w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/others/o4.png" alt=""  loading='lazy'/>
            <div className='absolute h-full w-full z-10 bg-gradient-to-t from-amber-950 to-amber-800 opacity-50'></div>
          </div>

          <div className='group-hover/Bronze:top-[10%] top-full left-0 w-full h-full bg-gradient-to-t from-amber-950 to-amber-800  absolute transition-all duration-300 ease-in'>
            <div className='h-1/6 w-full flex flex-col items-center justify-end mb-1'>
              <h1 className='text-white font-f2 text-5xl font-bold'>Fitness</h1>
              <h1 className='text-white font-f2 text-md font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-2/6 w-full flex flex-col items-center justify-center'>
              <h1 className='text-white font-f2 text-9xl font-bold'>30<span className='text-5xl inline-block -translate-y-[70px] font-bold'>$</span><span className='text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-2xl font-bold'>$350 Total</h1>
              <h1 className='text-white font-f2 text-md font-thin'>per year</h1>
            </div>
            <div className='h-3/6 w-full flex items-start justify-center'>
              <ul className='list-none mt-4'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g"></i>
                  <p className='ml-2 font-f4 text-white'>Ability to use a shower cabin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Membership