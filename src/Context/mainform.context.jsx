/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

const MainForm = React.createContext();

function MainFormProviderWrapper(props) {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      ...formData,
    };
    console.log(requestBody);

    axios
      .post(`${API_URL}/api/employees`, requestBody)
      .then((response) => {
        const { id } = response.data;
        navigate(`/employees/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleProfileChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      profile: data,
    }));
  };

  const handleJobDetailsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      jobDetails: data,
    }));
  };

  const handleSkillsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: data,
    }));
  };

  const handleProfileSetupChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      profileSetup: data,
    }));
  };

  const handleEmergencyContactChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      emergencyContact: data,
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
        handleProfileChange,
        handleJobDetailsChange,
        handleSkillsChange,
        handleProfileSetupChange,
        handleEmergencyContactChange,
        handleSubmit,
        handleBack,
        handleNext,
      }}>
      {props.children}
    </MainForm.Provider>
  );
}

export { MainForm, MainFormProviderWrapper };
