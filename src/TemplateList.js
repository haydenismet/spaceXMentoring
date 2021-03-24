import React from "react";

function TemplateList(props) {

  function onSelectedItem(e) {
    props.onSelectedItem(e.currentTarget.getAttribute("data-mission-id"));
  }
  
  function launchTemplateList() {
    let validResults = props.spaceData.filter((itemDesc) => {
      return (
        (itemDesc.details != null) &
          (itemDesc.smallImage != null) &&
        itemDesc.details.length >= 175 &&
        itemDesc.image != null
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
            {mission.missionName}
            {mission.smallImage ?
            <span className="mission-patch-small">
              <img
                src={mission.smallImage}
                alt="mission patch"
              />
            </span> : null }
          </div>
          <div className="launch-details">
            <div className="rocket">{mission.rocketName}</div>
            <div className="launch-year">{mission.year}</div>
          </div>
          <div className="item-details">{mission.details}</div>
        </div>
      </>
    ));
  }

  function rocketTemplateList() {
    return props.spaceData.map((rocket) => (
      <div
        className="item-container"
        key={rocket.id}
        data-mission-id={rocket.id}
        onClick={onSelectedItem}
        selectedItem={props.selectedItem}
      >
        <div className="item-name">{rocket.rocketName}</div>
        <div className="rocket-details">
          <div className="launch-year">{rocket.year}</div>
          <div className="launch-success">
            {rocket.success}% Success Rate
          </div>
        </div>
        <div className="item-details">{rocket.details}</div>
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
