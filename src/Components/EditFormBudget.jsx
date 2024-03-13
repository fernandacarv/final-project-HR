/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
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
    handleBack,
    handleNext,
    handleBudgetsAmounts,
    handleActualAmounts,
    handleExpenseCategories,
    handleBudgetInfo,
    step,
    setStep,
  } = useContext(BudgetForm);

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
    <div>
      <section className="flex-initial">
        <button onClick={handleOnClick} value={1}>
          Edit Main Info
        </button>
        <button onClick={handleOnClick} value={2}>
          Budget Amounts
        </button>
        <button onClick={handleOnClick} value={3}>
          Actual Amount
        </button>
        <button onClick={handleOnClick} value={4}>
          Expenses
        </button>
      </section>

      <form onSubmit={handleUpdate}>
        {renderStep()}
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditFormBudget;
