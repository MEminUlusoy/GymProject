import React, { useRef, useState } from 'react'
import "./trainers.css";
import data from "./TrainersData";

function Trainers() {

  const [desc, setDesc] = useState([{
    id: 1,
    name: "Daisie Watts",
    age: 34,
    job: "Fitness Trainer",
    image: "assets/trainer/t3.jpg",
    desc: "Daisie Watts graduated Faculty of Sport at University of Munster. After she graduated, She deals with different sports. She also give many group lessons. She loves her job."
  }]);

  const slider = useRef(null);

  const leftSlide = () => {
    
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
    
  }

  const rightSlide = () => {
    
    slider.current.scrollLeft = slider.current.scrollLeft + 500;
    
  }


  return (
    <div className="snap-start h-[calc(100vh-100px)] w-screen bg-black lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col" id='trainers'>
      {/* Personal Trainer General Info */}

      {

        desc.map((person) => {
          const { id, name, job, image, age, desc } = person;
          return (
            <div key={id} className='w-full h-1/2 flex    sm:w-full sm:h-1/2 sm:flex    md:w-full md:h-1/2 md:flex  lg:flex lg:flex-col lg:w-2/5 lg:h-full    xl:w-1/4'>
              <div className='hidden    sm:flex items-center justify-center sm:w-2/5 sm:h-3/4    md:w-2/5 md:h-3/4    lg:w-full lg:h-2/5'>
                <img className='h-full w-3/4 object-cover rounded-full' src={image} alt="/" />
              </div>
              <div className='h-full w-full px-5 flex flex-col      sm:h-full sm:w-3/5 sm:px-5 sm:flex sm:flex-col   md:h-full md:px-5 md:flex md:flex-col md:w-3/5    lg:h-3/5 lg:w-full lg:p-5 lg:flex-none'>
                <div className='h-4/6 w-full   sm:h-3/4 sm:w-full   md:h-3/4 md:w-full   lg:h-4/5 lg:w-full'>
                  <table className=''>
                    <tbody>
                      <tr>
                        <td className='text-g font-f4  text-xs  sm:text-sm lg:text-base  xl:text-lg py-3 '>Name: </td>
                        <td className='text-white font-f4  text-xs  sm:text-sm lg:text-sm xl:text-lg pl-4  py-3'>{name}</td>
                      </tr>
                      <tr>
                        <td className='text-g font-f4  text-xs  sm:text-sm lg:text-base  xl:text-lg py-3 '>Age: </td>
                        <td className='text-white font-f4  text-xs  sm:text-sm lg:text-sm xl:text-lg  pl-4 py-3'>{age}</td>
                      </tr>
                      <tr>
                        <td className='text-g font-f4  text-xs  sm:text-sm lg:text-base  xl:text-lg py-3  '>Job: </td>
                        <td className='text-white font-f4  text-xs  sm:text-sm lg:text-sm xl:text-lg pl-4  py-3'>{job}</td>
                      </tr>
                      <tr className=''>
                        <td className='text-g font-f4  text-xs  sm:text-sm lg:text-base  xl:text-lg  py-3 flex items-start'>Description: </td>
                        <td className='text-white font-f4  text-xs  sm:text-sm lg:text-sm xl:text-lg pl-4 py-3 text-align'>{desc}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className='h-2/6 flex justify-center items-start     sm:h-1/4 sm:flex sm:justify-start sm:items-start   md:h-1/4 md:flex md:justify-start md:items-start   lg:h-1/5 lg:w-full  lg:flex lg:items-start lg:justify-center   '>
                  <button className='group h-10 w-36 text-sm mt-5   sm:h-10 sm:w-32 sm:text-base sm:mt-5  md:h-10 md:w-32 md:text-sm md:mt-5  lg:h-12 lg:w-40 lg:text-base  lg:mt-0   xl:h-16 xl:w-48 xl:text-lg mb-2 flex items-center justify-around bg-g  text-white rounded-md cursor-pointer font-bold font-f4 transform hover:translate-x-5 transition-all duration-300 ease-in'>Take Courses <span className='hidden group-hover:block'><i className="fa-solid fa-arrow-right-long"></i></span></button>
                </div>
              </div>
            </div>
            // md:h-16 md:w-40 md:text-lg md:mb-2
          );
        })

      }


      {/*  !!!!! SADECE MD BOYUTUNDA ORTAYA ÇIKAN SLIDER KISMI !!!!!!!!!!!!!!! */}
      {/*  !!!!!         BAŞLANGIÇ        !!!! */}
      

      <div className='block h-1/2 w-full   sm:block sm:h-1/2 sm:w-full    md:block md:h-1/2 md:w-full   lg:hidden  bg-g rounded-md '>
        <div className='relative h-full'>
          <div ref={slider}className='h-full w-full flex overflow-auto scroll-smooth scrollbar-hide items-center px-6 sm:px-6  md:px-6' >

            {
              data.map((item) => {
                const { id, name, job, image } = item;
                return (
                  /* Flip-Card */
                  <div key={id} className='flip-card  h-3/4 w-[240px] ml-[21px] mr-[15px]  sm:h-3/4 sm:w-[240px] sm:ml-[21px] sm:mr-[15px]  md:h-3/4 md:w-[240px] md:ml-[21px] md:mr-[15px]   flex flex-col flex-shrink-0 '>
                    {/* Flip-Card-Inner */}
                    <div className='flip-card-inner w-full h-full '>
                      {/* Flip-Card-FRONT */}
                      <div className='flip-card-front h-full w-full bg-white rounded-md'>
                        <div className='h-4/6 w-full flex items-center justify-center p-2' >
                          <img className='h-full w-full object-cover rounded-full' src={image} alt="/" loading='lazy' />
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
                        <p className='text-black text-bold font-f5  md:text-xl text-center'>Learn More About <br /><span className='text-g  md:text-base'>{name}</span> </p>
                        <button onClick={() => setDesc([item])} className='button1'>Details</button>
                      </div>
                      
                    </div>

                  </div>

                );
              })
            }
          </div>
          <div className='hidden sm:hidden md:hidden'>
            <div onClick={leftSlide} className='md:absolute md:z-20 top-1/2 -translate-y-1/2 h-16 w-16 md:flex  items-center justify-center rounded-full bg-black   md:left-5 hover:cursor-pointer'><i className="fa-solid fa-angles-left text-white text-2xl"></i></div>
            <div onClick={rightSlide} className='md:absolute md:z-20 top-1/2 -translate-y-1/2 h-16 w-16 md:flex  items-center justify-center rounded-full bg-black  md:right-5 hover:cursor-pointer'><i className="fa-solid fa-angles-right text-white text-2xl "></i></div>

          </div>
        </div>
      </div>


      {/*  !!!!! SADECE MD BOYUTUNDA ORTAYA ÇIKAN SONU  !!!!!!!!!!!!!!! */}
      {/*  !!!!!         YUKARISI SON        !!!! */}      




      <div className='hidden sm:hidden md:hidden lg:w-3/5 xl:w-3/4 h-full lg:flex lg:flex-col bg-g items-center'>
        <div className='h-1/2 bg-white w-full  relative lg:flex items-end'>
          <img className='w-full h-full object-scale-down absolute z-20 ' src="assets/women/w12.png" alt="/" loading='lazy' />
          <div className='h-full w-full  absolute z-10 flex items-center justify-center  text-g'>
            <div className='w-1/2 h-full flex items-center justify-center '><h1 className='font-bold font-f5 tracking-widest xl:ml-16 lg:ml-0  xl:text-8xl lg:text-5xl text-align'>Do You <br />Personal</h1></div>
            <div className='w-1/2 h-full flex items-center justify-center'><h1 className='font-bold font-f5 tracking-widest xl:ml-44 lg:ml-24 xl:text-8xl lg:text-5xl  text-align'>Need A Trainer ?</h1></div>

          </div>
        </div>

        <div className='lg:h-1/2 lg:w-3/4  bg-g rounded-md '>
          <div className='relative h-full'>
            <div ref={slider} className='h-full w-full flex overflow-auto scroll-smooth scrollbar-hide items-center  xl:px-6 lg:px-0' >

              {
                data.map((item) => {
                  const { id, name, job, image } = item;
                  return (
                    /* Flip-Card */
                    <div key={id} className='flip-card xl:h-3/4 xl:w-[250px] xl:ml-[35px] xl:mr-[35px]  lg:h-3/4 lg:w-[180px] lg:ml-[15px] lg:mr-[15px]    flex flex-col flex-shrink-0 '>
                      {/* Flip-Card-Inner */}
                      <div className='flip-card-inner w-full h-full '>
                        {/* Flip-Card-FRONT */}
                        <div className='flip-card-front h-full w-full bg-white rounded50'>
                          <div className='h-4/6 w-full flex items-center justify-center p-2' >
                            <img className='h-full w-full object-cover rounded-full' src={image} alt="/" loading='lazy' />
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
                          <p className='text-black text-bold font-f5 xl:text-2xl lg:text-xl text-center'>Learn More About <br /><span className='text-g xl:text-lg lg:text-base'>{name}</span> </p>
                          <button onClick={() => setDesc([item])} className='button1'>Details</button>
                        </div>
                      </div>

                    </div>

                  );
                })
              }



            </div>
            <div className=''>
              <div onClick={leftSlide} className='lg:absolute lg:z-20 top-1/2 -translate-y-1/2 h-16 w-16 lg:flex items-center justify-center rounded-full bg-black xl:left-5 lg:left-0 hover:cursor-pointer'><i className="fa-solid fa-angles-left text-white text-2xl"></i></div>
              <div onClick={rightSlide} className='lg:absolute lg:z-20 top-1/2 -translate-y-1/2 h-16 w-16 lg:flex items-center justify-center rounded-full bg-black xl:right-5  lg:right-0 hover:cursor-pointer'><i className="fa-solid fa-angles-right text-white text-2xl "></i></div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Trainers;