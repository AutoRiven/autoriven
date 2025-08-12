import PageHero from '../../components/pageHeroSection'
import blueUser from '../../assets/icons/blueUser.svg'
import address from '../../assets/icons/address.svg'
import blueCart from '../../assets/icons/blue_cart.svg'
import card from '../../assets/icons/card.svg'
import complete from '../../assets/icons/complete.svg'

const Review_Step_3 = () => {
  return (
    <div>
      <PageHero
        title="Checkout"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Checkout', href: '/checkout' },
        ]}
      />

      <section className="checkout-section checkout-section-ch">
        <div className="w-layout-blockcontainer container w-container">
          <div className="address-checkout address-checkout-reviews">
            {/* Checkout Steps */}
            <div className="w-layout-hflex flex-block-39">
              <div className="div-block-15 div-block-15-active">
                <img src={blueUser} alt="Login Step Icon" loading="lazy" className="image-18" />
                <div className="text-block-22">Login</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={address} alt="Address Step Icon" loading="lazy" className="image-18" />
                <div className="text-block-22 ">Address</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={blueCart} alt="Review Step Icon" loading="lazy" className="image-18" />
                <div className="text-block-22">Review</div>
              </div>
              <div className="div-block-15">
                <img src={card} alt="Payment Step Icon" loading="lazy" className="image-18" />
                <div className="text-block-22">Payment</div>
              </div>
              <div className="div-block-15">
                <img src={complete} alt="Complete Step Icon" loading="lazy" className="image-18" />
                <div className="text-block-22">Complete</div>
              </div>
              <div className="checkout-line">
                <div className="checkout-line-filled checkout-line-filled-56" />
              </div>
            </div>

            {/* Order Review Content */}
            <div className="w-layout-grid grid-28">
              <div className="rich-text-block-2 w-richtext">
                <p><strong>Name:</strong> Alex Carey</p>
                <p><strong>Address:</strong> ABCD Road, Australia</p>
                <p><strong>Email:</strong> alexcarey@gmail.com</p>
              </div>

              <h3>Your Order</h3>
              <div className="w-layout-hflex flex-block-40">
                <h3 className="heading-19-1">Product</h3>
                <h3 className="heading-20-1">Subtotal</h3>
              </div>

              <div className="line" />

              {/* Sample Items */}
              <div className="w-layout-hflex flex-block-40">
                <div className="text-block-23">Honda K24A, Chevy 5.3L V8</div>
                <div className="text-block-23">€72.82</div>
              </div>
              <div className="w-layout-hflex flex-block-40">
                <div className="text-block-23">Honda K24A, Chevy 5.3L V8</div>
                <div className="text-block-23">€72.82</div>
              </div>

              <div className="line" />

              <div className="w-layout-hflex flex-block-40">
                <h3 className="heading-19 text-block-23">Subtotal</h3>
                <div className="heading-20 text-block-23">€72.82</div>
              </div>

              <div className="w-layout-hflex flex-block-40">
                <h3 className="heading-19 text-block-23">Shipping</h3>
                <div className="heading-20 text-block-23">Shipping Standard: €55.38</div>
              </div>

              <div className="line" />

              <h2 className="heading-21">
                Total: €132.75 (includes €30.65 tax DE)
              </h2>

              <div className="w-layout-hflex flex-block-40">
                <a href="#" className="button w-button review-btn">Previous</a>
                <a href="#" className="button w-button review-btn">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Review_Step_3
