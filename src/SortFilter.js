import React from "react";

function SortFilter(props) {
  function checkFilter() {
    if (props.onFilterChange === "LAUNCHES.") {
      return (
        <>
          <li>LAUNCH DATE</li>
          <li>LAUNCH COST</li>
        </>
      );
    } else if (props.onFilterChange === "ROCKETS.") {
      return (
        <>
          <li onClick={() => console.log("rockety type")}>ROCKET TYPE</li>
          <li>ROCKET HEIGHT</li>
        </>
      );
    }
  }

  return (
    <section className="sort-filter">
      <div className="sort-by"> Sort by </div>
      <ul className="filter-options">{checkFilter()}</ul>
    </section>
  );
}

export default SortFilter;
