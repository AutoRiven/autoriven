import { Link } from 'react-router-dom';
import dashboard from '../../assets/icons/Dashboard.svg';
import user from '../../assets/icons/user.svg';
import order from '../../assets/icons/order.svg';
import payment from '../../assets/icons/payment.svg';
import review from '../../assets/icons/review.svg';
import setting from '../../assets/icons/setting.svg';
import copy from '../../assets/icons/copy.png';

const Payment_History_Index = () => {
  return (
    <div>
      <div className="dashboard dashbord-payment-history">
        <section className="dashboard-section ">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid grid-19">
              <div
                id="w-node-bbb6daea-09dc-a2be-c542-3a1a245cd5a5-6f23afbd"
                className="w-layout-vflex flex-block-27"
              >
                <Link to="/dashboard" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={dashboard} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Dashboard</div>
                </Link>
                <Link to="/profile" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={user} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">My Profile</div>
                </Link>
                <Link to="/orders" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={order} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Order Products</div>
                </Link>
                <div className="w-layout-hflex flex-block-26 flex-block-26-active flex-block-26-dsh-mb">
                  <img src={payment} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Payment History</div>
                </div>
                <Link to="/dash-review" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={review} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Review</div>
                </Link>
                <Link to="/settings" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={setting} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Settings</div>
                </Link>
              </div>

              <div className="div-block-17 div-block-17-tm-mb">
                <h2 className="heading-16 heading-16-tm">Payment History</h2>

                {/* Payment Block 1 */}
                <div className="w-layout-vflex flex-block-30">
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18 text-block-18-bold text-tm">
                      Payment Id : pi_3Np4EzJEv4PYAsP140TlFuk
                    </div>
                    <img src={copy} loading="lazy" alt="" className="image-14" />
                  </div>
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18">Products List</div>
                    <div className="text-block-18">
                      Total Price : <strong>€27.45</strong>
                    </div>
                  </div>
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18">Car Engine</div>
                    <div className="text-block-18 ">
                      Product Id : 9584042583685
                    </div>
                  </div>
                </div>

                {/* Payment Block 2 */}
                <div className="w-layout-vflex flex-block-30">
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18 text-block-18-bold text-tm">
                      Payment Id : pi_3Np4EzJEv4PYAsP140TlFuk
                    </div>
                    <img src={copy} loading="lazy" alt="" className="image-14" />
                  </div>
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18">Products List</div>
                    <div className="text-block-18">
                      Total Price : <strong>€27.45</strong>
                    </div>
                  </div>
                  <div className="w-layout-hflex flex-block-29">
                    <div className="text-block-18">Car Engine</div>
                    <div className="text-block-18">
                      Product Id : 9584042583685
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment_History_Index;
