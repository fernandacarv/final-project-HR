import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EmployeeDetailsPage from "./Pages/EmployeeDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<EmployeeDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
