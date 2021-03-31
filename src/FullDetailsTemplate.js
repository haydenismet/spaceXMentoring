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
                {filteredSelection.image ? (
                  <li className="mission-image">
                    <img src={filteredSelection.image} />
                  </li>
                ) : null}

                <ul className="mission-name-year">
                  {filteredSelection.missionName && filteredSelection.rocketName ? (
                    <>
                    <li className="mission-name">
                      {filteredSelection.missionName}
                    </li>
                    <li className="mission-rocket">
                      {filteredSelection.rocketName}
                    </li>
                    </>
                  ) : (
                    <>
                    <li className="mission-name">
                      {filteredSelection.rocketName}
                    </li>
                    <li className="mission-rocket">
                      {filteredSelection.height.toFixed()}ft
                    </li>
                    <li className="mission-rocket">
                      {filteredSelection.mass}kg
                    </li>
                    <li className="mission-rocket">
                      ${filteredSelection.cost}
                    </li>
                    </>
                  )}

                  <li className="mission-year">{filteredSelection.year}</li>
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

return launchFullDetails();
}
export default FullDetailsTemplate;
