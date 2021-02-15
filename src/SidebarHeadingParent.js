import React, {useState} from "react";
import Sidebar from "./Sidebar.js";
import Headings from "./Headings.js";


function SidebarHeadingParent() {
const [heading, setHeading] = useState("About.");

function handleNavbarClick(e) {
    console.log(e.target.getAttribute('data-id'));
    setHeading(e.target.getAttribute('data-id'));
}

return <>
    <Sidebar navOne="About." navTwo="Missions." navThree="Launches." navFour="Rockets." navFive="Ships." navSix="Company." onNavChange={handleNavbarClick}></Sidebar>
    <Headings>{heading}</Headings>
</>
}

export default SidebarHeadingParent;