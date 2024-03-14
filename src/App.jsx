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
import NotFoundPage from "./Pages/NotFoundPage";
import EmployeesMainPage from "./Pages/EmployeesMainPage";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import UserPage from "./Pages/UserPage";
import { AuthProviderWrapper } from "./Context/auth.context";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthProviderWrapper>
        <Navbar />
      </AuthProviderWrapper>
      <div className="flex-grow">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={<EmployeesMainPage />} />
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
          <Route
            path="/user"
            element={
              <AuthProviderWrapper>
                <UserPage />
              </AuthProviderWrapper>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
