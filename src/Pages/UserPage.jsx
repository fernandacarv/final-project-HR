import React, { useContext, useEffect, useState } from "react";
import userLog from "../images/userLog.png";
import { AuthContext } from "../Context/auth.context";

const UserPage = () => {
  const { user, authenticateUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(user);
  }, [authenticateUser]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-90 card w-96 bg-base-100 shadow-xl">
      {userDetails ? (
        <div className="text-center">
          <h2 className="text-lg">User Details</h2>
          <img
            src={userDetails.imageUrl || userLog}
            alt="user image"
            className="h-60 mx-auto"
          />
          <p>Email: {userDetails.email}</p>
          <p>Name: {userDetails.name}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
      </div>
    </div>
  );
};

export default UserPage;
