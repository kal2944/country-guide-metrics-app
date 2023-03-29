import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiWorld } from 'react-icons/bi';
import CountriesList from './countriesList';
import MyApi from '../../redux/api';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(MyApi());
    }
  }, [dispatch, countries.length]);

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
        <div className="logo">
          <BiWorld />
        </div>
        <div className="search">
          {' '}
          <input
            type="text"
            name="searchItem"
            placeholder="search for a country"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </header>

      {searchItem.length ? (
        <CountriesList countries={newCountries} />
      ) : (
        <CountriesList countries={countries} />
      )}
    </div>
  );
};

export default Home;
