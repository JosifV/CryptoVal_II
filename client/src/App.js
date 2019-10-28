import React from "react";
import "./style/App.scss";
import { nameOfCoins, propsOfCoins } from "./utils/listOfCoinInfo";

import Sidebar from "./components/Sidebar";
import Content from "./pages/Content";

function App() {
  return (
    <div className="fullLayout">
      <Sidebar coins={nameOfCoins()} />
      <Content coins={nameOfCoins()} coinProps={propsOfCoins()} />
    </div>
  );
}

export default App;
