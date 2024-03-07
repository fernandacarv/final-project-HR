/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import JobDetails from "./Employees-form/JobDetails";
import EmergencyContact from "./Employees-form/EmergencyContact";
import PersonalInfo from "./Employees-form/PersonalInfo";
// import ProfileSetup from "./Employees-form/Profile-Setup";
import Skills from "./Employees-form/Skills";

function MainFormEmployees() {
  const [formData, setFormData] = useState({
    jobDetails: {
      jobTitle: "",
      departmentID: "",
      managerID: "",
      startDate: "",
      endDate: "",
      salary: "",
      currency: "",
      weeklyWorkHours: "",
      healthInsurance: false,
      retirementPlans: false,
    },
    emergencyContact: {
      name: "",
      phoneNumber: "",
      relationship: "",
    },
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      stateProvince: "",
      postalCode: "",
    }, // Initialize personalInfo object
    /*   profileSetup: {
      
    } */ // Initialize profileSetup object
    skills: {
      skills: "",
      education: "",
      performanceReviews: "",
      goals: "",
    },
  });
  const [step, setStep] = useState(1); // For tracking form steps

  const handleChange = (data) =>
    setFormData((prevData) => ({
      ...prevData,
      skills: data,
      personalInfo: data,
      jobDetails: data,
      emergencyContact: data,
    }));
  /*
  const handleJobDetailsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      jobDetails: data,
    }));
  };

  const handleSkillsChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      Skills: data,
    }));
  };

  /*const handleProfileSetupChange = (data) => {
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
  }; */

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  console.log(step)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
  };

  const totalSteps = 4; // Total number of steps in the form

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <PersonalInfo
          formData={formData.personalInfo}
          onChange={handleSubmit}
          onNext={handleNext}
        />
      )}
      {/*{step === 2 && (
        <ProfileSetup
          onChange={handleProfileSetupChange}
          onNext={handleNext}
      /> 
      )} */}
      {step === 2 && (
        <JobDetails
          formData={formData.jobDetails}
          onChange={handleSubmit}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <EmergencyContact
          formData={formData.emergencyContact}
          onChange={handleSubmit}
          onNext={handleNext}
        />
      )}
      {step === 4 && (
        <Skills
          formData={formData.skills}
          onChange={handleSubmit}
          onNext={handleNext}
        />
      )}
      {/* Check if it's not the last step to show submit button */}
      {step < totalSteps && <button type="submit">Submit</button>}
    </form>
  );
}

export default MainFormEmployees;
