import React, { useState } from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";

function SpaceX() {
  const [header, setHeader] = useState("ABOUT.");

  return (
    <>
      <section className="main-and-sub-nav">
        <Navigation onHeaderChange={setHeader} />
        <RenderCategoryView
          header={header}
        />
      </section>
    </>
  );
}
export default SpaceX;
