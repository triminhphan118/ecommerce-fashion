import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/cartSlice/cartSlice';

const ProdcutDetail = ({ product }) => {
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quanty, setQuanty] = useState(1);

  const [image, setImage] = useState(product.image01);
  const [descExpand, setDescExpand] = useState(false);
  const dispacth = useDispatch();

  useEffect(() => {
    setSize(null);
    setColor(null);
    setImage(product.image01);
    setQuanty(1);

    return () => {
      setSize(null);
      setColor(null);
      setImage(product.image01);
      setQuanty(1);
    };
  }, [product]);

  const handleQuanty = (type) => {
    if (type === 'increment') {
      setQuanty((prev) => prev + 1);
    } else {
      setQuanty((prev) => (prev-- <= 1 ? 1 : prev--));
    }
  };
  const check = () => {
    if (!color) {
      alert('Please select color!');
      return false;
    }
    if (!size) {
      alert('Please select size!');
      return false;
    }

    return true;
  };
  const addToCart = () => {
    if (check()) {
      dispacth(
        addCart({
          slug: product.slug,
          color,
          size,
          quanty,
        })
      );
    }
  };
  return (
    <>
      <div className="product">
        <div className="product__image">
          <div className="product__image__list">
            <div className="product__image__list__item">
              <img
                src={product.image01}
                alt="product_image"
                onClick={() => setImage(product.image01)}
              />
            </div>
            <div className="product__image__list__item">
              <img
                src={product.image02}
                alt="product_image"
                onClick={() => setImage(product.image02)}
              />
            </div>
          </div>
          <div className="product__image__main">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="product__info">
          <div className="product__info__content">
            <h1 className="product__info__content__name">{product.title}</h1>
            <span className="product__info__content__price">
              {numberWithCommas(+product.price)}
            </span>
          </div>
          <div className="product__info__item">
            <span className="product__info__item__title">Color</span>
            <div className="product__info__item__list">
              {product.colors.map((item, index) => {
                return (
                  <div
                    className={`product__info__item__list__value color bg-${item} ${
                      color === item ? 'active' : ''
                    }`}
                    key={index}
                    onClick={() => setColor(item)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="product__info__item">
            <span className="product__info__item__title">Size</span>
            <div className="product__info__item__list">
              {product.size.map((item, index) => {
                return (
                  <div
                    className={`product__info__item__list__value size ${
                      size === item ? 'active' : ''
                    }`}
                    key={index}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product__info__item">
            <span className="product__info__item__title">Quanty</span>
            <div className="product__info__item__quanty">
              <button
                className="product__info__item__quanty__btn"
                onClick={() => handleQuanty('decrement')}
              >
                -
              </button>
              <input type="text" value={quanty} readOnly />
              <button
                className="product__info__item__quanty__btn"
                onClick={() => handleQuanty('increment')}
              >
                +
              </button>
            </div>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__action">
              <Button
                backgroundColor="orange"
                size={'sm'}
                onClick={() => addToCart()}
              >
                Add cart
              </Button>
              <Button backgroundColor="pink" size={'sm'}>
                Buy now
              </Button>
            </div>
          </div>
        </div>

        <div className={`product__description ${descExpand ? 'expand' : ''}`}>
          <div className="product__description__title">Chi tiết sản phẩm</div>
          <div
            className="product__description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className={`product__description__toggle`}>
            <Button
              backgroundColor={'blue'}
              size={'sm'}
              classIcon={
                descExpand ? 'bx bx-up-arrow-alt' : 'bx bx-down-arrow-alt'
              }
              onClick={() => setDescExpand((prev) => !prev)}
            >
              {descExpand ? 'Collapse' : 'View more'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ProdcutDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProdcutDetail;
