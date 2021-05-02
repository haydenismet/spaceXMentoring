import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import About from "./About.js";

{
  /* GQL Query for Company data */
}
const query = gql`
  {
    company {
      ceo
      coo
      cto
      cto_propulsion
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      name
      summary
      valuation
    }
  }
`;

function AboutQuery() {
  {
    /* useState to store network request data, empty [] dependency at end to only call once on render*/
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);

      setData(response);
      {
        /* request then uses setData usestate to set the response into `data` of useState */
      }
    }
    fetchSpaceX();
  }, []);
  {
    /* Return the component with the props of the data passed as `companyData`  */
  }
  return <About companyData={data} />;
}

export default AboutQuery;
