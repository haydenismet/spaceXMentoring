import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import TemplateList from "./TemplateList.js";
import SortFilter from "./SortFilter.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";

{
  /* GQL Query for Launches */
}
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
  {
    /* useState setups  */
  }
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      let commonData = response.launches
        .map((obj) => ({
          id: obj.id + obj.mission_name,
          image:
            obj.links.flickr_images && obj.links.flickr_images.length > 0
              ? obj.links.flickr_images[0]
              : null,
          missionName: obj.mission_name,
          rocketName: obj.rocket.rocket.name,
          year: obj.launch_year,
          details: obj.details,
          smallImage: obj.links.mission_patch_small,
          missionSuccess: obj.launch_success,
        }))
        .filter((filterObj) => {
          return filterObj.image !== null;
        });
      setData(commonData);
      setOriginalData(commonData);
    }
    fetchSpaceX();
  }, []);

  function setView(filteredData) {
    setData(filteredData);
    if (filteredData.length > 0) {
      setItem(filteredData[0].id);
    }
  }

  return (
    <>
      <SortFilter
        section={"LAUNCHES."}
        spaceData={originalData}
        onFilterChange={setView}
      />
      <FullDetailsTemplate
        selectedItem={item}
        spaceData={data}
        section={"LAUNCHES."}
      />
      <section className="content-section">
        <TemplateList
          section={"LAUNCHES."}
          spaceData={data}
          onSelectedItem={setItem}
          selectedItem={item}
        />
      </section>
    </>
  );
}

export default LaunchQuery;
