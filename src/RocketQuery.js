import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import RocketTemplate from "./RocketTemplate.js";
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

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      setData(response);
    }
    fetchSpaceX();
  }, []);

  return (
    <>
      <SortFilter onFilterChange={props.onFilterChange} spaceData={data} handleSelectedItem={props.handleSelectedItem} />
      <FullDetailsTemplate selectedItem={props.selectedItem} spaceData={data} onFilterChange={props.onFilterChange}/>
      <section className="content-section">
        <RocketTemplate spaceData={data} handleSelectedItem={props.handleSelectedItem} selectedItem={props.selectedItem} onFilterChange={props.onFilterChange}/>
      </section>
    </>
  );
}

export default RocketQuery;
