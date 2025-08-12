import { Link } from 'react-router-dom'
import dashboard from '../../assets/icons/Dashboard.svg'
import user from '../../assets/icons/user.svg'
import order from '../../assets/icons/order.svg'
import payment from '../../assets/icons/payment.svg'
import review from '../../assets/icons/review.svg'
import setting from '../../assets/icons/setting.svg'
import editIcon from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import starIcon from '../../assets/icons/star.svg' // yellow star icon

const DashReview_Index = () => {
  const reviews = Array(4).fill({
    name: 'PAUL H.',
    rating: 5,
    content:
      'Secondhand Volvo V40 gearbox  great service. Was looking for a second-hand gearbox for a Volvo V40 and found one here. They recommended a gearbox from a newer car, slightly more expensive but competitively priced. Sent within 7 working days and was installed in the car without any problems. Recommended customer care service with Robert. Well recommended.'
  })

  return ( 
      <div className="dashboard">
        <section className="dashboard-section  ">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid grid-19">
              <div className="w-layout-vflex flex-block-27 ">
                <Link to="/dashboard" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={dashboard} loading="lazy" alt="Dashboard Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Dashboard</div>
                </Link>
                <Link to="/profile" className="w-layout-hflex flex-block-26  flex-block-26-dsh-mb">
                  <img src={user} loading="lazy" alt="User Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">My Profile</div>
                </Link>
                <Link to="/orders" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={order} loading="lazy" alt="Order Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Order Products</div>
                </Link>
                <Link to="//Payment-History" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={payment} loading="lazy" alt="Payment Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Payment History</div>
                </Link>
                <Link to="/dash-review" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb flex-block-26-active">
                  <img src={review} loading="lazy" alt="Review Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Review</div>
                </Link>
                <Link to="/settings" className="w-layout-hflex flex-block-26 flex-block-26-dsh-mb">
                  <img src={setting} loading="lazy" alt="Settings Icon" className="image-14" />
                  <div className="text-block-18 text-block-18-dasboard-mobile">Settings</div>
                </Link>
              </div>

            {/* Review Section */}
            <div className="review-section">
              <h2 className="review-heading">Reviews</h2>
              {reviews.map((review, index) => (
                <div key={index} className="review-box">
                  <div className="review-header">
                    <h3 className="review-author">{review.name}</h3>
                    <div className="review-actions">
                      <button className="review-action-btn">
                        <img src={editIcon} alt="Edit" className="action-icon" /> Edit
                      </button>
                      <button className="review-action-btn">
                        <img src={deleteIcon} alt="Delete" className="action-icon" /> Delete
                      </button>
                    </div>
                  </div>

                  <div className="star-row">
                    {[...Array(1)].map((_, i) => (
                <img key={i} src={starIcon} loading="lazy" alt="star" className='reviews-star'/>
              ))}
                  </div>

                  <p className="review-content">{review.content}</p>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashReview_Index
