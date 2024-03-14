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
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-md shadow-md">
        <h4 className="text-lg font-semibold mb-4">Job Details</h4>
        <label
          className="block mb-2"
          htmlFor="job-title">
          Job Title:
        </label>
        <input
          type="text"
          name="jobDetails.jobTitle"
          value={formData.jobDetails?.jobTitle || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="departmentID">
          Department ID:
        </label>
        <select
          name="jobDetails.departmentID"
          value={formData.jobDetails?.departmentID || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black">
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
        <label
          className="block mb-2"
          htmlFor="managerID">
          Manager ID:
        </label>
        <input
          type="text"
          name="jobDetails.managerID"
          value={formData.jobDetails?.managerID || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="startDate">
          Start Date:
        </label>
        <input
          type="date"
          name="jobDetails.startDate"
          value={formData.jobDetails?.startDate || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="salary">
          Salary:
        </label>
        <input
          type="number"
          name="salaryInformation.salary"
          value={formData.salaryInformation?.salary || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="currency">
          Currency:
        </label>
        <input
          type="text"
          name="salaryInformation.currency"
          value={formData.salaryInformation?.currency || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="weeklyWorkHours">
          Weekly Work Hours:
        </label>
        <input
          type="number"
          name="workHours.weeklyWorkHours"
          value={formData.workHours?.weeklyWorkHours || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="healthInsurance">
          Health Insurance
        </label>
        <select
          name="benefitsAndPerks.healthInsurance"
          value={formData.benefitsAndPerks?.healthInsurance || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black">
          <option
            value=""
            disabled>
            Select
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label
          className="block mb-2"
          htmlFor="retirementPlans">
          Retirement Plans
        </label>
        <select
          name="benefitsAndPerks.retirementPlans"
          value={formData.benefitsAndPerks?.retirementPlans || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black">
          <option
            value=""
            disabled>
            Select
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded mr-2">
          Go back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Next: Emergency Contact
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
