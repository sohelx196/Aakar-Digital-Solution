import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" 
            alt="Aakar Digital Solution Logo"
            className="w-10 h-10"/>

          <span className="text-xl font-bold">Aakar Digital Solution</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:border hover:bg-slate-100 hover:rounded-3xl p-2 hover:text-black ">Homepage</Link></li>
          <li><Link to="/about" className="hover:border hover:bg-slate-100 hover:rounded-3xl p-2 hover:text-black ">About</Link></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
                
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-600 px-4 pb-4 space-y-2">
          <li><Link to="/" className="block py-2 ">Homepage</Link></li>
          <li><Link to="/about" className="block py-2 ">About</Link></li>
          
        </ul>
      )}
    </header>
  );
}

export default Header;
