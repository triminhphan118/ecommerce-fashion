import React, { useEffect, useRef, useState } from 'react';
import Grid from './Grid';
import CardProduct from './CardProduct';

const ListProduct = ({ data }) => {
  const perLoad = 6;
  const [products, setProducts] = useState(data.slice(0, perLoad));
  const listRef = useRef();
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setProducts(data.slice(0, perLoad));
  }, [data]);

  useEffect(() => {
    const scrollLoad = () => {
      if (
        window.scrollY + window.innerHeight >=
        listRef.current.clientHeight + listRef.current.offsetTop
      ) {
        setLoad(true);
      }
    };
    window.addEventListener('scroll', scrollLoad);
    return () => {
      window.removeEventListener('scroll', scrollLoad);
    };
  }, [listRef]);

  useEffect(() => {
    const getItem = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxIndex = data.length % perLoad === 0 ? pages : pages + 1;
      if (load && index < maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;
        setProducts((prev) => [...prev, ...data.slice(start, end)]);
        setIndex(index + 1);
      }
    };
    getItem();
    setLoad(false);
  }, [data, index, load]);
  return (
    <div ref={listRef}>
      <Grid col={4} mdCol={2} smCol={1} gap={20}>
        {products.map((product, index) => {
          return (
            <CardProduct
              key={index}
              image={product.image01}
              name={product.title}
              price={+product.price}
              slug={product.slug}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default ListProduct;
