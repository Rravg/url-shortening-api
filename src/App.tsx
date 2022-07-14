import React from "react";
import "./App.css";
// import illustration from "./images/illustration-working.svg";
import Header from "./components/Header";
import Body from "./components/Body";
import Shorter from "./components/Shorter";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img className="illustration" src={illustration} alt="" /> */}
      <Body />
      <Shorter />
    </div>
  );
}

export default App;
