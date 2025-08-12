import { Link } from 'react-router-dom'
import dashboard from '../../assets/icons/Dashboard.svg'
import user from '../../assets/icons/user.svg'
import order from '../../assets/icons/order.svg'
import payment from '../../assets/icons/payment.svg'
import review from '../../assets/icons/review.svg'
import setting from '../../assets/icons/setting.svg'

const My_Profile = () => {
  return (
    <>
      <div className="dashboard">
        <section className="dashboard-section dashboard-section-profile ">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid grid-19">
              <div className="w-layout-vflex flex-block-27 ">
                <Link to="/dashboard" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={dashboard} loading="lazy" alt="Dashboard Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Dashboard</div>
                </Link>
                <Link to="/profile" className="w-layout-hflex flex-block-26 flex-block-26-active flex-block-26-dsh-mb">
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

              <div className="div-block-17 div-block-17-tm-profile">
                <h2 className="heading-16 heading-16-tb-pr">My Profile</h2>
                <div className="w-layout-grid grid-23  grid-23-tb">
                  <div className="text-block-18 text-block-18-bold">Registration Date :</div>
                  <div className="text-block-18">09/12/23 11:24 am</div>

                  <div className="text-block-18 text-block-18-bold">First Name :</div>
                  <div className="text-block-18">Jonathon Smith</div>

                  <div className="text-block-18 text-block-18-bold">Email :</div>
                  <div className="text-block-18">jhonathonsmith@gmail.com</div>

                  <div className="text-block-18 text-block-18-bold">Phone :</div>
                  <div className="text-block-18">09/12/23 11:24 am</div>

                  <div className="text-block-18 text-block-18-bold">Gender :</div>
                  <div className="text-block-18">Male</div>

                  <div className="text-block-18 text-block-18-bold">Biography :</div>
                  <div className="text-block-18">
                    Alison Johnson is finishing her first year at DePaul University where she is interested in
                    business. Although she has yet to declare a major, she’s considering finance or marketing.
                    After watching her parents run a restaurant for years, she knew at a very young age that she
                    also wanted to go into business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default My_Profile
