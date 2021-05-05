import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchcountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchcountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);
  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country) => (
          <option key={1} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
