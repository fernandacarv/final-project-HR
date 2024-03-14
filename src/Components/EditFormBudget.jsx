import React, { useContext, useState } from "react";
import { BudgetForm } from "../Context/budget.context";
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

  const handleOnClick = (e, stepNumber) => {
    setStep(stepNumber);
    setActiveStep(stepNumber);
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
      <section className="flex flex-col p-16 bg-gray-900 steps steps-vertical rounded">
        <div className="steps steps-vertical">
          <div
            data-content={activeStep > 1 ? "✓" : "1"}
            className={`step step-primary ${activeStep > 1 ? "" : ""}`}>
            <button
              onClick={(e) => handleOnClick(e, 1)}
              className={`text-white hover:text-gray-300 mb-4 ${
                activeStep === 1 ? "step-primary" : ""
              }`}>
              Main Information
            </button>
          </div>
          <div
            data-content={activeStep > 2 ? "✓" : "2"}
            className={`step ${activeStep >= 2 ? "step-primary" : ""}`}>
            <button
              onClick={(e) => handleOnClick(e, 2)}
              className={`text-white hover:text-gray-300 mb-4 ${
                activeStep === 2 ? "step-primary" : ""
              }`}>
              Budget Amounts
            </button>
          </div>
          <div
            data-content={activeStep > 3 ? "✓" : "3"}
            className={`step ${activeStep >= 3 ? "step-primary" : ""}`}>
            <button
              onClick={(e) => handleOnClick(e, 3)}
              className={`text-white hover:text-gray-300 mb-4 ${
                activeStep === 3 ? "step-pimary" : ""
              }`}>
              Actual Amount
            </button>
          </div>
          <div className={`step  ${activeStep === 4 ? "step-primary" : ""}`}>
            <button
              onClick={(e) => handleOnClick(e, 4)}
              className={`text-white hover:text-gray-300 mb-4 ${
                activeStep === 4 ? "step-primary" : ""
              }`}>
              Expenses
            </button>
          </div>
        </div>
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
