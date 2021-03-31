import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";
import ShipQuery from "./ShipQuery.js";

function RenderCategoryView(props) {

  

  function renderSwitch(param) {
    switch (param) {
      case "LAUNCHES.":
        return (
          <LaunchQuery/>
        );
      case "ROCKETS.":
        return (
          <RocketQuery/>
        );
        case "SHIPS.":
          return (
            <ShipQuery/>
          );
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return <>{renderSwitch(props.header)}</>;
}
export default RenderCategoryView;
