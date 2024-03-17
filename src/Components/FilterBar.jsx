import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://finalproject-hr-server.onrender.com";
/* "https://finalproject-hr-server.onrender.com" */

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
    <div className="flex items-center">
      <label className="mr-2">Select Department:</label>
      <select
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Departments</option>
        <option value="Web Development">Web Development</option>
        <option value="Financing">Financing</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="Design">Design</option>
      </select>
      {/* {loading && <p className="ml-2">Loading...</p>} */}
    </div>
  );
};

export default FilterBar;
