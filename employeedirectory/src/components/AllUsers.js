import React, { useState, useEffect } from "react";
import EmployeeSort from "./EmployeeSort";
import { IconChange } from "./IconChange";

function AllUsers() {
  // const [currentSort, setCurrentSort] = useState("start");

  // function buttonChange() {
  //   let nextSort;

  //   if (currentSort === "down") nextSort = "up";
  //   else if (currentSort === "up") nextSort = "start";
  //   else if (currentSort === "start") nextSort = "down";

  //   setCurrentSort(nextSort);
  //   console.log(`nextSort is ${nextSort}`);
  // }

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
          <EmployeeSort />
        </thead>
      </table>
    </div>
  );
}
export default AllUsers;
