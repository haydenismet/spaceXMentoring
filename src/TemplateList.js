import React from "react";

function TemplateList(props) {

  function onSelectedItem(e) {
    props.onSelectedItem(e.currentTarget.getAttribute("data-mission-id"));
  }
  
  function launchTemplateList() {
    let validResults = props.spaceData.launches.filter((itemDesc) => {
      return (
        (itemDesc.details != null) &
          (itemDesc.links.mission_patch_small != null) &&
        itemDesc.details.length >= 175 &&
        itemDesc.links.flickr_images.length > 0
      );
    });

    if(validResults.length === 0) {
      return <div>Loading...</div>
    }

    return validResults.map((mission) => (
      <>
        <div
          key={mission.id}
          data-mission-id={mission.id}
          className="item-container"
          onClick={onSelectedItem}
        >
          <div className="item-name">
            {mission.mission_name}
            <span className="mission-patch-small">
              <img
                src={mission.links.mission_patch_small}
                alt="mission patch"
              />
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

  function rocketTemplateList() {
    return props.spaceData.rockets.map((rocket) => (
      <div
        className="item-container"
        key={rocket.id}
        data-mission-id={rocket.id}
        onClick={onSelectedItem}
        selectedItem={props.selectedItem}
      >
        <div className="item-name">{rocket.name}</div>
        <div className="rocket-details">
          <div className="launch-year">{rocket.first_flight}</div>
          <div className="launch-success">
            {rocket.success_rate_pct}% Success Rate
          </div>
        </div>
        <div className="item-details">{rocket.description}</div>
      </div>
    ));
  }


  if (props.section === "LAUNCHES.") {
    return launchTemplateList();
  } else if (props.section === "ROCKETS.") {
    return rocketTemplateList();
  } else {
    return <div></div>
  }
}

export default TemplateList;
