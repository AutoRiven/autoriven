// HeaderMobile.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ==== Images & Icons Imports ====
import brandLogo from '../assets/images/brand_logo.svg'
import cart from '../assets/icons/cart.svg'
import Union from '../assets/icons/Union.svg'
import search from '../assets/icons/search.svg'
import close from '../assets/icons/close.svg'
import menu from '../assets/icons/menu.svg'
import wishlist from '../assets/icons/wishlist.svg'
import whatsapp from '../assets/icons/whatsapp.svg'

// Functional Component with TypeScript
const HeaderMobile= () => {
  // State for opening/closing sidebar menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <header className="mobile-header">
      {/* ===== Top Section: Hamburger + Logo + Icons ===== */}
      <div className="mobile-header-top">
        
        {/* Hamburger Menu + WhatsApp Shortcut */}
        <div className="hamburger-whatsapp">
          <button 
            className="hamburger-btn" 
            onClick={() => setMenuOpen(true)} // Open sidebar menu
          >
            <img src={menu} alt="Menu" />
          </button>

          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/48453094174"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-below-hamburger"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>

        {/* Brand Logo (Links to Home) */}
        <Link to="/" className="mobile-logo">
          <img src={brandLogo} alt="Logo" />
        </Link>

        {/* Wishlist, Cart, and Login Icons */}
        <div className="mobile-icons">
          <Link to="/wishlist" className="mobile-icon">
            <img src={wishlist} alt="Wishlist" />
          </Link>

          <Link to="/cart" className="mobile-icon">
            <img src={cart} alt="Cart" />
            <span className="badge">13</span> {/* Example cart count */}
          </Link>

          <Link to="/login" className="mobile-icon">
            <img src={Union} alt="Login" />
          </Link>
        </div>
      </div>

      {/* ===== Search Bar ===== */}
      <form 
        className="mobile-search" 
        onSubmit={(e) => e.preventDefault()} // Prevent page reload on search
      >
        <input type="text" placeholder="Search by OEM code" />
        <img src={search} alt="Search" className="search-icon" />
      </form>

      {/* ===== Slide-In Sidebar Menu ===== */}
      {menuOpen && (
        <>
          {/* Overlay - closes menu on click */}
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>

          {/* Sidebar Navigation */}
          <div className="mobile-sidebar">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <img src={close} alt="Close" />
            </button>

            {/* Navigation Links */}
            <nav className="mobile-nav">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacts</Link>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default HeaderMobile
