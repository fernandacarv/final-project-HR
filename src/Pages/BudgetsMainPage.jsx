import { useState, useEffect } from "react";
import axios from "axios";
import BudgetCard from "../Components/BudgetCard";
import FilterBarBudget from "../Components/FilterBarBudget";
import SearchBar from "../Components/SearchBar"; // Make sure to import SearchBar

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
        setBudgets(budgetsData); // Fix the variable name here
        setFilteredBudgets(budgetsData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilterChange = ({ status, currency }) => {
    if (status || currency) {
      const filtered = budgets.filter(
        (budget) =>
          (status ? budget.approvalStatus === status : true) &&
          (currency ? budget.currency === currency : true)
      );
      setFilteredBudgets(filtered);
    } else {
      setFilteredBudgets(budgets);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = budgets.filter((budget) => {
        const budgetInfo =
          `${budget.budgetName} ${budget.startDate} ${budget.endDate}`.toLowerCase();
        return budgetInfo.includes(query.toLowerCase());
      });
      setFilteredBudgets(filtered);
    } else {
      setFilteredBudgets(budgets);
    }
  };

  useEffect(() => {}, [filteredBudgets]);

  return (
      <div className="BudgetsMainPage">
        <div className="flex justify-content">
          <FilterBarBudget onFilterChange={handleFilterChange} />
          <SearchBar
            onSearch={handleSearch}
            suggestions={suggestions}
          />
        </div>

        <div className="flex justify-between items-center p-2 font-bold border-b">
          <span
            className="flex items-center justify-center"
            style={{ flexBasis: "20%" }}>
            Budget Name
          </span>
          <span style={{ flexBasis: "20%" }}>Start Date</span>
          <span style={{ flexBasis: "20%" }}>End Date</span>
          <span style={{ flexBasis: "20%" }}>Approval Status</span>
          <span style={{ flexBasis: "20%" }}>Currency</span>
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
