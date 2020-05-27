import { useState, useEffect } from "react";
import API from "../utils/API";

export default function useAPI() {
  const [employees, setEmployees] = useState({ results: [] });

  useEffect(() => {
    API.getUsers().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return employees;
}
