import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const getAllEmployees = () => axios.get(API_URL);

export const filterEmployees = (startDate, endDate) =>
  axios.get(`${API_URL}/filter`, { params: { startDate, endDate } });

export const createEmployee = (employee) =>
  axios.post(API_URL, employee);
