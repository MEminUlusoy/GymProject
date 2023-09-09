import About from "./components/About";
import Footer from "./components/Footer";
import Groups from "./components/Groups";
import Main from "./components/Main";
import Membership from "./components/Membership";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";


function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="relative top-[100px] snap-y snap-mandatory scroll-smooth h-[calc(100vh-100px)] w-screen overflow-x-hidden scrollbar-hide ">
        <Main/>
        <Programs/>
        <Groups/>
        <Trainers/>
        <Membership/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}



export default App;
