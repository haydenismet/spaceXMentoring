import { locatedError } from "graphql";
import React from "react";
import loader from "./horizontal-loader.gif";

{
  /* Grab the clicked item from the template list */
}
function TemplateList(props) {
  function onSelectedItem(e) {
    props.onSelectedItem(e.currentTarget.getAttribute("data-mission-id"));
  }

  function launchTemplateList() {
    {
      /* Conditional to check against section and filter obj accordingly - no longer required as created higher up the tree */
    }
    let validResults = props.spaceData;
    if (props.section === "LAUNCHES.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return (
          itemDesc.details != null &&
          itemDesc.smallImage != null &&
          itemDesc.details.length >= 175 &&
          itemDesc.image &&
          itemDesc.image != null
        );
      });
    } else if (props.section === "ROCKETS.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return itemDesc.details.length >= 160;
      });
    } else if (props.section === "SHIPS.") {
      validResults = props.spaceData.filter((itemDesc) => {
        return itemDesc.image && itemDesc.image !== null;
      });
    }

    if (validResults.length === 0) {
      return (
        <div className="loader-style">
          <img src={loader} />
        </div>
      );
    }

    {
      /* Map the generic data obj and add conditionals to render the object dependent on values available. */
    }
    return validResults.map((data) => (
      <div
        key={data.id}
        data-mission-id={data.id}
        className="item-container"
        onClick={onSelectedItem}
      >
        <div className="name">
          {data.missionName
            ? data.missionName
            : data.rocketName
            ? data.rocketName
            : data.shipName}
          {data.smallImage ? (
            <span className="mission-patch-small">
              <img src={data.smallImage} alt="mission patch" />
            </span>
          ) : null}
        </div>
        <div className={data.roles ? "details-ship" : "details"}>
          {data.rocketName ? (
            <div className="lozenge-1">{data.rocketName} </div>
          ) : null}
          {data.roles
            ? data.roles.map((r) => (
                <div className="lozenge-1" key={r}>
                  {" "}
                  {r}{" "}
                </div>
              ))
            : null}

          {data.year ? (
            <div className="lozenge-1"> {data.year} </div>
          ) : data.active ? (
            <div className="lozenge-1 lozenge-active">ACTIVE</div>
          ) : (
            <div className="lozenge-1 lozenge-inactive">INACTIVE</div>
          )}
        </div>

        {data.details ? (
          <div className="item-details">{data.details}</div>
        ) : null}
      </div>
    ));
  }

  return launchTemplateList();
}

export default TemplateList;
