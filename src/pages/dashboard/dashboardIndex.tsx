import { Link } from 'react-router-dom'
import productImage from '../../assets/images/products.png'
import dashboard from '../../assets/icons/Dashboard.svg'
import user from '../../assets/icons/user.svg'
import order from '../../assets/icons/order.svg'
import payment from '../../assets/icons/payment.svg'
import review from '../../assets/icons/review.svg'
import setting from '../../assets/icons/setting.svg'

const DashboardIndex = () => {
  return (
    <div>
      <div className="dashboard ">
        <section className="dashboard-section dashboard-section-mb ">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid grid-19">
              <div className="w-layout-vflex flex-block-27">
  <Link to="/dashboard" className="w-layout-hflex flex-block-26  flex-block-26-dsh-mb flex-block-26-active">
    <img src={dashboard} loading="lazy" alt="Dashboard Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">Dashboard</div>
  </Link>
  <Link to="/profile" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
    <img src={user} loading="lazy" alt="User Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">My Profile</div>
  </Link>
  <Link to="/orders" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
    <img src={order} loading="lazy" alt="Order Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">Order Products</div>
  </Link>
  <Link to="/Payment-History" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
    <img src={payment} loading="lazy" alt="Payment Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">Payment History</div>
  </Link>
  <Link to="/dash-review" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
    <img src={review} loading="lazy" alt="Review Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">Review</div>
  </Link>
  <Link to="/settings" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
    <img src={setting} loading="lazy" alt="Settings Icon" className="image-14" />
    <div className="text-block-18 text-block-18-dasboard-mobile">Settings</div>
  </Link>
</div>
              <div className="div-block-17">
                <h2 className="heading-16">Dashboard</h2>
                <div className="w-layout-grid grid-20">
                  <div className="div-block-12">
                    <h2 className="heading-17">3</h2>
                    <div className="text-block-18">My Profile</div>
                  </div>
                  <div className="div-block-12">
                    <h2 className="heading-17">11</h2>
                    <div className="text-block-18">My Cart</div>
                  </div>
                  <div className="div-block-12">
                    <h2 className="heading-17">3</h2>
                    <div className="text-block-18">My Wishlist</div>
                  </div>
                </div>
                
                <div className="rich-text-block w-richtext ">
                  <p><strong>My Recent Purchase Products</strong></p>
                  <p><strong>Order Id : </strong>125426368579</p>
                  <p><strong>Order Date :</strong> 27 Feb 2024</p>
                  <p><strong>Delivery Date : </strong>27 Feb 2024</p>
                </div>
                 
               
                <div className="w-layout-vflex flex-block-28">
                  {/* Order Row 1 */}
                  <div className="w-layout-grid grid-22 grid-22-mb-tb-db">
                    <img src={productImage} loading="lazy" alt="Honda K24A, Chevy 5.3L V8" className="image-15" />
                    <div className="text-block-14 ">Honda K24A, Chevy 5.3L V8</div>
                    <div className="text-block-14 text-mb-db">34</div>
                    <h3 className="heading-15 text-mb-db">€27.45</h3>
                    <Link to="/order-status" className="button-4 w-button">
                      View Order Status
                    </Link>
                  </div>

                  {/* Order Row 2 */}
                  <div className="w-layout-grid grid-22 grid-22-mb-tb-db">
                    <img src={productImage} loading="lazy" alt="Honda K24A, Chevy 5.3L V8" className="image-15" />
                    <div className="text-block-14 text-mb-db">Honda K24A, Chevy 5.3L V8</div>
                    <div className="text-block-14 text-mb-db" >34</div>
                    <h3 className="heading-15 text-mb-db">€27.45</h3>
                    <Link to="/order-status" className="button-4 w-button w-button-dasbord ">
                      View Order Status
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardIndex
