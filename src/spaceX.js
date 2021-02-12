import { request, gql } from 'graphql-request';
import { useState, useEffect} from 'react';

const query = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
    }
  }
}
`


function SpaceX(props) {
  const [data, setData] = useState({ launchesPast: [] });

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
      <div className="queryList">
        SpaceX {props.name} = {data.launchesPast.length}
        {data.launchesPast.map((mission) => (
          <div key={mission.mission_name}>{mission.mission_name}</div>
        ))}
      </div>
    </>
  );
}


export default SpaceX;