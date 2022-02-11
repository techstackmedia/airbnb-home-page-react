import React from "react";
import logo from "../../images/airbnb.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} width="100" alt="airbnb logo" />
      </nav>
    </header>
  );
};

export default Header;
