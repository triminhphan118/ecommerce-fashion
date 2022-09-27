import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet';

import Products from '../assets/fake-data/products';
import numberWithCommas from '../utils/numberWithCommas';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setCarts(Products.getCartItemsInfo(items));
  }, [items]);
  useEffect(() => {
    if (carts.length > 0) {
      setTotalPrice(
        carts.reduce(
          (acc, item) => acc + Number(item.product.price) * item.quanty,
          0
        )
      );
      setTotalProducts(carts.reduce((acc, item) => acc + item.quanty, 0));
    } else {
      setTotalPrice(0);
      setTotalProducts(0);
    }
  }, [carts]);
  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__title">
            Cart total<span> {totalProducts}</span> items
            <div className="div cart__info__title__price">
              Total Price:
              <span> {numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__action">
            <Button size="sm">Checkout</Button>
            <Button
              size="sm"
              backgroundColor="pink"
              onClick={() => navigate('/product')}
            >
              Buying
            </Button>
          </div>
        </div>
        <div className="cart__list">
          {carts &&
            carts.length > 0 &&
            carts.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
