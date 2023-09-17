import React from 'react'

// outline outline-orange-300 outline-offset-4 outline-8 border-2 border-orange-200

function Membership() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-black flex flex-col" id='membership' >
      <div className='w-full h-1/6 border-2 flex items-center justify-center text-4xl font-bold font-f4 text-g'><h1><span className='text-white'>Choose Your</span> Membership</h1></div>
      <div className='w-full h-5/6 border-2 flex'>
        <div className='w-1/3 h-full border-2 border-blue-500 flex items-center justify-center'>
          <div className='bg-gradient-to-br from-zinc-400 to-zinc-300  h-1/2 w-1/3 rounded-lg shadow-2xl shadow-zinc-100 flex flex-wrap hover:scale-110 transition-all ease-in duration-300'>
            
          </div>
        </div>
        <div className='w-1/3 h-full border-2 border-purple-500 flex items-center justify-center'>
          <div className='bg-gradient-to-t from-orange-400 to-yellow-500  h-1/2 w-1/3 rounded-lg shadow-2xl shadow-yellow-300 flex flex-wrap hover:scale-110 transition-all ease-in duration-300'>
            
          </div>
        </div>
        <div className='w-1/3 h-full border-2 border-green-500 flex items-center justify-center'>
          <div className='bg-gradient-to-t from-amber-950 to-amber-800  h-1/2 w-1/3 rounded-lg shadow-2xl shadow-amber-800 flex flex-wrap hover:scale-110 transition-all ease-in duration-300'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership