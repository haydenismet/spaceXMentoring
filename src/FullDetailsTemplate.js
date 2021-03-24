import React from "react";

function FullDetailsTemplate(props) {
  
  function launchFullDetails() {
    return (
      <>
        <section className="full-details-view">
          <div className="detail-list">detail-list</div>
          {props.spaceData
            .filter(
              (selectedMission) => selectedMission.id === props.selectedItem
            )
            .map((filteredSelection) => (
              <ul className="selected-mission">
                <li className="mission-image">
                  <img src={filteredSelection.image} />
                </li>
                <ul className="mission-name-year">
                  <li
                    className="mission-name"
                    key={filteredSelection.missionName}
                  >
                    {filteredSelection.missionName}
                  </li>
                  <li
                    className="mission-rocket"
                    key={filteredSelection.rocketName}
                  >
                    {filteredSelection.rocketName}
                  </li>
                  <li
                    className="mission-year"
                    key={filteredSelection.year}
                  >
                    {filteredSelection.year}
                  </li>
                </ul>
                <li className="mission-details" key={filteredSelection.details}>
                  {filteredSelection.details}
                </li>
              </ul>
            ))}
        </section>
      </>
    );
  }

  function rocketFullDetails() {
    return (
      <>
        <section className="full-details-view">
          <div className="detail-list">detail-list</div>
          {props.spaceData.rockets
            .filter(
              (selectedRocket) => selectedRocket.id === props.selectedItem
            )
            .map((filteredSelection) => (
              <ul className="selected-mission">
                <ul className="mission-name-year">
                  <li className="mission-name" key={filteredSelection.name}>
                    {filteredSelection.name}
                  </li>
                  <li
                    className="mission-rocket"
                    key={filteredSelection.mass.kg}
                  >
                    {filteredSelection.mass.kg} KG
                  </li>
                  <li
                    className="mission-year"
                    key={filteredSelection.first_flight}
                  >
                    {filteredSelection.first_flight}
                  </li>
                </ul>
                <li
                  className="mission-details"
                  key={filteredSelection.description}
                >
                  {filteredSelection.description}
                </li>
              </ul>
            ))}
        </section>
      </>
    );
  }

  if (props.section === "LAUNCHES.") {
    return launchFullDetails();
  } else if (props.section === "ROCKETS.") {
    return rocketFullDetails();
  } else {
    return <div className="full-details-view"> Error.</div>;
  }
}
export default FullDetailsTemplate;
