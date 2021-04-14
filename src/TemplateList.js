import React from "react";

function TemplateList(props) {
  function onSelectedItem(e) {
    props.onSelectedItem(e.currentTarget.getAttribute("data-mission-id"));
  }

  function launchTemplateList() {
    let validResults = props.spaceData;
    if (props.section === "LAUNCHES.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return (
          (itemDesc.details != null) && (itemDesc.smallImage != null) &&
          itemDesc.details.length >= 175 &&
          itemDesc.image && itemDesc.image != null
        );
      });
    } else if (props.section === "ROCKETS.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return (
          itemDesc.details.length >= 160
        );
      });
    } else if (props.section === "SHIPS.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return (
          itemDesc.image && itemDesc.image !== null
        );
      });
    } 

    if (validResults.length === 0) {
      return <div>Loading...</div>;
    }

    return validResults.map((data) => (
      
        <div
          key={data.id}
          data-mission-id={data.id}
          className={props.section !== "SHIPS." ? "item-container" : "ship-container"}
          onClick={onSelectedItem}
        >
          <div className="item-name">
            {(data.missionName) ? (data.missionName) : ((data.rocketName) ? (data.rocketName) : (data.shipName)) }
            {data.smallImage ? (
              <span className="mission-patch-small">
                <img src={data.smallImage} alt="mission patch" />
              </span>
            ) : null}
          </div>
          <div className="launch-details">
            {data.rocketName ? <div className="rocket">{data.rocketName} </div> : null}
            {data.roles ? data.roles.map((r) => (<div className="rocket" key={r}> {r} </div>)) : null } 
            <div className="launch-year">{(data.year) ? (data.year) : ((data.active) ? ('ACTIVE') : ('INACTIVE'))}</div>
          </div>
          
        {(data.details) ? 
          <div className="item-details">
          {data.details}
            </div>  : null }
        </div>
      
    ));
  }

  return launchTemplateList();
}

export default TemplateList;
