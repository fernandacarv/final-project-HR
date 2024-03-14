import React, { useContext, useEffect, useState } from "react";
import {
  BudgetForm,
  BudgetFormProviderWrapper,
} from "../../Context/budget.context";

function ActualAmounts({ onChange }) {
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
        <h4 className="text-lg font-semibold mb-4">Actual Amounts</h4>

        <label
          className="block mb-2 text-white"
          htmlFor="actualAmounts.revenue">
          Revenue:
        </label>
        <input
          type="number"
          name="actualAmounts.revenue"
          value={formData.actualAmounts?.revenue || ""}
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
          name="actualAmounts.sales"
          value={formData.actualAmounts?.sales || ""}
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
          name="actualAmounts.interestIncome"
          value={formData.actualAmounts?.interestIncome || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="otherIncome">
          Other Income
        </label>
        <input
          name="actualAmounts.otherIncome"
          value={formData.actualAmounts?.otherIncome}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"></input>

        <label
          className="block mb-2 text-white"
          htmlFor="salariesAndWages">
          Salaries and Wages:
        </label>
        <input
          type="number"
          name="actualAmounts.salariesAndWages"
          value={formData.actualAmounts?.salariesAndWages}
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
          name="actualAmounts.rentLease"
          value={formData.actualAmounts?.rentLease || ""}
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
          name="actualAmounts.utilities"
          value={formData.actualAmounts?.utilities || ""}
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
          name="actualAmounts.suppliesAndMaterials"
          value={formData.actualAmounts?.suppliesAndMaterials || ""}
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
          name="actualAmounts.marketingAndAdvertising"
          value={formData.actualAmounts?.marketingAndAdvertising || ""}
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
          name="actualAmounts.travelAndEntertainment"
          value={formData.actualAmounts?.travelAndEntertainment || ""}
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
          name="actualAmounts.maintenanceAndRepairs"
          value={formData.actualAmounts?.maintenanceAndRepairs || ""}
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
          name="actualAmounts.insurancePremiums"
          value={formData.actualAmounts?.insurancePremiums || ""}
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
          name="actualAmounts.taxes"
          value={formData.actualAmounts?.taxes || ""}
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
          name="actualAmounts.interestExpense"
          value={formData.actualAmounts?.interestExpense || ""}
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
          name="actualAmounts.depreciationAndAmortization"
          value={formData.actualAmounts?.depreciationAndAmortization || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />
      </div>
    </div>
  );
}

export default ActualAmounts;
