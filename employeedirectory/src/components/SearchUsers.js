import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  const [employees, setEmployees] = useState({ results: [] });
  const [currentSort, setCurrentSort] = useState("start");

  function onSortChange() {
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "start";
    else if (currentSort === "start") nextSort = "down";

    setCurrentSort(nextSort);
    console.log(`nextSort is ${nextSort}`);
  }

  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setEmployees(res.data);
      })
      .then(onSortChange());
  }, []);

  return (
    <table className="table is-hoverable is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Picture</th>
          <th>
            Name{" "}
            <button onClick={onSortChange}>
              <i
                className={
                  currentSort === `start`
                    ? `fas fa-sort`
                    : `fas fa-sort-alpha-${currentSort}`
                }
              />
            </button>
          </th>
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
