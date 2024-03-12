import React, { useContext, useEffect } from "react";
import { MainForm } from "../../Context/mainform.context";

function ProfileSetup({ onChange, onNext, onBack }) {
  const { formData, setFormData, uploadFile } = useContext(MainForm);

  useEffect(() => {
    // Assuming you want to fetch and set the data when the component mounts
    const fetchData = async () => {
      // Fetch your data and update the form data using setFormData
      // Example: const response = await fetchYourData();
      // setFormData(response.data);
    };

    fetchData();
  }, [setFormData]);

  // Function to handle document and image files change
  const handleChange = async (e, type) => {
    const files = e.target.files; // Get the selected files
    const file = files[0]; // Assuming you are handling a single file
    if (file) {
      const fileUrl = await uploadFile(file, type);
      setFormData((prevData) => ({
        ...prevData,
        [type]: fileUrl,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h4>Profile Setup</h4>
      <br />
      <label htmlFor="imageUrl">Upload Profile Picture</label>
      <input
        type="file"
        id="imageUrl"
        onChange={(e) => handleChange(e, "imageUrl")}
        name="imageUrl"
      />
      <br />
      <label htmlFor="uploadedDocuments.fileUrl">Upload Documents</label>
      <input
        type="file"
        id="uploadedDocuments.fileUrl"
        onChange={(e) => handleChange(e, "uploadedDocuments.fileUrl")}
        name="uploadedDocuments.fileUrl"
        multiple // Allow multiple file selection
      />
      <br />
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Job Details</button>
    </div>
  );
}

export default ProfileSetup;
