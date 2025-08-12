
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
  <div className="_404">
      <section className="checkout-section checkout-section-ch">
        <div className="w-layout-blockcontainer container w-container address-checkout-reviews">
          <div>
            <h2 className="heading-23">404</h2>
            <div className="div-block-16">
              <h3 className="heading-2 ">Sorry! Page didn't found</h3>
              <div>
                The page you are looking for might have been removed its name
                changed or is temporarily unavailable.
              </div>
              <Link to="/" className="button w-button review-btn review-btn-1">
              Back to Home
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound