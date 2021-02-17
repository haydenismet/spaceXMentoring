function Headings(props) {
      return (
        <>
        <section className="heading-title">
        <h1 className="heading-h1" >{props.children}</h1>
        </section>
        </>
      );
    }
  export default Headings;