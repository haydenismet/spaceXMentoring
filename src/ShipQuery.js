import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import TemplateList from "./TemplateList.js";
import SortFilter from "./SortFilter.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";

const query = gql`
  {
    ships {
      id
      image
      name
      active
      roles
    }
  }
`;

function ShipQuery(props) {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      console.log(response);
      let commonData = response.ships
        .map((obj) => ({
          id: obj.id,
          shipName: obj.name,
          image:
            obj.image && obj.image !== null && obj.image.length > 0
              ? obj.image
              : null,
          active: obj.active,
          roles: obj.roles,
        }))
        .filter((filterObj) => {
          return filterObj.image !== null;
        });
      setData(commonData);
      setOriginalData(commonData);
      console.log(commonData);
    }
    fetchSpaceX();
  }, []);

  function setView(filteredData) {
    setData(filteredData);
    if (filteredData.length > 0) {
      setItem(filteredData[0].id);
    }
  }

  return (
    <>
      <SortFilter
        section={"SHIPS."}
        spaceData={originalData}
        onFilterChange={setView}
      />
      <FullDetailsTemplate
        selectedItem={item}
        spaceData={data}
        section={"SHIPS."}
      />
      <section className="content-section">
        <TemplateList
          section={"SHIPS."}
          spaceData={data}
          onSelectedItem={setItem}
          selectedItem={item}
        />
      </section>
    </>
  );
}

export default ShipQuery;
