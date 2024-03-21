/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://localhost:5005";

const MainForm = React.createContext();
const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  imageUrl: "",
  uploadedDocuments: [{ fileName: "", fileUrl: "" }],
  contactInformation: { emailAddress: "", phoneNumber: "" },
  address: { streetAddress: "", city: "", stateProvince: "", postalCode: "" },
  jobDetails: {
    jobTitle: "",
    departmentID: "",
    managerID: "",
    startDate: "",
    endDate: "",
  },
  emergencyContact: { name: "", phoneNumberEmergency: "", relationship: "" },
  skillsAndQualifications: { skills: "", education: "" },
  performanceMetrics: { performanceReviews: "", goals: "" },
};

function MainFormProviderWrapper(props) {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [employee, setEmployee] = useState({ ...defaultValues });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getEmployee = () => {
      if (id) {
        axios
          .get(`${API_URL}/api/employees/${id}`)
          .then((response) => {
            console.log(response.data);
            const employeeData = response.data;
            setEmployee(employeeData);
            setFormData(employeeData);
          })
          .catch((error) => console.log(error));
      }
    };

    getEmployee();
  }, [id]);

  const handleRequest = (method) => (e) => {
    e.preventDefault();

    const requestBody = {
      ...formData,
    };

    const apiEndpoint = id
      ? `${API_URL}/api/employees/${id}`
      : `${API_URL}/api/employees`;

    axios
      .request({ method, url: apiEndpoint, data: requestBody })
      .then((response) => {
        const id = response.data._id;
        const routePath = id ? `/employees/${id}` : "/employees";
        navigate(routePath);
      })
      .catch((error) => console.log(error));
  };

  const uploadFile = async (file) => {
    try {
      // Check if the file is not null or undefined
      if (!file) {
        throw new Error("No file provided for upload.");
      }

      // Create a new FormData instance
      const formData = new FormData();
      // Append the file to the FormData object with the key "file"
      formData.append("file", file);
      console.log(formData);

      // Send a POST request to the server with the FormData containing the file
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Return the URL of the uploaded file from the server response
      return response.data.fileUrl;
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error uploading file:", error);
      // Return null to indicate that the upload failed
      return null;
    }
  };

  const handleProfileChange = async (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    // Check if an image file is present in the data
    if (data.imageUrl) {
      const imageUrl = await uploadFile(data.imageUrl, "imageUrl");
      setFormData((prevData) => ({
        ...prevData,
        imageUrl,
      }));
    }

    // Check if a document file is present in the data
    if (data.documentFile) {
      const fileUrl = await uploadFile(data.documentFile, "fileUrl");
      setFormData((prevData) => ({
        ...prevData,
        uploadedDocuments: [{ fileName: data.documentFile.name, fileUrl }],
      }));
    }
  };

  const handleJobDetailsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSkillsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleProfileSetupChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleEmergencyContactChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <MainForm.Provider
      value={{
        formData,
        setFormData,
        step,
        setStep,
        handleProfileChange,
        handleJobDetailsChange,
        handleSkillsChange,
        handleProfileSetupChange,
        handleEmergencyContactChange,
        handleSubmit: handleRequest("POST"),
        handleUpdate: handleRequest("PUT"),
        handleBack,
        handleNext,
        id,
        uploadFile,
      }}>
      {props.children}
    </MainForm.Provider>
  );
}

export { MainForm, MainFormProviderWrapper };
