import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import About from "./About.js";

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

function AboutQuery(props) {
const [data, setData] = useState([]);
useEffect(() => {
  async function fetchSpaceX() {
    const response = await request("https://api.spacex.land/graphql", query);   
   
    setData(response);
  }
  fetchSpaceX();
}, []);


  return (
  <About companyData={data}/>
  );
}

export default AboutQuery;
