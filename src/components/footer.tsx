// Import required modules and assets
import { Link } from 'react-router-dom';
import brandLogo from '../assets/images/brand_logo.svg';
import paypal from '../assets/images/paypal.png';
import stripe from '../assets/images/stripe.png';
import master from '../assets/images/mastercard.png';
import visa from '../assets/images/visa.png';
import bank from '../assets/images/bank.png';
import american from '../assets/images/american.png';
import facebook from '../assets/icons/facebook.svg';
import X from '../assets/icons/X.svg';
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import support from '../assets/icons/support.svg';

// Footer Component — Displays website footer with links, contact info, newsletter, and payment/social icons
const Footer= () => {
  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container w-container">
        
        {/* Brand Logo */}
        <Link to="/" className="w-inline-block">
          <img
            src={brandLogo}
            loading="lazy"
            alt="Autoriven Logo"
            className="brand-logo-image"
          />
        </Link>

        {/* Main Footer Links */}
        <div className="w-layout-grid grid-5">
          
          {/* Quick Links Section */}
          <div className="w-layout-vflex flex-block-8">
            <h4 className="heading-7">Quick Links</h4>
            <Link to="/about" className="text-block-6">About Us</Link>
            <Link to="/cookies-policy" className="text-block-6">Cookies</Link>
            <Link to="/shop" className="text-block-6">Shipping</Link>
            <Link to="/payments" className="text-block-6">Payments</Link>
            <Link to="/faq" className="text-block-6">FAQ</Link>
            <Link to="/returns" className="text-block-6">Returns</Link>
            <Link to="/#" className="text-block-6">Warranty</Link>
          </div>

          {/* Our Categories Section */}
          <div className="w-layout-vflex flex-block-8">
            <h4 className="heading-7">Our categories</h4>
            <Link to="#" className="text-block-6">Body Components</Link>
            <Link to="#" className="text-block-6">Filters and Filtration Systems</Link>
            <Link to="#" className="text-block-6">Lighting and Signaling Devices</Link>
            <Link to="#" className="text-block-6">Engines and Engine Components</Link>
            <Link to="#" className="text-block-6">Cooling Systems</Link>
            <Link to="#" className="text-block-6">Electrical and Ignition Systems</Link>
            <Link to="#" className="text-block-6">Brake Systems</Link>
            <Link to="#" className="text-block-6">Steering Mechanisms</Link>
          </div>

          {/* Account Section */}
          <div className="w-layout-vflex flex-block-8">
            <h4 className="heading-7">Account</h4>
            <Link to="/dashboard" className="text-block-6">Dashboard</Link>
            <Link to="/orders" className="text-block-6">My Orders</Link>
            <Link to="/#" className="text-block-6">Track Order</Link>
            <Link to="/#" className="text-block-6">My Data</Link>
            <Link to="/contact" className="text-block-6">Contact</Link>
          </div>

          {/* Newsletter Section */}
          <div className="w-layout-vflex flex-block-8">
            <h4 className="heading-7">Newsletter</h4>
            <p className="text-block-6">
              What's inside: new arrivals, exclusive sales, truck news and more!
            </p>
            <div className="form-block-3 w-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-input"
                  maxLength={256}
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  id="email"
                  required
                />
                <input
                  type="submit"
                  className="submit-button-2 w-button"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info and Payment Options */}
        <div className="w-layout-grid grid-6">
          
          {/* Contact Details */}
          <div className="w-layout-hflex flex-block-9 flex-block-9-1">
            <div className="w-layout-vflex">
              <Link to="#" className="text-block-6">
                <img src={support} loading="lazy" alt="Customer support icon" className="image-7" />
                Email: info@autoriven.com
              </Link>
              <Link
                to="https://wa.me/48453094174"
                className="text-block-6"
                style={{ marginTop: '1rem' }}
              >
                <img
                  src={whatsapp}
                  loading="lazy"
                  alt="Whatsapp icon"
                  style={{ width: '2rem', marginLeft: 0, marginRight: 6 }}
                  className="icon whatsapp"
                />
                Write us on WhatsApp
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="w-layout-hflex mobile-view">
            <h4 className="heading-7">Payment options</h4>
            <div className="w-layout-vflex flex-block-10 flex-block-8 wp-letft">
              <img src={paypal} loading="lazy" alt="PayPal" className="image-7" />
              <img src={stripe} loading="lazy" alt="Stripe" className="image-7" />
              <img src={bank} loading="lazy" alt="Bank Transfer" className="image-7" />
              <img src={visa} loading="lazy" alt="Visa" className="image-7" />
              <img src={american} loading="lazy" alt="American Express" className="image-7" />
              <img src={master} loading="lazy" alt="Mastercard" className="image-7" />
            </div>
          </div>
        </div>

        {/* Bottom Footer (Legal + Social Links) */}
        <div className="w-layout-grid grid-7">
          
          {/* Copyright */}
          <div className="text-block-6">
            Copyright © 2025 Autoriven. All Rights Reserved
          </div>

          {/* Legal Pages */}
          <div className="w-layout-vflex flex-block-10">
            <Link to="/privacy-policy" className="text-block-6">Privacy Policy</Link>
            <Link to="/terms" className="text-block-6">Terms &amp; Conditions</Link>
            <Link to="/sitemap" className="text-block-6">Sitemap</Link>
          </div>

          {/* Social Media Links */}
          <div className="w-layout-hflex flex-block-9">
            <div className="w-layout-vflex flex-block-10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} loading="lazy" alt="Facebook" className="image-7" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} loading="lazy" alt="Instagram" className="image-7" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={X} loading="lazy" alt="X (Twitter)" className="image-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
