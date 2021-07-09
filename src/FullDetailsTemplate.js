import React, { useState } from "react";
import LightBox from "./LightBox.js";

function FullDetailsTemplate(props) {
  function handleZoom(e) {
    if (props.setLightBox) {
      props.setLightBox(e.target.dataset.imgsrc);
    }
  }

  function launchFullDetails() {
    return (
      <>
        <div className="detail-list">detail-list</div>
        {/* Filter to display the full detail of the item -> if the clicked item ID matches an item in the array of objs, and then map this data onto page with conditionals for each section to make it a single use template. */}
        {props.spaceData
          .filter(
            (selectedMission) => selectedMission.id === props.selectedItem
          )
          .map((filteredSelection) => (
            <ul className="full-selected">
              {filteredSelection.image && filteredSelection.image !== null ? (
                <li className="full-image">
                  <img src={filteredSelection.image} alt="space-x-content" />
                  <div
                    className="search-icon"
                    data-imgsrc={filteredSelection.image}
                    onClick={handleZoom}
                  >
                    ⚲
                  </div>
                </li>
              ) : null}
              <ul className="full-details-info">
                {filteredSelection.missionName &&
                filteredSelection.rocketName ? (
                  <>
                    <li className="full-name">
                      {filteredSelection.missionName}
                    </li>
                    <li className="full-details-info-lozenge">
                      {filteredSelection.rocketName}
                    </li>
                  </>
                ) : !filteredSelection.shipName ? (
                  <>
                    <li className="full-name">
                      {filteredSelection.rocketName}
                    </li>
                    <li className="full-details-info-lozenge">
                      {filteredSelection.height.toFixed()}ft
                    </li>
                    <li className="full-details-info-lozenge">
                      {filteredSelection.mass}kg
                    </li>
                    <li className="full-details-info-lozenge">
                      ${filteredSelection.cost}
                    </li>
                    <li className="full-details-info-lozenge">
                      {filteredSelection.year}
                    </li>
                  </>
                ) : (
                  <>
                    <li className="full-name">{filteredSelection.shipName}</li>
                    {filteredSelection.roles
                      ? filteredSelection.roles.map((r) => (
                          <div className="full-details-info-lozenge" key={r}>
                            {r}
                          </div>
                        ))
                      : null}
                    <li className="full-details-info-lozenge">
                      {filteredSelection.active === true
                        ? "ACTIVE"
                        : "INACTIVE"}
                    </li>
                  </>
                )}
              </ul>
              {filteredSelection.details ? (
                <li
                  className="full-info-details-p"
                  key={filteredSelection.details}
                >
                  {filteredSelection.details}
                </li>
              ) : null}
            </ul>
          ))}
      </>
    );
  }

  return launchFullDetails();
}
export default FullDetailsTemplate;
