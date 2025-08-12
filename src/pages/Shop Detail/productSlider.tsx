import { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Images
import products from '../../assets/images/products.png';
import products1 from '../../assets/images/products.png';
import products2 from '../../assets/images/products.png';
import products3 from '../../assets/images/products.png';
import products4 from '../../assets/images/products.png';
import products5 from '../../assets/images/products.png';
import products6 from '../../assets/images/products.png';
import arrow_down from '../../assets/icons/arrow_down.svg'

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  products,
  products1,
  products2,
  products3,
  products4,
  products5,
  products6,
];

// 👉 Custom Arrow Components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', zIndex: 2 }}
      onClick={onClick}
    >
      <img src={arrow_down} alt="Next" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', zIndex: 2 }}
      onClick={onClick}
    >
      <img src={arrow_down} alt="Previous" />
    </div>
  );
};

const ProductSlider = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth > 991);

  // Update orientation on resize
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settingsMain = {
    asNavFor: nav2 as Slider,
    ref: (slider: Slider) => setNav1(slider),
    arrows: false,
    fade: true,
  };

  const settingsThumbs = {
    asNavFor: nav1 as Slider,
    ref: (slider: Slider) => setNav2(slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: isVertical,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="gallery-wrapper gallery-wrapper-mobile">
      <div className="thumbnail-slider">
        <Slider {...settingsThumbs}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`thumb-${index}`} className="thumbnail-img" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="main-slider main-slider-mobile-detail">
        <Slider {...settingsMain}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`engine-${index}`} className="main-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
