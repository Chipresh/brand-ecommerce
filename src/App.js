
import React from "react";
import home from "./Pages/home";
import Details from "./Components/Details";
import {Routes, Route} from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route Component={home} path="/"/>
          <Route Component={Details} path="/details"/>
        </Routes>

      </div>

    </>
  );
}

export default App;
