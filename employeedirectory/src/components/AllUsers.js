import React, { useState, useEffect } from "react";
// import EmployeeSort from "./EmployeeSort";
import { IconChange } from "./IconChange";
import { UnsortedData } from "./UnsortedData";
import { AlphabeticalSort } from "./AlphabeticalSort";
import { ReverseSort } from "./ReverseSort";

function AllUsers() {
  return (
    <div>
      <table className="table is-hoverable is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>Picture</th>
            <th>
              Name <IconChange />
            </th>
            <th>E-mail</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
          <ReverseSort />
        </thead>
      </table>
    </div>
  );
}
export default AllUsers;
