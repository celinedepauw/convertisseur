import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ open, manageClick }) => {
  let cssClass = 'custom-button';
  if (open) {
    cssClass += ' custom-button--open';
  }

  return (
    <button
      className={cssClass}
      type="button"
      onClick={manageClick}
    >
      +
    </button>
  );
};

CustomButton.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;
