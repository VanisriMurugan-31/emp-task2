import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    ename: "",
    edept: "",
    email: "",
    esalary: "",
    ejoiningDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createEmployee(formData);
      toast.success(res.data || "Employee registered successfully!");
      navigate("/"); // go to table after success
    } catch (err) {
      console.error(err);
      toast.error("Error while saving employee.");
    }
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Register Employee</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="ename"
            className="form-control"
            value={formData.ename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="edept"
            className="form-control"
            value={formData.edept}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="esalary"
            className="form-control"
            value={formData.esalary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Joining Date</label>
          <input
            type="date"
            name="ejoiningDate"
            className="form-control"
            value={formData.ejoiningDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  );
}
