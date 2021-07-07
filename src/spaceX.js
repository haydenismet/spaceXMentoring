import React, { useState } from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";
import LightBox from "./LightBox.js";

function SpaceX() {
  const [header, setHeader] = useState("LAUNCHES.");
  const [lightBox, setLightBox] = useState("");

  /* Think of spaceX component as tree with returned components as branches, when setHeader is used within <Navigation/>, it passes this value back up the tree to spaceX, and this updates `header` accordingly which is passed as props to <RenderCategoryView/>*/
  return (
    <>
      <section className="main-and-sub-nav">
        <Navigation onHeaderChange={setHeader} header={header} />
        {/* Setter -> sets the header */}
        <RenderCategoryView header={header} setLightBox={setLightBox} />
        {/* Getter  -> can't change it's value */}
      </section>
      <LightBox imageUrl={lightBox} />
    </>
  );
}
export default SpaceX;
