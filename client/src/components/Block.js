import React from "react";

let log = console.log;
const Block = props => {
  let difInPrice = Number;
  let indicator = Boolean;
  let classCalc = "";

  const doItAll = (localNum, price, nameClass, bool) => {
    difInPrice = parseFloat((100 * localNum) / price).toFixed(2);
    classCalc = nameClass;
    indicator = bool;
  };
  if (props.lastPrice < props.price) {
    let localNum = props.price - props.lastPrice;
    doItAll(localNum, props.price, "upPrice", true);
  } else if (props.lastPrice > props.price) {
    let localNum = props.lastPrice - props.price;
    doItAll(localNum, props.lastPrice, "downPrice", false);
  } else {
    difInPrice = 0.0;
    classCalc = "samePrice";
    indicator = true;
  }
  return (
    <div className="blockMain">
      {props.before ? (
        <p className="blockCheckedBefore">Checked before {props.before} min</p>
      ) : null}
      <p>
        Price: <span className="priceSpan">$ {props.price}</span>
      </p>
      <span className={classCalc}>
        <span>{indicator ? "+" : "-"}</span> {difInPrice}%
      </span>
    </div>
  );
};
export default Block;
