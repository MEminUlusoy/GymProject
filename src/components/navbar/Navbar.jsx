
import "./navbar.css";

function Navbar({rightNav,setRightNav}) {


  return (
    <div className='outter-div h-[100px] w-screen bg-black text-white z-40 top-0 fixed flex items-center justify-between px-[20px]  sm:px-[90px] lg:px-[100px] py-[30px] '>
      <div className=""><a href="#home"><h1 className='font-orbitron text-[#66B932] text-[27px] font-Parisienne '>Ulusoy<span className='text-g'>Fit</span></h1></a></div>
      <div className=''>
        <div className='flex flex-col items-center justify-around lg:hidden'>
          <ul onClick={()=>setRightNav(!rightNav)} className={`space-y-2 cursor-pointer transition-all duration-300 ease-in ${rightNav && "translate-x-0 sm:translate-x-10 transition-all duration-300 ease-in"}`}>
            <li className={`h-1 w-8 rounded-full bg-g transition-all duration-300 ease-in ${rightNav && "rotate-45 origin-left transition-all duration-300 ease-in"}`}></li>
            <li className={`h-1 w-8 rounded-full bg-g  ${rightNav && "opacity-0 "}`}></li>
            <li className={`h-1 w-8 rounded-full bg-g transition-all duration-300 ease-in ${rightNav && "-rotate-45 origin-left transition-all duration-300 ease-in"}`}></li>

          </ul>
        </div>
        <ul className='lg:flex lg:items-center list-none text-base hidden  '>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#home">Home</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#programs">Program</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#groups">Groups</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#trainers">Trainers</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#membership">Membership</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px] border-r pr-5"><a href="#about">About</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#footer">Login</a></li>
          <li className="xl:ml-[35px] lg:ml-[15px]"><a href="#footer"><button className="border-2 border-[#66B932] text-[#66B932] py-1 px-2">Sign Up</button></a></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;