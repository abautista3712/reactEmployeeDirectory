import React, { useState, useEffect } from "react";
import EmployeeSort from "./EmployeeSort";

function SearchUsers() {
  const [currentSort, setCurrentSort] = useState("start");

  function buttonChange() {
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "start";
    else if (currentSort === "start") nextSort = "down";

    setCurrentSort(nextSort);
    console.log(`nextSort is ${nextSort}`);
  }

  return (
    <div>
      <table className="table is-hoverable is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>Picture</th>
            <th>
              Name{" "}
              <button onClick={buttonChange}>
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
          <EmployeeSort />
        </thead>
      </table>
    </div>
  );
}
export default SearchUsers;
