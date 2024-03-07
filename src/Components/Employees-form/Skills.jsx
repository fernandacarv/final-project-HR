import React, { useState } from "react";

function Skills({ onChange, onSubmit }) {
  const [formData, setFormData] = useState({
    skills: "",
    education: "",
    performanceReviews: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onChange({ ...formData, [name]: value }); // Pass updated formData to parent
  };

  const handleSubmit = () => {
    onSubmit(formData); // Pass formData to parent when submitting
  };

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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Skills;
