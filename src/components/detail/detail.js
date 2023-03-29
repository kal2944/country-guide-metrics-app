import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <header className="home-header">
        <div className="logo">
          <button
            type="button"
            className="btn-logo"
            onClick={() => navigate(-1)}
          >
            <AiOutlineArrowLeft />
            Go back
          </button>
        </div>
      </header>
      <div className="details-page-details">
        <div className="details-top-section">
          <img src={location.state.flag} alt="Country flag" />
          <h2>{location.state.name}</h2>
        </div>
        <div className="state-details">
          <div className="country-info">
            <p>Native Name:</p>
            <p>{location.state.nativeName}</p>
          </div>
          <div className="country-info">
            <p>Population:</p>
            <p>{location.state.population}</p>
          </div>
          <div className="country-info">
            <p>Continent:</p>
            <p>{location.state.region}</p>
          </div>
          <div className="country-info">
            <p>Area( km²):</p>
            <p>{location.state.area}</p>
          </div>
          <div className="country-info">
            <p>Sub Region:</p>
            <p>{location.state.subregion}</p>
          </div>
          <div className="country-info">
            <p>Capital:</p>
            <p>{location.state.capital}</p>
          </div>
          <div className="country-info">
            <p>Currency:</p>
            <p>{location.state.currencies[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
