/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

const MainForm = React.createContext();
const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      ...formData,
    };
    console.log(requestBody);

    axios
      .post(`${API_URL}/api/employees`, requestBody)
      .then((response) => {
        const id = response.data._id;
        navigate(`/employees/${id}`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getEmployee = () => {
      axios
        .get(`${API_URL}/api/employees/${id}`)
        .then((response) => {
          console.log(response.data);
          const employeeData = response.data;
          setEmployee(employeeData);
        })
        .catch((error) => console.log(error));
    };

    getEmployee();
    console.log(employee);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const requestBody = {
      ...employee,
    };
    console.log(requestBody);

    axios
      .put(`${API_URL}/api/employees/${id}`, requestBody)
      .then((response) => {
        const id = response.data._id;
        navigate(`/employees/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleProfileChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
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
        handleProfileChange,
        handleJobDetailsChange,
        handleSkillsChange,
        handleProfileSetupChange,
        handleEmergencyContactChange,
        handleSubmit,
        handleBack,
        handleNext,
      }}
    >
      handleUpdate, }}>
      {props.children}
    </MainForm.Provider>
  );
}

export { MainForm, MainFormProviderWrapper };
