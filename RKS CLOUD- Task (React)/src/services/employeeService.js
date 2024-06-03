import axios from 'axios';

const apiUrl = 'https://api.example.com/employees'; // Replace with your API endpoint

export const getEmployees = () => {
  return axios.get(apiUrl);
};

export const addEmployee = (employee) => {
  return axios.post(apiUrl, employee);
};

export const updateEmployee = (employee) => {
  return axios.put(`${apiUrl}/${employee.id}`, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
