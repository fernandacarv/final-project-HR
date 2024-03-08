import React, { useState } from "react";

function JobDetails({ onNext, onBack, onChange }) {
  const [formData, setFormData] = useState({
    jobDetails: {
      jobTitle: "",
      departmentID: "",
      managerID: "",
      startDate: "",
      endDate: "",
    },
    salaryInformation: { salary: "", currency: "" },
    workHours: { weeklyWorkHours: "" },
    benefitsAndPerks: { healthInsurance: "", retirementPlans: "" },
  });

  const [employee, setEmployee] = useState({
    jobDetails: {
      jobTitle: "",
      departmentID: "",
      managerID: "",
      startDate: "",
      endDate: "",
    },
    salaryInformation: { salary: "", currency: "" },
    workHours: { weeklyWorkHours: "" },
    benefitsAndPerks: { healthInsurance: "", retirementPlans: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed property is part of a nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      })),
      setEmployee((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }))
    } else {
      // If the changed property is at the top level
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
    onChange(employee)
    onNext();
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
        name="jobDetails.jobTitle"
        value={formData.jobDetails.jobTitle}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="departmentID">Department ID:</label>
      <select
        name="jobDetails.departmentID"
        value={formData.jobDetails.departmentID}
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
        name="jobDetails.managerID"
        value={formData.jobDetails.managerID}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="jobDetails.startDate"
        value={formData.jobDetails.startDate}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="jobDetails.endDate"
        value={formData.jobDetails.endDate}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        name="salaryInformation.salary"
        value={formData.salaryInformation.salary}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="currency">Currency:</label>
      <input
        type="text"
        name="salaryInformation.currency"
        value={formData.salaryInformation.currency}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="weeklyWorkHours">Weekly Work Hours:</label>
      <input
        type="number"
        name="workHours.weeklyWorkHours"
        value={formData.workHours.weeklyWorkHours}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="healthInsurance">Health Insurance</label>
      <select
        name="benefitsAndPerks.healthInsurance"
        value={formData.benefitsAndPerks.healthInsurance}
        onChange={handleChange}
        className="form-control">
        <option
          value=""
          disabled>
          Select
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="retirementPlans">Retirement Plans</label>
      <select
        name="benefitsAndPerks.retirementPlans"
        value={formData.benefitsAndPerks.retirementPlans}
        onChange={handleChange}
        className="form-control">
        <option
          value=""
          disabled>
          Select
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Emergency Contact</button>
    </div>
  );
}

export default JobDetails;
