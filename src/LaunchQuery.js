import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import LaunchTemplate from "./LaunchTemplate.js";
import SortFilter from "./SortFilter.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";

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
      setData(response);
    }
    fetchSpaceX();
  }, []);

  return (
    <>
      <SortFilter onSort={props.onFilterChange} spaceData={data} />
      <FullDetailsTemplate selectedItem={props.selectedItem} spaceData={data} />
      <section className="content-section">
        <LaunchTemplate spaceData={data} handleSelectedItem={props.handleSelectedItem} selectedItem={props.selectedItem}/>
      </section>
    
    </>
  );
}

export default LaunchQuery;
