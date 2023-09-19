
import "./navbar.css";

function Navbar() {
  

  return (
    <div  className='outter-div h-[100px] w-screen bg-black text-white z-10 top-0 fixed flex items-center justify-between px-[100px] py-[30px]'>
      <div><a href="#home"><h1 className='font-orbitron text-[#66B932] text-[27px] font-Parisienne '>Ulusoy<span className='text-white'>Fit</span></h1></a></div>
      <div className='nav-cont'>
        <ul className='flex items-center list-none text-base'>
          <li><a href="#home">Home</a></li>
          <li><a href="#programs">Program</a></li>
          <li><a href="#groups">Groups</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership</a></li>
          <li className="border-r pr-5"><a href="#about">About</a></li>
          <li><a href="#footer">Login</a></li>
          <li><a href="#footer"><button className="border-2 border-[#66B932] text-[#66B932] py-1 px-2">Sign Up</button></a></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Navbar;