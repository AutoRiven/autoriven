// FindYourPart.jsx
import { useRef, useEffect } from 'react';
import findPart from '../../assets/images/findPart.png';
import findPart2 from '../../assets/images/findPart_2.png';
import findPart3 from '../../assets/images/findPart_3.png';
import searchIcon from '../../assets/icons/search.svg';

const FindYourPart = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Attach scroll function to window for external access
    window.scrollToSearchInput = () => {
      if (searchInputRef.current) {
        searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchInputRef.current.focus();
      }
    };
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Search submitted');
  };

  return (
    <section className="find-your-part" id="search-parts">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mb">
          How to find <span className="text-span">your part</span>
        </h2>

        <div className="form-block-2">
          <form onSubmit={handleSubmit} className="form-2">
            <div className="div-block">
              <input
                ref={searchInputRef}
                className="text-field-2 w-input"
                maxLength={256}
                name="search"
                placeholder=""
                type="text"
                id="search"
              />
              <img
                src={searchIcon}
                loading="lazy"
                alt=""
                className="image imag-tb-mb"
                style={{ filter: 'brightness(0.5)' }}
              />
            </div>
            <input
              type="submit"
              className="submit-button w-button submit-button-tb-mb"
              value="Start Searching"
            />
          </form>
        </div>

        <div className="w-layout-grid grid grid-tb-mb">
          <div className="div-block-2">
            <img src={findPart} loading="lazy" alt="" className="image-4" />
            <div className="div-block-3">
              <h3 className="heading-3 heading-3-tb-mb">Use the search</h3>
              <div className="text-block-2 text-block-2-tb-mb">Enter the OEM code</div>
            </div>
          </div>

          <div className="div-block-2">
            <img src={findPart2} loading="lazy" alt="" className="image-4" />
            <div className="div-block-3">
              <h3 className="heading-3 heading-3-tb-mb">Shop with confidence</h3>
              <div className="text-block-2 text-block-2-tb-mb">
                Fast shipping, 30-day warranty
              </div>
            </div>
          </div>

          <div className="div-block-2">
            <img src={findPart3} loading="lazy" alt="" className="image-4" />
            <div className="div-block-3">
              <h3 className="heading-3 heading-3-tb-mb">Find the OEM code</h3>
              <div className="text-block-2 text-block-2-tb-mb">
                Locate the number (e.g., 12345-67890)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourPart;
