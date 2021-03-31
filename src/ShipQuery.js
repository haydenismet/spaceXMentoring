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
  const [data, setData] = useState({ ships: [] });
  const [item, setItem] = useState("");

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      setData(response);
    }
    fetchSpaceX();
  }, []);

  console.log(data);
  const commonData = data.ships.map((obj) => (
    {id : obj.id,
     shipName : obj.name,
     image : obj.image,
     active : obj.active,
     roles : obj.roles
    }
  ));
    console.log('[Logging item prop]',item,' [commonData]',commonData);
  return (
    <>
    <SortFilter
      section={"SHIPS."}
      spaceData={data}
      onFilterChange={setData}
    />
    <FullDetailsTemplate
      selectedItem={item}
      spaceData={commonData}
      section={"SHIPS."}
    />
    <section className="content-section">
      <TemplateList
        section={"SHIPS."}
        spaceData={commonData}
        onSelectedItem={setItem}
        selectedItem={item}
      />
    </section>
  </>
  );
}

export default ShipQuery;
