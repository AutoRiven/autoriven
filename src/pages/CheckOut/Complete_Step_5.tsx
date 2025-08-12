import PageHero from '../../components/pageHeroSection'
import blueUser from '../../assets/icons/blueUser.svg'
import address from '../../assets/icons/address.svg'
import blueCart from '../../assets/icons/blue_cart.svg'
import card from '../../assets/icons/card.svg'
import complete from '../../assets/icons/complete.svg'

const Complete_Step_5 = () => {
  return (
    <div>
      <PageHero
        title="Checkout"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Checkout', href: '/checkout' },
        ]}
      />

      <section className="checkout-sectio checkout-section-ch complete ">
        <div className="w-layout-blockcontainer container w-container">
          <div className="address-checkout address-checkout-reviews">
            <div className="w-layout-hflex flex-block-39">
              <div className="div-block-15 div-block-15-active">
                <img src={blueUser} loading="lazy" alt="Login" className="image-18" />
                <div className="text-block-22">Login</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={address} loading="lazy" alt="Address" className="image-18" />
                <div className="text-block-22">Address</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={blueCart} loading="lazy" alt="Review" className="image-18" />
                <div className="text-block-22">Review</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={card} loading="lazy" alt="Payment" className="image-18" />
                <div className="text-block-22">Payment</div>
              </div>
              <div className="div-block-15 div-block-15-active">
                <img src={complete} loading="lazy" alt="Complete" className="image-18" />
                <div className="text-block-22">Complete</div>
              </div>
              <div className="checkout-line">
                <div className="checkout-line-filled checkout-line-filled-complate" />
              </div>
            </div>

            <div className="w-layout-grid grid-28">
              <div className="div-block-16">
                <h3 className="heading-2 a-compl ">THANK YOU</h3>
                <div className='link-4-login-1'>
                  Payment is successfully processed and your order is on the way. <br />
                  <strong >Transaction ID:</strong> 1254284759352
                </div>
                <a href="/" className="button w-button review-btn a-compl-block">
                  Back to Home
                </a>
              </div>

              <div className="w-layout-hflex flex-block-40">
                <a href="/checkout/payment" className="button w-button review-btn">
                  Previous
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Complete_Step_5
