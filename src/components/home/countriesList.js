import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

const CountriesList = ({ countries }) => (
  <div className="countries-grid">
    {countries.map((countryData) => (
      <Country data={countryData} key={countryData.name} />
    ))}
  </div>
);

CountriesList.propTypes = {
  countries: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default CountriesList;
