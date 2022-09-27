import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSlider = ({ slides, control, auto, time = 3000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = (index) => {
    if (index < slides.length) {
      setActiveSlide(index);
    }
  };
  const nextSlideIncreament = () => {
    setActiveSlide((prev) => {
      let next = prev + 1;
      return next < slides.length ? next : 0;
    });
  };

  useEffect(() => {
    let timer;
    if (auto) {
      timer = setInterval(nextSlideIncreament, time);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <section className="hero-slider">
      {slides.length > 0 &&
        slides.map((slide, index) => {
          return (
            <HeroSliderItem
              slide={slide}
              key={index}
              active={index === activeSlide}
            ></HeroSliderItem>
          );
        })}

      {control && (
        <div className="hero-slider__control">
          {slides.map((slide, index) => (
            <div
              className={`hero-slider__control__item ${
                activeSlide === index ? 'active' : ''
              }`}
              key={index}
              onClick={() => nextSlide(index)}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
};

const HeroSliderItem = ({ slide, active }) => {
  return (
    <div className={`hero-slider__item ${active ? 'active' : ''}`}>
      <div className="hero-slider__item__info">
        <div
          className="hero-slider__item__info__title"
          style={{ color: slide.color }}
        >
          {slide.title}
        </div>
        <div className="hero-slider__item__info__desc">{slide.description}</div>
        <div className="hero-slider__item__info__btn">
          <Link to={slide.path}>
            <Button backgroundColor={slide.color} animate icon>
              View Desc
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <div className="shape" style={{ backgroundColor: slide.color }}></div>
        <img src={slide.img} alt={slide.title} />
      </div>
    </div>
  );
};

HeroSlider.propTypes = {
  slides: PropTypes.array.isRequired,
  control: PropTypes.bool,
};

export default HeroSlider;
