/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
// import ProfileSetup from "./Employees-form/Profile-Setup";
import {
  BudgetForm,
  BudgetFormProviderWrapper,
} from "../Context/budget.context";
import ExpenseCategories from "./Budget-form/ExpenseCategories";
import ActualAmounts from "./Budget-form/ActualAmounts";
import BudgetAmounts from "./Budget-form/BudgetAmounts";
import BudgetInfo from "./Budget-form/BudgetInfo";

function EditFormBudget() {
  const {
    handleUpdate,
    handleBudgetsAmounts,
    handleActualAmounts,
    handleExpenseCategories,
    handleBudgetInfo,
    step,
    setStep,
  } = useContext(BudgetForm);
  const [activeStep, setActiveStep] = useState(1);

  const handleOnClick = (e) => {
    setStep(parseInt(e.target.value));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BudgetInfo onChange={handleBudgetInfo} />;
      case 2:
        return <BudgetAmounts onChange={handleBudgetsAmounts} />;
      case 3:
        return <ActualAmounts onChange={handleActualAmounts} />;
      case 4:
        return <ExpenseCategories onChange={handleExpenseCategories} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row justify-center align-center p-6">
      <section className="flex flex-col p-16 bg-gray-900 steps steps-vertical w-auto rounded">
        <ul className="steps steps-vertical">
          <li className="step step-primary">
            <button
              onClick={(e) => handleOnClick()}
              value={1}
              className="text-white hover:text-gray-300 mb-4">
              Main Information
            </button>
          </li>
          <li className="step step-primary">
            <button
              onClick={(e) => handleOnClick()}
              value={2}
              className="text-white hover:text-gray-300 mb-4">
              Budget Amounts
            </button>
          </li>
          <li className="step step-primary">
            <button
              onClick={(e) => handleOnClick()}
              value={3}
              className="text-white hover:text-gray-300 mb-4">
              Actual Amount
            </button>
          </li>
          <li className="step step-primary">
            <button
              onClick={(e) => handleOnClick()}
              value={4}
              className="text-white hover:text-gray-300 mb-4">
              Expenses
            </button>
          </li>
        </ul>
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit">
          Edit
        </button>
      </section>
      <form
        className="flex flex-row bg-gray-900"
        onSubmit={handleUpdate}>
        {renderStep()}
      </form>
    </div>
  );
}

export default EditFormBudget;
