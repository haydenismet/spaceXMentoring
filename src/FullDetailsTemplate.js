import React from "react";
function FullDetailsTemplate(props) {
    
   let clickedItemId = props.spaceData.launches.filter((matchId) => {
        return matchId.id === props.selectedItem;
    })
    console.log(clickedItemId);
return (
    <section className="full-details-view">
    <div> hello + {props.selectedItem} + {clickedItemId[0].mission_name} </div>
    </section>
);
}
export default FullDetailsTemplate;



