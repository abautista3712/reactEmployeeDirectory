import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import { UnsortedData } from "./UnsortedData";
import { AlphabeticalSort } from "./AlphabeticalSort";
import { ReverseSort } from "./ReverseSort";

export const AllUsers = () => {
  // const [employees, setEmployees] = useState({ results: [] });
  const [currentIcon, setCurrentIcon] = useState("down");
  // const [currentSort, setCurrentSort] = useState(<UnsortedData />);

  const handleIconChange = () => {
    let nextIcon;

    if (currentIcon === "down") nextIcon = "up";
    else if (currentIcon === "up") nextIcon = "start";
    else if (currentIcon === "start") nextIcon = "down";

    setCurrentIcon(nextIcon);
    console.log(`currentIcon is now ${nextIcon}`);
  };

  const handleSort = () => {
    let setSort;

    if (currentIcon === "down") {
      setSort = <UnsortedData />;
    } else if (currentIcon === "up") {
      setSort = <AlphabeticalSort />;
    } else if (currentIcon === "start") {
      setSort = <ReverseSort />;
    }
    return setSort;
  };

  // useEffect(() => {
  //   API.getUsers().then((res) => {
  //     setEmployees(res.data);
  //   });
  //   // handleSort();
  //   console.log(`currentIcon is ${currentIcon}`);
  // }, []);

  return (
    // currentIcon,
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
          {/* <UnsortedData /> */}
          {handleSort()}
        </thead>
      </table>
    </div>
  );
};
