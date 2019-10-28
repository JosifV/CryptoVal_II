import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";

import Block from "./Block";
import "../style/components/Coin.scss";
const reqData = require("../utils/reqData");

const Coin = props => {
  let [readTheNum, readTheNumSet] = useState(0);
  let [cmc, cmcSet] = useState(0);
  let [coinPrice, coinPriceSet] = useState(0);
  let [allIsSet, allIsSetHandler] = useState(false);
  let [arrOfHistory, arrOfHistorySet] = useState([]);

  const arrOfArgs = [
    props.trueProps.id,
    props.trueProps.title,
    coinPriceSet,
    readTheNumSet,
    cmcSet,
    arrOfHistorySet,
    allIsSetHandler
  ];

  useEffect(() => {
    reqData(...arrOfArgs);
  }, []);
  setInterval(() => {
    document.location.reload();
  }, 300000); //* 5 minutes

  return (
    <div>
      {allIsSet ? (
        <div className="mainCoinCont">
          <div className="headCoinCont">
            <p className="coinTitleMain">{props.trueProps.title}</p>
            <p className="coinTitleShort">{props.trueProps.symbol}</p>
            <span className="cointRankCont">
              <p className="coinRank">#{cmc}</p>
            </span>
            <p className="coinMarket">$ {readTheNum}</p>
          </div>

          <div>
            <Block price={coinPrice} lastPrice={arrOfHistory[0].price} />
          </div>
          <div className="historyCont">
            {arrOfHistory
              ? arrOfHistory.map((x, index) => {
                  return (
                    <Block
                      before={(index + 1) * 5}
                      price={x.price}
                      lastPrice={x.lastPrice}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <div className="spinerCont">
          <GridLoader color={"#40e0d0"} />
        </div>
      )}
    </div>
  );
};
export default Coin;
