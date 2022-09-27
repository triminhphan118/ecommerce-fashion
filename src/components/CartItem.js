import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteItem, updateQuanty } from '../redux/cartSlice/cartSlice';
import numberWithCommas from '../utils/numberWithCommas';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateQuanty = (type) => {
    if (type === 'increment') {
      dispatch(
        updateQuanty({
          quanty: item.quanty + 1,
          id: item.id,
        })
      );
    } else {
      dispatch(
        updateQuanty({
          quanty: item.quanty - 1 > 0 ? item.quanty - 1 : 1,
          id: item.id,
        })
      );
    }
  };
  const handleDeleteItem = () => {
    dispatch(
      deleteItem({
        id: item.id,
      })
    );
  };
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart__list__item__content">
        <div className="cart__list__item__content__name">
          {item.product.title} - {item.size} - {item.color}
        </div>
        <div className="cart__list__item__content__price">
          {numberWithCommas(item.product.price)}
        </div>
        <div className="cart__list__item__content__quanty">
          <button onClick={() => handleUpdateQuanty('decrement')}>-</button>
          <input type="text" value={item.quanty} readOnly />
          <button onClick={() => handleUpdateQuanty('increment')}>+</button>
        </div>
        <div className="cart__list__item__content__action">
          <Button
            size="sm"
            backgroundColor="pink"
            classIcon="bx bx-trash"
            onClick={handleDeleteItem}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
