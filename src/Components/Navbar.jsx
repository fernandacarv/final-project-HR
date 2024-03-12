import React, { useState } from "react";
import userLog from "../images/userLog.png"; // Corrected import statement

const NavbarComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="flex-shrink-0 flex items-center text-white font-bold">
              Navbar
            </a>
            <div className="ml-10 space-x-4 flex flex-row">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Link
              </a>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded={showDropdown}
                  aria-haspopup="true">
                  Dropdown
                </button>
                {showDropdown && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div
                      className="py-1"
                      role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem">
                        Action
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem">
                        Another action
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem">
                        Something else here
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={userLog}
              alt="Login Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-gray-300 font-medium">John Doe</span>
          </div>
        </div>
      </div>
      <div className={`${showDropdown ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Link
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
