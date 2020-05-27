import React, { useState, useEffect } from "react";

export const IconChange = () => {
  const [currentIcon, setCurrentIcon] = useState("down");

  const iconChange = () => {
    let nextIcon;

    if (currentIcon === "down") nextIcon = "up";
    else if (currentIcon === "up") nextIcon = "start";
    else if (currentIcon === "start") nextIcon = "down";

    setCurrentIcon(nextIcon);
    console.log(`currentIcon is now ${nextIcon}`);
  };

  useEffect(() => {
    console.log(`currentIcon is ${currentIcon}`);
  }, []);

  return (
    <button onClick={iconChange}>
      <i
        className={
          currentIcon === `start`
            ? `fas fa-sort`
            : `fas fa-sort-alpha-${currentIcon}`
        }
      />
    </button>
  );
};
