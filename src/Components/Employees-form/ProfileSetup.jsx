import React, { useContext, useEffect, useState } from "react";
import { MainForm } from "../../Context/mainform.context";
import axios from "axios";

function ProfileSetup({ onChange, onNext, onBack }) {
  const { formData, setFormData, uploadFile } = useContext(MainForm);
  const [imageUrl, setImageUrl] = useState(null);
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);

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
  const handleChange = (url) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: url,
    }));
    console.log(formData);
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const handleFileUpload = async (e) => {
    try {
      // Disable the submit form button while waiting for the image URL from Cloudinary
      setWaitingForImageUrl(true);

      // Check if we receive the file path correctly
      console.log("The file to be uploaded is: ", e.target.files[0]);

      // Create URL including your personal Cloudinary Name
      const url = `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_NAME
      }/upload`;

      const dataToUpload = new FormData();
      // Properties need to have those specific names!!!
      dataToUpload.append("file", e.target.files[0]);
      // VITE_UNSIGNED_UPLOAD_PRESET => name of the unsigned upload preset created in your Cloudinary account
      dataToUpload.append(
        "upload_preset",
        import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET
      );

      const response = await axios.post(url, dataToUpload);

      // To see the structure of the response
      console.log("RESPONSE ", response.data);

      // The image URL is stored in the property secure_url
      setImageUrl(response.data.secure_url);
      setWaitingForImageUrl(false);
      handleChange(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading the file:", error);
      // Handle errors if needed
    }
  };

  return (
    <div>
      <h4>Profile Setup</h4>
      <br />
      <label htmlFor="imageUrl">Upload Profile Picture</label>
      <input
        type="file"
        id="imageUrl"
        onChange={(e) => handleFileUpload(e)}
        name="imageUrl"
      />
      <br />
      {imageUrl && <img src={imageUrl} alt="my cloudinary image" />}
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Job Details</button>
    </div>
  );
}

export default ProfileSetup;
