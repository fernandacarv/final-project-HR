import React, { useState } from "react";

function EmergencyContact({ onNext }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    relationship: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onChange(formData); // Notify parent component about change
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <h4>Emergency Contact</h4>
      <label htmlFor="EmergencyContactName">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="">Relationship:</label>
      <input
        type="text"
        name="relationship"
        value={formData.relationship}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleNext}>Next: Skills & Performance Metrics</button>
    </div>
  );
}

export default EmergencyContact;
