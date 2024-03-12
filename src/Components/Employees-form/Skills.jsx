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
    <div>
      <h4>Skills & Performance Metrics</h4>
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        name="skillsAndQualifications.skills"
        value={formData.skillsAndQualifications?.skills || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="education">Education</label>
      <input
        type="text"
        name="skillsAndQualifications.education"
        value={formData.skillsAndQualifications?.education || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="performanceReviews">Performance Reviews</label>
      <input
        type="text"
        name="performanceMetrics.performanceReviews"
        value={formData.performanceMetrics?.performanceReviews || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="goals">Goals</label>
      <input
        type="text"
        name="performanceMetrics.goals"
        value={formData.performanceMetrics?.goals || ""}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Profile Setup</button>
    </div>
  );
}

export default Skills;
