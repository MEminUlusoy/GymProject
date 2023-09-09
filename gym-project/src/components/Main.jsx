import React from 'react'

function Main() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-[#00040E] flex" id='home' >
      <div className='flex items-center justify-center  text-white  w-[50%]'>
        <div className='flex flex-col items-start justify-around w-[60%] h-[60%] select-none'>
          <h1 className='text-6xl font-bold'>Help For Ideal <span className='text-g font-f2'>Body</span>  Fitness</h1>
          <p className='text-l font-f4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias nemo nisi harum deserunt possimus soluta neque dolorum repellendus eius</p>
          <button className='h-12 w-40 text-white bg-g rounded text-l '><a href='#programs'>Get Started</a></button>
        </div>
      </div>
      <div className="text-white text-white w-[50%] relative">
        <div className='h-[100%] w-[100%] z-20 absolute ' >
          <img className='h-[100%] w-[100%] bottom-0 object-scale select-none' src="assets/men/m5.png " alt="/" />
        </div>
        <div className='h-[100%] w-[100%] absolute  flex items-center justify-center'>
          <div className='border-8 border-g h-[70%] w-[70%] rounded-full bg-white'></div>

          {/* <h1 className=' z-10 text-[100px] tracking-wider  border-2 text-g '>FITNESS</h1> */}
        </div>
        
      </div>
    </div>
  )
}

export default Main