import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CountriesList from '../components/home/countriesList';

const Home = ({ countries }) => {
  const [searchItem, setSearchItem] = useState('');

  const newCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searchItem.toLowerCase())
      || country.region.toLowerCase().includes(searchItem.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };
  return (
    <div>
      <header className="home-header">
        <div className="search">
          {' '}
          <input
            type="text"
            name="searchItem"
            placeholder="Search for a country"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </header>

      {searchItem.length ? (
        <CountriesList countries={newCountries} />
      ) : (
        <BrowserRouter>
          <CountriesList countries={countries} />
        </BrowserRouter>
      )}
    </div>
  );
};

Home.propTypes = {
  countries: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    filter: PropTypes.func,
  }).isRequired,
};

export default Home;
