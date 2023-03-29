import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => (
  <div>
    <h2> there no url like this in this app</h2>
    <Link to="/">back to home</Link>
  </div>
);

export default NotMatch;
