import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchUsers() {
  useEffect(() => {
    API.getUsers().then((res) => console.log(res));
  }, []);
  return <div></div>;
}
export default SearchUsers;
