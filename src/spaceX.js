import React, { useState } from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";

function SpaceX() {
  const [header, setHeader] = useState("ABOUT.");
  const [selectedItem, setItem] = useState("");

  function handleSelectedItem(e) {
    setItem(e.currentTarget.getAttribute("data-mission-id"));
  }

  return (
    <>
      <section className="main-and-sub-nav">
        <Navigation onHeaderChange={setHeader} />
        <RenderCategoryView
          header={header}
          handleSelectedItem={handleSelectedItem}
          selectedItem={selectedItem}
        />
      </section>
    </>
  );
}
export default SpaceX;
