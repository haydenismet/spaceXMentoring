import React, { useState } from "react";
function LightBox(props) {
  console.log(props);
  function handleCloseZoom() {
    props.setLightBox(null);
  }
  return (
    <>
      {props.imageUrl ? (
        <div id="zoomed-image" onClick={handleCloseZoom}>
          <span className="zoom-and-exit" onClick={handleCloseZoom}>
            ✕
          </span>
          <img
            src={props.imageUrl}
            alt="zoomed-space"
            className="scale-in-center"
          />
        </div>
      ) : null}
    </>
  );
}

export default LightBox;
