import React from "react";

function LaunchTemplate(props) {
  console.log(props);

  let validResults = props.spaceData.launches.filter((itemDesc) => {
    return itemDesc.details != null;
  });

  return validResults.map((mission) => (
    <div className="item-container">
      <div className="item-name">
        {mission.mission_name}
        <span className="mission-patch-small">
          <img src={mission.links.mission_patch_small} />
        </span>
      </div>
      <div className="launch-details">
        <div className="rocket">{mission.rocket.rocket_name}</div>
        <div className="launch-year">{mission.launch_year}</div>
      </div>
      <div className="item-details">{mission.details}</div>
    </div>
  ));
}

export default LaunchTemplate;
