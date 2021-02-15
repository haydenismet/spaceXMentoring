import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpaceX from './spaceX';
import SidebarHeadingParent from "./SidebarHeadingParent.js";

ReactDOM.render(
  <React.StrictMode>
    {/* How to pass the selected link from Sidebar component to Headings component to update dynamically?*/}
    <SidebarHeadingParent/>
    <SpaceX name="Graph QL Count"/> 
 
  </React.StrictMode>,
  document.getElementById('root')
);

