import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import RocketTemplate from "./RocketTemplate.js";

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
      console.log(response);
      setData(response);
    }
    fetchSpaceX();
  }, []);

  return (
    <>
      {props.children}
      <section className="content-section">
        <RocketTemplate spaceData={data} />
      </section>
    </>
  );
}

export default RocketQuery;
