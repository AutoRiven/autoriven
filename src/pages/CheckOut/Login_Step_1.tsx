import PageHero from '../../components/pageHeroSection'
import blueUser from '../../assets/icons/blueUser.svg'
import address from '../../assets/icons/address.svg'
import blueCart from '../../assets/icons/blue_cart.svg'
import card from '../../assets/icons/card.svg'
import complete from '../../assets/icons/complete.svg'
import facebook from '../../assets/icons/facebookBlock.svg'
import google from '../../assets/icons/GoogleBlock.svg'
import apple from '../../assets/icons/apple.svg'
const Login_Step_1 = () => {
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
          <div className="login-checkout">
            <div className="w-layout-hflex flex-block-39">
              <div className="div-block-15 div-block-15-active">
                <img src={blueUser} loading="lazy" alt="Login Step Icon" className="image-18" />
                <div className="text-block-22 ">Login</div>
              </div>
              <div className="div-block-15">
                <img src={address} loading="lazy" alt="Address Step Icon" className="image-18" />
                <div className="text-block-22">Address</div>
              </div>
              <div className="div-block-15">
                <img src={blueCart} loading="lazy" alt="Review Step Icon" className="image-18" />
                <div className="text-block-22">Review</div>
              </div>
              <div className="div-block-15">
                <img src={card} loading="lazy" alt="Payment Step Icon" className="image-18" />
                <div className="text-block-22">Payment</div>
              </div>
              <div className="div-block-15">
                <img src={complete} loading="lazy" alt="Complete Step Icon" className="image-18" />
                <div className="text-block-22">Complete</div>
              </div>

              <div className="checkout-line">
                <div className="checkout-line-filled" />
              </div>
            </div>

            <div className="w-layout-grid grid-27">
              {/* Login Form */}
              <div className="form-block-5 w-form form-block-5-checkout {
">
                <h3 text-login>Login</h3>
                <form method="get">
                  <input
                    className="text-field-5 w-input  "
                    maxLength={256}
                    name="Name-or-username"
                    placeholder="Email"
                    type="text"
                    id="Name-or-username"
                    required
                  />
                  <input
                    className="text-field-5 w-input "
                    maxLength={256}
                    name="Password"
                    placeholder="Password"
                    type="password"
                    id="Password"
                    required
                  />
                  <div className="w-layout-hflex flex-block-37 flex-block-37-1">
                    <label className="w-checkbox">
                      <input
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                        className="w-checkbox-input  "
                      />
                      <span className="w-form-label link-4-logint">Remember me</span>
                    </label>
                    <a href="#" className="link-4 link-4-login">Forgot password?</a>
                  </div>
                  <input
                    type="submit"
                    className="submit-button submit-button-full-width w-button w-button-login"
                    value="Login Now"
                  />
                </form>
              </div>

              {/* Register Form */}
              <div className="form-block-5 w-form form-block-5-checkout">
                <h3 >Register</h3>
                <form method="get">
                  <div className="w-layout-hflex flex-block-34">
                    <input
                      className="text-field-5 w-input"
                      maxLength={256}
                      name="First-Name"
                      placeholder="First Name"
                      type="text"
                      id="First-Name"
                      required
                    />
                    <input
                      className="text-field-5 w-input"
                      maxLength={256}
                      name="Last-Name"
                      placeholder="Last Name"
                      type="text"
                      id="Last-Name"
                      required
                    />
                  </div>
                  <input
                    className="text-field-5 w-input"
                    maxLength={256}
                    name="Email"
                    placeholder="Email"
                    type="email"
                    id="Email"
                    required
                  />
                  <input
                    className="text-field-5 w-input pass-field"
                    maxLength={256}
                    name="Password"
                    placeholder="Password"
                    type="password"
                    id="Register-Password"
                    required
                  />
                  <a href="#" className="link-4 link-4-login link-4-all">Already have an account?</a>
                  <input
                    type="submit"
                    className="submit-button submit-button-full-width w-button w-button-login w-button-1 Sign up Now"
                    value="Sign up Now"
                  />
                </form>
                <div className="div-block-14">
                <div className="line" />
                <div className="text-block-21 link-4-login">or Sign up with</div>
              </div>

              <div className="w-layout-hflex flex-block-38">
                <img
                  src={facebook}
                  loading="lazy"
                  alt="Sign in with Facebook image-17-apple"
                  className="image-17"
                />
                <img
                  src={google}
                  loading="lazy"
                  alt="Sign in with Google"
                  className="image-17 image-17-apple"
                />
                <img
                  src={apple}
                  loading="lazy"
                  alt="Sign in with apple"
                  className="image-17 image-17-apple"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login_Step_1
