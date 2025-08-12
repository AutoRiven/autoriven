import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import star from '../../assets/icons/star.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom right arrow only
const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-next`} onClick={onClick}>
      &gt;
    </div>
  );
};

const reviews = [
  {
    name: 'Joaquim F.',
    text: 'Very prompt and responsive. Reasonable pricing including international FedEx shipping. Part was missing a small O-ring retainer component and hoping this feedback will improve your service more. It was a rare part and complex assembly. Happy with the result.',
  },
  {
    name: 'Emily R.',
    text: 'Very prompt and responsive. Reasonable pricing including international FedEx shipping. Part was missing a small O-ring retainer component and hoping this feedback will improve your service more. It was a rare part and complex assembly. Happy with the result.',
  },
  {
    name: 'Carlos M.',
    text: 'Very prompt and responsive. Reasonable pricing including international FedEx shipping. Part was missing a small O-ring retainer component and hoping this feedback will improve your service more. It was a rare part and complex assembly. Happy with the result.',
  },
  {
    name: 'Ayesha K.',
    text: 'Very prompt and responsive. Reasonable pricing including international FedEx shipping. Part was missing a small O-ring retainer component and hoping this feedback will improve your service more. It was a rare part and complex assembly. Happy with the result.',
  },
];

const WhatCustomersSays = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reviews');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <></>, // Disable left arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="what-customers-say"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mb">
          What <span className="text-span">Customers </span>Say
        </h2>
        <div
          className="text-block-3 text-block-3-center text-block-3-tb-mb"
          style={{ marginBottom: '20px' }}
        >
          We’ve helped thousands of drivers find reliable used auto parts at unbeatable prices.
          Here’s what our customers have to say:
        </div>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="div-block-4">
              <h4 className="heading-5">{review.name}</h4>
              <img src={star} loading="lazy" alt="Star rating icon" className="star" />
              <div className="text-block-5 text-block-5-tb-mb">{review.text}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatCustomersSays;
