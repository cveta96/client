import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Wellcome</h1>
      <p>
        <Link to='/login'>Go login</Link>
      </p>
    </div>
  );
};

export default Landing;
