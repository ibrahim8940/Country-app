import React from "react";
import countries from "../api/countryData.json";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="container ">
        <h1 className="btn">Here are the Interesting Facts we're proud of</h1>
        <div className="countries">
          {countries.map((country) => (
            <div className="country-card" key={country.id}>
              <h1>{country.name}</h1>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p className="fact">{country.interestingFact}</p>
            </div>
          ))}
        </div>
        <div className="btn">
          <button className="btn1">Add Country</button>
          <button className="btn1">Delete Country</button>
        </div>
      </div>
    </>
  );
};

export default About;
