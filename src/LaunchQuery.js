import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import LaunchTemplate from "./LaunchTemplate.js";

const query = gql`
  {
    launches {
      id
      details
      links {
        flickr_images
        mission_patch_small
        mission_patch
      }
      launch_success
      launch_year
      launch_date_local
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
        rocket {
          id
          name
        }
      }
    }
  }
`;

function LaunchQuery(props) {
  const [data, setData] = useState({ launches: [] });

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
        <LaunchTemplate spaceData={data} />
      </section>
    </>
  );
}

export default LaunchQuery;
