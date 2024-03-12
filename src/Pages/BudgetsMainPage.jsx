import { useState, useEffect } from "react";
import axios from "axios";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = "http://localhost:5005";

function BudgetsMainPage() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/budgets`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="BudgetsMainPage">
      <div className="flex justify-between items-center p-2 font-bold border-b">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {budets &&
        budgets.map((budget, index) => (
          <StudentCard
            key={budget._id}
            {...budget}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
          />
        ))}
    </div>
  );
}

export default BudgetsMainPage;
