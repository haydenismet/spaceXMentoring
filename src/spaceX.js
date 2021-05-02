import React, { useState } from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";

{
  /* SpaceX component which passes a useState for header and setHeader - this will set the header title dependent on the page
  SpaceX component then returns some HTML markup along with the `header` of the useState passed to <RenderCategoryView> (in this case default LAUNCHES, to render the launches page on load.) The <Navigation> component takes the `setHeader` of the useState to then set/change/update the header accordingly within the <Navigation> component, for example if a user clicks on ROCKETS to then update the header title with ROCKETS. The Navigation component will handle the actual navigation. 

  ?? QUERY WITH PHIL 
  */
}

function SpaceX() {
  const [header, setHeader] = useState("LAUNCHES.");

  return (
    <>
      <section className="main-and-sub-nav">
        <Navigation onHeaderChange={setHeader} />
        <RenderCategoryView header={header} />
      </section>
    </>
  );
}
export default SpaceX;
