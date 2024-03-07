/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateEmployeePage from "./Pages/CreateEmployeePage";

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
          element={<CreateEmployeePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
