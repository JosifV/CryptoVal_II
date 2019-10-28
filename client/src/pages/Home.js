import React, { useState, useEffect, Fragment } from "react";
import "../style/pages/Home.scss";
import { GridLoader } from "react-spinners";

const getHist = require("../utils/getHist");
const Home = () => {
  let [histArr, histArrSet] = useState([]);
  let [allIsSet, allIsSetHandler] = useState(false);
  useEffect(() => {
    const getData = async () => {
      histArrSet(histArr.concat(await getHist(allIsSetHandler)));
    };
    getData();
  }, []);

  return (
    <div className="homeMain">
      <p className="homeTitleMain">Check coin values app</p>
      <p className="homeTitleShort">Last recorded prices:</p>

      {allIsSet && histArr.length > 0 ? (
        <Fragment>
          <div className="homeHistCont">
            {histArr.map((x, xIndex) => {
              return (
                <div className="homeHistCard" key={xIndex}>
                  <p className="homeHistTitle">{x.title}</p>
                  <p>
                    Last checked at: <strong>{x.lastChecked}</strong>
                  </p>

                  <p className="homeHistPrice">Price: $ {x.price}</p>
                  <div className={x.contextOfPrice ? "upPrice" : "downPrice"}>
                    <span className="homeHistStatus">
                      Status: {x.contextOfPrice ? "+" : "-"} {x.priceDif}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Fragment>
      ) : (
        <div className="spinerCont">
          <GridLoader color={"#40e0d0"} />
        </div>
      )}
    </div>
  );
};

export default Home;
