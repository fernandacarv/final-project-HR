import React, { useContext, useEffect, useState } from "react";
import userLog from "../images/userLog.png";
import { AuthContext } from "../Context/auth.context";
import { Link } from "react-router-dom";

const UserPage = () => {
  const { user, authenticateUser, logOutUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(user);
  }, [authenticateUser]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="h-90 card w-96 bg-gray-700 shadow-xl">
        {userDetails ? (
          <div className="text-center">
            <h2 className="text-lg">Welcome {userDetails.name} !</h2>
            <img
              src={userDetails.imageUrl || userLog}
              alt="user image"
              className="h-60 mx-auto"
            />
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
      <div className="mt-4 align-center content-around">
        <Link to="/employees">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow ml-4">
            Employees
          </button>
        </Link>
        <Link to="/budgets">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow ml-4">
            Budgets
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/">
          <button onClick={logOutUser} className="btn btn-outline btn-error">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
