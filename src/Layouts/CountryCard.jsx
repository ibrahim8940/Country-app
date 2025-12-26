import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <li className="country-card">
      <img src={country.flags.svg} alt={country.name.common} />
      <h3>{country.name.common}</h3>

      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>

      {/* ✅ FIXED */}
      <NavLink to={`/country/${country.cca3}`}>
        <button>Read More..</button>
      </NavLink>
    </li>
  );
};

export default CountryCard;
