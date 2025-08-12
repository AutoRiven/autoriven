import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productImage from '../../assets/images/products.png';
import cancel from '../../assets/icons/cancel.svg';

const CartDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/checkout/login') {
      navigate('/checkout', { replace: true });
    }
  }, [location.pathname, navigate]);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Honda K24A, Chevy 5.3L V8',
      sku: '168A333R333',
      price: 27.45,
      quantity: 1,
      image: productImage,
    },
  ]);
  useEffect(() => {
  if (cartItems.length === 0 && location.pathname.startsWith('/checkout')) {
    navigate('/cart', { replace: true });
  }
}, [cartItems, location.pathname, navigate]);
  const countryZones = [
    'Germany', 'Austria', 'Netherlands', 'Belgium', 'Luxembourg', 'France',
    'Italy', 'Spain', 'Portugal', 'Sweden', 'Finland', 'Denmark', 'Ireland',
    'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Slovakia', 'Slovenia',
    'Greece', 'Croatia', 'Bulgaria', 'Estonia', 'Latvia', 'Lithuania'
  ];

  const shippingRates: { [key: string]: number } = {
    Germany: 27.45,
    Austria: 28,
    Netherlands: 26.5,
    Belgium: 29,
    France: 30,
    Italy: 32,
    Spain: 35,
    Portugal: 33,
    Sweden: 31,
    Finland: 31.5,
    Denmark: 28.5,
    Ireland: 34,
    Poland: 30,
    'Czech Republic': 30,
    Hungary: 29,
    Romania: 34,
    Slovakia: 30,
    Slovenia: 30,
    Greece: 35,
    Croatia: 31,
    Bulgaria: 34,
    Estonia: 32,
    Latvia: 32,
    Lithuania: 32
  };

  const [selectedCountry, setSelectedCountry] = useState('');

  // Auto-detect country based on IP
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (countryZones.includes(data.country_name)) {
          setSelectedCountry(data.country_name);
        } else {
          setSelectedCountry('Germany');
        }
      } catch (error) {
        setSelectedCountry('Germany');
      }
    };

    fetchCountry();
  }, []);

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = selectedCountry && shippingRates[selectedCountry]
    ? shippingRates[selectedCountry]
    : 27.45;
  const total = subtotal + shipping;

  return (
    <section className="cart ">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-18">
          <div className="div-block-11">
            <div className="w-layout-hflex flex-block-23 flex-block-23-cart">
              <div className="w-layout-grid grid-16 grid-16-1">
                <div className="text-block-16">Item</div>
                <div className="text-block-16">Sku</div>
                <div className="text-block-16">Quantity</div>
                <div className="text-block-16 text-block-16-hide-on-mobile">Price</div>
              </div>
            </div>

            {cartItems.map(item => (
              <div key={item.id} className="w-layout-grid grid-16">
                <div className="w-layout-hflex flex-block-24">
                  <img src={item.image} loading="lazy" alt="Product" className="image-13" />
                  <div className="text-block-14">{item.name}</div>
                </div>

                <div className="text-block-14">{item.sku}</div>

                <div className="form-block-4 w-form">
                  <form method="get" className="form-3" onSubmit={e => e.preventDefault()}>
                    <a
                      href="#"
                      className="button-3 w-button"
                      onClick={e => {
                        e.preventDefault();
                        handleQuantityChange(item.id, -1);
                      }}
                    >
                      -
                    </a>
                    <input
                      className="text-field-3 w-input text-field-3-1"
                      value={item.quantity}
                      type="number"
                      readOnly
                    />
                    <a
                      href="#"
                      className="button-3 w-button"
                      onClick={e => {
                        e.preventDefault();
                        handleQuantityChange(item.id, 1);
                      }}
                    >
                      +
                    </a>
                  </form>
                </div>

                <h3 className="heading-15 heading-15-hide-on-mobile">
                  €{(item.price * item.quantity).toFixed(2)}
                </h3>

                <img
                  src={cancel}
                  loading="lazy"
                  alt="Remove"
                  className="product-cancel product-cancel-hide"
                  onClick={() => handleRemove(item.id)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}

            {cartItems.length === 0 && (
              <p style={{ textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
            )}
          </div>

          <div className="w-layout-grid grid-17">
            <div className="w-layout-hflex flex-block-25">
              <div className="text-block-17">Subtotal:</div>
              <div className="text-block-17">€{subtotal.toFixed(2)}</div>
            </div>

            {/* Country dropdown for shipping */}
            <div className="w-layout-hflex flex-block-25" style={{ alignItems: 'center', gap: '1rem' }}>
              <div className="text-block-17" style={{ whiteSpace: 'nowrap' }}>Shipping to:</div>
              <select
                className="text-field-3 w-input text-field-3-counrty"
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                style={{ maxWidth: '12rem' }}
              >
                <option value="">Select Country</option>
                {countryZones.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <div className="text-block-17" style={{ marginLeft: 'auto' }}>
                €{shipping.toFixed(2)}
              </div>
            </div>

            <div className="w-layout-hflex flex-block-25">
              <div className="text-block-17">Coupon Code:</div>
              <a href="#" className="text-block-17">Add coupon</a>
            </div>

            <div className="w-layout-hflex flex-block-25">
              <div className="text-block-17">Total:</div>
              <div className="text-block-17">€{total.toFixed(2)}</div>
            </div>

         <button
  className="button button-no-margin-top button-margin-bottom-1rem w-button"
  onClick={() => {
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    navigate('/checkout/login');
  }}
>
  Check out
</button>

            <button
              className="buy-now-btn w-button"
              onClick={() => navigate('/shop')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
