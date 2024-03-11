import React, { useContext, useEffect, useState } from "react";
import {
  BudgetForm,
  BudgetFormProviderWrapper,
} from "../../Context/budget.context";

function ExpenseCategories({ onChange }) {
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
      <h4>Expense Categories</h4>
      <label htmlFor="expenseCategories.salariesAndWages">
        Salaries and Wages
      </label>
      <input
        type="number"
        name="expenseCategories.salariesAndWages"
        value={formData.expenseCategories?.salariesAndWages || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="rentLease">Rent Lease</label>
      <input
        type="number"
        name="expenseCategories.rentLease"
        value={formData.expenseCategories?.rentLease || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="utilities">Utilities</label>
      <input
        type="number"
        name="expenseCategories.utilities"
        value={formData.expenseCategories?.utilities || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="suppliesAndMaterials">Supplies and Materials</label>
      <input
        type="number"
        name="expenseCategories.suppliesAndMaterials"
        value={formData.expenseCategories?.suppliesAndMaterials || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="marketingAndAdvertising">Marketing and Advertising</label>
      <input
        type="number"
        name="expenseCategories.marketingAndAdvertising"
        value={formData.expenseCategories?.marketingAndAdvertising || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="travelAndEntertainment">Travel and Entertainment</label>
      <input
        type="number"
        name="expenseCategories.travelAndEntertainment"
        value={formData.expenseCategories?.travelAndEntertainment || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="maintenanceAndRepairs">Maintenance and Repairs</label>
      <input
        type="number"
        name="expenseCategories.maintenanceAndRepairs"
        value={formData.expenseCategories?.maintenanceAndRepairs || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="insurancePremiums">insurance Premiums</label>
      <input
        type="number"
        name="expenseCategories.insurancePremiums"
        value={formData.expenseCategories?.insurancePremiums || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="taxes">Taxes</label>
      <input
        type="number"
        name="expenseCategories.taxes"
        value={formData.expenseCategories?.taxes || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="interestExpense">Tnterest Expense</label>
      <input
        type="number"
        name="expenseCategories.interestExpense"
        value={formData.expenseCategories?.interestExpense || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="depreciationAndAmortization">
        Depreciation and Amortization
      </label>
      <input
        type="number"
        name="expenseCategories.depreciationAndAmortization"
        value={formData.expenseCategories?.depreciationAndAmortization || ""}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default ExpenseCategories;
