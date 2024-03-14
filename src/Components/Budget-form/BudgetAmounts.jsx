import React, { useContext, useEffect, useState } from "react";
import {
  BudgetForm,
  BudgetFormProviderWrapper,
} from "../../Context/budget.context";

function BudgetAmounts({ onChange }) {
  const { formData, setFormData } = useContext(BudgetForm);

  useEffect(() => {
    // Assuming you want to fetch and set the data when the component mounts
    const fetchData = async () => {
      // Fetch your data and update the form data using setFormData
      // Example: const response = await fetchYourData();
      // setFormData(response.data);
    };

    fetchData();
  }, [setFormData]);

  const formatDate = (value) => {
    return value instanceof Date
      ? value.toLocaleDateString("en-CA") // Adjust the locale as needed
      : value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed property is part of a nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: name.includes("date") ? formatDate(new Date(value)) : value,
        },
      }));
    } else {
      // If the changed property is at the top level
      setFormData((prevData) => ({
        ...prevData,
        [name]: name.includes("date") ? formatDate(new Date(value)) : value,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className=" w-full p-6 bg-gray-900 rounded-md shadow-md">
        <h4 className="text-lg font-semibold mb-4">Budget Amounts</h4>

        <label
          className="block mb-2 text-white"
          htmlFor="budgetAmounts.revenue">
          Revenue:
        </label>
        <input
          type="number"
          name="budgetAmounts.revenue"
          value={formData.budgetAmounts?.revenue || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="sales">
          Sales:
        </label>
        <input
          type="number"
          name="budgetAmounts.sales"
          value={formData.budgetAmounts?.sales || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="interestIncome">
          Interest Income:
        </label>
        <input
          type="number"
          name="budgetAmounts.interestIncome"
          value={formData.budgetAmounts?.interestIncome || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="otherIncome">
          Other Income
        </label>
        <input
          name="budgetAmounts.otherIncome"
          value={formData.budgetAmounts?.otherIncome}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"></input>

        <label
          className="block mb-2 text-white"
          htmlFor="salariesAndWages">
          Salaries and Wages:
        </label>
        <input
          type="number"
          name="budgetAmounts.salariesAndWages"
          value={formData.budgetAmounts?.salariesAndWages}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="rentLease">
          Rent Lease
        </label>
        <input
          type="number"
          name="budgetAmounts.rentLease"
          value={formData.budgetAmounts?.rentLease || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="utilities">
          Utilities
        </label>
        <input
          type="number"
          name="budgetAmounts.utilities"
          value={formData.budgetAmounts?.utilities || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="suppliesAndMaterials">
          Supplies and Materials:
        </label>
        <input
          type="number"
          name="budgetAmounts.suppliesAndMaterials"
          value={formData.budgetAmounts?.suppliesAndMaterials || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="marketingAndAdvertising">
          Marketing and Advertising
        </label>
        <input
          type="number"
          name="budgetAmounts.marketingAndAdvertising"
          value={formData.budgetAmounts?.marketingAndAdvertising || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="travelAndEntertainment">
          Travel and Entertainment
        </label>
        <input
          type="number"
          name="budgetAmounts.travelAndEntertainment"
          value={formData.budgetAmounts?.travelAndEntertainment || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="maintenanceAndRepairs">
          Maintenance and Repairs
        </label>
        <input
          type="number"
          name="budgetAmounts.maintenanceAndRepairs"
          value={formData.budgetAmounts?.maintenanceAndRepairs || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="insurancePremiums">
          Insurance Premiums
        </label>
        <input
          type="number"
          name="budgetAmounts.insurancePremiums"
          value={formData.budgetAmounts?.insurancePremiums || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="taxes">
          Taxes
        </label>
        <input
          type="number"
          name="budgetAmounts.taxes"
          value={formData.budgetAmounts?.taxes || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="interestExpense">
          Interest Expense
        </label>
        <input
          type="number"
          name="budgetAmounts.interestExpense"
          value={formData.budgetAmounts?.interestExpense || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="depreciationAndAmortization">
          Depreciation and Amortization
        </label>
        <input
          type="number"
          name="budgetAmounts.depreciationAndAmortization"
          value={formData.budgetAmounts?.depreciationAndAmortization || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />
      </div>
    </div>
  );
}

export default BudgetAmounts;
