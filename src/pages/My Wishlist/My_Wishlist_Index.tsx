import { useState } from 'react';
import PageHero from '../../components/pageHeroSection';
import cancel from '../../assets/icons/cancel.svg';
import products from '../../assets/images/products.png';

const My_Wishlist_Index = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      sku: '168A333R333',
      price: 27.45,
      quantity: 1,
      image: products,
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQty = (id: number) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <PageHero
        title="My Wishlist"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'My Wishlist', href: '/My_Wishlist' },
        ]}
      />

      <section className="wishlist">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-11">
            <div className="w-layout-hflex flex-block-23 flex-block-23-no-overflow">
              <div className="w-layout-grid grid-24 grid-24-width-100 wishlist-text-col-mb">
                <div className="text-block-16">Images</div>
                <div className="text-block-16">Sku</div>
                <div className="text-block-16">Unit Price</div>
                <div className="text-block-16">Quantity</div>
                <div className="text-block-16">Total</div>
                <div className="text-block-16">Add to Cart</div>
              </div>
            </div>

            {wishlistItems.map((item) => (
              <div key={item.id} className="w-layout-grid grid-24 grid-24-wishlist-1">
                <img
                  src={item.image}
                  loading="lazy"
                  alt="Wishlist Product"
                  className="image-13"
                />
                <div className="text-block-14">{item.sku}</div>
                <h3 className="heading-15">€{item.price.toFixed(2)}</h3>

                <div className="form-block-4 w-form">
                  <div className="form-3">
                    <a
                      href="#"
                      className="button-3 w-button"
                      onClick={(e) => {
                        e.preventDefault();
                        decreaseQty(item.id);
                      }}
                    >
                      -
                    </a>
                    <input
                      className="text-field-3 w-input"
                      value={item.quantity.toString()}
                      type="number"
                      readOnly
                    />
                    <a
                      href="#"
                      className="button-3 w-button"
                      onClick={(e) => {
                        e.preventDefault();
                        increaseQty(item.id);
                      }}
                    >
                      +
                    </a>
                  </div>
                </div>

                <h3 className="heading-15">
                  €{(item.price * item.quantity).toFixed(2)}
                </h3>
                <a href="#" className="button-4 w-button">
                  Add to Cart
                </a>
                <img
                  src={cancel}
                  loading="lazy"
                  alt="Remove from Wishlist"
                  className="product-cancel product-cancel-hide"
                  onClick={() => removeItem(item.id)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}

            {wishlistItems.length === 0 && (
              <p style={{ padding: '20px 0', textAlign: 'center' }}>
                Your wishlist is empty.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default My_Wishlist_Index;
