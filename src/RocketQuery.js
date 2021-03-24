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
  const [data, setData] = useState({ rockets: [] });
  const [item, setItem] = useState("");

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      setData(response);
    }
    fetchSpaceX();
  }, []);

  console.log(data);
    console.log('[Logging item prop]',item,' [data]',data);
  return (
    <>
    <SortFilter
      section={"ROCKETS."}
      spaceData={data}
      onFilterChange={setData}
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
