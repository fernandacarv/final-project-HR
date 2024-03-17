/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import ProfileSetup from "./Employees-form/ProfileSetup";
import JobDetails from "./Employees-form/JobDetails";
import EmergencyContact from "./Employees-form/EmergencyContact";
import PersonalInfo from "./Employees-form/PersonalInfo";
// import ProfileSetup from "./Employees-form/Profile-Setup";
import Skills from "./Employees-form/Skills";
import { MainForm } from "../Context/mainform.context";

function MainFormEmployees() {
  const {
    step,
    handleSubmit,
    setStep,
    handleProfileChange,
    handleJobDetailsChange,
    handleEmergencyContactChange,
    handleSkillsChange,
    handleProfileSetupChange,
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

  const totalSteps = 5; // Total number of steps in the form

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
          <div className="flex justify-center">
            {step === totalSteps && (
              <button
                className="btn btn-active btn-primary hover:bg-blue-600 text-white px-4 py-2 rounded flex justify-center"
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </section>

      <form className="flex flex-row bg-gray-900" onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
}

export default MainFormEmployees;
