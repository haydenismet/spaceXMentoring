import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";

function RenderCategoryView(props) {
  console.log(props);
  function renderSwitch(param) {
    switch (param) {
      case "LAUNCHES.":
        return <LaunchQuery />;
      case "ROCKETS.":
        return <RocketQuery />;
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return (
    <>
      {renderSwitch(props.header)}
    </>
  );
}
export default RenderCategoryView;
