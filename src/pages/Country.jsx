import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postapi";
import Loader from "./loader";
import CountryCard from "../Layouts/CountryCard";
import "./Country.css";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        startTransition(() => {
          setCountries(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  // ✅ FILTER LOGIC
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      {/* 🔍 SEARCH INPUT */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="grid grid-four-cols">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
