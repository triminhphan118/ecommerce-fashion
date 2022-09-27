import React from 'react';
import PropTypes from 'prop-types';

const PolicyCard = ({ title, desc, icon }) => {
  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <i className={icon}></i>
      </div>

      <div className="policy-card__info">
        <span className="policy-card__info__title">{title}</span>
        <p className="policy-card__info__desc">{desc}</p>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default PolicyCard;
