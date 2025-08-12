// HeroSection.jsx
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero_image.png';
import heroOverlay from '../../assets/images/hero_overlay.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import xIcon from '../../assets/icons/X.svg';

// Extend the Window interface to include scrollToSearchInput
declare global {
  interface Window {
    scrollToSearchInput?: () => void;
  }
}

const HeroSection = () => {
  const handleScrollToSearch = () => {
    if (window.scrollToSearchInput) {
      window.scrollToSearchInput();
    } else {
      window.location.hash = '#search-parts';
    }
  };

  return (
    <section className="hero-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-8">
          <div className="w-layout-vflex flex-block-5">
            <h1 className="heading heading-tb-mb">
              Millions of Used Auto Parts <span className="text-span">Fast Shipping</span>
            </h1>
            <div className="text-block tb-mobile-text">Find parts by OEM code</div>
            <button
              className="button w-button tb-mobile-button"
              onClick={handleScrollToSearch}
            >
              Search Now
            </button>
          </div>

          <img
            src={heroImage}
            loading="lazy"
            alt="Hero car engine parts"
            className="image-2 tb-mobile-image-2"
          />
        </div>
      </div>

      <img
        src={heroOverlay}
        loading="lazy"
        alt="Hero background overlay"
        className="image-3"
      />

      <div className="w-layout-vflex flex-block-6">
        <Link to="/facebook" className="social-icon w-inline-block social-icon-facebook" aria-label="Facebook">
          <img src={facebookIcon} loading="lazy" alt="Facebook icon" />
        </Link>
        <Link to="/instagram" className="social-icon w-inline-block" aria-label="Instagram">
          <img src={instagramIcon} loading="lazy" alt="Instagram icon" />
        </Link>
        <Link to="/x" className="social-icon w-inline-block" aria-label="X / Twitter">
          <img src={xIcon} loading="lazy" alt="X / Twitter icon" />
        </Link>
        <div className="hr-line" />
      </div>
    </section>
  );
};

export default HeroSection;
