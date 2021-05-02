import React, { useState } from "react";
import Sidebar from "./Sidebar.js";
import Headings from "./Headings.js";

{
  /* Navigation component takes props, which were set in the <spaceX> component. 
  A new useState is created to be set by the `handleNavbarClick` function. When the user clicks a navigation item, i.e SHIPS, the `handleNavbar`click function uses the `setHeading` of the useState value to fetch the `data-id` attribute and set this into the useState.

  ?? QUERY WITH PHIL
  */
}

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
