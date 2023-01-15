import CustomSlider from '../components/CustomSlider/CustomSlider';
import './HomePage.scss';
import { useState } from 'react';
import AdavantageText from '../components/AdvantageText/AdvantageText';
import ProductGallery from '../components/ProductGallery/ProductGallery';
import sliders from '../data/sliders/sliders';
import data from '../data/gallery/hits';

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <div className="home-page">
        <div className="container gallery-wrap">
          {' '}
          <CustomSlider {...sliders.bannerProps} />
        </div>
        <div className="advantages-wrapper">
          <div className="container">
            <CustomSlider autoplay={false} slideIndex={slideIndex} {...sliders.AdvantagesProps} />
            <AdavantageText currentSlide={slideIndex} changeSlide={setSlideIndex} />
          </div>
        </div>
        <ProductGallery {...data.hits} />
        <div className="container">
          <CustomSlider autoplay={false} {...sliders.appProps} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
