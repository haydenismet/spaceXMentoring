import React from "react";
import Sidebar from "./Sidebar.js";
import Headings from "./Headings.js";

/* Add overview */

function Navigation(props) {
  function handleNavbarClick(e) {
    /* If props.onHeaderChange exists*/
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
      <Headings header={props.header}>{props.header}</Headings>
    </>
  );
}

export default Navigation;
