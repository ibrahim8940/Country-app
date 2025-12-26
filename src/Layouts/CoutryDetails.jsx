import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryByCode } from "../api/postapi";
import "./CountryDetails.css";

const CoutryDetails = () => {
  const { id } = useParams(); // cca3 code
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await getCountryByCode(id);
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [id]);

  if (!country) return <h2>Loading...</h2>;

  return (
    <section className="country-details">
      <NavLink to="/country">⬅ Back</NavLink>

      <img src={country.flags.svg} alt={country.name.common} />

      <h1>{country.name.common}</h1>

      <p>
        <strong>Official Name:</strong> {country.name.official}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Sub Region:</strong> {country.subregion}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Area:</strong> {country.area} km²
      </p>
      <p>
        <strong>Timezones:</strong> {country.timezones.join(", ")}
      </p>
      <p>
        <strong>Continents:</strong> {country.continents.join(", ")}
      </p>
      <p>
        <strong>Languages:</strong>{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>
      <p>
        <strong>Currencies:</strong>{" "}
        {country.currencies
          ? Object.values(country.currencies)
              .map((c) => c.name)
              .join(", ")
          : "N/A"}
      </p>
    </section>
  );
};

export default CoutryDetails;
