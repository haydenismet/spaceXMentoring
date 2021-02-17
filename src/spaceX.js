import React, { useState } from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";
import SortFilter from "./SortFilter.js";

function SpaceX() {
  const [header, setHeader] = useState("ABOUT.");
  return (
    <>
      <Navigation onHeaderChange={setHeader} />
      <SortFilter />
      <RenderCategoryView header={header} />
    </>
  );
}
export default SpaceX;
