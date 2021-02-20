import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";

function RenderCategoryView(props) {

  
  function renderSwitch(param) {
    switch (param) {
      case "LAUNCHES.":
        return (
          <LaunchQuery onFilterChange={param} onSelectedItem={props.selectedTab}/>
        );
      case "ROCKETS.":
        return (
          <RocketQuery onFilterChange={param}/>
           
        );
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return <>{renderSwitch(props.header)}</>;
}
export default RenderCategoryView;
