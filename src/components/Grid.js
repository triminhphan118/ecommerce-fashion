import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ col, mdCol, smCol, gap, children }) => {
  const styles = {
    gap: gap ? `${gap}px` : '0',
  };

  const column = col ? `grid-col-${col}` : '';
  const mdColumn = mdCol ? `grid-col-md-${mdCol}` : '';
  const smColumn = smCol ? `grid-col-sm-${smCol}` : '';

  return (
    <div className={`grid ${column} ${mdColumn} ${smColumn}`} style={styles}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};
export default Grid;
