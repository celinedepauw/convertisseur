import React from 'react';
import PropTypes from 'prop-types';

import './result.scss';

const Result = ({ currency, value }) => (
  <div className="result">
    <h2 className="rate">{value}</h2>
    <p className="current-currency">{currency}</p>
  </div>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Result;
