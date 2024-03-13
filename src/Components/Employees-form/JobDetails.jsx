import React, { useContext, useEffect } from "react";
import { MainForm } from "../../Context/mainform.context";

function JobDetails({ onNext, onBack, onChange }) {
  const { formData, setFormData } = useContext(MainForm);

  useEffect(() => {
    // Assuming you want to fetch and set the data when the component mounts
    const fetchData = async () => {
      // Fetch your data and update the form data using setFormData
      // Example: const response = await fetchYourData();
      // setFormData(response.data);
    };

    fetchData();
  }, [setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed property is part of a nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      const formattedValue = name.includes("date")
        ? new Date(value).toISOString().split("T")[0]
        : value;
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: formattedValue,
        },
      }));
    } else {
      // If the changed property is at the top level
      const formattedValue = name.includes("date")
        ? new Date(value).toISOString().split("T")[0]
        : value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
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
        value={formData.jobDetails?.jobTitle || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="departmentID">Department ID:</label>
      <select
        name="jobDetails.departmentID"
        value={formData.jobDetails?.departmentID || ""}
        onChange={handleChange}
        className="form-control"
      >
        <option disabled value="">
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
        value={formData.jobDetails?.managerID || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="jobDetails.startDate"
        value={formData.jobDetails?.startDate || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        name="salaryInformation.salary"
        value={formData.salaryInformation?.salary || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="currency">Currency:</label>
      <input
        type="text"
        name="salaryInformation.currency"
        value={formData.salaryInformation?.currency || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="weeklyWorkHours">Weekly Work Hours:</label>
      <input
        type="number"
        name="workHours.weeklyWorkHours"
        value={formData.workHours?.weeklyWorkHours || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="healthInsurance">Health Insurance</label>
      <select
        name="benefitsAndPerks.healthInsurance"
        value={formData.benefitsAndPerks?.healthInsurance || ""}
        onChange={handleChange}
        className="form-control"
      >
        <option value="" disabled>
          Select
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="retirementPlans">Retirement Plans</label>
      <select
        name="benefitsAndPerks.retirementPlans"
        value={formData.benefitsAndPerks?.retirementPlans || ""}
        onChange={handleChange}
        className="form-control"
      >
        <option value="" disabled>
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
