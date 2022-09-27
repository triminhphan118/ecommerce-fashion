import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked = false, onChange = () => {} }) => {
  const input = useRef(null);
  return (
    <label className="checkbox-custom">
      <input
        type="checkbox"
        onChange={() => onChange(input.current)}
        checked={checked}
        ref={input}
      />
      <div className="checkbox-custom__spare"></div>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
export default Checkbox;
