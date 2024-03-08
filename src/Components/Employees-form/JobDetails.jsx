import React, { useState } from "react";

function JobDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    jobTitle: "",
    departmentID: "",
    managerID: "",
    startDate: "",
    endDate: "",
    salary: "",
    currency: "",
    weeklyWorkHours: "",
    healthInsurance: false,
    retirementPlans: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleNext = () => {
    onNext(); // Notify parent component about next button click
    console.log(formData);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h4>Job Details</h4>
      <label htmlFor="job-title">Job Title:</label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="departmentID">Department ID:</label>
      <select
        required
        name="departmentID"
        value={formData.departmentID}
        onChange={handleChange}
        className="form-control">
        <option
          disabled
          value="">
          Select
        </option>
        <option value="Web Development">Web Development</option>
        <option value="Financing">Finance</option>
        <option value="HR">HR</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
      <label htmlFor="managerID">Manager ID:</label>
      <input
        type="text"
        name="managerID"
        value={formData.managerID}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="currency">Currency:</label>
      <input
        type="text"
        name="currency"
        value={formData.currency}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="weeklyWorkHours">Weekly Work Hours:</label>
      <input
        type="number"
        name="weeklyWorkHours"
        value={formData.weeklyWorkHours}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="healthInsurance">Health Insurance</label>
      <input
        type="checkbox"
        name="healthInsurance"
        checked={formData.healthInsurance}
        onChange={handleChange}
      />
      <label htmlFor="retirementPlans">Retirement Plans</label>
      <input
        type="checkbox"
        name="retirementPlans"
        checked={formData.retirementPlans}
        onChange={handleChange}
      />
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Emergency Contact</button>
    </div>
  );
}

export default JobDetails;
