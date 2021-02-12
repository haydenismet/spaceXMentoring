function Sidebar(props) {

function handleNavbarClick(e) {
    console.log(e.target.getAttribute('data-id'));
    let listItem = e.target.getAttribute('data-id');
    return listItem;
}


  const {navOne, navTwo, navThree, navFour, navFive, navSix} = props;
    return (
      <>
      <section className="navbar">
        <ul className="nav-list" onClick={handleNavbarClick}>
            <li data-id={navOne}>{navOne}</li>
            <li data-id={navTwo}>{navTwo}</li>
            <li data-id={navThree}>{navThree}</li>
            <li data-id={navFour}>{navFour}</li>
            <li data-id={navFive}>{navFive}</li>
            <li data-id={navSix}>{navSix}</li>
        </ul>
        </section>
       
      </>
    );
  }


export default Sidebar;