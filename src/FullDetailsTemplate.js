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
              <ul className="full-selected">
                {filteredSelection.image && filteredSelection.image !== null ? (
                  <li className="full-image">
                    <img src={filteredSelection.image} />
                  </li>
                ) : null}
                <ul className="full-details-info">
                  {filteredSelection.missionName && filteredSelection.rocketName ? (
                    <>
                    <li className="full-name">
                      {filteredSelection.missionName}
                    </li>
                    <li className="full-details-info-lozenge">
                      {filteredSelection.rocketName}
                    </li>
                    </>
                  ) : ((!filteredSelection.shipName) ? (
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
                    <li className="full-details-info-lozenge">{filteredSelection.year}</li>
                    </> ) :  
                    <>
                    <li className="full-name">
                      {filteredSelection.shipName}
                    </li>
                      {filteredSelection.roles ? filteredSelection.roles.map((r) => (<div className="full-details-info-lozenge" key={r}> {r} </div>)) : null } 
                    <li className="full-details-info-lozenge">
                      {filteredSelection.active === true ? 'ACTIVE' : 'INACTIVE'}
                    </li>
                    </>
                  )}
                </ul>
                {filteredSelection.details ?
                <li className="full-info-details-p" key={filteredSelection.details}>
                  {filteredSelection.details}
                </li>
                : null}
              </ul>
            ))}
        </section>
      </>
    );
  }

return launchFullDetails();
}
export default FullDetailsTemplate;
