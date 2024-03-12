import { useState, useEffect } from "react";
import axios from "axios";
import FilterBar from "../Components/FilterBar";
import EmployeeCard from "../Components/EmployeeCard";
import SearchBar from "../Components/SearchBar";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = "http://localhost:5005";

// ... (import statements)

function EmployeesMainPage() {
  const [allEmployees, setAllEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/employees`)
      .then((response) => {
        const employeesData = response.data;
        setAllEmployees(employeesData);
        setFilteredEmployees(employeesData); // Set filtered employees initially to all employees
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilterChange = (departmentID) => {
    if (departmentID) {
      const filtered = allEmployees.filter(
        (employee) => employee.jobDetails.departmentID === departmentID
      );
      setFilteredEmployees(filtered);
    } else {
      // If no department is selected, show all employees
      setFilteredEmployees(allEmployees);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = allEmployees.filter((employee) => {
        const employeeInfo =
          `${employee.firstName} ${employee.lastName} ${employee.contactInformation.emailAddress}`.toLowerCase();
        return employeeInfo.includes(query.toLowerCase());
      });
      setFilteredEmployees(filtered);
    } else {
      // If search query is empty, show all employees
      setFilteredEmployees(allEmployees);
    }
  };

  useEffect(() => {}, [filteredEmployees]);

  return (
    <div className="EmployeesPage">
      <div className="flex justify-content">
        <FilterBar onFilterChange={handleFilterChange} />
        <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      </div>

      <div className="flex justify-between items-center p-2 font-bold border-b">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}>
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Department</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {filteredEmployees.map((employee, index) => (
        <EmployeeCard
          key={employee._id}
          {...employee}
          className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
        />
      ))}
    </div>
  );
}
export default EmployeesMainPage;
