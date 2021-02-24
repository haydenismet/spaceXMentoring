import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";

function RenderCategoryView(props) {

  
  function renderSwitch(param) {
    switch (param) {
      case "LAUNCHES.":
        return (
          <LaunchQuery onFilterChange={param} handleSelectedItem={props.handleSelectedItem} selectedItem={props.selectedItem}/>
        );
      case "ROCKETS.":
        return (
          <RocketQuery onFilterChange={param} handleSelectedItem={props.handleSelectedItem} selectedItem={props.selectedItem}/>
        );
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return <>{renderSwitch(props.header)}</>;
}
export default RenderCategoryView;
