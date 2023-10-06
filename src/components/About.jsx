import React, { useState } from 'react'
import CountUp from 'react-countup';

function About() {

  // ! Burası incelenecek
  // ? Burası incelenecek
  // * Burası incelenecek
  // TODO: Burası incelenecek

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div onMouseOver={() => setCounterOn(true)} onMouseOut={() => setCounterOn(false)} className="snap-start  h-[calc(100vh-100px)] w-screen bg-white flex justify-center" id='about'>
      <div className='h-full w-full lg:w-3/4 relative'>
        <img className='absolute h-full w-full object-cover  brightness-[0.6]' src="assets/women/w2.jpg" alt="" />
        <div className='h-full w-full absolute flex md:flex-row flex-col'>
          <div className='w-full h-1/2 sm:h-1/2 md:w-1/2 md:h-full flex md:flex-col sm:flex-row '>
            <div className='md:h-[45%] h-full sm:w-1/2 w-full  md:w-full flex flex-col items-center justify-center md:justify-end'>
              <h1 className='text-g    text-4xl sm:text-4xl  md:text-4xl  xl:text-5xl  2xl:text-7xl font-f2 font-bold '>Who We Are ?</h1>
              <p className='text-white text-sm  sm:text-sm md:text-sm lg:text-base  xl:text-base 2xl:text-xl  font-f4  text-center px-3 sm:px-7  md:px-16 lg:px-9 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque eveniet aliquid rem reprehenderit architecto alias deserunt beatae at sit culpa voluptas minus quas, ab aliquam, repudiandae ut cupiditate molestias! Culpa inventore eum iste esse adipisci possimus earum neque voluptates.</p>
            </div>
            <div className='hidden md:h-[55%] h-full w-1/2  md:w-full sm:flex justify-center items-center'>
              <div className='h-3/4 w-full flex justify-center items-center relative '>
                <img className='xl:h-3/4 md:h-4/6 sm:h-[60%] h-3/4 w-1/3 object-cover absolute z-20 xl:left-20  lg:left-12 md:left-14 left-5  rounded-lg border-2 shadow-2xl shadow-black' src="assets/women/w4.jpg" alt="" />
                <img className='xl:h-3/4 md:h-4/6 sm:h-[60%] h-3/4 w-1/3 object-cover absolute z-30  rounded-lg border-2 shadow-2xl shadow-black scale-125' src="assets/women/w3.jpg" alt="" />
                <img className='xl:h-3/4 md:h-4/6 sm:h-[60%] h-3/4 w-1/3 object-cover absolute z-10 xl:right-20 lg:right-12  md:right-14 right-5   rounded-lg border-2 shadow-2xl shadow-black' src="assets/women/w6.jpg" alt="" />
              </div>
            </div>
            
          </div>
          <div className='w-full h-1/2 sm:h-1/2 md:w-1/2 md:h-full flex  md:flex-col items-center justify-center pb-16 sm:pb-0  '>
            <div className='hidden  w-full h-1/2  md:flex flex-col items-center justify-center'>
              
            </div>
            <div className='w-full h-full sm:h-1/2  flex flex-col sm:flex-row justify-evenly items-center md:pr-4 xl:pr-0 '>
              <div className='w-full h-1/4 sm:w-1/4 sm:h-full flex flex-row sm:flex-col justify-center items-center '>
                <i className="fa-solid fa-face-smile-beam text-g text-3xl sm:text-3xl md:text-2xl  xl:text-3xl  2xl:text-4xl"></i>
                <h1 className='text-white font-f2 text-xl sm:text-2xl md:text-lg  xl:text-3xl 2xl:text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={800} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-base sm:text-base md:text-xs xl:text-sm 2xl:text-lg'>Our Members</p>
              </div>
              <div className='w-full h-1/4 sm:w-1/4 sm:h-full flex flex-row sm:flex-col justify-center items-center'>
                <i className="fa-solid fa-people-group text-g text-3xl sm:text-3xl md:text-2xl  xl:text-3xl 2xl:text-4xl"></i>
                <h1 className='text-white font-f2 text-xl sm:text-2xl md:text-lg  xl:text-3xl 2xl:text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={60} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-base sm:text-base md:text-xs xl:text-sm 2xl:text-lg'>Best Coach</p>
              </div>
              <div className='w-full h-1/4 sm:w-1/4 sm:h-full flex flex-row sm:flex-col justify-center items-center'>
                <i className="fa-solid fa-dumbbell text-g text-3xl sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl"></i>
                <h1 className='text-white font-f2 text-xl  sm:text-2xl md:text-lg xl:text-3xl 2xl:text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={20} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2  text-base sm:text-base md:text-xs xl:text-sm 2xl:text-lg'>Gym Center</p>
                
              </div>
              <div className='w-full h-1/4 sm:w-1/4 sm:h-full flex flex-row sm:flex-col justify-center items-center'>
                <i className="fa-solid fa-clipboard-list text-g text-3xl sm:text-3xl md:text-2xl  xl:text-3xl 2xl:text-4xl"></i>
                <h1 className='text-white font-f2 text-xl  sm:text-2xl md:text-lg xl:text-3xl 2xl:text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={50} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2  text-base sm:text-base md:text-xs xl:text-sm 2xl:text-lg'>Fitness Program</p>
              </div>
              
              
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default About