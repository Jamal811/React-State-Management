import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import BusinessNameContext from "./components/BusinessNameContext";

function App() {
  const [businessName, setBusinessName] = useState("Jamal Shah");

  return (
    <>
      <div className="App">
        <BusinessNameContext.Provider value={{ businessName, setBusinessName }}>
          <HomePage />
        </BusinessNameContext.Provider>
      </div>
    </>
  );
}

export default App;
