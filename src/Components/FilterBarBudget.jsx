import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function FilterBarBudget({ onFilterChange }) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/budgets`, {
          params: {
            approvalStatus: selectedStatus,
            currency: selectedCurrency,
          },
        });

        // Notify the parent component about the selected status and currency
        onFilterChange({ status: selectedStatus, currency: selectedCurrency });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if either the selected status or currency has changed
    if (selectedStatus !== "" || selectedCurrency !== "") {
      fetchData();
    }
  }, [selectedStatus, selectedCurrency]);

  return (
    <div>
      <label>Select Status:</label>
      <select onChange={(e) => setSelectedStatus(e.target.value)}>
        <option value="">All Departments</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      <label>Select Currency:</label>
      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        <option value="" unselectable>
          <b>Currency</b>
        </option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="BRL">BRL</option>
        <option value="JPY">JPY</option>
      </select>

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default FilterBarBudget;
