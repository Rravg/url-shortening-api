import React from "react";
import "./App.css";
// import illustration from "./images/illustration-working.svg";
import Header from "./components/Header";
import Body from "./components/Body";
import Shorter from "./components/Shorter";
import StatisticsList from "./components/StatisticsList";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Header />
        <Body />
      </div>
      <div className="bot">
        <div className="bot-container">
          <Shorter />
          <StatisticsList />
        </div>
      </div>
    </div>
  );
}

export default App;
