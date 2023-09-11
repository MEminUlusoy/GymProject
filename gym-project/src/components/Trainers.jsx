import React from 'react'

function Trainers() {
  return (
    <div className="snap-start h-[calc(100vh-100px)] w-screen bg-yellow-500 flex" id='trainers'>
      <div className='border-2 w-1/4 h-full'></div>
      <div className='border-2 w-3/4 h-full flex items-center'>
        <div className='h-[400px]  w-[400px] border-2 border-red-500'>
          <img className='w-full h-full object-scale-down' src="assets/others/o3.png" alt="/" />
        </div>
        <div className='h-[400px] grow border-2 border-green-500 items-center snap-x snap-mandatory flex overflow-hidden'>
          <div className='h-[200px] w-[400px] bg-white snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
          <div className='h-[200px] w-[400px] bg-red-500 snap-start flex shrink-0'></div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Trainers