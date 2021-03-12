import React from "react";

function FullDetailsTemplate(props) {
  
  function launchFullDetails() {
    return (
      <>
        <section className="full-details-view">
          <div className="detail-list">detail-list</div>
          {props.spaceData.launches
            .filter(
              (selectedMission) => selectedMission.id === props.selectedItem
            )
            .map((filteredSelection) => (
              <ul className="selected-mission">
                <li className="mission-image">
                  <img src={filteredSelection.links.flickr_images[0]} />
                </li>
                <ul className="mission-name-year">
                  <li
                    className="mission-name"
                    key={filteredSelection.mission_name}
                  >
                    {filteredSelection.mission_name}
                  </li>
                  <li
                    className="mission-rocket"
                    key={filteredSelection.rocket.rocket_name}
                  >
                    {filteredSelection.rocket.rocket_name}
                  </li>
                  <li
                    className="mission-year"
                    key={filteredSelection.launch_year}
                  >
                    {filteredSelection.launch_year}
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
