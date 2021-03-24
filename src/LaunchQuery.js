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
  const [item, setItem] = useState("");
  
  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      setData(response);
    }
    fetchSpaceX();
  }, []);

  console.log(data);
  const commonData = data.launches.map((obj) => (
    {id : obj.id,
     image : obj.links.flickr_images[0],
     missionName : obj.mission_name,
     rocketName : obj.rocket.rocket.name,
     year : obj.launch_year,
     details : obj.details,
     smallImage : obj.links.mission_patch_small
    }
  ));

  console.log(commonData);
  
  return (
    <>
      <SortFilter
        section={"LAUNCHES."}
        spaceData={data}
        onFilterChange={setData}
      />
      <FullDetailsTemplate
        selectedItem={item}
        spaceData={commonData}
        section={"LAUNCHES."}
      />
      <section className="content-section">
        <TemplateList
          section={"LAUNCHES."}
          spaceData={commonData}
          onSelectedItem={setItem}
          selectedItem={item}
        />
      </section>
    </>
  );
}

export default LaunchQuery;
