import React from "react";
function FullDetailsTemplate(props) {
    console.log(props);
    console.log(props.hehe)
return (
    <div> hello + {props.selectedDetail}  </div>
);
}
export default FullDetailsTemplate;