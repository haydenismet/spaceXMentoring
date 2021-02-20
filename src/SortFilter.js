import React, { useState, useEffect } from "react";
import LaunchTemplate from "./LaunchTemplate.js";

function SortFilter(props) {
  console.log(props);
  const [filter, setFilter] = useState("");
  const [link, setLink] = useState(props.onFilterChange);

  function handleFilterClick(e) {
    setLink(e.target.innerHTML);
  }

  console.log(link);

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

  function reRenderDate() {
    if (link === "DATE") {
      function sortDateOrder() {
        let filteredData = props.spaceData.launches.sort(
          (a, b) => a.launch_date - b.launch_date
        );
        setFilter(filteredData);
      }
      sortDateOrder();
    }
    filter.forEach((date) => {
      console.log(date);
    });
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
