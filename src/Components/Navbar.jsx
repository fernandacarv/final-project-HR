import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";

const NavbarComponent = () => {
  const { isLoggedIn, logOut, user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
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
            </div>
          </div>
          <div className="nav-profile">
            {isLoggedIn && (
              <img
                className="profilePic"
                src={
                  isLoggedIn
                    ? user.img
                    : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            )}
            {/* {isLoggedIn && (<p>{user.name}</p>)} */}
          </div>
          {/* <AuthNav /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
