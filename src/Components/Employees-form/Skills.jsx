import React, { useContext, useEffect } from "react";
import { MainForm } from "../../Context/mainform.context";

function Skills({ onChange, onBack, onNext }) {
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
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      // If the changed property is at the top level
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBack = () => {
    onBack();
    onChange(formData);
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-md shadow-md">
        <h4 className="text-lg font-semibold mb-4">
          Skills & Performance Metrics
        </h4>
        <label
          className="block mb-2"
          htmlFor="skills">
          Skills
        </label>
        <input
          type="text"
          name="skillsAndQualifications.skills"
          value={formData.skillsAndQualifications?.skills || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="education">
          Education
        </label>
        <input
          type="text"
          name="skillsAndQualifications.education"
          value={formData.skillsAndQualifications?.education || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="performanceReviews">
          Performance Reviews
        </label>
        <input
          type="text"
          name="performanceMetrics.performanceReviews"
          value={formData.performanceMetrics?.performanceReviews || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label
          className="block mb-2"
          htmlFor="goals">
          Goals
        </label>
        <input
          type="text"
          name="performanceMetrics.goals"
          value={formData.performanceMetrics?.goals || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded mr-2">
          Go back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Next: Profile Setup
        </button>
      </div>
    </div>
  );
}

export default Skills;
