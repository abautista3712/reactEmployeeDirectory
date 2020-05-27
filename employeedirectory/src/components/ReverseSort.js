import React, { useState, useEffect } from "react";
import API from "../utils/API";

export const ReverseSort = () => {
  const [employees, setEmployees] = useState({ results: [] });

  useEffect(() => {
    API.getUsers().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return employees.results
    .sort((a, b) => {
      let nameA = a.name.first;
      let nameB = b.name.first;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .reverse()
    .map((employee, index) => (
      <tr>
        <td>
          <img src={employee.picture.medium} alt="Employee Thumbnail" />
        </td>
        <td>{`${employee.name.first} ${employee.name.last}`}</td>
        <td>{employee.email}</td>
        <td>{employee.cell}</td>
        <td>{`${employee.location.street.number} ${employee.location.street.name}`}</td>
        <td>{employee.location.city}</td>
        <td>{employee.location.state}</td>
        <td>{employee.location.country}</td>
      </tr>
    ));
};
