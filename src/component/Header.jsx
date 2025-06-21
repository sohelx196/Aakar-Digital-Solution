import { useState } from 'react';
import { Link } from 'react-router-dom';
import aakarLogo from '../assets/Images/aakarFinalLogo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto  py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={aakarLogo}
            alt="Aakar Digital Solution Logo"
            className="w-36 h-auto"
          />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          <Link to="/" className="font-quicksand  text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 ">Home</Link>
          <Link to="aakarPrakashan" className="font-quicksand   text-base font-semibold transition-all duration-300 transform hover:-translate-y-1">Aakar Prakashan</Link>
          <Link to="aakarDigitalProduct" className="font-quicksand   text-base font-semibold transition-all duration-300 transform hover:-translate-y-1">Aakar Digital Product</Link>
          <Link to="aakarWebAndSoftware" className="font-quicksand   text-base font-semibold transition-all duration-300 transform hover:-translate-y-1">Aakar Web & Software</Link>
          <Link to="aakarGraphics" className="font-quicksand   text-base font-semibold transition-all duration-300 transform hover:-translate-y-1">Aakar Graphics</Link>
        </nav> 

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className= "font-quicksand hover:border border-gray-700 border-b-4  text-black  font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white text-black justify-center items-center text-center">
          <Link to="/" onClick={() => setMenuOpen(false)} className="font-quicksand block py-2 text-base font-medium transition-all duration-300 transform hover:-translate-y-1">Home</Link>
          <Link to="aakarGraphics" onClick={() => setMenuOpen(false)} className="font-quicksand block py-2 text-base font-medium transition-all duration-300 transform hover:-translate-y-1">Aakar Graphics</Link>
          <Link to="aakarPrakashan" onClick={() => setMenuOpen(false)} className="font-quicksand block py-2 text-base font-medium transition-all duration-300 transform hover:-translate-y-1">Aakar Prakashan</Link>
          <Link to="aakarDigitalProduct" onClick={() => setMenuOpen(false)} className="font-quicksand block py-2 text-base font-medium transition-all duration-300 transform hover:-translate-y-1">Aakar Digital Product</Link>
          <Link to="aakarWebAndSoftware" onClick={() => setMenuOpen(false)} className="font-quicksand block py-2 text-base font-medium transition-all duration-300 transform hover:-translate-y-1">Aakar Web & Software</Link>

           <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-quicksand block hover:border border-gray-700 border-b-4  text-black  font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100 " >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
