import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Employee Management</h2>
        <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/register" element={<EmployeeForm />} />
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
