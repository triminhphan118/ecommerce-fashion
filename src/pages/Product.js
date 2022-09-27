import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet';

import Products from '../assets/fake-data/products';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import CardProduct from '../components/CardProduct';
import ProdcutDetail from '../components/ProdcutDetail';

const Product = (props) => {
  const { slug } = useParams();
  const product = Products.getProductBySlug(slug);

  useEffect(() => {
    window.scroll(0, 0);
  }, [product]);
  return (
    <>
      <Helmet title={'products'}>
        <div className="product-detail">
          <Section>
            <SectionBody>
              <ProdcutDetail product={product} />
            </SectionBody>
          </Section>

          {/* san pham lien quan */}
          <Section>
            <SectionTitle>Related</SectionTitle>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {Products.getProducts(4).map((product, index) => {
                  return (
                    <CardProduct
                      key={index}
                      image={product.image01}
                      name={product.title}
                      slug={product.slug}
                      price={+product.price}
                    />
                  );
                })}
              </Grid>
            </SectionBody>
          </Section>
        </div>
      </Helmet>
    </>
  );
};

export default Product;
