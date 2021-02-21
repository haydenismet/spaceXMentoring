import React from "react";
function FullDetailsTemplate(props) {

console.log(props);

  return (
      <>
     
    <section className="full-details-view">
    <div className="detail-list">detail-list</div>
       {props.spaceData.launches.filter(selectedMission => selectedMission.id === props.selectedItem).map(filteredSelection => (
    <ul className="selected-mission">
      {console.log(filteredSelection)}
      <li className="mission-image"><img src={filteredSelection.links.flickr_images[0]}/></li>
      <li className="mission-name" key={filteredSelection.mission_name}>{filteredSelection.mission_name}</li>
      <li className="mission-year" key={filteredSelection.launch_year}>{filteredSelection.launch_year}</li>
      <li className="mission-details">{filteredSelection.details}</li>
      
    </ul>
   
    
  ))}
     
  </section>
  </>
  );
}
export default FullDetailsTemplate;
