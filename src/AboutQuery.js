import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";


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
  

console.log('about-query');

  return (
  <div> About Query </div>
  );
}

export default AboutQuery;
