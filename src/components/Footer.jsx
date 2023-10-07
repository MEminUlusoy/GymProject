import React from 'react'

function Footer() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-white" id="footer" >
      <div className='h-1/2 flex justify-center'>
        <div className='h-full w-full md:w-full lg:w-3/4 flex'>
          <div className='sm:w-2/5 md:w-2/5 lg:w-1/2 h-full   flex flex-col items-start justify-evenly pr-7 pl-7 md:pr-10 md:pl-10 lg:pr-10 lg:pl-10  '>
            <h1 className='text-black  font-f2 text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl  '>Why Choose Us ?</h1>
            <p className='text-black  font-f4 text-xs lg:text-xs xl:text-sm 2xl:text-base '>Dolor sit amet consectetur adipisicing elit. Repellendus fugit amet nam dolorum illo voluptatibus odio omnis assumenda officiis similique aut laudantium aperiam quos perferendis voluptatem inventore.</p>
            <button className='text-white text-xs  lg:text-xs xl:text-sm 2xl:text-base font-f4 h-8 w-28 sm:h-8 sm:w-24 md:h-8 md:w-24  lg:h-8 lg:w-28 xl:h-10 xl:w-32 2xl:h-12 2xl:w-36 bg-black rounded flex items-center justify-center '><p>Learn More</p> <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
          </div>
          <div className='hidden sm:w-3/5  md:w-3/5 lg:w-1/2 h-full sm:flex justify-around items-center '>

            <div className=' h-3/4 sm:w-[45%] md:w-2/5 flex flex-col p-3 lg:p-3 xl:p-5 bg-black '>
              <div className='h-1/3 w-full  flex items-center bg-white'>
                <i className="fa-solid fa-dumbbell bg-black rounded  text-white text-sm lg:text-sm xl:text-lg 2xl:text-4xl p-2  ml-2 md:ml-2 lg:ml-2 xl:ml-4"></i>
                <p className='ml-2 md:ml-2 lg:ml-2 xl:ml-4 font-bold font-f2 text-xs 2xl:text-lg text-black'>Your health your destination</p>
              </div>
              <div className='h-2/3 w-full flex md:items-center xl:items-start justify-center p-2 md:p-2 lg:p-2 xl:p-5 text-xs xl:text-xs 2xl:text-base '><p className='text-align text-white font-f4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto obcaecati mollitia, atque vero magni corporis omnis fugit voluptate delectus</p></div>
            </div>
            <div className=' h-3/4 sm:w-[45%] md:w-2/5 flex flex-col p-3 lg:p-3 xl:p-5 bg-black'>
              <div className='h-1/3 w-full  flex items-center bg-white'>
                <i className="fa-solid fa-comments bg-black rounded  text-white text-sm lg:text-sm xl:text-lg 2xl:text-4xl  p-2 ml-2 md:ml-2  lg:ml-2 xl:ml-4"></i>
                <p className='ml-2 md:ml-2 lg:ml-2 xl:ml-4 font-bold font-f2 text-xs 2xl:text-lg text-black'>Many customer preferred us</p>
              </div>
              <div className='h-2/3 w-full flex md:items-center xl:items-start justify-center p-2 md:p-2 lg:p-2 xl:p-5 text-xs  2xl:text-base xl:text-xs  '><p className='text-align text-white font-f4'>Ratione, similique. Ullam blanditiis corrupti nam molestias animi ipsa autem facilis impedit odit dolore, dicta, pariatur enim ipsam, aut amet nesciunt</p></div>
            </div>




          </div>
        </div>
      </div>
      <div className='h-1/2 w-full flex justify-center bg-black'>
        <div className='h-full w-full md:w-full lg:w-3/4  flex '>
          <div className='h-full hidden sm:w-2/5 md:w-1/2 lg:w-2/5 sm:flex flex-col justify-around items-start py-10 pr-7 pl-7 md:py-0  md:p-10'>
            <h1 className='text-white font-f4 text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>About Fitness</h1>
            <p className='text-white font-f4 text-xs lg:text-xs xl:text-sm 2xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa porro. Eos eaque laboriosam sunt laborum vel consequuntur doloribus? Asperiores odit reiciendis aut esse rerum deserunt. Iusto ducimus aliquam recusandae?</p>
            <div className='text-white flex justify-around w-40 h-16'>
              <i className="fa-brands fa-twitter md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer"></i>
              <i className="fa-brands fa-facebook-f md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer"></i>
              <i className="fa-brands fa-instagram md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer"></i>
              <a href="https://github.com/MEminUlusoy"><i className="fa-brands fa-github md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer"></i></a>
            </div> 
          </div>
      
          <div className='h-full w-full sm:w-3/5 md:w-1/2 lg:w-3/5 flex '>
            <div className='h-full w-1/3 flex items-center justify-center  pl-0 sm:pl-1 md:pl-5 lg:pl-10 xl:pl-20'>
              <ul className='flex flex-col  justify-around items-center sm:items-start h-2/3 w-full mb-10 '>
                <li className='text-white font-f4 text-sm lg:text-base xl:text-lg font-bold cursor-pointer'>Company</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>About</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Features</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Work</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Career</li>
              </ul>
            </div>
            <div className='h-full w-1/3 flex items-center justify-center  pl-0 sm:pl-1 md:pl-5 lg:pl-10 xl:pl-20'>
              <ul className='flex flex-col  justify-around items-center sm:items-start h-2/3 w-full  mb-10'>
                <li className='text-white font-f4 text-sm lg:text-base xl:text-lg font-bold cursor-pointer'>Help</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Customer Support</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Delivery Time</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Terms & Conditions</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Privacy Policy</li>
              </ul>
            </div>
            <div className='h-full w-1/3 flex items-center justify-center  pl-0 sm:pl-1 md:pl-5 lg:pl-10 xl:pl-20 '>
              <ul className='flex flex-col  justify-around items-center sm:items-start h-2/3 w-full mb-10'>
              <li className='text-white font-f4 text-sm lg:text-base xl:text-lg font-bold cursor-pointer'>Resources</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Free Ebooks</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Development </li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>How To - Blog</li>
                <li className='text-white font-f4 text-xs xl:text-xs 2xl:text-sm  cursor-pointer'>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      


    </div>
  )
}

export default Footer