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
    <div>
      <h4>Budget Amounts</h4>
      <label htmlFor="budgetAmounts.revenue">Revenue:</label>
      <input
        type="number"
        name="budgetAmounts.revenue"
        value={formData.budgetAmounts?.revenue || ""}
        onChange={handleChange}
        className={`form-control`}
      />
      <label htmlFor="sales">Sales:</label>
      <input
        type="number"
        name="budgetAmounts.sales"
        value={formData.budgetAmounts?.sales || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="interestIncome">Interest Income:</label>
      <input
        type="number"
        name="budgetAmounts.interestIncome"
        value={formData.budgetAmounts?.interestIncome || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="otherIncome">Other Income</label>
      <input
        name="budgetAmounts.otherIncome"
        value={formData.budgetAmounts?.otherIncome}
        onChange={handleChange}
        className="form-control"
      ></input>
      <label htmlFor="salariesAndWages">Salaries and Wages:</label>
      <input
        type="number"
        name="budgetAmounts.salariesAndWages"
        value={formData.budgetAmounts?.salariesAndWages}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="rentLease">Rent Lease</label>
      <input
        type="number"
        name="budgetAmounts.rentLease"
        value={formData.budgetAmounts?.rentLease || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="utilities">Utilities</label>
      <input
        type="number"
        name="budgetAmounts.utilities"
        value={formData.budgetAmounts?.utilities || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="suppliesAndMaterials">Supplies and Materials:</label>
      <input
        type="number"
        name="budgetAmounts.suppliesAndMaterials"
        value={formData.budgetAmounts?.suppliesAndMaterials || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="marketingAndAdvertising">Marketing and Advertising</label>
      <input
        type="number"
        name="budgetAmounts.marketingAndAdvertising"
        value={formData.budgetAmounts?.marketingAndAdvertising || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="travelAndEntertainment">Travel and Entertainment</label>
      <input
        type="number"
        name="budgetAmounts.travelAndEntertainment"
        value={formData.budgetAmounts?.travelAndEntertainment || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="maintenanceAndRepairs">Maintenance and Repairs</label>
      <input
        type="number"
        name="budgetAmounts.maintenanceAndRepairs"
        value={formData.budgetAmounts?.maintenanceAndRepairs || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="insurancePremiums">Insurance Premiums</label>
      <input
        type="number"
        name="budgetAmounts.insurancePremiums"
        value={formData.budgetAmounts?.insurancePremiums || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="taxes">Taxes</label>
      <input
        type="number"
        name="budgetAmounts.taxes"
        value={formData.budgetAmounts?.taxes || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="interestExpense">interest Expense</label>
      <input
        type="number"
        name="budgetAmounts.interestExpense"
        value={formData.budgetAmounts?.interestExpense || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="depreciationAndAmortization">
        Depreciation and Amortization
      </label>
      <input
        type="number"
        name="budgetAmounts.depreciationAndAmortization"
        value={formData.budgetAmounts?.depreciationAndAmortization || ""}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default BudgetAmounts;
