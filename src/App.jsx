/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EmployeeDetailsPage from "./Pages/EmployeeDetailsPage";
import CreateEmployeePage from "./Pages/CreateEmployeePage";
import { MainFormProviderWrapper } from "./Context/mainform.context";
import EmployeeEditPage from "./Pages/EmployeeEditPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BudgetFormProviderWrapper } from "./Context/budget.context";
import CreateBudgetPage from "./Pages/CreateBudgetPage";
import BudgetDetailsPage from "./Pages/BudgetDetailsPage";
import BudgetEditPage from "./Pages/BudgetEditPage";
import BudgetsMainPage from "./Pages/BudgetsMainPage";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/newemployee"
            element={
              <MainFormProviderWrapper>
                <CreateEmployeePage />
              </MainFormProviderWrapper>
            }
          />
          <Route
            path="/employees/:id"
            element={<EmployeeDetailsPage />}
          />
          <Route
            path="/employees/edit/:id"
            element={
              <MainFormProviderWrapper>
                <EmployeeEditPage />
              </MainFormProviderWrapper>
            }
          />
          <Route
            path="/newbudget"
            element={
              <BudgetFormProviderWrapper>
                <CreateBudgetPage />
              </BudgetFormProviderWrapper>
            }
          />
          <Route path="/budgets" element={<BudgetsMainPage />} />
          <Route path="/budgets/:id" element={<BudgetDetailsPage />} />
          <Route
            path="/budgets/edit/:id"
            element={
              <BudgetFormProviderWrapper>
                <BudgetEditPage />
              </BudgetFormProviderWrapper>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
