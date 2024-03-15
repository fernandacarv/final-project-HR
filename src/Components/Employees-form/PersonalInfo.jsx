import React, { useContext, useEffect, useState } from "react";
import { MainForm } from "../../Context/mainform.context";

function PersonalInfo({ onNext, onChange }) {
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

  const formatDate = (value) => {
    return value instanceof Date
      ? value.toLocaleDateString("en-CA") // Adjust the locale as needed
      : value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed property is part of a nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: name.includes("date") ? formatDate(new Date(value)) : value,
        },
      }));
    } else {
      // If the changed property is at the top level
      setFormData((prevData) => ({
        ...prevData,
        [name]: name.includes("date") ? formatDate(new Date(value)) : value,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-md shadow-md">
        <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
        <label className="block mb-2" htmlFor="firstName">
          First Name:
        </label>
        <input
          required
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          name="contactInformation.emailAddress"
          value={formData.contactInformation?.emailAddress || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="dateOfBirth">
          Date of Birth:
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="gender">
          Gender:
        </label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input
          type="text"
          name="contactInformation.phoneNumber"
          value={formData.contactInformation?.phoneNumber || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="streetAddress">
          Street Address:
        </label>
        <input
          required
          type="text"
          name="address.streetAddress"
          value={formData.address?.streetAddress || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="city">
          City:
        </label>
        <input
          required
          type="text"
          name="address.city"
          value={formData.address?.city || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="stateProvince">
          State Province:
        </label>
        <input
          type="text"
          name="address.stateProvince"
          value={formData.address?.stateProvince || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />
        <label className="block mb-2" htmlFor="postalCode">
          Postal Code:
        </label>
        <input
          type="text"
          name="address.postalCode"
          value={formData.address?.postalCode || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 bg-gray-100 text-black"
        />

        {/*         <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Next: Profile Setup
        </button> */}
      </div>
    </div>
  );
}

export default PersonalInfo;
