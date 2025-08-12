import PageHero from '../../components/pageHeroSection'
import blueUser from '../../assets/icons/blueUser.svg'
import address from '../../assets/icons/address.svg'
import blueCart from '../../assets/icons/blue_cart.svg'
import card from '../../assets/icons/card.svg'
import complete from '../../assets/icons/complete.svg'
import paypal from '../../assets/images/paypal.png'
import stripe from '../../assets/images/stripe.png'
import master from '../../assets/images/mastercard.png'
import visa from '../../assets/images/visa.png'
import bank from '../../assets/images/bank.png'
import american from '../../assets/images/american.png'
import COD from '../../assets/icons/COD.svg'

const Payment_Step_4 = () => {
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
              <div className="div-block-15">
                <img src={complete} loading="lazy" alt="Complete" className="image-18" />
                <div className="text-block-22">Complete</div>
              </div>
              <div className="checkout-line">
                <div className="checkout-line-filled checkout-line-filled-72" />
              </div>
            </div>

            <div className="w-layout-grid grid-28 image-payment">
              <h3 className='h3-pay'>Select Payment Method</h3>
              <div className="w-layout-hflex flex-block-41">
                <img src={paypal} loading="lazy" alt="PayPal" className="image-19 image-19-border-img" />
                <img src={stripe} loading="lazy" alt="Stripe" className="image-19" />
                <img src={bank} loading="lazy" alt="Bank Transfer" className="image-19" />
                <img src={visa} loading="lazy" alt="Visa" className="image-19" />
                <img src={american} loading="lazy" alt="American Express" className="image-19" />
                <img src={master} loading="lazy" alt="MasterCard" className="image-19" />
                <img src={COD} loading="lazy" alt="Cash On Delivery" className="image-19" />
              </div>

              <div className="form-block-5 w-form form-block-5-paymet ">
                <h3 className='h3-pay'>Payment Detail</h3>
                <form
                  id="wf-form-Payment-Detail"
                  name="wf-form-Payment-Detail"
                  data-name="Payment Detail"
                  method="get"
                  data-wf-page-id="685a541f7a70ac276f23afbd"
                  data-wf-element-id="e0e55e69-d91a-a1ba-e97e-805367cf2692"
                >
                  <input
                    className="text-field-5 w-input"
                    maxLength={256}
                    name="Card-Number"
                    data-name="Card Number"
                    placeholder="Card Number"
                    type="text"
                    id="Card-Number"
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit-button submit-button-full-width w-button w-button-login w-button-1"
                    defaultValue="Submit Payment"
                  />
                </form>
              
              </div>

              <div className="w-layout-hflex flex-block-40">
                <a href="/checkout/review" className="button w-button review-btn">
                  Previous
                </a>
                <a href="/checkout/complete" className="button w-button review-btn">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payment_Step_4
