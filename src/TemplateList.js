import React, {useRef} from "react";

function TemplateList(props) {
  const itemContainer  = useRef();
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
          itemDesc.image != null
        );
      });
    } else if (props.section === "ROCKETS.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return (
          itemDesc.details.length >= 160
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
          ref={itemContainer}
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
            <div className="rocket">{(data.rocketName) ? (data.rocketName) : data.roles[0]}</div>
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
