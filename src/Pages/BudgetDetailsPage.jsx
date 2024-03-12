import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";
export default function BudgetDetailsPage() {
  const [budget, setBudget] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleBudget = async () => {
      try {
        const res = await fetch(`${API_URL}/api/budgets/${id}`);
        const data = await res.json();
        setBudget(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleBudget();
  }, [id]);

  useEffect(() => {
    document.title = `${budget.budgetName}`;
  }, [budget]);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/api/budgets/${id}`)
      .then(() => navigate(`/`))
      .catch((error) => console.log(error));
  };

  return (
    <section className="p-8 md:py-0 max-w-7xl mx-auto">
      <div key={budget._id}>
        <article>
          <Link
            to="/budgets"
            className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
          >
            &larr; Back
          </Link>
          <Link to={`/budgets/edit/${budget._id}`}>
            <button>Edit Budget</button>
          </Link>
          <button onClick={handleDelete}>Delete Budget</button>
        </article>

        <article>
          <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
            {budget.budgetName}
          </h1>

          <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
            <li>
              <b>Start Date:</b> {budget.startDate}
            </li>
            <li>
              <b>End Date:</b> {budget.endDate}
            </li>
            <li>
              <b>Currency:</b> {budget.currency}
            </li>
            <li>
              <b>Approval Status:</b> {budget.approvalStatus}
            </li>
            <li>
              <b>Income Categories:</b> <br />
              {budget.incomeCategories ? (
                <>
                  Revenue: {budget.incomeCategories.revenue ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Sales: {budget.incomeCategories.sales ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Interest Income:{" "}
                  {budget.incomeCategories.interestIncome ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Other Income: {budget.incomeCategories.otherIncome ??
                    "N/A"}{" "}
                  {budget.currency}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Expense Categories:</b>
              {budget.expenseCategories ? (
                <>
                  <br />
                  Salaries and Wages:
                  {budget.expenseCategories?.salariesAndWages ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Rent/Lease: {budget.expenseCategories?.rentLease ??
                    "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Utilities: {budget.expenseCategories?.utilities ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Supplies and Materials:
                  {budget.expenseCategories?.suppliesAndMaterials ?? "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Marketing and Advertising:
                  {budget.expenseCategories?.marketingAndAdvertising ??
                    "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Travel and Entertainment:
                  {budget.expenseCategories?.travelAndEntertainment ??
                    "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Maintenance and Repairs:
                  {budget.expenseCategories?.maintenanceAndRepairs ??
                    "N/A"}{" "}
                  {budget.currency},
                  <br />
                  Insurance Premiums:
                  {budget.expenseCategories?.insurancePremiums ?? "N/A"}{" "}
                  {budget.currency}, <br />
                  Taxes: {budget.expenseCategories?.taxes ?? "N/A"}{" "}
                  {budget.currency}, Interest Expense:
                  {budget.expenseCategories?.interestExpense ?? "N/A"}{" "}
                  {budget.currency}
                  ,<br />
                  Depreciation and Amortization:
                  {budget.expenseCategories?.depreciationAndAmortization ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br />
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Budget Amounts:</b>{" "}
              {budget.budgetAmounts ? (
                <>
                  <br /> Revenue: {budget.budgetAmounts.revenue ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Sales: {budget.budgetAmounts.sales ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Interest Income:{" "}
                  {budget.budgetAmounts.interestIncome ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Other Incomes:{" "}
                  {budget.budgetAmounts.otherIncome ?? "N/A"} {budget.currency}
                  <br /> Salaries and Wages:{" "}
                  {budget.budgetAmounts?.salariesAndWages ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Rent Lease: {budget.budgetAmounts?.rentLease ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br /> Utilities: {budget.budgetAmounts.utilities ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br /> Supplies and Materials:{" "}
                  {budget.budgetAmounts.suppliesAndMaterials ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Marketing and Advertising:{" "}
                  {budget.budgetAmounts.marketingAndAdvertising ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Travel and Entertainment:{" "}
                  {budget.budgetAmounts.travelAndEntertainment ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Maintenance and Repairs:{" "}
                  {budget.budgetAmounts.maintenanceAndRepairs ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Insurance Premiums:{" "}
                  {budget.budgetAmounts.insurancePremiums ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Taxes: {budget.budgetAmounts.taxes ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Interest Expense:{" "}
                  {budget.budgetAmounts.interestExpense ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Depreciation and Amortization:{" "}
                  {budget.budgetAmounts.depreciationAndAmortization ??
                    "N/A"}{" "}
                  {budget.currency}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Actual Amounts:</b>{" "}
              {budget.actualAmounts ? (
                <>
                  <br /> Revenue: {budget.actualAmounts.revenue ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Sales: {budget.actualAmounts.sales ?? "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Interest Income:{" "}
                  {budget.actualAmounts.interestIncome ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Other Incomes:{" "}
                  {budget.actualAmounts.otherIncome ?? "N/A"} {budget.currency}
                  <br /> Salaries and Wages:{" "}
                  {budget.actualAmounts?.salariesAndWages ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Rent Lease: {budget.actualAmounts?.rentLease ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Utilities: {budget.actualAmounts.utilities ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Suplies and Materials:{" "}
                  {budget.actualAmounts.suppliesAndMaterials ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Marketing and Advertising:{" "}
                  {budget.actualAmounts.marketingAndAdvertising ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Travel and Entertainment:{" "}
                  {budget.actualAmounts.travelAndEntertainment ?? "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Maintenance and Repairs:{" "}
                  {budget.actualAmounts.maintenanceAndRepairs ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Insurance Premiums:{" "}
                  {budget.actualAmounts.insurancePremiums ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Taxes: {budget.actualAmounts.taxes ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Interest Expense:{" "}
                  {budget.actualAmounts.interestExpense ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Depreciation and Amortization:{" "}
                  {budget.actualAmounts.depreciationAndAmortization ??
                    "N/A"}{" "}
                  {budget.currency}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Variance:</b>
              {budget.variance ? (
                <>
                  <br /> Revenue: {budget.variance.revenue ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Sales: {budget.variance.sales ?? "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Interest Income: {budget.variance.interestIncome ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br /> Other Incomes: {budget.variance.otherIncome ??
                    "N/A"}{" "}
                  {budget.currency}
                  <br /> Salaries and Wages:{" "}
                  {budget.variance.salariesAndWages ?? "N/A"} {budget.currency}
                  <br /> Rent Lease: {budget.variance.rentLease ?? "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Utilities: {budget.variance.utilities ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Suplies and Materi:{" "}
                  {budget.variance.suppliesAndMaterials ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Marketing and Advertising:{" "}
                  {budget.variance.marketingAndAdvertising ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Travel and Entertainment:{" "}
                  {budget.variance.travelAndEntertainment ?? "N/A"}{" "}
                  {budget.currency}
                  <br />
                  Maintenance and Repairs:{" "}
                  {budget.variance.maintenanceAndRepairs ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Insurance Premiums:{" "}
                  {budget.variance.insurancePremiums ?? "N/A"} {budget.currency}
                  <br /> Taxes: {budget.variance.taxes ?? "N/A"}{" "}
                  {budget.currency}
                  <br /> Interest Expense:{" "}
                  {budget.variance.interestExpense ?? "N/A"} {budget.currency}
                  <br /> Depreciation and Amortization:{" "}
                  {budget.variance.depreciationAndAmortization ?? "N/A"}{" "}
                  {budget.currency}
                </>
              ) : (
                "N/A"
              )}
            </li>
            <li>
              <b>Notes & Comments:</b>
              <br />
              {budget.notesComments ?? "N/A"}
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
