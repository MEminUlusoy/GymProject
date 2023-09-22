import React from 'react';
// {`h-1 w-8 rounded-full bg-g transition-all duration-300 ease-in ${rightNav && "-rotate-45 origin-left transition-all duration-300 ease-in"}`}
function RightNav({rightNav,setRightNav}) {
  return (
    <div className={`opacity-0 right-[0px] w-[300px]  h-[calc(100vh-100px)]  absolute z-30 flex items-start justify-center top-[100px] bg-black transition-all duration-300 ease-in ${rightNav && "  opacity-100  transition-all duration-300 ease-in"} `}>
        <div className='w-full h-1/2 '>
            <ul className='h-full w-full flex flex-col justify-around items-center cursor-pointer'>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#home">Home</a></li>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#programs">Program</a></li>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#groups">Groups</a></li>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#trainers">Trainers</a></li>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#membership">Membership</a></li>
                <li onClick={()=> setRightNav(false)} className=''><a className='text-xl text-g font-f2' href="#about">About</a></li>
            </ul>
        </div>
    </div>
  );
}

export default RightNav;