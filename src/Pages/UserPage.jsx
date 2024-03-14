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
    <div>
      {userDetails ? (
        <div className="grid  justify-center">
          <h2 className="text-lg text-justify">User Details</h2>
          <img
            src={userDetails.imageUrl || userLog}
            alt="user image"
            className="h-60"
          />
          <p>Email: {userDetails.email}</p>
          <p>Name: {userDetails.name}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserPage;
