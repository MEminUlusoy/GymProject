import React from 'react'

function Footer() {
  return (
    <div className="snap-start  h-[calc(100vh-100px)]  w-screen bg-white" id="footer" >
      <div className='h-1/2 flex justify-center'>
        <div className='h-full w-3/4 flex'>
          <div className='w-1/2 h-full   flex flex-col items-start justify-evenly px-20 '>
            <h1 className='text-black  font-f2 text-4xl  '>Why Choose Us ?</h1>
            <p className='text-black  font-f4 text-md '>Dolor sit amet consectetur adipisicing elit. Repellendus fugit amet nam dolorum illo voluptatibus odio omnis assumenda officiis similique aut laudantium aperiam quos perferendis voluptatem inventore.</p>
            <button className='text-white text-md font-f4 h-12 w-36 bg-black rounded flex items-center justify-center '><p>Learn More</p> <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
          </div>
          <div className='w-1/2 h-full flex justify-around items-center'>

            <div className='border-2 h-3/4 w-2/5 flex flex-col p-5 bg-black'>
              <div className='h-1/3 w-full  flex items-center bg-white'>
                <i className="fa-solid fa-dumbbell bg-black rounded  text-white text-4xl p-2 ml-4"></i>
                <p className='ml-4 font-bold font-f2 text-lg text-black'>Your health your destination</p>
              </div>
              <div className='h-2/3 w-full flex items-start justify-center p-5 '><p className='text-align text-white font-f4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto obcaecati mollitia, atque vero magni corporis omnis fugit voluptate delectus</p></div>
            </div>
            <div className='border-2 h-3/4 w-2/5 flex flex-col p-5 bg-black'>
              <div className='h-1/3 w-full  flex items-center bg-white'>
                <i className="fa-solid fa-comments bg-black rounded  text-white text-4xl p-2 ml-4"></i>
                <p className='ml-4 font-bold font-f2 text-lg text-black'>Many customer preferred us</p>
              </div>
              <div className='h-2/3 w-full flex items-start justify-center p-5  '><p className='text-align text-white font-f4'>Ratione, similique. Ullam blanditiis corrupti nam molestias animi ipsa autem facilis impedit odit dolore, dicta, pariatur enim ipsam, aut amet nesciunt</p></div>
            </div>




          </div>
        </div>
      </div>
      <div className='h-1/2 w-full flex justify-center bg-black'>
        <div className='h-full w-3/4 flex '>
          <div className='h-full w-2/5 flex flex-col justify-around items-start  p-10'>
            <h1 className='text-white font-f4 text-3xl'>About Fitness</h1>
            <p className='text-white font-f4 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa porro. Eos eaque laboriosam sunt laborum vel consequuntur doloribus? Asperiores odit reiciendis aut esse rerum deserunt. Iusto ducimus aliquam recusandae?</p>
            <div className='text-white flex justify-around w-40 h-16'>
              <i className="fa-brands fa-twitter text-2xl cursor-pointer"></i>
              <i className="fa-brands fa-facebook-f text-2xl cursor-pointer"></i>
              <i className="fa-brands fa-instagram text-2xl cursor-pointer"></i>
              <a href="https://github.com/MEminUlusoy"><i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            </div> 
          </div>
      
          <div className='h-full w-3/5 flex'>
            <div className='h-full w-1/3 flex items-center justify-center'>
              <ul className='flex flex-col  justify-around items-center h-2/3 w-full mb-10'>
                <li className='text-white font-f4 text-lg font-bold cursor-pointer'>Company</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>About</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Features</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Work</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Career</li>
              </ul>
            </div>
            <div className='h-full w-1/3 flex items-center justify-center'>
              <ul className='flex flex-col  justify-around items-center h-2/3 w-full  mb-10'>
                <li className='text-white font-f4 text-lg font-bold cursor-pointer'>Help</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Customer Support</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Delivery Time</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Terms & Conditions</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Privacy Policy</li>
              </ul>
            </div>
            <div className='h-full w-1/3 flex items-center justify-center'>
              <ul className='flex flex-col  justify-around items-center h-2/3 w-full mb-10'>
              <li className='text-white font-f4 text-lg font-bold cursor-pointer'>Resources</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Free Ebooks</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Development Tutorial</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>How To - Blog</li>
                <li className='text-white font-f4 text-sm  cursor-pointer'>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      


    </div>
  )
}

export default Footer