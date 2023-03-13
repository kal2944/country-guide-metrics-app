import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div>
    <h2 className="homi">Home page</h2>
    <Link to="/detailpages">click me</Link>
  </div>

);

export default Home;
