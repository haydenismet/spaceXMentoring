import React from "react";
/* Returns html markup with the props of the sidebar values 
    Also passes the props.onNavChange function to the onClick event handler, which gets and sets the heading. 
  */
function Sidebar(props) {
  return (
    <>
      <section className="navbar">
        <ul className="nav-list" onClick={props.onNavChange}>
          <li data-id={props.navThree}>{props.navThree}</li>
          <li data-id={props.navFour}>{props.navFour}</li>
          <li data-id={props.navFive}>{props.navFive}</li>
          <li data-id={props.navSix}>{props.navSix}</li>
        </ul>
      </section>
    </>
  );
}
export default Sidebar;
