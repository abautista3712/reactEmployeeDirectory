import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  const [employees, setEmployees] = useState({ results: [] });

  useEffect(() => {
    API.getUsers().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  console.log(employees.results);

  return (
    <table className="table is-hoverable is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
        {employees.results.map((employee, index) => (
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
        ))}
      </thead>
    </table>
  );
}
export default SearchUsers;
