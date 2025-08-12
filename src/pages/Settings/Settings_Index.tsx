import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../../assets/icons/Dashboard.svg';
import user from '../../assets/icons/user.svg';
import order from '../../assets/icons/order.svg';
import payment from '../../assets/icons/payment.svg';
import review from '../../assets/icons/review.svg';
import setting from '../../assets/icons/setting.svg';
import Footer from '../../components/footer';

const Settings_Index = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'password'

  return (
    <div>
      <div className="dashboard">
        <section className="dashboard-section dashboard-section-settings">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid grid-19">

              {/* Sidebar */}
              <div className="w-layout-vflex flex-block-27">
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
                <Link to="/Payment-History" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={payment} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Payment History</div>
                </Link>
                <Link to="/dash-review" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={review} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Review</div>
                </Link>
                <Link to="/settings" className="w-layout-hflex flex-block-26 flex-block-26-active flex-block-26-dsh-mb">
                  <img src={setting} loading="lazy" alt="" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Settings</div>
                </Link>
              </div>

              {/* Main Content */}
              <div className="div-block-17 div-block-17-setings  ">
                <h2 className="heading-16 heading-16-tb-pr">Settings</h2>

                {/* Tabs */}
                <div className="w-layout-hflex flex-block-42">
                  <h3
                    className={`heading-22  .text ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile
                  </h3>
                  <h3
                    className={`heading-22 .text-1 ${activeTab === 'password' ? 'active' : ''}`}
                    onClick={() => setActiveTab('password')}
                  >
                    Change Password
                  </h3>
                </div>

                {/* Profile Form */}
                {activeTab === 'profile' && (
                  <div className="form-block-5 w-form w-form-3">
                    <form className="form-6  w-form-3" method="get">
                      <div className="w-layout-hflex flex-block-34 ">
                        <input
                          className="text-field-5 text-field-5-full-width w-input fonm-field-tb"
                          maxLength={256}
                          name="firstName1"
                          placeholder="First Name"
                          type="text"
                          required
                        />
                        <input
                          className="text-field-5 text-field-5-full-width w-input fonm-field-tb"
                          maxLength={256}
                          name="lastName1"
                          placeholder="Last Name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="w-layout-hflex flex-block-34">
                        <input
                          className="text-field-5 text-field-5-full-width w-input fonm-field-tb"
                          maxLength={256}
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                        />
                        <input
                          type="submit"
                          className="submit-button submit-button-setting w-button email"
                          defaultValue="Login Now"
                        />
                      </div>
                    </form>
                  </div>
                )}

                {/* Change Password Form */}
                {activeTab === 'password' && (
                  <div className="form-block-5 w-form">
                    <form className="form-6" method="get">
                      <div className="w-layout-hflex flex-block-34">
                        <input
                          className="text-field-5 text-field-5-full-width w-input"
                          maxLength={256}
                          name="passwordOld"
                          placeholder="Old Password"
                          type="password"
                          required
                        />
                        <input
                          className="text-field-5 text-field-5-full-width w-input"
                          maxLength={256}
                          name="passwordNew"
                          placeholder="New Password"
                          type="password"
                          required
                        />
                        <input
                          className="text-field-5 text-field-5-full-width w-input"
                          maxLength={256}
                          name="passwordConfirm"
                          placeholder="Confirm Password"
                          type="password"
                          required
                        />
                      </div>
                      <div className="w-layout-hflex flex-block-34">
                        <input
                          type="submit"
                          className="submit-button submit-button-setting w-button submit-button submit-button-tb-mb"
                          defaultValue="Update"
                        />
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Settings_Index;
