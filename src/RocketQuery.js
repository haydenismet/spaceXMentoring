import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import TemplateList from "./TemplateList.js";
import SortFilter from "./SortFilter.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";

const query = gql`
  {
    rockets {
      id
      height {
        feet
      }
      diameter {
        feet
        meters
      }
      description
      cost_per_launch
      first_flight
      mass {
        kg
      }
      success_rate_pct
      wikipedia
      name
    }
  }
`;

function RocketQuery(props) {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      let commonData = response.rockets
        .map((obj) => ({
          id: obj.id,
          rocketName: obj.name,
          year: obj.first_flight,
          details: obj.description,
          mass: obj.mass.kg,
          height: obj.height.feet,
          cost: obj.cost_per_launch,
          success: obj.success_rate_pct,
        }))
        .filter((filterObj) => {
          return filterObj.image !== null;
        });
      setData(commonData);
      setOriginalData(commonData);
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
        section={"ROCKETS."}
        spaceData={originalData}
        onFilterChange={setView}
      />
      <FullDetailsTemplate
        selectedItem={item}
        spaceData={data}
        section={"ROCKETS."}
      />
      <section className="content-section">
        <TemplateList
          section={"ROCKETS."}
          spaceData={data}
          onSelectedItem={setItem}
          selectedItem={item}
        />
      </section>
    </>
  );
}

export default RocketQuery;
