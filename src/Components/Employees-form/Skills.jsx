import React, { useState } from "react";
import { useEffect } from "react";

function Skills({ onChange, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    skillsAndQualifications: { skills: "", education: "" },
    performanceMetrics: { performanceReviews: "", goals: "" },
  });

  // Side effect to execute when formData changes
  useEffect(() => {
    onChange(formData); // Pass updated formData to parent
  }, []);

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
  };

  return (
    <div>
      <h4>Skills & Performance Metrics</h4>
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        name="skillsAndQualifications.skills"
        value={formData.skillsAndQualifications.skills}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="education">Education</label>
      <input
        type="text"
        name="skillsAndQualifications.education"
        value={formData.skillsAndQualifications.education}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="performanceReviews">Performance Reviews</label>
      <input
        type="text"
        name="performanceMetrics.performanceReviews"
        value={formData.performanceMetrics.performanceReviews}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="goals">Goals</label>
      <input
        type="text"
        name="performanceMetrics.goals"
        value={formData.performanceMetrics.goals}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleBack}>Go back</button>
    </div>
  );
}

export default Skills;