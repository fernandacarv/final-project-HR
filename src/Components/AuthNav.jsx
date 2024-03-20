import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../Context/auth.context";
import userLog from "../images/userLog.png";
import { Link } from "react-router-dom";

export default function AuthNav() {
  const { user, logOutUser, isLoggedIn, authenticateUser } =
    useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logOutUser();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex">
      {isLoggedIn === true ? (
        <div className="flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-expanded={showDropdown}
              aria-haspopup="true"
            >
              Management
            </button>
            {showDropdown && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="rounded border" role="none">
                  <Link
                    to="/employees"
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:bg-gray-300 bg-white block px-4 py-2 text-sm"
                    role="menuitem"
                  >
                    Employees
                  </Link>
                  <Link
                    to="/budgets"
                    onClick={toggleDropdown}
                    className="text-gray-700  hover:bg-gray-300 block px-4 py-2 text-sm"
                    role="menuitem"
                  >
                    Budgets
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <Link to="/user">
              <img
                src={user?.imageUrl || userLog}
                alt="Login Logo"
                className="w-8 h-8 mr-2"
              />
            </Link>
            <Link to="/user">
              <span className="text-gray-300 text-sm font-medium mr-6">
                {user?.name}
              </span>
            </Link>
            <Link to="/">
              <button
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex">
          <img src={userLog} alt="Login Logo" className="w-8 h-8 mr-2" />
          <Link to="/login">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
