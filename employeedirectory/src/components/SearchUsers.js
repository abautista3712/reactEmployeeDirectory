import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    API.getUsers().then((res) => {
      const { picture, name, email, cell, location } = res.data.results[0];
      setPicture(picture.large);
      setName(`${name.first} ${name.last}`);
      setEmail(email);
      setPhone(cell);
      setAddress(`${location.street.number} ${location.street.name}`);
      setCity(location.city);
      setState(location.state);
      setCountry(location.country);
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
            <img src={picture} />
          </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{address}</td>
          <td>{city}</td>
          <td>{state}</td>
          <td>{country}</td>
        </tr>
      </thead>
    </table>
  );
}
export default SearchUsers;
