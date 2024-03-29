import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://finalproject-hr-server.onrender.com";

export default function BudgetDetailsPage() {
  const [budget, setBudget] = useState({});
  const { id } = useParams();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this budget?"
    );
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/api/budgets/${id}`)
        .then(() => navigate(`/api/budgets`))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="flex items-center justify-center h-full p-6 w-screen">
      <section className="p-8 mx-auto w-1/3 bg-gray-200 border rounded mt-6">
        <div key={budget._id}>
          <article className="">
            <h2 className="mb-8 font-bold text-gray-600 mt-4 text-2xl">
              {budget.budgetName}
            </h2>

            <div className="text-gray-600">
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                <b>Start Date:</b> {budget.startDate}
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                <b>End Date:</b> {budget.endDate}
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                <b>Currency:</b> {budget.currency}
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                <b>Approval Status:</b> {budget.approvalStatus}
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                <b>Notes & Comments:</b>
                <br />
                {budget.notesComments ?? "N/A"}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="self-center bg-blue-500 px-6 py-2 text-white font-semibold rounded shadow hover:bg-blue-600 transition-all duration-200 ml-4 mt-2">
                  {showMoreInfo ? "Hide More Info" : "Show More Info"}
                </button>
              </div>
              <article className="flex align-center content-between mt-4">
                <Link
                  to="/budgets"
                  className="btn btn-active text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400">
                  Back
                </Link>
                <Link to={`/budgets/edit/${budget._id}`}>
                  <button className="btn btn-active btn-primary hover:bg-blue-600 text-white px-4 py-2 rounded shadow ml-4">
                    Edit Budget
                  </button>
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn btn-error hover:bg-red-600 text-white px-4 py-2 rounded shadow ml-4">
                  Delete Budget
                </button>
              </article>
              {showMoreInfo && (
                <>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                    <b>Income Categories:</b> <br />
                    {budget.incomeCategories ? (
                      <>
                        {" "}
                        Revenue: {budget.incomeCategories.revenue ?? "N/A"}{" "}
                        {budget.currency}, Sales:{" "}
                        {budget.incomeCategories.sales ?? "N/A"}{" "}
                        {budget.currency}
                        Interest Income:{" "}
                        {budget.incomeCategories.interestIncome ?? "N/A"}{" "}
                        {budget.currency}
                        Other Income:{" "}
                        {budget.incomeCategories.otherIncome ?? "N/A"}{" "}
                        {budget.currency}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                    <b>Expense Categories:</b>
                    {budget.expenseCategories ? (
                      <>
                        <br />
                        Salaries and Wages:
                        {budget.expenseCategories?.salariesAndWages ??
                          "N/A"}{" "}
                        {budget.currency},
                        <br />
                        Rent/Lease:{" "}
                        {budget.expenseCategories?.rentLease ?? "N/A"}{" "}
                        {budget.currency},
                        <br />
                        Utilities:{" "}
                        {budget.expenseCategories?.utilities ?? "N/A"}{" "}
                        {budget.currency},
                        <br />
                        Supplies and Materials:
                        {budget.expenseCategories?.suppliesAndMaterials ??
                          "N/A"}{" "}
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
                        {budget.expenseCategories?.insurancePremiums ??
                          "N/A"}{" "}
                        {budget.currency}, <br />
                        Taxes: {budget.expenseCategories?.taxes ?? "N/A"}{" "}
                        {budget.currency}, Interest Expense:
                        {budget.expenseCategories?.interestExpense ??
                          "N/A"}{" "}
                        {budget.currency}
                        ,<br />
                        Depreciation and Amortization:
                        {budget.expenseCategories
                          ?.depreciationAndAmortization ?? "N/A"}{" "}
                        {budget.currency}
                        <br />
                      </>
                    ) : (
                      "N/A"
                    )}
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
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
                        {budget.budgetAmounts.otherIncome ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Salaries and Wages:{" "}
                        {budget.budgetAmounts?.salariesAndWages ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Rent Lease:{" "}
                        {budget.budgetAmounts?.rentLease ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Utilities:{" "}
                        {budget.budgetAmounts.utilities ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Supplies and Materials:{" "}
                        {budget.budgetAmounts.suppliesAndMaterials ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Marketing and Advertising:{" "}
                        {budget.budgetAmounts.marketingAndAdvertising ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Travel and Entertainment:{" "}
                        {budget.budgetAmounts.travelAndEntertainment ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Maintenance and Repairs:{" "}
                        {budget.budgetAmounts.maintenanceAndRepairs ??
                          "N/A"}{" "}
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
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
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
                        {budget.actualAmounts.otherIncome ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Salaries and Wages:{" "}
                        {budget.actualAmounts?.salariesAndWages ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Rent Lease:{" "}
                        {budget.actualAmounts?.rentLease ?? "N/A"}{" "}
                        {budget.currency}
                        <br />
                        Utilities: {budget.actualAmounts.utilities ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Supplies and Materials:{" "}
                        {budget.actualAmounts.suppliesAndMaterials ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Marketing and Advertising:{" "}
                        {budget.actualAmounts.marketingAndAdvertising ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br /> Travel and Entertainment:{" "}
                        {budget.actualAmounts.travelAndEntertainment ??
                          "N/A"}{" "}
                        {budget.currency}
                        <br />
                        Maintenance and Repairs:{" "}
                        {budget.actualAmounts.maintenanceAndRepairs ??
                          "N/A"}{" "}
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
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-100 md:space-y-0 space-y-1 p-4 border-b">
                    <b>Variance:</b>
                    {budget.variance ? (
                      <>
                        <br /> Revenue: {budget.variance.revenue ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Sales: {budget.variance.sales ?? "N/A"}{" "}
                        {budget.currency}
                        <br />
                        Interest Income:{" "}
                        {budget.variance.interestIncome ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Other Incomes:{" "}
                        {budget.variance.otherIncome ?? "N/A"} {budget.currency}
                        <br /> Salaries and Wages:{" "}
                        {budget.variance.salariesAndWages ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Rent Lease: {budget.variance.rentLease ??
                          "N/A"}{" "}
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
                        {budget.variance.insurancePremiums ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Taxes: {budget.variance.taxes ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Interest Expense:{" "}
                        {budget.variance.interestExpense ?? "N/A"}{" "}
                        {budget.currency}
                        <br /> Depreciation and Amortization:{" "}
                        {budget.variance.depreciationAndAmortization ??
                          "N/A"}{" "}
                        {budget.currency}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </div>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
