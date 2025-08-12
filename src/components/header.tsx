// Header.tsx
import { Link } from 'react-router-dom'
import { useRef } from 'react'

// Assets
import brandLogo from '../assets/images/brand_logo.svg'
import cartIcon from '../assets/icons/cart.svg'
import searchIcon from '../assets/icons/search.svg'
import loginIcon from '../assets/icons/user_login.svg'
import wishlistIcon from '../assets/icons/wishlist.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'

// Components
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  // Reference for search input (focus karne ke liye)
  const inputRef = useRef<HTMLInputElement>(null)

  // Search button click par input focus karega
  const handleSearchClick = (): void => {
    inputRef.current?.focus()
  }

  return (
    <header className="section">
      <div className="w-layout-blockcontainer container w-container">

        {/* Top section: Logo + Search + Cart/Wishlist/Login */}
        <div className="w-layout-hflex flex-block">

          {/* Brand Logo */}
          <Link to="/" className="w-inline-block">
            <img
              src={brandLogo}
              loading="lazy"
              alt="Autoriven Logo"
              className="brand-logo-image"
            />
          </Link>

          {/* Search Bar */}
          <div className="form-block w-form">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                ref={inputRef}
                className="text-field w-input"
                maxLength={256}
                name="search"
                placeholder="Search by OEM code"
                type="text"
                id="search"
                autoComplete="off"
              />
              <button
                type="button"
                className="search-button-1"
                onClick={handleSearchClick}
              >
                <img
                  src={searchIcon}
                  loading="lazy"
                  alt="Search icon"
                  className="image-2-h"
                />
              </button>
            </form>
          </div>

          {/* Cart, Wishlist & Login */}
          <div className="w-layout-hflex flex-block-2">

            {/* Cart */}
            <Link to="/cart" className="link-block w-inline-block">
              <img src={cartIcon} alt="Cart icon" className="icon" />
              <div className="span">13</div>
              <div className="hide-on-mobile">Cart</div>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="link-block w-inline-block">
              <img src={wishlistIcon} alt="Wishlist icon" className="icon" />
              <div className="hide-on-mobile">Wishlist</div>
              <div className="span">13</div>
            </Link>

            {/* Login */}
            <Link to="/login" className="link-block w-inline-block">
              <img src={loginIcon} alt="Login icon" className="icon" />
              <div className="hide-on-mobile">Login</div>
            </Link>

          </div>
        </div>

        {/* Bottom section: WhatsApp + Navigation Links + Language Selector */}
        <div className="w-layout-hflex flex-block-3">

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/48453094174"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block w-inline-block"
          >
            <img
              src={whatsappIcon}
              alt="Whatsapp icon"
              style={{ width: '2rem' }}
              className="icon whatsapp"
            />
            <span className="hide-on-mobile hide-on-mobile-1">
              Write us on WhatsApp
            </span>
          </a>

          {/* Navigation Links */}
          <div className="w-layout-hflex flex-block-4">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About Us</Link>
            <Link to="/shop" className="link">Shop</Link>
            <Link to="/contact" className="link">Contacts</Link>
          </div>

          {/* Language Selector */}
          <LanguageDropdown />
        </div>

      </div>
    </header>
  )
}

export default Header
