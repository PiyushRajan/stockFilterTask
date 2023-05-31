import React from "react";
import StockData from "./components/StockData";
import Header from "./components/header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <StockData />
    </div>
  );
};

export default App;
