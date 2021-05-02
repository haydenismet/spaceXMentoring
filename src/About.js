import React from "react";
import loader from "./horizontal-loader.gif";

function About(props) {
  let companyQuery = props.companyData.company;
  console.log("companyQuery", companyQuery);
  if (companyQuery) {
    return (
      <>
        <div className="company-section">
          <div className="company-container">
            <div className="companyTitles">
              <div className="company-subtitle">Founder</div>
              <div className="company-info">{companyQuery.founder}</div>
            </div>
          </div>
          <div className="company-container">
            <div className="company-grouping">
              <div className="companyTitles">
                <div className="company-subtitle"> Employees </div>
                <div className="company-info">{companyQuery.employees}</div>
              </div>
              <div className="companyTitles">
                <div className="company-subtitle"> Founded </div>
                <div className="company-info">{companyQuery.founded}</div>
              </div>
            </div>
            <div className="companyTitles headquartersTitles">
              <div className="company-subtitle"> Headquarters </div>
              <div className="company-info">
                {companyQuery.headquarters.address},
              </div>
              <div className="company-info-sub">
                {companyQuery.headquarters.city},
              </div>
              <div className="company-info-sub">
                {companyQuery.headquarters.state}
              </div>
            </div>
            <div className="companyTitles">
              <div className="company-subtitle"> Summary</div>
              <div className="companySummary">{companyQuery.summary}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="loader-style">
        <img src={loader} />
      </div>
    );
  }
}

export default About;
