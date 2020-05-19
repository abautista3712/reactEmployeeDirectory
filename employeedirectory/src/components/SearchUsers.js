import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  useEffect(() => {
    API.getUsers().then((res) => console.log(res));
  }, []);
  return (
    <table className="table is-hoverable is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone Number</th>
          <th>Location</th>
        </tr>
      </thead>
    </table>
  );
}
export default SearchUsers;
