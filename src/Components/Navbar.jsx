import React, { useState, useContext, useEffect, useRef } from "react";
import userLog from "../images/userLog.png"; // Corrected import statement
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/auth.context";

const NavbarComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, AuthenticateUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    setUserDetails(user);
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [user]);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-white font-bold">
              Navbar
            </Link>
            <div className="ml-10 space-x-4 flex flex-row">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3
              py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                to="/about"
                className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3
              py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <div
                className="relative"
                ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded={showDropdown}
                  aria-haspopup="true">
                  Management
                </button>
                {showDropdown && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div
                      className="rounded border"
                      role="none">
                      <Link
                        to="/employees"
                        onClick={toggleDropdown}
                        className="text-gray-700 hover:bg-gray-300 bg-white block px-4 py-2 text-sm"
                        role="menuitem">
                        Employees
                      </Link>
                      <Link
                        to="/budgets"
                        onClick={toggleDropdown}
                        className="text-gray-700  hover:bg-gray-300 block px-4 py-2 text-sm"
                        role="menuitem">
                        Budgets
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {userDetails && (
              <>
                <Link to="/user">
                  <img
                    src={userDetails.imageUrl || userLog}
                    alt="Login Logo"
                    className="w-8 h-8 mr-2"
                  />
                </Link>
                <Link to="/user">
                  <span className="text-gray-300 text-sm font-medium mr-6">
                    {userDetails.name}
                  </span>
                </Link>
                {/* Logout button */}
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`${showDropdown ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Link
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Disabled
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
