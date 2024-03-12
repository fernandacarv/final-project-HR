/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import BudgetInfo from "./Budget-form/BudgetInfo";
import { BudgetForm } from "../Context/budget.context";
import ExpenseCategories from "./Budget-form/ExpenseCategories";
// IMPORT BUDGET CONTEXT

function CreateFormBudget() {
  const {
    step,
    handleSubmit,
    handleBack,
    handleNext,
    handleBudgetChange,
    handleChange,
    handleBudgetInfo,
    handleExpenseCategories,
    handleBudgetAmounts,
    handleActualAmounts,
    handleComments,
  } = useContext(BudgetForm);

  return (
    <form onSubmit={handleSubmit}>
      <BudgetInfo onChange={handleSubmit} />
      <ExpenseCategories onChange={handleSubmit} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateFormBudget;
