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
    <div>
      <h4>Budget Main Information</h4>
      <label htmlFor="budgetName">Budget Name:</label>
      <input
        required
        type="text"
        name="budgetName"
        value={formData.budgetName || ""}
        onChange={handleChange}
        className={`form-control`}
      />
      <label htmlFor="approvalStatus">Approval Status:</label>
      <select
        name="approvalStatus"
        value={formData.approvalStatus || ""}
        onChange={handleChange}
        className={`form-control`}
      >
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formData.endDate || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="currency">Currency</label>
      <select
        name="currency"
        value={formData.currency}
        onChange={handleChange}
        className="form-control"
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="JPY">JPY</option>
        <option value="BRL">BRL</option>
      </select>
      <h2></h2>
      <label htmlFor="notesComments">Notes & Comments</label>
      <input
        type="text"
        name="notesComments"
        value={formData.notesComments}
        onChange={handleChange}
        className="form-control"
      />
      <h4>Income Categories</h4>
      <label htmlFor="revenue">Revenue</label>
      <input
        type="text"
        name="incomeCategories.revenue"
        value={formData.incomeCategories?.revenue || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="sales">Sales</label>
      <input
        type="number"
        name="incomeCategories.sales"
        value={formData.incomeCategories?.sales || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="interestIncome">Interest Income</label>
      <input
        type="number"
        name="incomeCategories.interestIncome"
        value={formData.incomeCategories?.interestIncome || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="notesComments">Other Income</label>
      <input
        type="number"
        name="incomeCategories.otherIncome"
        value={formData.incomeCategories?.otherIncome || ""}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default BudgetInfo;
