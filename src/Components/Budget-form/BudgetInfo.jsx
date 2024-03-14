import React, { useContext, useEffect, useState } from "react";
import { BudgetForm } from "../../Context/budget.context";

function BudgetInfo({ onChange }) {
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
      <div className="w-full p-6 bg-gray-900 rounded-md shadow-md">
        <h4 className="text-lg font-semibold mb-4">Budget Main Information</h4>

        <label
          className="block mb-2 text-white"
          htmlFor="budgetName">
          Budget Name:
        </label>
        <input
          required
          type="text"
          name="budgetName"
          value={formData.budgetName || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="approvalStatus">
          Approval Status:
        </label>
        <select
          name="approvalStatus"
          value={formData.approvalStatus || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black">
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <label
          className="block mb-2 text-white"
          htmlFor="startDate">
          Start Date:
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="endDate">
          End Date:
        </label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="currency">
          Currency
        </label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="BRL">BRL</option>
        </select>

        <h2></h2>

        <label
          className="block mb-2 text-white"
          htmlFor="notesComments">
          Notes & Comments
        </label>
        <input
          type="text"
          name="notesComments"
          value={formData.notesComments}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <h4 className="text-lg font-semibold mb-2 text-white">
          Income Categories
        </h4>

        <label
          className="block mb-2 text-white"
          htmlFor="revenue">
          Revenue
        </label>
        <input
          type="text"
          name="incomeCategories.revenue"
          value={formData.incomeCategories?.revenue || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="sales">
          Sales
        </label>
        <input
          type="number"
          name="incomeCategories.sales"
          value={formData.incomeCategories?.sales || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="interestIncome">
          Interest Income
        </label>
        <input
          type="number"
          name="incomeCategories.interestIncome"
          value={formData.incomeCategories?.interestIncome || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />

        <label
          className="block mb-2 text-white"
          htmlFor="otherIncome">
          Other Income
        </label>
        <input
          type="number"
          name="incomeCategories.otherIncome"
          value={formData.incomeCategories?.otherIncome || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2 bg-gray-100 text-black"
        />
      </div>
    </div>
  );
}

export default BudgetInfo;
