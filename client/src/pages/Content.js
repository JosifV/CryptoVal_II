import React from "react";
import "../style/pages/Content.scss";

import { Route } from "react-router-dom";
import Coin from "../components/Coin";
import Home from "./Home";
const Content = props => {
  const coinComponents = [];
  props.coins.forEach((_, index) => {
    coinComponents.push(<Coin trueProps={props.coinProps[index]} />);
  });

  return (
    <div className="contentMain">
      <Route path="/" exact component={Home} />
      {props.coins.map((coin, index) => {
        return (
          <Route
            key={index}
            path={`/${coin}`}
            exact
            render={() => coinComponents[index]}
          />
        );
      })}
    </div>
  );
};

export default Content;
