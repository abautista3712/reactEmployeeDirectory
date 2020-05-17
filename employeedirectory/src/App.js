import React from "react";
import "./styles/App.sass";
import { Navbar } from "./components/Navbar";
import SearchUsers from "./components/SearchUsers";

function App() {
  return (
    <div>
      <Navbar />
      <SearchUsers />
    </div>
  );
}

export default App;
