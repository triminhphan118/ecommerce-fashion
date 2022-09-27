import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

import numberWithCommas from '../utils/numberWithCommas';
import { useDispatch } from 'react-redux';
import { setItem } from '../redux/productSlice/productViewSlice';

const CardProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card-product">
      <Link to={`/product/${props.slug}`}>
        <div className="card-product__image">
          <img src={props.image} alt={props.name} />
        </div>

        <span className="card-product__name">{props.name}</span>
        <div className="card-product__price">
          <span className="card-product__price__new">
            {numberWithCommas(props.price)}
          </span>
          <span className="card-product__price__old">
            <del>{numberWithCommas(999)}</del>
          </span>
        </div>
      </Link>
      <div className="card-product__btn">
        <Button
          size={'sm'}
          backgroundColor={'blue'}
          icon={true}
          animate={true}
          onClick={() => dispatch(setItem(props.slug))}
        >
          View now
        </Button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CardProduct;
