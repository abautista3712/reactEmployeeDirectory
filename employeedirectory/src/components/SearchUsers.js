import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    API.getUsers().then((res) => {
      const { picture, name, email, cell, location } = res.data.results[0];
      setEmployee({
        picture: picture.large,
        name: `${name.first} ${name.last}`,
        email: email,
        phone: cell,
        address: `${location.street.number} ${location.street.name}`,
        city: location.city,
        state: location.state,
        country: location.country,
      });
      console.log(res.data.results[0]);
    });
  }, []);

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
        <tr>
          <td>
            <img src={employee.picture} />
          </td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.address}</td>
          <td>{employee.city}</td>
          <td>{employee.state}</td>
          <td>{employee.country}</td>
        </tr>
      </thead>
    </table>
  );
}
export default SearchUsers;
