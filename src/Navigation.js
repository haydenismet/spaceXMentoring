import React, { useState } from "react";
import Sidebar from "./Sidebar.js";
import Headings from "./Headings.js";

function Navigation(props) {
  const [heading, setHeading] = useState("LAUNCHES.");

  function handleNavbarClick(e) {
    console.log(e.target.getAttribute("data-id"));
    setHeading(e.target.getAttribute("data-id"));
    {
      /* If props.onHeaderChange exists*/
    }
    if (props.onHeaderChange) {
      props.onHeaderChange(e.target.getAttribute("data-id"));
    }
  }

  return (
    <>
      <Sidebar
        navThree="LAUNCHES."
        navFour="ROCKETS."
        navFive="SHIPS."
        navSix="ABOUT."
        onNavChange={handleNavbarClick}
      ></Sidebar>
      <Headings header={heading}>{heading}</Headings>
    </>
  );
}

export default Navigation;
