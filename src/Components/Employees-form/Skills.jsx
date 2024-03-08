import React, { useState } from "react";
import { useEffect } from "react";

function Skills({ onChange, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    skills: "",
    education: "",
    performanceReviews: "",
    goals: "",
  });

  // Side effect to execute when formData changes
  useEffect(() => {
    onChange(formData); // Pass updated formData to parent
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    onBack();
  };

/*   const handleSubmit = () => {
    onSubmit(formData); // Pass formData to parent when submitting
  }; */
  return (
    <div>
      <h4>Skills & Performance Metrics</h4>
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="education">Education</label>
      <input
        type="text"
        name="education"
        value={formData.education}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="performanceReviews">Performance Reviews</label>
      <input
        type="text"
        name="performanceReviews"
        value={formData.performanceReviews}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="goals">Goals</label>
      <input
        type="text"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleBack}>Go back</button>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

export default Skills;
