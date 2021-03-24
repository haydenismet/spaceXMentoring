import React, {useState} from "react";


function SortFilter(props) {
 
  const [link, setLink] = useState("DATE");

  function handleFilterClick(e) {
    setLink(e.target.innerHTML);
  }


  function reRenderDate() {
    if (link === "DATE") {
        let filteredData = props.spaceData.launches.sort(
          (a, b) => a.launch_year - b.launch_year
        );
       props.onFilterChange({...props.spaceData, launches:filteredData});
    }
  }
 

  function checkFilter() {
    if (props.section === "LAUNCHES.") {
      return (
        <>
          <li onClick={reRenderDate}>DATE</li>
          <li>COST</li>
          <li>HEIGHT</li>
        </>
      );
    } else if (props.section === "ROCKETS.") {
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
