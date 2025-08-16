import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEmployees, filterEmployees } from "../services/EmployeeService";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const loadEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };

  const handleFilter = async () => {
    if (startDate && endDate) {
      const res = await filterEmployees(startDate, endDate);
      setEmployees(res.data);
    } else {
      loadEmployees();
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="card p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Employee List</h4>
        <Link to="/register" className="btn btn-primary">
          + Add Employee
        </Link>
      </div>

      {/* Filter Section */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleFilter}>
          Filter
        </button>
        <button className="btn btn-secondary" onClick={loadEmployees}>
          Reset
        </button>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp,index) => (
              <tr key={emp.id}>
                <td>{index+1}</td>
                <td>{emp.ename}</td>
                <td>{emp.edept}</td>
                <td>{emp.email}</td>
                <td>{emp.esalary}</td>
                <td>{emp.ejoiningDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
