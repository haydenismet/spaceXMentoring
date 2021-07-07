import React from "react";
import LaunchQuery from "./LaunchQuery.js";
import RocketQuery from "./RocketQuery.js";
import ShipQuery from "./ShipQuery.js";
import AboutQuery from "./AboutQuery.js";

/* 
Switch function is implemented  which renders the appropriate template query dependent on the props passed to it. In this case, the return value is the  `renderSwitch` function called with the parameter of the props.header value. Therefore, if the props.header value is updated and set to "ROCKETS.", the switch case will match the param passed as "ROCKETS.", and return the `<RocketQuery/>` template. 
*/

function RenderCategoryView(props) {
  function renderSwitch(param) {
    switch (param) {
      case "LAUNCHES.":
        return <LaunchQuery setLightBox={props.setLightBox} />;
      case "ROCKETS.":
        return <RocketQuery setLightBox={props.setLightBox} />;
      case "SHIPS.":
        return <ShipQuery setLightBox={props.setLightBox} />;
      case "ABOUT.":
        return <AboutQuery setLightBox={props.setLightBox} />;
      default:
        return <div className="whoops"> Whoops. </div>;
    }
  }
  return <>{renderSwitch(props.header)}</>;
}
export default RenderCategoryView;
