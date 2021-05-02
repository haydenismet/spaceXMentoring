import React, { useEffect, useState } from "react";

function SortFilter(props) {
  console.log(props);
  {
    /* useState to determine which sort filter link has been clicked, i.e ALL, DATE etc.   */
  }
  const [link, setLink] = useState("");

  {
    /* function passed to the onClick of the rendered sort filter template to determine the clicked link and run the useEffect conditionals below */
  }
  function handleFilterClick(e) {
    setLink(e.target.innerHTML);
  }

  useEffect(() => {
    {
      /* Conditionals to check result of `handleFilterClick` - and run appropriate sortFilter process. For using javascript SORT - a copy must be made of the original data obj. Most other JS functions make a copy for you but with sort, the array is sorted in place, and no copy is made. So we must make one to not mutate original array. JS filter? Query with PHIL */
    }
    if (link === "DATE") {
      let filteredData = [...props.spaceData].sort((a, b) => a.year - b.year);
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "NAME") {
      let filteredData = [...props.spaceData].sort((a, b) =>
        a.missionName > b.missionName ? 1 : -1
      );
      props.onFilterChange(filteredData);
      console.log("[namesort]", filteredData);
    } else if (link === "SUCCESS") {
      let filteredData = [...props.spaceData].filter(
        (a) => a.missionSuccess === true
      );
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "FAILURE") {
      let filteredData = [...props.spaceData].filter(
        (a) => a.missionSuccess === false
      );
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "COST") {
      let filteredData = [...props.spaceData].sort((a, b) => b.cost - a.cost);
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "HEIGHT") {
      let filteredData = [...props.spaceData].sort(
        (a, b) => b.height - a.height
      );
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "MASS") {
      let filteredData = [...props.spaceData].sort((a, b) => b.mass - a.mass);
      props.onFilterChange(filteredData);
      console.log("[Filter sort onclick]", filteredData);
    } else if (link === "ACTIVE") {
      let filteredData = [...props.spaceData].filter((a) => a.active === true);
      props.onFilterChange(filteredData);
    } else if (link === "INACTIVE") {
      let filteredData = [...props.spaceData].filter((a) => a.active === false);
      props.onFilterChange(filteredData);
    } else if (link === "ALL") {
      let filteredData = [...props.spaceData];
      props.onFilterChange(filteredData);
    }
  }, [link]);

  function checkFilter() {
    {
      /* How do we obtain props.section again from a previous component?  PHIL*/
    }
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
            HEIGHT
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "COST" ? true : undefined}
          >
            COST
          </li>
        </>
      );
    } else if (props.section === "SHIPS.") {
      return (
        <>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "ACTIVE" ? true : undefined}
          >
            ACTIVE
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "INACTIVE" ? true : undefined}
          >
            INACTIVE
          </li>
          <li
            onClick={handleFilterClick}
            aria-selected={link === "ALL" ? true : undefined}
          >
            ALL
          </li>
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
