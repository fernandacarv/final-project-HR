import React, { useState } from "react";

function PersonalInfo({ onNext, onChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactInformation: { emailAddress: "", phoneNumber: "" },
    address: { streetAddress: "", city: "", stateProvince: "", postalCode: "" },
  });

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactInformation: { emailAddress: "", phoneNumber: "" },
    address: { streetAddress: "", city: "", stateProvince: "", postalCode: "" },
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
      setEmployee((prevData) => ({
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
      setEmployee((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
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
        name="contactInformation.emailAddress"
        value={formData.contactInformation.emailAddress}
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
        name="contactInformation.phoneNumber"
        value={formData.contactInformation.phoneNumber}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="streetAddress">Street Address:</label>
      <input
        type="text"
        name="address.streetAddress"
        value={formData.address.streetAddress}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="address.city"
        value={formData.address.city}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="stateProvince">State Province:</label>
      <input
        type="text"
        name="address.stateProvince"
        value={formData.address.stateProvince}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="postalCode">Postal Code:</label>
      <input
        type="text"
        name="address.postalCode"
        value={formData.address.postalCode}
        onChange={handleChange}
        className="form-control"
      />

      <button onClick={handleNext}>Next: Profile Setup</button>
    </div>
  );
}

export default PersonalInfo;
