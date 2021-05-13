import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import TemplateList from "./TemplateList.js";
import SortFilter from "./SortFilter.js";
import FullDetailsTemplate from "./FullDetailsTemplate.js";
// LaunchQuery Comments apply for shipquery and rocketquery
// GQL Query for Launches
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
  //useState setups
  const [data, setData] = useState([]);
  // Other components take data path
  const [item, setItem] = useState("");
  const [originalData, setOriginalData] = useState([]);
  // SortFilter takes originalData path -> separation of concerns as SortFilter makes modificaitons to the data obj.

  useEffect(() => {
    async function fetchSpaceX() {
      const response = await request("https://api.spacex.land/graphql", query);
      // within the useEffect, taking the network request before I use it and setting values into a commonData object via map. Also using conditionals to return null for paths that aren't populated i.e images
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
      //then filtering this mapped commonData object to remove any image paths that ARE NULL

      /* Two useStates which set commonData, one is for generic use, and the other is for use when using the <SortFilter/> component, so if the object is filtered to remove INACTIVE ships for example, then the user clicks the filter to show ALL ships again, to revert back to the setOriginalData path. Otherwise, the sortFilter would load the same object we'd just filtered for INACTIVE ships and therefore would not be the complete arr of objects */
      setView(commonData);
      setOriginalData(commonData);
    }
    fetchSpaceX();
  }, []);

  // Sets the first item in the launchQuery to be shown. This function is passed to <SortFilter onFilterChange/> and used within it, taking filteredData as a param, .
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
