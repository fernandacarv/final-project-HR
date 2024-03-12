import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const FilterBar = ({ onFilterChange }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/employees`, {
          params: {
            departmentID: selectedDepartment,
          },
        });

        // Notify the parent component about the selected department
        onFilterChange(selectedDepartment);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if the selected department has changed
    if (selectedDepartment !== onFilterChange) {
      fetchData();
    }
  }, [selectedDepartment]);

  return (
    <div>
      <label>Select Department:</label>
      <select onChange={(e) => setSelectedDepartment(e.target.value)}>
        <option value="">All Departments</option>
        <option value="Web Development">Web Development</option>
        <option value="Financing">Financing</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="Design">Design</option>
      </select>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default FilterBar;
