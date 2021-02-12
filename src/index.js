import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpaceX from './spaceX';
import Sidebar from './Sidebar.js';
import Headings from './Headings.js';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar navOne="About." navTwo="Missions." navThree="Launches." navFour="Rockets." navFive="Ships." navSix="Company." >
    </Sidebar>
    {/* How to pass the selected link from Sidebar component to Headings component to update dynamically?*/}
    <Headings headingTitle="Rockets" ></Headings>
    <SpaceX name="Graph QL Count"/> 
    
  </React.StrictMode>,
  document.getElementById('root')
);

