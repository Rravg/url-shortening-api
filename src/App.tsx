import React from "react";
import "./App.css";
// import illustration from "./images/illustration-working.svg";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img className="illustration" src={illustration} alt="" /> */}
      <Body />
    </div>
  );
}

export default App;
