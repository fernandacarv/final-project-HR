<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> e431eb0772cd869b771c6018e955b11f03d6ccbb
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
<<<<<<< HEAD
import CreateEmployeePage from "./Pages/CreateEmployeePage";
=======
import EmployeeDetailsPage from "./Pages/EmployeeDetailsPage";
>>>>>>> e431eb0772cd869b771c6018e955b11f03d6ccbb

function App() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
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
          element={<CreateEmployeePage />}></Route>
=======
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<EmployeeDetailsPage />} />
>>>>>>> e431eb0772cd869b771c6018e955b11f03d6ccbb
      </Routes>
    </div>
  );
}

export default App;
