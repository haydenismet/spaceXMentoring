function LightBox(props) {
  console.log(props);
  return (
    <>
      {props.imageUrl ? (
        <div id="zoomed-image">
          <span class="zoom-and-exit">✕</span>
          <img src={props.imageUrl} alt="zoomed-space" />
        </div>
      ) : null}
    </>
  );
}

export default LightBox;
