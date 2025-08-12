import { useState } from 'react';
import PageHero from '../../components/pageHeroSection';
import blueUser from '../../assets/icons/blueUser.svg';
import address from '../../assets/icons/address.svg';
import blueCart from '../../assets/icons/blue_cart.svg';
import card from '../../assets/icons/card.svg';
import complete from '../../assets/icons/complete.svg';

const euCountries = [
  { label: '1. Austria: AT', value: 'AT' },
  { label: '2. Belgium: BE', value: 'BE' },
  { label: '3. Bulgaria: BG', value: 'BG' },
  { label: '4. Croatia: HR', value: 'HR' },
  { label: '5. Cyprus: CY', value: 'CY' },
  { label: '6. Czech Republic: CZ', value: 'CZ' },
  { label: '7. Denmark: DK', value: 'DK' },
  { label: '8. Estonia: EE', value: 'EE' },
  { label: '9. Finland: FI', value: 'FI' },
  { label: '10. France: FR', value: 'FR' },
  { label: '11. Germany: DE', value: 'DE' },
  { label: '12. Greece: EL', value: 'EL' },
  { label: '13. Hungary: HU', value: 'HU' },
  { label: '14. Ireland: IE', value: 'IE' },
  { label: '15. Italy: IT', value: 'IT' },
  { label: '16. Latvia: LV', value: 'LV' },
  { label: '17. Lithuania: LT', value: 'LT' },
  { label: '18. Luxembourg: LU', value: 'LU' },
  { label: '19. Malta: MT', value: 'MT' },
  { label: '20. Netherlands: NL', value: 'NL' },
  { label: '21. Poland: PL', value: 'PL' },
  { label: '22. Portugal: PT', value: 'PT' },
  { label: '23. Romania: RO', value: 'RO' },
  { label: '24. Slovakia: SK', value: 'SK' },
  { label: '25. Slovenia: SI', value: 'SI' },
  { label: '26. Spain: ES', value: 'ES' },
  { label: '27. Sweden: SE', value: 'SE' },
];

const Address_Step_2 = () => {
  const [shipToDifferent, setShipToDifferent] = useState(false);
  const [businessCustomer, setBusinessCustomer] = useState(false);
  const [selectedVATPrefix, setSelectedVATPrefix] = useState('');
  const [taxId, setTaxId] = useState('');

  const renderAddressFields = (prefix = '') => (
    <>
      <div className="w-layout-hflex flex-block-34">
        <input className="text-field-5 w-input" name={`${prefix}First-Name`} placeholder="First Name" required />
        <input className="text-field-5 w-input" name={`${prefix}Last-Name`} placeholder="Last Name" required />
      </div>
      <select className="text-field-5 w-input" name={`${prefix}Country`} required>
        <option value="" disabled selected>Select your country</option>
        <option value="USA">United States</option>
        <option value="UK">United Kingdom</option>
        <option value="CA">Canada</option>
        <option value="AU">Australia</option>
      </select>
      <input className="text-field-5 w-input" name={`${prefix}Company`} placeholder="Company Name (optional)" />
      <input className="text-field-5 w-input" name={`${prefix}Postcode`} placeholder="Postcode / Zip" required />
      <input className="text-field-5 w-input" name={`${prefix}City`} placeholder="Town / City" required />
      <input className="text-field-5 w-input" name={`${prefix}State`} placeholder="State / County (optional)" />
      <input className="text-field-5 w-input" name={`${prefix}Phone`} placeholder="Phone" required />
      <input className="text-field-5 w-input" name={`${prefix}Email`} placeholder="Email Address" type="email" required />
    </>
  );

  return (
    <div>
      <PageHero title="Checkout" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Checkout', href: '/checkout' }]} />

      <section className="checkout-section checkout-section-ch">
        <div className="w-layout-blockcontainer container w-container">
          <div className="address-checkout">

            {/* Steps */}
            <div className="w-layout-hflex flex-block-39">
              {[blueUser, address, blueCart, card, complete].map((icon, i) => (
                <div key={i} className={`div-block-15 ${i < 2 ? 'div-block-15-active' : ''}`}>
                  <img src={icon} className="image-18" alt="Step Icon" />
                  <div className="text-block-22">{['Login', 'Address', 'Review', 'Payment', 'Complete'][i]}</div>
                </div>
              ))}
              <div className="checkout-line">
                <div className="checkout-line-filled checkout-line-filled-52-copy _26" />
              </div>
            </div>

            {/* Billing Form */}
            <div className="w-layout-grid grid-28">
              <div className="form-block-5 w-form form-block-5-checkout">
                <h3>Billing Detail:</h3>
                <form method="get" className="form-5 form-5-1">

                  {renderAddressFields()}

                  {/* Business Customer Checkbox */}
                  <label className="w-checkbox checkbox-field-2 w-checkbox-business">
                    <input
                      type="checkbox"
                      name="business-customer"
                      checked={businessCustomer}
                      onChange={(e) => setBusinessCustomer(e.target.checked)}
                      className="w-checkbox-input"
                    />
                    <span className="w-form-label link-4-login">Business customer?</span>
                  </label>

                  {/* VAT / TAX ID Section */}
                  {businessCustomer && (
                    <div className="vat-wrapper">
                      <label htmlFor="vat-country">Select EU VAT Country</label>
                      <select
                        id="vat-country"
                        className="text-field-5 w-input"
                        name="vat-country"
                        value={selectedVATPrefix}
                        onChange={(e) => setSelectedVATPrefix(e.target.value)}
                        required
                      >
                        <option value="">Select VAT Country</option>
                        {euCountries.map((country) => (
                          <option key={country.value} value={country.value}>{country.label}</option>
                        ))}
                      </select>

                      {/* VAT ID Field for all countries */}
                      {selectedVATPrefix && (
                        <div  className='selectedVATPrefix'>
                          <label style={{ display: 'block', marginBottom: '5px' }}>VAT ID</label>
                          <div  className='selectedVATPrefix-sub'>
                            <span >
                              {selectedVATPrefix}
                            </span>
                            <input
                              type="text"
                              className="text-field-5 w-input"
                              placeholder="Enter VAT ID"
                              value={taxId}
                              onChange={(e) => setTaxId(e.target.value.replace(/\s/g, ''))}
                              name="vat-tax-id"
                              style={{
                                borderRadius: '0 4px 4px 0',
                                borderLeft: 'none'
                              }}
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Ship to Different Address */}
                  <label className="w-checkbox checkbox-field-2 w-checkbox-adress">
                    <input
                      type="checkbox"
                      name="ship-different"
                      checked={shipToDifferent}
                      onChange={(e) => setShipToDifferent(e.target.checked)}
                      className="w-checkbox-input"
                    />
                    <span className="w-form-label link-4-login">Ship to a different address?</span>
                  </label>

                  {shipToDifferent && (
                    <div className="shipping-form-different">
                      <h4>Shipping Address:</h4>
                      {renderAddressFields('shipping-')}
                    </div>
                  )}

                  <textarea
                    placeholder="Order Notes (optional)"
                    maxLength={5000}
                    name="order-notes"
                    className="text-field-5 text-field-5-text-area w-input"
                  />

                  <input
                    type="submit"
                    className="submit-button submit-button-right w-button w-button-login-1"
                    value="Next"
                  />
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Address_Step_2;
