import React from "react";
import useAPI from "./useAPI";

export const UnsortedData = () => {
  const employees = useAPI();

  return employees.results.map((employee) => (
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
