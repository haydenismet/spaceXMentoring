import React from "react";
function FullDetailsTemplate(props) {
console.log(props.selectedItem);

  return (
    <section className="full-details-view">
       {props.spaceData.launches.filter(selectedMission => selectedMission.id === props.selectedItem).map(filteredSelection => (
    <>
    <ul className="selected-mission">
      {console.log(filteredSelection)}
      <li className="mission-name" key={filteredSelection.mission_name}>{filteredSelection.mission_name}</li>
      <li className="mission-year" key={filteredSelection.launch_year}>{filteredSelection.launch_year}</li>
    
    </ul>
      <div>{filteredSelection.details}</div>
      </>
  ))}
     
  </section>
  );
}
export default FullDetailsTemplate;
