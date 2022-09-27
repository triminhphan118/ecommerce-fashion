import { useEffect } from 'react';
import PropType from 'prop-types';

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = `Yolo - ${title}`;
  });
  return children;
};

Helmet.propTypes = {
  title: PropType.string.isRequired,
};
export default Helmet;
