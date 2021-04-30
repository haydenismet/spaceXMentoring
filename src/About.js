import React from "react";

function About(props) {
  let companyQuery = props.companyData.company;
  console.log("companyQuery", companyQuery);
  if (companyQuery) {
    return (
      <>
        <div className="company-section">
          <div className="company-container">
            <div className="company-founder">
              Founder
              <div className="founder">{companyQuery.founder}</div>
            </div>
          </div>
          <div className="company-container">
            <div className="companyTitles">
              CEO
              <div className="ceo">{companyQuery.ceo}</div>
            </div>
            <div className="companyTitles">
              COO <div className="coo">{companyQuery.coo}</div>
            </div>
            <div className="companyTitles">
              CTO <div className="cto">{companyQuery.cto}</div>
            </div>
            <div className="companyTitles">
              CTO Propulsion
              <div className="cto-propulsion">
                {companyQuery.cto_propulsion}
              </div>
            </div>
            <div className="companySummary">{companyQuery.summary}</div>
            <div className="company-grouping">
              <div className="employees">{companyQuery.employees}</div>
              <div className="founded">{companyQuery.founded}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div> Loading... </div>;
  }
}

export default About;
