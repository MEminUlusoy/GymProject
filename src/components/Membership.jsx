import React from 'react'

// outline outline-orange-300 outline-offset-4 outline-8 border-2 border-orange-200

function Membership() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-black flex flex-col" id='membership' >
      <div className='hidden w-full h-1/6 bg-white md:flex items-center justify-center'><h1 className='font-f6 text-4xl text-g'><span className='font-f6 text-black'>Choose Your</span> Membership</h1></div>
      <div className='h-full w-full md:h-5/6  flex-col items-center md:flex-row flex md:justify-center'>


        <div className='group/Silver w-2/4 h-1/3 md:w-1/3 md:h-full  xl:w-1/4 relative overflow-hidden'>
          {/* <div className='bg-gradient-to-br from-zinc-400 to-zinc-300  h-1/2 w-1/3 rounded-lg shadow-2xl shadow-zinc-100 flex flex-wrap hover:scale-110 transition-all ease-in duration-300'>
          </div> */}
          <div className='h-full w-full flex items-center justify-center absolute group-hover/Silver:h-[20%] md:group-hover/Silver:h-[10%]  transition-all duration-300 ease-in'>
            <h1 className='group-hover/Silver:text-xl sm:group-hover/Silver:text-2xl md:group-hover/Silver:text-2xl  lg:group-hover/Silver:text-3xl absolute z-30 text-center font-bold font-f5 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white'><span className='text-white font-f5 mr-3 group-hover/Silver:mr-1 '>Silver </span>  Membership </h1>
            <img className='group-hover/Silver:hidden h-full md:h-3/4 w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/women/w10.png" alt=""  loading='lazy'/>
            <div className='absolute h-full w-full z-10 bg-gradient-to-br from-zinc-400 opacity-50'></div>
          </div>
          <div className='group-hover/Silver:top-[20%] md:group-hover/Silver:top-[10%] top-full left-0 w-full h-full bg-gradient-to-br from-zinc-400 to-zinc-300 absolute transition-all duration-300 ease-in'>
            <div className='h-2/6 md:h-1/6 w-full flex flex-col items-center justify-center md:justify-end pb-1'>
              <h1 className='text-white font-f2 text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold'>Fitness</h1>
              <h1 className='text-white font-f2 text-xs sm:text-xs md:text-base  font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-4/6  md:h-2/6 w-full flex flex-col items-center justify-start md:justify-center '>
              <h1 className='text-white font-f2 text-3xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold'>40<span className='text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl inline-block -translate-y-[15px] sm:-translate-y-[25px] md:-translate-y-[40px] lg:-translate-y-[50px]  2xl:-translate-y-[70px] font-bold'>$</span><span className='text-lg sm:text-xl md:text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-base sm:text-lg md:text-xl lg:text-2xl  font-bold'>$400 Total</h1>
              <h1 className='text-white font-f2 text-xs sm:text-sm md:text-base lg:text-base font-thin'>per year</h1>
            </div>
            <div className='hidden h-3/6 w-full md:flex items-start justify-center'>
              <ul className='list-none mt-4 md:ml-4 lg:ml-0'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white  text-xs lg:text-sm xl:text-xs 2xl:text-base'>Ability to use a shower cabin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='group/Gold w-2/4 h-1/3  md:w-1/3 md:h-full xl:w-1/4  relative overflow-hidden '>

          <div className='h-full w-full flex items-center justify-center absolute group-hover/Gold:h-[20%] md:group-hover/Gold:h-[10%] transition-all duration-300 ease-in'>
            <h1 className='group-hover/Gold:text-xl sm:group-hover/Gold:text-2xl  md:group-hover/Gold:text-2xl lg:group-hover/Gold:text-3xl absolute z-30 text-center font-bold font-f5 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white'><span className='text-white font-f5 mr-3 group-hover/Gold:mr-1 '>Gold </span>  Membership </h1>
            <img className='group-hover/Gold:hidden h-full md:h-3/4  w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/women/w14.png" alt="" loading='lazy' />
            <div className=' absolute h-full w-full z-10 bg-gradient-to-t from-orange-400 to-yellow-500 opacity-50'></div>
          </div>
          <div className='group-hover/Gold:top-[20%]  md:group-hover/Gold:top-[10%]  top-full left-0 w-full h-full bg-gradient-to-t from-orange-400 to-yellow-500 absolute transition-all duration-300 ease-in'>
            <div className='h-2/6 md:h-1/6 w-full flex flex-col items-center justify-center md:justify-end pb-1'>
              <h1 className='text-white font-f2 text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold'>Bodybuilding</h1>
              <h1 className='text-white font-f2 text-xs sm:text-xs md:text-base font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-4/6  md:h-2/6 w-full flex flex-col items-center justify-start md:justify-center '>
              <h1 className='text-white font-f2 text-3xl  sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold'>50<span className='text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl inline-block -translate-y-[15px] sm:-translate-y-[25px] md:-translate-y-[40px] lg:-translate-y-[50px] 2xl:-translate-y-[70px] font-bold'>$</span><span className='text-lg  sm:text-xl md:text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-base sm:text-lg  md:text-xl lg:text-2xl  font-bold'>$500 Total</h1>
              <h1 className='text-white font-f2 text-xs   sm:text-sm  md:text-base lg:text-base font-thin'>per year</h1>
            </div>
            <div className='hidden h-3/6 w-full md:flex items-start justify-center'>
              <ul className='list-none mt-4 md:ml-4 lg:ml-0'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Ability to use a shower cabin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='group/Bronze w-2/4 h-1/3  md:w-1/3 md:h-full xl:w-1/4  relative overflow-hidden'>

          <div className='h-full w-full flex items-center justify-center absolute  group-hover/Bronze:h-[20%]   md:group-hover/Bronze:h-[10%] transition-all duration-300 ease-in'>
            <h1 className='group-hover/Bronze:text-xl  sm:group-hover/Bronze:text-2xl  md:group-hover/Bronze:text-2xl lg:group-hover/Bronze:text-3xl absolute z-30 text-center font-bold font-f5 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white'><span className='text-white font-f5 mr-3 group-hover/Bronze:mr-1 '>Bronze </span>  Membership </h1>
            <img className=' group-hover/Bronze:hidden h-full md:h-3/4  w-full object-cover absolute z-20 bottom-0 opacity-20' src="assets/others/o4.png" alt=""  loading='lazy'/>
            <div className='absolute h-full w-full z-10 bg-gradient-to-t from-amber-950 to-amber-800 opacity-50'></div>
          </div>

          <div className='group-hover/Bronze:top-[20%]  md:group-hover/Bronze:top-[10%] top-full left-0 w-full h-full bg-gradient-to-t from-amber-950 to-amber-800  absolute transition-all duration-300 ease-in'>
            <div className='h-2/6 md:h-1/6 w-full flex flex-col items-center justify-center md:justify-end pb-1'>
              <h1 className='text-white font-f2 text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold'>Fitness</h1>
              <h1 className='text-white font-f2 text-xs sm:text-xs md:text-base font-thin '>( Coach and Exersize )</h1>
            </div>
            <div className='h-4/6  md:h-2/6 w-full flex flex-col items-center justify-start md:justify-center '>
              <h1 className='text-white font-f2 text-3xl  sm:text-5xl md:text-7xl  lg:text-8xl 2xl:text-9xl font-bold'>30<span className='text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl inline-block -translate-y-[15px] sm:-translate-y-[25px] md:-translate-y-[40px] lg:-translate-y-[50px] 2xl:-translate-y-[70px] font-bold'>$</span><span className='text-lg sm:text-xl md:text-3xl font-thin'>/mo</span> </h1>
              <h1 className='text-white font-f2 text-base sm:text-lg  md:text-xl   lg:text-2xl   font-bold'>$350 Total</h1>
              <h1 className='text-white font-f2 text-xs   sm:text-sm  md:text-base lg:text-base  font-thin'>per year</h1>
            </div>
            <div className='hidden h-3/6 w-full md:flex items-start justify-center'>
              <ul className='list-none mt-4 md:ml-4 lg:ml-0'>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Opportunity for group lessons 2 times a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Exercise with Personal Trainer</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Body mass index measurement once a month</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Large storage cabinets</p>
                </li>
                <li className='flex text-white mb-5'>
                  <i className="fa-solid fa-check text-g text-xs md:text-sm lg:text-base"></i>
                  <p className='ml-2 font-f4 text-white text-xs lg:text-sm xl:text-xs 2xl:text-base'>Ability to use a shower cabin</p>
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