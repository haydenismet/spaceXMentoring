function Headings(props) {
  {
    /* Returns HTML markup with props.children which will be the title for the section the user has clicked on, i.e "SHIPS." */
  }
  return (
    <>
      <section className="heading-title">
        <h1 className="heading-h1">{props.children}</h1>
      </section>
    </>
  );
}
export default Headings;
