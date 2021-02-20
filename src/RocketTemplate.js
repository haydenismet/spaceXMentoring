import React from "react";



function RocketTemplate(props) {
  return props.spaceData.rockets.map((rocket) => (
    <div className="item-container" key={rocket.id} >
      <div className="item-name">{rocket.name}</div>
      <div className="rocket-details">
        <div className="launch-year">{rocket.first_flight}</div>
        <div className="launch-success">
          {rocket.success_rate_pct}% Success Rate
        </div>
      </div>
      <div className="item-details">{rocket.description}</div>
    </div>
  ));
}

export default RocketTemplate;