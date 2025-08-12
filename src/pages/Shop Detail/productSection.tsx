import  { useState } from 'react';
import wishList from '../../assets/icons/wishlist.svg';
import share from '../../assets/icons/share.svg';
import ProductSlider from './productSlider';
import star from '../../assets/icons/star.svg';

const euCountries = [
  { label: 'Austria: AT', value: 'AT' },
  { label: 'Belgium: BE', value: 'BE' },
  { label: 'Bulgaria: BG', value: 'BG' },
  { label: 'Croatia: HR', value: 'HR' },
  { label: 'Cyprus: CY', value: 'CY' },
  { label: 'Czech Republic: CZ', value: 'CZ' },
  { label: 'Denmark: DK', value: 'DK' },
  { label: 'Estonia: EE', value: 'EE' },
  { label: 'Finland: FI', value: 'FI' },
  { label: 'France: FR', value: 'FR' },
  { label: 'Germany: DE', value: 'DE' },
  { label: 'Greece: EL', value: 'EL' },
  { label: 'Hungary: HU', value: 'HU' },
  { label: 'Ireland: IE', value: 'IE' },
  { label: 'Italy: IT', value: 'IT' },
  { label: 'Latvia: LV', value: 'LV' },
  { label: 'Lithuania: LT', value: 'LT' },
  { label: 'Luxembourg: LU', value: 'LU' },
  { label: 'Malta: MT', value: 'MT' },
  { label: 'Netherlands: NL', value: 'NL' },
  { label: 'Poland: PL', value: 'PL' },
  { label: 'Portugal: PT', value: 'PT' },
  { label: 'Romania: RO', value: 'RO' },
  { label: 'Slovakia: SK', value: 'SK' },
  { label: 'Slovenia: SI', value: 'SI' },
  { label: 'Spain: ES', value: 'ES' },
  { label: 'Sweden: SE', value: 'SE' },
];

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Germany');

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const label = euCountries.find(c => c.value === e.target.value)?.label?.split(':')[0];
    setSelectedCountry(label || 'Germany');
  };
  console.log(selectedCountry);
  

  return (
    <section className="products-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-25">
          <ProductSlider />
          <div>
            <div className="w-layout-hflex flex-block-21 flex-block-21-flex">
              <h2 className="heading-12 heading-12-tb-mb ">Honda K24A, Chevy 5.3L V8</h2>
              <div className="w-layout-hflex flex-block-20 share-block-detail">
                <button onClick={copyToClipboard} className="share-block w-inline-block">
                  <img src={share} alt="Share" className="share-image" />
                </button>
                
                <button onClick={toggleWishlist} className="share-block w-inline-block">
                  <a href="/wishlist" className="share-block w-inline-block" onClick={() => setWishlisted(!wishlisted)}>
                  <img
                    src={wishList}
                    style={{ filter: wishlisted ? 'invert(50%)' : 'invert(100%)' }}
                    alt="Wishlist"
                    className="share-image"
                  /></a>
                </button>
              </div>
            </div>

            <div className="w-layout-hflex flex-block-18">
              <img src={star} className="star star-mobile" alt="star" style={{ height: '12px' }} />
              <div className="text-block-9 text-block-9-mobile">97% Supplier Recommended</div>
            </div>

            <div className="w-layout-grid grid-14 w-layout-grid-col">
              <div className='text'>SKU:</div>
              <div className='text-1'>PRODUCT-5-HI-SM</div>

              <div className='text'>Shipping to:</div>
              <div className='text-1'>
                <select onChange={handleCountryChange} style={{ padding: '4px' }}>
                  {euCountries.map(({ label, value }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div className='text'>Shipping Cost:</div>
              <div className='text-1'>From €19.00</div>

              <div className='text'>Availability:</div>
              <div className='text-1'>In Stock</div>
            </div>

            <div className="w-layout-grid grid-14 w-layout-grid-col-1">
              <div className='text'>Price:</div>
              <div className="text-block-12 text-block-12-pr">€27.45</div>
            </div>

            <div className="w-layout-grid grid-14 grid-14-col">
              <div className='text'>Condition:</div>
              <div className="text-span used">Used</div>
            </div>

            <div className="w-layout-hflex flex-block-22 w-layout-grid-col-1">
              <div className="form-block-4 form-block-4-full-width w-form w-layout-grid-col-1">
                <form className="form-3 form-3-shope">
                  <button type="button" className="button-3 w-button" onClick={decrement}>-</button>
                  <input
                    className="text-field-3 w-input"
                    value={quantity}
                    type="number"
                    readOnly
                    style={{ color: 'black', textAlign: 'center' }}
                  />
                  <button type="button" className="button-3 w-button" onClick={increment}>+</button>
                </form>
                <h2 className="heading-13">of 3 unit</h2>
              </div>

              <button className="add-to-cart-btn w-button btn-tb">Add to Cart</button>
              <button className="buy-now-btn w-button btn-tb">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
