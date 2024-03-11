/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EmployeeDetailsPage from "./Pages/EmployeeDetailsPage";
import CreateEmployeePage from "./Pages/CreateEmployeePage";
import { MainFormProviderWrapper } from "./Context/mainform.context";
import EmployeeEditPage from "./Pages/EmployeeEditPage";
import NavbarComponent from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/newemployee"
            element={
              <MainFormProviderWrapper>
                <CreateEmployeePage />
              </MainFormProviderWrapper>
            }
          />
          <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
          <Route
            path="/employees/edit/:id"
            element={
              <MainFormProviderWrapper>
                <EmployeeEditPage />
              </MainFormProviderWrapper>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
