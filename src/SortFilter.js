import React, { useEffect, useState } from "react";

function SortFilter(props) {
  const [link, setLink] = useState("");

  function handleFilterClick(e) {
    setLink(e.target.innerHTML);
  }

  useEffect(() => {
    if (link === "DATE") {
      let filteredData = props.spaceData.launches.sort(
        (a, b) => a.launch_year - b.launch_year
      );
      props.onFilterChange({ ...props.spaceData, launches: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "NAME") {
      let filteredData = props.spaceData.launches.sort((a, b) =>
        a.mission_name > b.mission_name ? 1 : -1
      );
      props.onFilterChange({ ...props.spaceData, launches: filteredData });
      console.log("[namesort]", filteredData);
    } else if (link === "SUCCESS") {
      let filteredData = props.spaceData.launches.filter(
        (a) => a.launch_success === true
      );
      props.onFilterChange({ ...props.spaceData, launches: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "FAILURE") {
      let filteredData = props.spaceData.launches.filter(
        (a) => a.launch_success === false
      );
      props.onFilterChange({ ...props.spaceData, launches: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    }
    else if (link === "COST") {
      let filteredData = props.spaceData.rockets.sort((a, b) => a.cost - b.cost 
      );
      props.onFilterChange({ ...props.spaceData, rockets: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    } 
    else if (link === "HEIGHT") {
      let filteredData = props.spaceData.rockets.sort((a,b) => a.height - b.height 
      );
      props.onFilterChange({ ...props.spaceData, rockets: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    }
    else if (link === "MASS") {
      let filteredData = props.spaceData.rockets.sort((a,b) => a.mass - b.mass 
      );
      props.onFilterChange({ ...props.spaceData, rockets: filteredData });
      console.log("[Filter sort onclick]", filteredData);
    }
  }, [link]);

  function checkFilter() {
    if (props.section === "LAUNCHES.") {
      return (
        <>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "DATE" ? true : undefined}
          >
            DATE
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "NAME" ? true : undefined}
          >
            NAME
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "SUCCESS" ? true : undefined}
          >
            SUCCESS
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "FAILURE" ? true : undefined}
          >
            FAILURE
          </li>
        </>
      );
    } else if (props.section === "ROCKETS.") {
      return (
        <>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "MASS" ? true : undefined}
          >
            MASS
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "HEIGHT" ? true : undefined}
          >
            HEIGHT</li>
            <li
            onClick={handleFilterClick}
            aria-selected={link === "COST" ? true : undefined}
          >
            COST</li>
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
