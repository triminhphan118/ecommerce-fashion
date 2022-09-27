import React, { useEffect, useState } from 'react';
import Button from './Button';

import Products from '../assets/fake-data/products';
import ProdcutDetail from './ProdcutDetail';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/productSlice/productViewSlice';

const Modal = () => {
  const { value } = useSelector((state) => state.viewProduct);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    let newProduct = Products.getProductBySlug(value);
    setProduct(newProduct ? newProduct : null);
  }, [value]);
  return (
    <div
      className={`modal ${
        product && Object.keys(product).length > 0 ? 'open' : ''
      }`}
      onClick={() => dispatch(removeItem())}
    >
      <div className="modal__overlay"></div>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__body__title"></div>
        <div className="modal__body__close">
          <Button
            size="sm"
            backgroundColor="orange"
            classIcon="bx bx-window-close"
            onClick={() => dispatch(removeItem())}
          >
            Close
          </Button>
        </div>
        <div className="modal___body__content">
          <ProdcutDetail
            product={Products.getProductBySlug('ao-thun-dinosaur-01')}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
