// Import required modules and assets
import { Link } from 'react-router-dom';
import ctaImage from '../assets/images/cta.png';
import ctaBg from '../assets/images/cta_bg.png';

// CTA Component — Displays a call-to-action section with text, button, and image
const CTA = () => {
  return (
    <section className="contact-us">
      
      {/* Background image for the CTA section */}
      <img
        src={ctaBg}
        loading="lazy"
        alt="CTA background"
        className="image-6"
      />

      {/* Main content container */}
      <div className="w-layout-blockcontainer container w-container w-container-tb-mb">
        <div className="w-layout-grid grid-9">
          
          {/* Text and contact button */}
          <div className="w-layout-vflex w-layout-vflex-center">
            <h2 className="heading-6 heading-2-tb-mb heading-2-tb-mb-1">
              New parts weekly! Can’t find it? Contact us!
            </h2>
            <Link
              to="/contact"
              className="button w-button submit-button-tb-mb tn-m"
            >
              Contact Us
            </Link>
          </div>

          {/* Main CTA image */}
          <img
            src={ctaImage}
            loading="lazy"
            alt="Call to action image"
            className="image-8"
          />

        </div>
      </div>
    </section>
  );
};

export default CTA;
