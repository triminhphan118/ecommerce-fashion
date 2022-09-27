import React from 'react';
import Helmet from '../components/Helmet';

import slides from '../assets/fake-data/hero-slider';
import HeroSlider from '../components/HeroSlider';

import Policy from '../assets/fake-data/policy';
import Products from '../assets/fake-data/products';
import Banner from '../assets/images/banner.png';

import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import CardProduct from '../components/CardProduct';

const Home = () => {
  return (
    <Helmet title="Home">
      <div>
        <HeroSlider slides={slides} control={true} auto={false}></HeroSlider>

        {/* policy */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={24}>
              {Policy.map((item, index) => {
                return (
                  <PolicyCard
                    title={item.name}
                    desc={item.description}
                    icon={item.icon}
                    key={index}
                  ></PolicyCard>
                );
              })}
            </Grid>
          </SectionBody>
        </Section>

        {/* san pham ban chay */}
        <Section>
          <SectionTitle>Top Products Of Month</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {Products.getAllProducts()
                .slice(0, 4)
                .map((product, index) => {
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
          </SectionBody>
        </Section>

        {/* san pham moi */}
        <Section>
          <SectionTitle>Top Products Of Month</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {Products.getAllProducts()
                .slice(4, 12)
                .map((product, index) => {
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
          </SectionBody>
        </Section>

        {/* banner */}
        <Section>
          <SectionBody>
            <div className="banner">
              <img src={Banner} alt="banner" />
            </div>
          </SectionBody>
        </Section>

        {/* phổ biến */}
        <Section>
          <SectionTitle>Popular</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {Products.getProducts(8).map((product, index) => {
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
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Home;
