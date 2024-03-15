/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { MainForm } from "../Context/mainform.context";
import { Link } from "react-router-dom";
import JobDetails from "./Employees-form/JobDetails";
import EmergencyContact from "./Employees-form/EmergencyContact";
import PersonalInfo from "./Employees-form/PersonalInfo";
import Skills from "./Employees-form/Skills";
import ProfileSetup from "./Employees-form/ProfileSetup";

function EditMainForm() {
  const {
    handleUpdate,
    handleProfileChange,
    handleJobDetailsChange,
    handleEmergencyContactChange,
    handleSkillsChange,
    handleProfileSetupChange,
    step,
    id,
    setStep,
  } = useContext(MainForm);

  const [activeStep, setActiveStep] = useState(1);

  const handleOnClick = (e, stepNumber) => {
    setStep(stepNumber);
    setActiveStep(stepNumber);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onChange={handleProfileChange} />;
      case 2:
        return <JobDetails onChange={handleJobDetailsChange} />;
      case 3:
        return <EmergencyContact onChange={handleEmergencyContactChange} />;
      case 4:
        return <Skills onChange={handleSkillsChange} />;
      case 5:
        return <ProfileSetup onChange={handleProfileSetupChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row justify-center align-center p-6">
      <section className="flex flex-col bg-gray-900 p-16 steps steps-vertical rounded">
        <div className="steps steps-vertical">
          <div
            data-content={activeStep > 1 ? "✓" : "1"}
            className={`step step-primary ${activeStep > 1 ? "" : ""}`}
          >
            <button
              onClick={(e) => handleOnClick(e, 1)}
              className="text-white hover:text-gray-300 mb-4"
            >
              Personal Info
            </button>
          </div>
          <div
            data-content={activeStep > 2 ? "✓" : "2"}
            className={`step ${activeStep >= 2 ? "step-primary" : ""}`}
          >
            <button
              onClick={(e) => handleOnClick(e, 2)}
              className={`text-white hover:text-gray-300 mb-4 ${
                activeStep === 2 ? "step-primary" : ""
              }`}
            >
              Job Details
            </button>
          </div>
          <div
            data-content={activeStep > 3 ? "✓" : "3"}
            className={`step ${activeStep >= 3 ? "step-primary" : ""}`}
          >
            <button
              onClick={(e) => handleOnClick(e, 3)}
              className="text-white hover:text-gray-300 mb-4"
            >
              Emergency Contacts
            </button>
          </div>
          <div
            data-content={activeStep > 4 ? "✓" : "4"}
            className={`step ${activeStep >= 4 ? "step-primary" : ""}`}
          >
            <button
              onClick={(e) => handleOnClick(e, 4)}
              className="text-white hover:text-gray-300 mb-4"
            >
              Skills
            </button>
          </div>
          <div
            data-content={activeStep > 5 ? "✓" : "5"}
            className={`step ${activeStep >= 5 ? "step-primary" : ""}`}
          >
            <button
              onClick={(e) => handleOnClick(e, 5)}
              className="text-white hover:text-gray-300 mb-4"
            >
              Profile Picture
            </button>
          </div>
        </div>
        <div className="flex justify-center py-4 bg-gray-800">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
            type="submit"
          >
            Edit
          </button>
          <Link to={`/employees/${id}`}>
            <button className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded">
              Back
            </button>
          </Link>
        </div>
      </section>
      <form className="flex flex-row bg-gray-900" onSubmit={handleUpdate}>
        {renderStep()}
      </form>
    </div>
  );
}

export default EditMainForm;
