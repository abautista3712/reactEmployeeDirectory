import React, { useState, useEffect } from "react";
// import { IconChange } from "./IconChange";
import { UnsortedData } from "./UnsortedData";
import { AlphabeticalSort } from "./AlphabeticalSort";
import { ReverseSort } from "./ReverseSort";

function AllUsers() {
  const [currentIcon, setCurrentIcon] = useState("down");

  const handleIconChange = () => {
    let nextIcon;

    if (currentIcon === "down") nextIcon = "up";
    else if (currentIcon === "up") nextIcon = "start";
    else if (currentIcon === "start") nextIcon = "down";

    setCurrentIcon(nextIcon);
    console.log(`currentIcon is now ${nextIcon}`);
  };

  const handleSort = () => {
    return <UnsortedData />;
  };

  useEffect(() => {
    console.log(`currentIcon is ${currentIcon}`);
  }, []);

  return (
    <div>
      <table className="table is-hoverable is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>Picture</th>
            <th>
              Name{" "}
              <div>
                <button onClick={handleIconChange}>
                  <i
                    className={
                      currentIcon === `start`
                        ? `fas fa-sort`
                        : `fas fa-sort-alpha-${currentIcon}`
                    }
                  />
                </button>
              </div>
            </th>
            <th>E-mail</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
          <UnsortedData />
        </thead>
      </table>
    </div>
  );
}
export default AllUsers;
