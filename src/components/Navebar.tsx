import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-black w-full fixed z-50 max-sm:justify-evenly">
        <div className="w-4/5 px-4 py-3 max-sm:py-2 mx-auto max-sm:w-full">
          <div className="flex items-center justify-between">
            {/* Menu Items (left side) */}
            <ul
              ref={menuRef}
              className={`py-3 rounded-2xl fixed sm:static bg-fuchsia-950 top-12 right-4 w-auto sm:w-auto sm:bg-transparent flex-col sm:flex-row sm:flex font-bold mt-0 space-y-2 sm:space-y-0 space-x-0 sm:space-x-8 rtl:space-x-reverse text-sm items-center ${
                menuOpen ? 'flex' : 'hidden'
              } sm:flex`}
              style={{ minWidth: '150px' }} // Adjust the width as required
            >
              <li>
                <a href="#About" className="text-white hover:underline text-xs sm:text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#Skills" className="text-white hover:underline text-xs sm:text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Projects" className="text-white hover:underline text-xs sm:text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" className="text-white hover:underline text-xs sm:text-sm">
                  Contact
                </a>
              </li>
            </ul>

            {/* Github and LinkedIn Buttons (right side) */}
            <div className="flex space-x-4">
              <a href="https://github.com/chandan789maity">
                <button className="align-middle flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black p-2 rounded-xl border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-xs sm:text-sm sm:p-3">
                  <svg
                    className='mt-[2px] max-sm:-m-[1px]'
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    ></path>
                  </svg>
                  Github
                </button>
              </a>
              <a href="https://www.linkedin.com/in/chandan-maity-4b7643265/">
                <button className="hover:scale-105 duration-200 group flex justify-center p-2 rounded-xl drop-shadow-xl hover:bg-blue-800 from-gray-800 text-white font-semibold transition-all bg-violet-900 text-xs sm:text-sm sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    strokeWidth="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                  <h1>LinkedIn</h1>
                </button>
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
