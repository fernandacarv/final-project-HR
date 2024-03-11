import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";
export default function EmployeeDetailsPage() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
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
    axios
      .delete(`${API_URL}/api/employees/${id}`)
      .then(() => navigate(`/`))
      .catch((error) => console.log(error));
  };

  return (
    <section className="p-8 md:py-0 max-w-7xl mx-auto">
      <div key={employee._id}>
        <article>
          <img />
        </article>

        <article>
          <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
            {employee.firstName} {employee.lastName}
          </h1>

          <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
            <li>Date of Birth: {employee.dateOfBirth}</li>
            <li>Gender: {employee.gender}</li>
            <li>
              Contact Information:{" "}
              {employee.contactInformation
                ? `${employee.contactInformation.emailAddress || "N/A"}, ${
                    employee.contactInformation.phoneNumber || "N/A"
                  }`
                : "N/A"}
            </li>
            <li>
              Address:{" "}
              {employee.address
                ? `${employee.address.streetAddress || "N/A"}, ${
                    employee.address.city || "N/A"
                  }, ${employee.address.stateProvince || "N/A"}`
                : "N/A"}
            </li>
            <li>
              {" "}
              Job Details:
              {employee.jobDetails ? (
                <>
                  <br /> Position: {employee.jobDetails.jobTitle || "N/A"}
                  <br /> Department: {employee.jobDetails.departmentID || "N/A"}
                  <br />
                  Start Date: {employee.jobDetails.startDate || "N/A"}
                  <br /> End Date: {employee.jobDetails.endDate || "N/A"}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Salary Information:</b>{" "}
              {employee.salaryInformation ? (
                <>
                  {employee.salaryInformation.salary || "N/A"}
                  {employee.salaryInformation.currency || "N/A"}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              Weekly Hours:{" "}
              {employee.workHours
                ? employee.workHours.weeklyWorkHours || "N/A"
                : "N/A"}
            </li>
            <li>
              Benefits: <br />
              Health Insurance:{" "}
              {employee.benefitsAndPerks
                ? employee.benefitsAndPerks.healthInsurance || "N/A"
                : "N/A"}
              Retirement Plans:{" "}
              {employee.benefitsAndPerks
                ? employee.benefitsAndPerks.retirementPlans || "N/A"
                : "N/A"}
            </li>
            <li>
              <b>Emergency Contact:</b>{" "}
              {employee.emergencyContact
                ? employee.emergencyContact.name || "N/A"
                : "N/A"}
            </li>
            <li>
              Phone Number:{" "}
              {employee.emergencyContact
                ? employee.emergencyContact.phoneNumberEmergency || "N/A"
                : "N/A"}
            </li>
            <li>
              Relationship:{" "}
              {employee.phoneNumberEmergency
                ? employee.emergencyContact.relationship || "N/A"
                : "N/A"}
            </li>
            <li>
              <b>Skills and Qualifications:</b>
            </li>
            <li>
              Skills:{" "}
              {employee.skillsAndQualifications
                ? employee.skillsAndQualifications.skills || "N/A"
                : "N/A"}
            </li>
            <li>
              <b>Performance Metrics</b>
            </li>
            <li>
              Reviews:{" "}
              {employee.performanceMetrics
                ? employee.performanceMetrics.performanceReviews || "N/A"
                : "N/A"}
            </li>
            <li>
              Goals:{" "}
              {employee.performanceMetrics
                ? employee.performanceMetrics.goals || "N/A"
                : "N/A"}
            </li>
          </ul>
          <Link
            to="/"
            className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
          >
            &larr; Back
          </Link>
          <Link to={`/employees/edit/${employee._id}`}>
            <button>Edit Employee</button>
          </Link>
          <button onClick={handleDelete}>Delete Employee</button>
        </article>
      </div>
    </section>
  );
}
