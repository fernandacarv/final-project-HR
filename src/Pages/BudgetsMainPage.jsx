import { useState, useEffect } from "react";
import axios from "axios";
import BudgetCard from "../Components/BudgetCard";
import FilterBarBudget from "../Components/FilterBarBudget";

const API_URL = "http://localhost:5005";

function BudgetsMainPage() {
  const [budgets, setBudgets] = useState([]);
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/budgets`)
      .then((response) => {
        const budgetsData = response.data;
        setAllBudgets(budgetsData);
        setFilteredBudgets(budgetsData); // Set filtered budgets initially to all budgets
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilterChange = (departmentID) => {
    if (departmentID) {
      const filtered = allBudgets.filter(
        (budget) => budget.budgetName === budgetName
      );
      setFilteredBudgets(filtered);
    } else {
      // If no department is selected, show all the budgets
      setFilteredBudgets(allBudgets);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = allBudgets.filter((budgets) => {
        const budgetInfo =
          `${budget.budgetName} ${budget.startDate} ${budget.endDate}`.toLowerCase();
        return budgetInfo.includes(query.toLowerCase());
      });
      setFilteredBudgets(filtered);
    } else {
      // If search query is empty, show all the budgets
      setFilteredBudgets(allBudgets);
    }
  };

  useEffect(() => {}, [filteredBudgets]);

  return (
    <div className="BudgetsMainPage">
      <div className="flex justify-content">
        <FilterBarBudget onFilterChange={handleFilterChange} />
        <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      </div>

      <div className="flex justify-between items-center p-2 font-bold border-b">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Budget Name</span>
        <span style={{ flexBasis: "20%" }}>Department</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {filteredBudgets.map((budget, index) => (
        <BudgetCard
          key={budget._id}
          {...budget}
          className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
        />
      ))}
    </div>
  );
}

export default BudgetsMainPage;
