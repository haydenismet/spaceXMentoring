import React, { useState} from "react";
import LaunchTemplate from "./LaunchTemplate";


function SortFilter(props) {
 
  const [filter, setFilter] = useState("");
  const [link, setLink] = useState(props.onFilterChange);

  function handleFilterClick(e) {
    setLink(e.target.innerHTML);
  }


  function reRenderDate() {
    if (link === "DATE") {
      function sortDateOrder() {
        let filteredData = props.spaceData.launches.sort(
          (a, b) => a.launch_year - b.launch_year
        );
        setFilter(filteredData);
      }
      sortDateOrder();
    }
  }
 

  function checkFilter() {
    if (props.onSort === "LAUNCHES.") {
      return (
        <>
          <li onClick={reRenderDate}>DATE</li>
          <li>COST</li>
          <li>HEIGHT</li>
        </>
      );
    } else if (props.onSort === "ROCKETS.") {
      return (
        <>
          <li>DATE</li>
          <li>TYPE</li>
          <li>HEIGHT</li>
          <li>COST</li>
        </>
      );
    }
  }

  return (
    <section className="sort-filter">
      <div className="sort-by"> Sort by </div>
      <ul className="filter-options" onClick={handleFilterClick}>
        {checkFilter()}
      </ul>
    </section>
  );
}

export default SortFilter;
