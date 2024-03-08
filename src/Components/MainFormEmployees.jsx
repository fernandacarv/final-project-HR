/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import JobDetails from "./Employees-form/JobDetails";
import EmergencyContact from "./Employees-form/EmergencyContact";
import PersonalInfo from "./Employees-form/PersonalInfo";
// import ProfileSetup from "./Employees-form/Profile-Setup";
import Skills from "./Employees-form/Skills";
import { MainForm } from "../Context/mainform.context";

const API_URL = "https://localhost:5005";
function MainFormEmployees() {
  const {
    step,
    handleSubmit,
    handleBack,
    handleNext,
    handleProfileChange,
    handleJobDetailsChange,
    handleEmergencyContactChange,
    handleSkillsChange,
  } = useContext(MainForm);

  const totalSteps = 4; // Total number of steps in the form

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <PersonalInfo
          onChange={handleProfileChange}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <JobDetails
          onChange={handleJobDetailsChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <EmergencyContact
          onChange={handleEmergencyContactChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <Skills
          onChange={handleSkillsChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {/* Check if it's not the last step to show submit button */}
      {step == totalSteps && <button type="submit">Submit</button>}
    </form>
  );
}

export default MainFormEmployees;
