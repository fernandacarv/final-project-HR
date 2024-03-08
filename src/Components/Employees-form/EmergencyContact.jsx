import React, { useState } from "react";

function EmergencyContact({ onNext, onBack, onChange }) {
  const [formData, setFormData] = useState({
    emergencyContact: { name: "", phoneNumberEmergency: "", relationship: "" },
  });

  const [employee, setEmployee] = useState({
    emergencyContact: { name: "", phoneNumberEmergency: "", relationship: "" },
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
      }));
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
    onChange(employee);
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h4>Emergency Contact</h4>
      <label htmlFor="EmergencyContactName">Name:</label>
      <input
        type="text"
        name="emergencyContact.name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="emergencyContact.phoneNumberEmergency"
        value={formData.phoneNumberEmergency}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="">Relationship:</label>
      <input
        type="text"
        name="emergencyContact.relationship"
        value={formData.relationship}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Skills & Performance Metrics</button>
    </div>
  );
}

export default EmergencyContact;
