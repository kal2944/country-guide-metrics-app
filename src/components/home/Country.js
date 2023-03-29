import React from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const routeHandle = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={routeHandle} className="country">
      <div className="image">
        <img className="country-img" src={data.flag} alt="Country Flag" />
      </div>
      <div className="details">
        <h2>{data.name}</h2>
        <p>
          Population:
          <span className="span">{data.population}</span>
        </p>
      </div>
    </button>
  );
};

Country.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default Country;
