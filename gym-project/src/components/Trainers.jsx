import React, { useState } from 'react'
import "./trainers.css";
import data from "./TrainersData";

function Trainers() {

  const [info, setInfo] = useState();


  const leftSlide = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const rightSlide = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
    <div className="snap-start h-[calc(100vh-100px)] w-screen bg-black flex" id='trainers'>
      {/* Personal Trainer General Info */}

      {
        info ?
          info.map((person) => {
            const { id, name, job, image, age, desc } = person;
            return (
              <div key={id} className='w-1/4 h-full'>
                <div className='flex items-center justify-center h-2/5'>
                  <img className='h-full w-3/4 object-cover rounded-full' src={image} alt="/" />
                </div>
                <div className='h-2/5'>
                  <table className=''>
                    <tr className='my-4'>
                      <td className='text-g font-f4 text-xl '>Name: </td>
                      <td className='text-white font-f4 text-lg '>{name}</td>
                    </tr>
                    <tr className='my-4'>
                      <td className='text-g font-f4 text-xl '>Age: </td>
                      <td className='text-white font-f4 text-lg '>{age}</td>
                    </tr>
                    <tr className='my-4'>
                      <td className='text-g font-f4 text-xl '>Job: </td>
                      <td className='text-white font-f4 text-lg '>{job}</td>
                    </tr>
                    <tr className='my-4'>
                      <td className='text-g font-f4 text-xl '>Description: </td>
                      <td className='text-white font-f4 text-lg '>{desc}</td>
                    </tr>
                  </table>
                </div>
                <div className='h-1/5 flex items-center justify-center'>
                  <button className='bg-g h-16 w-40 text-white rounded-md cursor-pointer'>Take Courses</button>
                </div>
              </div>
            );
          })

          :

          <div className='w-1/4 h-full'>
            <div className='flex items-center justify-center h-2/5 '>
              <img className='h-full w-3/4 object-cover rounded-full' src="assets/trainer/t3.jpg" alt="/" />
            </div>
            <div className=' h-2/5'>
              <table className=''>
                <tr className='my-4'>
                  <td className='text-g font-f4 text-xl '>Name: </td>
                  <td className='text-white font-f4 text-lg '>Daisie Watts</td>
                </tr>
                <tr className='my-4'>
                  <td className='text-g font-f4 text-xl '>Age: </td>
                  <td className='text-white font-f4 text-lg '>32</td>
                </tr>
                <tr className='my-4'>
                  <td className='text-g font-f4 text-xl '>Job: </td>
                  <td className='text-white font-f4 text-lg '>Fitness Trainer</td>
                </tr>
                <tr className='my-4'>
                  <td className='text-g font-f4 text-xl '>Description: </td>
                  <td className='text-white font-f4 text-lg '>Daisie ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus consequuntur eos, odio neque reiciendis pariatur eligendi magnam officia dolore!</td>
                </tr>
              </table>
            </div>
            <div className='h-1/5 flex items-center justify-center'>
              <button className='bg-g h-16 w-40 text-white rounded-md cursor-pointer'>Take Courses</button>
            </div>
          </div>

      }
      <div className=' w-3/4 h-full flex flex-col bg-g items-center'>
        <div className='h-1/2 bg-white w-full  relative flex items-end'>
          <img className='w-full h-full object-scale-down absolute z-20 ' src="assets/women/w12.png" alt="/" />
          <div className='h-full w-full  absolute z-10 flex items-center justify-center  text-g'>
            <h1 className='font-bold font-f5  text-8xl text-align'>Are You Ready For <br /> Personal Trainer ?</h1>
          </div>
        </div>
        <div className='h-1/2 w-3/4  bg-g rounded-md'>
          <div className='relative h-full'>
            <div id='slider' className='h-full   flex overflow-auto scroll-smooth scrollbar-hide items-center  px-6' >

              {
                data.map((item) => {
                  const { id, name, job, image, age, desc } = item;
                  return (
                    /* Flip-Card */
                    <div key={id} className='flip-card h-3/4  w-[250px]  ml-[35px] mr-[35px]  flex flex-col flex-shrink-0 '>
                      {/* Flip-Card-Inner */}
                      <div className='flip-card-inner w-full h-full '>
                        {/* Flip-Card-FRONT */}
                        <div className='flip-card-front h-full w-full bg-white rounded-md'>
                          <div className='h-4/6 w-full flex items-center justify-center p-2' >
                            <img className='h-full w-full object-cover rounded-full' src={image} alt="/" />
                          </div>
                          <div className='flex  items-end justify-center h-1/6  '>
                            <h4 className='text-xl font-f2 font-bold' >{name}</h4>
                          </div>
                          <div className='flex items-start justify-center h-1/6 text-gray-500  '>
                            <p className='text-l font-f2'>{job}</p>
                          </div>
                        </div>
                        {/* Flip-Card-BACK */}
                        <div className='flip-card-back h-full w-full bg-white flex flex-col items-center justify-evenly rounded-md'>
                          <p className='text-black text-bold font-f5 text-2xl text-center'>Learn More About <br /><span className='text-g text-lg'>{name}</span> </p>
                          <button onClick={() => setInfo([item])} className='bg-black text-white  text-bold font-f2 text-lg h-16 w-40 rounded '>Details</button>
                        </div>

                      </div>

                    </div>

                  );
                })
              }



            </div>
            <div className=''>
              <div onClick={leftSlide} className='absolute top-1/2 -translate-y-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-black left-5 cursor-pointer'><i class="fa-solid fa-angles-left text-white text-2xl"></i></div>
              <div onClick={rightSlide} className='absolute top-1/2 -translate-y-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-black right-5 cursor-pointer'><i className="fa-solid fa-angles-right text-white text-2xl"></i></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Trainers