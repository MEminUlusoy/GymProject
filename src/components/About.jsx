import React, { useState } from 'react'
import CountUp from 'react-countup';

function About() {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div onMouseOver={() => setCounterOn(true)} onMouseOut={() => setCounterOn(false)} className="snap-start  h-[calc(100vh-100px)] w-screen bg-white flex justify-center" id='about'>
      <div className='h-full w-3/4 relative'>
        <img className='absolute h-full w-full object-cover  brightness-[0.6]' src="assets/women/w2.jpg" alt="" />
        <div className='h-full w-full absolute flex'>
          <div className='w-1/2 h-full flex flex-col'>
            <div className='h-[45%] w-full flex flex-col items-center justify-end'>
              <h1 className='text-g lg:text-6xl font-f2 font-bold '>Who We Are ?</h1>
              <p className='text-white lg:text-xl font-f4  text-center px-24 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque eveniet aliquid rem reprehenderit architecto alias deserunt beatae at sit culpa voluptas minus quas, ab aliquam, repudiandae ut cupiditate molestias! Culpa inventore eum iste esse adipisci possimus earum neque voluptates.</p>
            </div>
            <div className='h-[55%] w-full flex justify-center items-center'>
              <div className='h-3/4 w-full flex justify-center items-center relative'>
                <img className='h-3/4 w-1/3 object-cover absolute z-20 left-20 rounded-lg border-2 shadow-2xl shadow-black' src="assets/women/w4.jpg" alt="" />
                <img className='h-3/4 w-1/3 object-cover absolute z-30  rounded-lg border-2 shadow-2xl shadow-black scale-125' src="assets/women/w3.jpg" alt="" />
                <img className='h-3/4 w-1/3 object-cover absolute z-10 right-20  rounded-lg border-2 shadow-2xl shadow-black' src="assets/women/w6.jpg" alt="" />
              </div>
            </div>
            
          </div>
          <div className='w-1/2 h-full flex flex-col items-center justify-center '>
            <div className='w-full h-1/2  flex flex-col items-center justify-center'>
              
            </div>
            <div className='w-full h-1/2  flex justify-evenly items-center'>
              <div className='w-1/4 h-full flex flex-col justify-center items-center'>
                <i className="fa-solid fa-face-smile-beam text-g text-3xl "></i>
                <h1 className='text-white font-f2 text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={800} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-md'>Our Members</p>
              </div>
              <div className='w-1/4 h-full flex flex-col justify-center items-center'>
                <i className="fa-solid fa-people-group text-g text-3xl"></i>
                <h1 className='text-white font-f2 text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={60} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-md'>Best Coach</p>
              </div>
              <div className='w-1/4 h-full flex flex-col justify-center items-center'>
                <i className="fa-solid fa-dumbbell text-g text-3xl"></i>
                <h1 className='text-white font-f2 text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={20} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-md'>Gym Center</p>
                
              </div>
              <div className='w-1/4 h-full flex flex-col justify-center items-center'>
                <i className="fa-solid fa-clipboard-list text-g text-3xl"></i>
                <h1 className='text-white font-f2 text-4xl m-5'>
                  {counterOn ? <CountUp start={0} end={50} duration={3} delay={0} /> : 0} +
                </h1>
                <p className='text-g font-f2 text-md'>Fitness Program</p>
              </div>
              
              
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default About