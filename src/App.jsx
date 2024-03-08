/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EmployeeDetailsPage from "./Pages/EmployeeDetailsPage";
import MainFormEmployees from "./Components/MainFormEmployees";
import CreateEmployeePage from "./Pages/CreateEmployeePage";
import { MainFormProviderWrapper } from "./Context/mainform.context";

function App() {
  return (
    <div>
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
          }></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newemployee" element={<CreateEmployeePage />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<EmployeeDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
