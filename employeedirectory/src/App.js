import React from "react";
import "./styles/App.sass";
import { Navbar } from "./components/Navbar";
import { AllUsers } from "./components/AllUsers";

function App() {
  return (
    <div>
      <Navbar />
      <AllUsers />
    </div>
  );
}

export default App;
