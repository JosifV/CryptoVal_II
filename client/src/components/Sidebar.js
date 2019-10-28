import React from "react";
import "../style/components/Sidebar.scss";

import { NavLink } from "react-router-dom";
import { FaBitcoin, FaEthereum, FaCoins, FaReact } from "react-icons/fa";
const Sidebar = props => {
  const arrOfIcons = [<FaBitcoin />, <FaEthereum />, <FaCoins />, <FaReact />];

  return (
    <div className="sidebarMain">
      <NavLink activeClassName="sidebarActiveLink" to={`/`}>
        Home
      </NavLink>
      {props.coins.map((coin, index) => {
        return (
          <NavLink
            key={index}
            activeClassName="sidebarActiveLink"
            to={`/${coin}`}
          >
            {arrOfIcons[index]} {coin[0].toUpperCase() + coin.substring(1)}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
