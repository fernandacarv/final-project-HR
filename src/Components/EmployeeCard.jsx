import React from "react";
import { Link } from "react-router-dom";
import userLog from "../images/userLog.png";
const EmployeeCard = ({
  firstName,
  lastName,
  jobDetails,
  contactInformation,
  imageUrl,
  className,
  _id: id,
}) => {
  const { jobTitle, departmentID } = jobDetails;

  // Ensure contactInformation exists and has the emailAddress and phoneNumber properties
  const { emailAddress, phoneNumber } = contactInformation ?? {};
  return (
    <Link to={`/employees/${id}`}>
      <div
        className={`flex justify-between items-center p-2 border-b ${className}`}>
        <div
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}>
          <img
            src={imageUrl || userLog}
            alt={`${firstName} ${lastName}`}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <span style={{ flexBasis: "20%" }}>{`${firstName} ${lastName}`}</span>
        <span style={{ flexBasis: "20%" }}>{departmentID}</span>
        <span style={{ flexBasis: "20%" }}>{emailAddress}</span>
        <span style={{ flexBasis: "20%" }}>{phoneNumber}</span>
      </div>
    </Link>
  );
};
export default EmployeeCard;
