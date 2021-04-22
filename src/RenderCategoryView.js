import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";
import ShipQuery from "./ShipQuery.js";
import AboutQuery from "./AboutQuery.js";

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
        case "ABOUT." :
          return (
            <AboutQuery/>
          );
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return <>{renderSwitch(props.header)}</>;
}
export default RenderCategoryView;
