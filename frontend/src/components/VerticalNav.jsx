import { useState } from "react";
import { Link } from "react-router-dom";

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden fixed w-full z-50 bg-blue-100/80 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* hamburger btn  */}
        <button className="md:hidden z-50 p-2 rounded-md bg-blue-400/80 backdrop-blur-sm shadow-lg cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            )}
            </svg>
        </button>

        {/* Navbar Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full`} id="navbar-hamburger">
          <ul className="flex flex-col w-full font-medium mt-4 rounded-lg">
            <li>
              <a href="#home" className="block py-2 px-3 rounded-sm text-black hover:bg-blue-400 hover:text-white"
              onClick={()=>{
                setIsOpen(!isOpen)
              }}>
                Home
              </a>
            </li>
            <li>
              <a href="#diseaseDetection" className="block py-2 px-3 rounded-sm text-black hover:bg-blue-400 hover:text-white"
              onClick={()=>{
                setIsOpen(!isOpen)
              }}>
                Disease Detection
              </a>
            </li>
            <li>
              <Link to="/chat">
              <div className="block py-2 px-3 rounded-sm text-black hover:bg-blue-400 hover:text-white"
              onClick={()=>{
                setIsOpen(!isOpen)
              }}>
                Chat with Bot
              </div>
              </Link>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 rounded-sm text-black hover:bg-blue-400 hover:text-white"
              onClick={()=>{
                setIsOpen(!isOpen)
              }}>
                About
              </a>
            </li>
            <li>
              <a href="#members" className="block py-2 px-3 rounded-sm text-black hover:bg-blue-400 hover:text-white"
              onClick={()=>{
                setIsOpen(!isOpen)
              }}>
                Members
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
