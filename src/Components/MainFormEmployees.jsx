/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
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
    handleBack,
    handleNext,
    handleProfileChange,
    handleJobDetailsChange,
    handleEmergencyContactChange,
    handleSkillsChange,
    handleProfileSetupChange
  } = useContext(MainForm);

  const totalSteps = 5; // Total number of steps in the form

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <PersonalInfo onChange={handleProfileChange} onNext={handleNext} />
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
      {step === 5 && (
        <ProfileSetup
          onChange={handleProfileSetupChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === totalSteps && <button type="submit">Submit</button>}
    </form>
  );



}

export default MainFormEmployees;
