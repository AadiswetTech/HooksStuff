import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavigateBar= () => {
  return (
    <nav>
      <h1>Akshat Raj</h1>
      <main>
        <HashLink to={"/home"}>Home</HashLink>
        {/* <Link to={"/contact"}>Contact</Link> */}
        <HashLink to={"/about"}>About</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default NavigateBar;