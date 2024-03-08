import React, { useState } from "react";

function PersonalInfo({ onNext, onChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
    console.log(formData);
  };

  return (
    <div>
      <h4>Personal Information</h4>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="streetAddress">Street Address:</label>
      <input
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="stateProvince">State Province:</label>
      <input
        type="text"
        name="stateProvince"
        value={formData.stateProvince}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="postalCode">Postal Code:</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        className="form-control"
      />

      <button onClick={handleNext}>Next: Profile Setup</button>
    </div>
  );
}

export default PersonalInfo;
