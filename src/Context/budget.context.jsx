import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://finalproject-hr-server.onrender.com";

const BudgetForm = React.createContext();
const defaultValues = {
  budgetName: "",
  startDate: "",
  endDate: "",
  currency: "",
  incomeCategories: {
    revenue: "",
    sales: "",
    interestIncome: "",
    otherIncome: "",
  },
  expenseCategories: {
    salariesAndWages: "",
    rentLease: "",
    utilities: "",
    suppliesAndMaterials: "",
    marketingAndAdvertising: "",
    travelAndEntertainment: "",
    maintenanceAndRepairs: "",
    insurancePremiums: "",
    taxes: "",
    interestExpense: "",
    depreciationAndAmortization: "",
  },
  budgetAmounts: {
    revenue: "",
    sales: "",
    interestIncome: "",
    otherIncome: "",
    salariesAndWages: "",
    rentLease: "",
    utilities: "",
    suppliesAndMaterials: "",
    marketingAndAdvertising: "",
    travelAndEntertainment: "",
    maintenanceAndRepairs: "",
    insurancePremiums: "",
    taxes: "",
    interestExpense: "",
    depreciationAndAmortization: "",
  },
  actualAmounts: {
    revenue: "",
    sales: "",
    interestIncome: "",
    otherIncome: "",
    salariesAndWages: "",
    rentLease: "",
    utilities: "",
    suppliesAndMaterials: "",
    marketingAndAdvertising: "",
    travelAndEntertainment: "",
    maintenanceAndRepairs: "",
    insurancePremiums: "",
    taxes: "",
    interestExpense: "",
    depreciationAndAmortization: "",
  },
  variance: {
    revenue: "",
    sales: "",
    interestIncome: "",
    otherIncome: "",
    salariesAndWages: "",
    rentLease: "",
    utilities: "",
    suppliesAndMaterials: "",
    marketingAndAdvertising: "",
    travelAndEntertainment: "",
    maintenanceAndRepairs: "",
    insurancePremiums: "",
    taxes: "",
    interestExpense: "",
    depreciationAndAmortization: "",
  },
  notesComments: "",
  approvalStatus: "",
};

function BudgetFormProviderWrapper(props) {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState({ ...defaultValues });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBudget = () => {
      if (id) {
        axios
          .get(`${API_URL}/api/budgets/${id}`)
          .then((response) => {
            console.log(response.data);
            const budgetData = response.data;
            setBudget(budgetData);
            setFormData(budgetData);
          })
          .catch((error) => console.log(error));
      }
    };

    getBudget();
  }, [id]);

  const handleRequest = (method) => (e) => {
    e.preventDefault();

    const requestBody = {
      ...formData,
    };

    const apiEndpoint = id
      ? `${API_URL}/api/budgets/${id}`
      : `${API_URL}/api/budgets`;

    axios
      .request({ method, url: apiEndpoint, data: requestBody })
      .then((response) => {
        const id = response.data._id;
        const routePath = id ? `/budgets/${id}` : "/budgets";
        navigate(routePath);
      })
      .catch((error) => console.log(error));
  };

  const handleBudgetInfo = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleBudgetAmounts = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleActualAmounts = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleExpenseCategories = (data) => {
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
    <BudgetForm.Provider
      value={{
        formData,
        setFormData,
        setStep,
        step,
        handleBudgetInfo,
        handleBudgetAmounts,
        handleActualAmounts,
        handleExpenseCategories,
        handleEmergencyContactChange,
        handleSubmit: handleRequest("POST"),
        handleUpdate: handleRequest("PUT"),
        handleBack,
        handleNext,
      }}>
      {props.children}
    </BudgetForm.Provider>
  );
}

export { BudgetForm, BudgetFormProviderWrapper };
