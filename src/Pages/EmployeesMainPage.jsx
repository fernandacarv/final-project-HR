import { useState, useEffect } from "react";
import axios from "axios";
import FilterBar from "../Components/FilterBar";
import EmployeeCard from "../Components/EmployeeCard";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";

const API_URL ="https://finalproject-hr-server.onrender.com";

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
      <div className="flex justify-end items-center m-4">
        <Link to="/newemployee">
          <button className=" rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mx-4 self-start">
            New Employee
          </button>
        </Link>
        <FilterBar onFilterChange={handleFilterChange} />
        <SearchBar
          onSearch={handleSearch}
          suggestions={suggestions}
        />
      </div>

      <div className="flex justify-between items-center p-6 font-bold border-b">
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
          className={index % 2 === 0 ? "bg-slate-600" : "bg-slate-500"}
        />
      ))}
    </div>
  );
}
export default EmployeesMainPage;
