/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import JobDetails from "./Employees-form/JobDetails";
import EmergencyContact from "./Employees-form/EmergencyContact";
import PersonalInfo from "./Employees-form/PersonalInfo";
// import ProfileSetup from "./Employees-form/Profile-Setup";
import Skills from "./Employees-form/Skills";
import { MainForm } from "../Context/mainform.context";
import { Link } from "react-router-dom";
import ProfileSetup from "./Employees-form/ProfileSetup";

function EditMainForm() {
  const {
    handleUpdate,
    handleBack,
    handleNext,
    handleProfileChange,
    handleJobDetailsChange,
    handleEmergencyContactChange,
    handleSkillsChange,
    handleProfileSetupChange,
    step,
    id,
  } = useContext(MainForm);

  return (
    <form onSubmit={handleUpdate}>
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
      {step === 5 && (
        <ProfileSetup
          onChange={handleProfileSetupChange}
          onBack={handleBack}
        />
      )}
      <div className="flex justify-center py-4 bg-gray-800">
        <Link to={`/employees/${id}`}>
          <button className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded mr-2">
            Back
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          type="submit">
          Edit
        </button>
      </div>
    </form>
  );
}

export default EditMainForm;
