import React, { useState} from "react";
import Navigation from "./Navigation.js";
import RenderCategoryView from "./RenderCategoryView.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";


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
      <RenderCategoryView header={header} selectedTab={handleSelectedItem}/>
      </section>
      <section className="full-details-view">
      <FullDetailsTemplate selectedDetail={selectedItem} />
      </section>
    </>
  );
}
export default SpaceX;