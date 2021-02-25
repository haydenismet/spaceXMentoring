import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import TemplateList from "./TemplateList.js";
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
      <SortFilter
        onFilterChange={props.onFilterChange}
        spaceData={data}
        handleSelectedItem={props.handleSelectedItem}
      />
      <FullDetailsTemplate
        selectedItem={props.selectedItem}
        spaceData={data}
        onFilterChange={props.onFilterChange}
      />
      <section className="content-section">
        <TemplateList
          spaceData={data}
          handleSelectedItem={props.handleSelectedItem}
          selectedItem={props.selectedItem}
          onFilterChange={props.onFilterChange}
        />
      </section>
    </>
  );
}

export default LaunchQuery;
