import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  backgroundColor = 'blue',
  size = 'md',
  icon = true,
  animate = true,
  onClick,
  children,
  classIcon = 'bx bx-right-arrow-alt',
}) => {
  const bg = backgroundColor ? `bg-${backgroundColor}` : 'primary-bg';
  const s = size ? `btn-${size}` : '';
  const ani = animate ? 'btn-animate' : '';
  return (
    <button
      className={`btn ${bg} ${s} ${ani}`}
      onClick={onClick ? onClick : null}
    >
      <span className="btn__text">{children}</span>
      {icon && (
        <span className="btn__icon">
          <i className={classIcon}></i>
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.bool,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
