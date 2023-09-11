import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

function Main() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backSpeed:  80,
      backDelay:  1500, 
      strings: ['Health', 'Skin Care', 'Metabolism'], 
    });
  },[])

  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-black flex" id='home' >
      <div className='flex flex-col items-center justify-center  text-white  w-[50%] '>
        <div className='flex flex-col items-start justify-between w-[60%] h-[60%] select-none '>
          <h1 className='text-7xl font-bold'>Fitness <br/>  Helps  Your <br/> <span className='text-g font-f2' ref={textRef}></span></h1>
          <p className='text-[16px] font-f4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum quas ipsam eum eos! Sapiente odit quisquam quasi amet alias.</p>
          <button className='h-14 w-48 text-white bg-g rounded text-l '><a href='#programs'>Get Started</a></button>
          
        </div>
        {/* <div className='ml-0  mt-5 flex items-end justify-center w-[60%] h-[10%]'>
          <ul className='flex  ml-10'>
            <li className='ml-2 h-1 w-16 bg-g rounded'></li>
            <li className='ml-2 h-1 w-16 bg-white rounded'></li>
            <li className='ml-2 h-1 w-16 bg-white rounded'></li>
          </ul>
        </div> */}
        
      </div>
      <div className="text-white w-[50%] relative">
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