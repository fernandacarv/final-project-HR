import React, { useState } from "react";

function ProfileSetup({ onChange, onNext }) {
  const [formData, setFormData] = useState({
    profilePicture: null, // To store the profile picture file
    documents: [], // To store an array of document files
  });

  // Function to handle document files change
  const handleChange = (e) => {
    const files = e.target.files; // Get the selected files
    setFormData((prevData) => ({
      ...prevData,
      documents: files, 
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    onNext(); // Move to the next step
  };

  return (
    <div>
      <h4>Profile Setup</h4>
      <br />
      <label htmlFor="profilePicture">Upload Profile Picture</label>
      <input
        type="file"
        id="profilePicture"
        onChange={handleChange}
        name="profilePicture"
      />
      <br />
      <label htmlFor="documents">Upload Documents</label>
      <input
        type="file"
        id="documents"
        onChange={handleChange}
        name="documents"
        multiple // Allow multiple file selection
      />
      <br />
      <button onClick={handleSubmit}>Next: Job Details</button>
    </div>
  );
}

export default ProfileSetup;
