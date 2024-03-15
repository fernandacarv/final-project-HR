import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import userLog from "../images/userLog.png";

const API_URL = "https://finalproject-hr-server.onrender.com";

export default function EmployeeDetailsPage() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleEmployee = async () => {
      try {
        const res = await fetch(`${API_URL}/api/employees/${id}`);
        const data = await res.json();
        setEmployee(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleEmployee();
  }, [id]);

  useEffect(() => {
    document.title = `${employee.firstName}`;
  }, [employee]);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/api/employees/${id}`)
        .then(() => navigate(`/`))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="max-w-6xl bg-gray-200 w-full rounded-lg shadow-xl p-6">
        <div className="md:flex md:flex-row">
          <div className="md:w-1/2">
            {/* Left side with the image */}
            <img
              src={employee.imageUrl || userLog}
              alt="Employee"
              className="w-full h-auto rounded-l-lg md:rounded-l-none md:rounded-t-lg"
            />
          </div>
          <div className="md:w-1/2 p-6">
            {/* Right side with the employee information */}
            <div className="p-4 border-b">
              <h2 className="text-2xl">Employee Information</h2>
              <p className="text-sm text-gray-600">
                Personal details and job information.
              </p>
            </div>
            <div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                <p className="text-gray-600">Full Name</p>
                <p>{`${employee.firstName || ""} ${
                  employee.lastName || ""
                }`}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                <p className="text-gray-600">Date of Birth</p>
                <p>{employee.dateOfBirth || "N/A"}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                <p className="text-gray-600">Gender</p>
                <p>{employee.gender || "N/A"}</p>
              </div>
              {/* Job Details */}
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                <p className="text-gray-600">Job Title</p>
                <p>
                  {employee.jobDetails ? employee.jobDetails.jobTitle : "N/A"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowMoreInfo(!showMoreInfo)}
              className="inline-block bg-blue-500 px-6 py-2 text-white font-semibold rounded shadow hover:bg-blue-600 transition-all duration-200 ml-4 mt-2"
            >
              {showMoreInfo ? "Hide More Info" : "Show More Info"}
            </button>
            {showMoreInfo && (
              <div>
                {/* Additional information */}
                <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                  <p className="text-gray-600">Address</p>
                  <p>
                    {`${employee.address.streetAddress || ""}, ${
                      employee.address.city || ""
                    }, ${employee.address.stateProvince || ""}, ${
                      employee.address.postalCode || ""
                    }` || "N/A"}
                  </p>
                </div>
                {/* Emergency Contact */}
                <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                  <p className="text-gray-600">Emergency Contact</p>
                  <p>
                    {employee.emergencyContact
                      ? `${employee.emergencyContact.name}, ${employee.emergencyContact.phoneNumberEmergency}, ${employee.emergencyContact.relationship}`
                      : "N/A"}
                  </p>
                </div>
                {/* Skills and Qualifications */}
                <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                  <p className="text-gray-600">Skills and Qualifications</p>
                  <p>
                    {employee.skillsAndQualifications
                      ? `${employee.skillsAndQualifications.skills}, ${employee.skillsAndQualifications.education}`
                      : "N/A"}
                  </p>
                </div>
                {/* Performance Metrics */}
                <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b border-gray-300 text-gray-600">
                  <p className="text-gray-600">Performance Metrics</p>
                  <p>
                    {employee.performanceMetrics
                      ? `${employee.performanceMetrics.performanceReviews}, ${employee.performanceMetrics.goals}`
                      : "N/A"}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center mt-8">
              <Link
                to="/employees"
                className="inline-block bg-white py-2 px-6 rounded font-semibold shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 ml-4"
              >
                &larr; Back
              </Link>
              <Link
                to={`/employees/edit/${id}`}
                className="inline-block bg-blue-500 px-6 py-2 text-white font-semibold rounded shadow hover:bg-blue-600 transition-all duration-200 ml-4"
              >
                Edit Employee
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-500 px-6 py-2 text-white font-semibold rounded shadow hover:bg-red-600 transition-all duration-200 ml-4"
              >
                Delete Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
