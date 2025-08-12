import { Link } from 'react-router-dom'
import productImage from '../../assets/images/products.png'
import dashboard from '../../assets/icons/Dashboard.svg'
import user from '../../assets/icons/user.svg'
import order from '../../assets/icons/order.svg'
import payment from '../../assets/icons/payment.svg'
import review from '../../assets/icons/review.svg'
import setting from '../../assets/icons/setting.svg'

const Order_Products_Index = () => {
  return (
    <div className="dashboard dashborad-order">
      <section className="dashboard-section dashborad-order">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid-19">

            {/* Sidebar Navigation */}
            <div className="w-layout-vflex flex-block-27">
              <Link to="/dashboard" className="w-layout-hflex flex-block-26 " >
                <img src={dashboard} loading="lazy" alt="Dashboard Icon" className="image-14" />
                <div className="text-block-18">Dashboard</div>
              </Link>
              <Link to="/profile" className="w-layout-hflex flex-block-26">
                <img src={user} loading="lazy" alt="User Icon" className="image-14" />
                <div className="text-block-18">My Profile</div>
              </Link>
              <Link to="/order" className="w-layout-hflex flex-block-26 flex-block-26-active">
                <img src={order} loading="lazy" alt="Order Icon" className="image-14" />
                <div className="text-block-18">Order Products</div>
              </Link>
              <Link to="/payment-history" className="w-layout-hflex flex-block-26">
                <img src={payment} loading="lazy" alt="Payment Icon" className="image-14" />
                <div className="text-block-18">Payment History</div>
              </Link>
              <Link to="/dash-review" className="w-layout-hflex flex-block-26">
                <img src={review} loading="lazy" alt="Review Icon" className="image-14" />
                <div className="text-block-18">Review</div>
              </Link>
              <Link to="/settings" className="w-layout-hflex flex-block-26">
                <img src={setting} loading="lazy" alt="Settings Icon" className="image-14" />
                <div className="text-block-18">Settings</div>
              </Link>
            </div>

            {/* Content Area */}
            <div className="div-block-17">
              <h2 className="heading-16">Order Products</h2>
              <div className="rich-text-block w-richtext">
                <p><strong>Order History</strong></p>
                <p><strong>Order Id : </strong>125426368579</p>
                <p><strong>Order Date :</strong> 27 Feb 2024</p>
                <p><strong>Deliverey Date : </strong>27 Feb 2024</p>
              </div>

              <div className="w-layout-vflex flex-block-28">
                <div className="w-layout-hflex flex-block-23 flex-block-23-1 ">
                  <div className="w-layout-grid grid-21 grid-22-mb-tb-db">
                    <div className="text-block-16 text-mb-db">Item</div>
                    <div className="text-block-16 text-mb-db tbx-product">Product</div>
                    <div className="text-block-16 text-mb-db tbx-product position">Quantity</div>
                    <div className="text-block-16 text-mb-db ">Price</div>
                    <div className="text-block-16 text-mb-db">Track order</div>
                  </div>
                </div>

                {/* Order Row 1 */}
                <div className="w-layout-grid grid-22 grid-22-mb-tb-db">
                  <img src={productImage} loading="lazy" alt="Product Image" className="image-15" />
                  <div className="text-block-14 text-mb-db ">Honda K24A, Chevy 5.3L V8</div>
                  <div className="text-block-14 text-mb-db">34</div>
                  <h3 className="heading-15">€27.45</h3>
                  <a href="#" className="button-4 w-button  w-button w-button-dasbord">View Order Status</a>
                </div>

                {/* Order Row 2 */}
                <div className="w-layout-grid grid-22 grid-22-mb-tb-db ">
                  <img src={productImage} loading="lazy" alt="Product Image" className="image-15" />
                  <div className="text-block-14 text-mb-db">Honda K24A, Chevy 5.3L V8</div>
                  <div className="text-block-14 text-mb-db">34</div>
                  <h3 className="heading-15 text-mb-db">€27.45</h3>
                  <a href="#" className="button-4 w-button  w-button w-button-dasbord">View Order Status</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Order_Products_Index
