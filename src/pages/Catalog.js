import React, { useCallback, useEffect, useState } from 'react';
import Helmet from '../components/Helmet';
import Checkbox from '../components/Checkbox';

import Products from '../assets/fake-data/products';
import Categories from '../assets/fake-data/category';
import Colors from '../assets/fake-data/product-color';
import Sizes from '../assets/fake-data/product-size';
import Button from '../components/Button';
import ListProduct from '../components/ListProduct';

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const fakeproducts = Products.getAllProducts();
  const [products, setProducts] = useState(fakeproducts);
  const [filters, setFilters] = useState(initFilter);

  const onFilter = (type, checked, slug) => {
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        [type]: [...prev[type], slug],
      }));
    } else {
      let cloneItemFilter = filters[type];
      const newItemFilter = cloneItemFilter.filter((item) => item !== slug);
      setFilters((prev) => ({
        ...prev,
        [type]: newItemFilter,
      }));
    }
  };

  const updateProducts = useCallback(() => {
    let listProduct = [...fakeproducts];
    if (filters.category.length > 0) {
      listProduct = listProduct.filter((product) =>
        filters.category.includes(product.categorySlug)
      );
    }

    if (filters.color.length > 0) {
      listProduct = listProduct.filter((product) => {
        let check = product.colors.find((item) => {
          return filters.color.includes(item);
        });
        return check !== undefined;
      });
    }
    if (filters.size.length > 0) {
      listProduct = listProduct.filter((product) => {
        let check = product.size.find((item) => filters.size.includes(item));
        return check !== undefined;
      });
    }
    setProducts(listProduct);
  }, [filters]);
  const clearFilter = () => setFilters(initFilter);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <Helmet title="Products">
      <div className="catalog">
        <aside className="catalog__filter">
          <div className="catalog__filter__widget">
            <span className="catalog__filter__widget__title">Categories</span>
            <div className="catalog__filter__widget__content">
              {Categories.map((category, index) => {
                return (
                  <div
                    className="catalog__filter__widget__content__item"
                    key={index}
                  >
                    <Checkbox
                      label={category.display}
                      checked={
                        filters?.category &&
                        filters.category.includes(category.categorySlug)
                      }
                      onChange={(input) => {
                        if (input)
                          onFilter(
                            'category',
                            input.checked,
                            category.categorySlug
                          );
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <span className="catalog__filter__widget__title">Colors</span>
            <div className="catalog__filter__widget__content">
              {Colors.map((color, index) => {
                return (
                  <div
                    className="catalog__filter__widget__content__item"
                    key={index}
                  >
                    <Checkbox
                      label={color.display}
                      checked={
                        filters?.color && filters.color.includes(color.color)
                      }
                      onChange={(input) => {
                        if (input)
                          onFilter('color', input.checked, color.color);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <span className="catalog__filter__widget__title">Size</span>
            <div className="catalog__filter__widget__content">
              {Sizes.map((size, index) => {
                return (
                  <div
                    className="catalog__filter__widget__content__item"
                    key={index}
                  >
                    <Checkbox
                      label={size.display}
                      checked={
                        filters?.size && filters.size.includes(size.size)
                      }
                      onChange={(input) => {
                        if (input) onFilter('size', input.checked, size.size);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button
                backgroundColor={'black'}
                size={'md'}
                onClick={clearFilter}
              >
                Reset
              </Button>
            </div>
          </div>
        </aside>
        <section className="catalog__content">
          <ListProduct data={products} />
        </section>
      </div>
    </Helmet>
  );
};

export default Catalog;
