function Welcome(props) {
  const { title="NoTitle", subtitle } = props;
  return (
    <>
      <h1>Welcome to {title}</h1>
      <h2> {subtitle} </h2>
    </>
  );
}

export default Welcome;
