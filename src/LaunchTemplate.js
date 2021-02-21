import React from "react";
import FullDetailsTemplate from "./FullDetailsTemplate";


function LaunchTemplate(props) {
  let validResults = props.spaceData.launches.filter((itemDesc) => {
    return itemDesc.details != null & itemDesc.links.mission_patch_small != null && itemDesc.details.length >= 175;
  });

  
  return validResults.map((mission) => (<>
    <div key={mission.id} data-mission-id={mission.id} className="item-container" onClick={props.handleSelectedItem} selectedItem={props.selectedItem}>
      <div className="item-name">
        {mission.mission_name}
        <span className="mission-patch-small">
          <img src={mission.links.mission_patch_small} alt="mission patch"/>
        </span>
      </div>
      <div className="launch-details">
        <div className="rocket">{mission.rocket.rocket_name}</div>
        <div className="launch-year">{mission.launch_year}</div>
      </div>
      <div className="item-details">{mission.details}</div>
    </div>
   </>
  ));

}

export default LaunchTemplate;
