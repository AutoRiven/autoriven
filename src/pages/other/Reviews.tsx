import { useState } from 'react';
import star from '../../assets/icons/BlueStar.svg';
import star2 from '../../assets/images/singlstar.png';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

const reviewsData = [
  {
    name: 'Darius F.',
    stars: 5,
    title: 'Best support!',
    comment:
      'Robert was so helpful to get parts ordered and help me find other stores that had parts in stock. Super nice and great customer service from him! Definitely recommend asking him if you need help!!',
    date: 'March 25, 2025',
  },
  {
    name: 'Faro del 3008.',
    stars: 5,
    title: 'Customs Car',
    comment:
      'soy español y compre un faro del 3008 por 260€ en muy buena condiciones, me ahorre mucho dinero comprando la pieza en esta tienda. Me atendieron rápido y pude pagar por Paypal. Gracias por su servicios.',
    date: 'March 14, 2024',
  },
  {
    name: 'Mariana T.',
    stars: 5,
    title: 'Great!',
    comment: 'They provided fast delivery with perfect packaging. Very good! Recommend!',
    date: 'March 15, 2025',
  },
  {
    name: 'Kiryl Pabiarezhny.',
    stars: 5,
    title: 'Very affordable car transmissions',
    comment: 'Very affordable car transmissions, and good customer service!',
    date: 'February 22, 2025',
  },
  {
    name: 'Veronica Maxian.',
    stars: 5,
    title: 'Excellent experience',
    comment:
      'I recently had an excellent experience with this company and would highly recommend them. The customer service was exceptional and they went above and beyond to help me with my issue. The quality of their product/service was top-notch and exceeded my expectations. I had a seamless experience from start to finish and will definitely be a returning customer.',
    date: 'March 22, 2025',
  },
  {
    name: 'Dimmi Miron.',
    stars: 5,
    title: 'Guter Shop',
    comment:
      'Ich habe kürzlich gebrauchte Autoteile auf flipautoparts.com gekauft und war sehr zufrieden mit dem Service, den ich erhalten habe. Die Website war einfach zu navigieren und das Bestellverfahren verlief reibungslos. Die Teile wurden schnell geliefert und waren in gutem Zustand, wie beschrieben. Der Kundenservice war auch sehr hilfreich, als ich eine Frage zu meiner Bestellung hatte. Insgesamt war es eine gute Erfahrung, und ich würde es jedem empfehlen, der nach qualitativ hochwertigen gebrauchten Autoteilen sucht.',
    date: 'March 25, 2025',
  },
  {
    name: 'Will.',
    stars: 4,
    title: 'Very prompt and responsive. Great value',
    comment:
      'Very prompt and responsive. Reasonable pricing including international FedEx shipping. Part was missing a small o-ring retainer component and hoping this feedback will improve your service more. It was a rare part and complex assembly. Happy with result.',
    date: 'March 27, 2023',
  },
  {
    name: 'Joaquim Fernandes.',
    stars: 5,
    title: 'I m from Portugal very good…',
    comment: 'I m from Portugal very good experience,good comunications and the piece that i order was in good conditions!',
    date: 'October 30, 2024',
  },
  {
    name: 'Paul Harris.',
    stars: 5,
    title: 'Secondhand Volvo V40 gearbox - great service.',
    comment:
      'Was looking for a second hand gearbox for a Volvo v40, and found one here. They recommended a gearbox but from a newer car, slightly more expensive but competively priced. Sent within 7 working days and was installed in the car without any problems. Recommended customer care service with Robert. Well recommended.',
    date: 'October 17, 2024',
  },
];

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Pagination
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Show More / Less toggle within current page reviews
  const [showAll, setShowAll] = useState(false);

  // Calculate reviews for current page
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviewsData.slice(startIndex, startIndex + reviewsPerPage);

  // Reviews to show with "View More" toggle
  const initialShowCount = 3; // Show 3 reviews initially, rest show after "View More"
  const visibleReviews = showAll ? currentReviews : currentReviews.slice(0, initialShowCount);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setShowAll(false); // reset view more on page change
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setShowAll(false); // reset view more on page change
    }
  };

  return (
    <div className="privacy-policy">
      <section className="page-section-hero">
        <div className="w-layout-vflex flex-block-11">
          <h1 className="heading heading-mobile-tb">Reviews</h1>
          <div className="w-layout-hflex flex-block-12">
            <a href="/" className="link-2">
              Home /
            </a>
            <a href="/" className="link-2">
              Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="checkout-section reviews">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-20">
            <h3 className="heading-2 heading-2-tb">
              Share Your Experience with AutoRiven’s Quality Used Auto Parts!
            </h3>
            <div className="w-layout-hflex flex-block-43 flex-43">
              {[...Array(4)].map((_, i) => (
                <img key={i} src={star} loading="lazy" alt="star" className="reviews-img" />
              ))}
              <div>
                <strong className="noe-dec">- 4.9 rating</strong>
              </div>
              <div className="break-word">
                <strong>Based on 10 reviews</strong>
              </div>
            </div>
          </div>

          <div className="w-layout-vflex">
            {visibleReviews.map((review, i) => (
              <div key={i} className="div-block-21 div-block-21-tm">
                <h3 className="heading-2 heading-2-poppins-semi-bold heading-2-tb">{review.name}</h3>
                {[...Array(review.stars)].map((_, i) => (
                  <img key={i} src={star} loading="lazy" alt="star" className="reviews-img" />
                ))}
                {[...Array(5 - review.stars)].map((_, i) => (
                  <img key={i} src={star2} loading="lazy" alt="star" className="reviews-img" />
                ))}
                <h3>{review.title}</h3>
                <div className="text-block-24 text-block-24-tb">{review.comment}</div>
                <div className="text-block-25 text-block-24-tb">Date of experience: {review.date}</div>
                <div className="line" />
              </div>
            ))}
          </div>

          {/* View More / View Less Button */}
          {currentReviews.length > initialShowCount && (
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <button
                className="view-more"
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                {showAll ? 'View Less' : 'View More'}
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="review-pagination">
             
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-nav-btn">
              <img src={prev} loading="lazy" alt="Previous" />
            </button>
 <div className="pagination-nextr">Previous page</div>
            <div className="pagination-center">
              Page {currentPage} of {totalPages}
            </div>
            <div className="pagination-nextr">Next page</div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination-nav-btn">
              <img src={next} loading="lazy" alt="Next" />
            </button>
          </div>

          <div className="div-block-22 text-block-24-tb" style={{ marginTop: '40px' }}>
            <div>
              Your opinion matters! At AutoRiven, we take pride in offering high-quality used auto parts to keep your vehicle running smoothly. Whether you’ve
              purchased second-hand car components or spare parts, we’d love to hear about your experience.
              Leaving a positive review not only helps us improve our service but also guides drivers worldwide in choosing reliable used car parts. Share your
              feedback today—it takes just a minute! Your review supports our commitment to quality and helps car enthusiasts make informed choices.
            </div>
          </div>

          <div className="div-block-23" style={{ marginTop: '20px' }}>
            <h3 className="text-h3">Why leave a review. </h3>

            <ul role="list" className="list text-block-24-tb">
              <li>Help others discover trusted used auto parts.</li>
              <li>Support our mission to deliver top-notch car spare parts.</li>
              <li>Share your story with our global community!</li>
            </ul>
          </div>

          <div className="form-block-6 w-form" style={{ marginTop: '30px' }}>
            <form method="get">
              <h3 className="heading-2 heading-2-left heading-2-blue heading-2-blue-tb">Leave your review now</h3>
              <div className="star-rating" style={{ marginBottom: '15px' }}>
                {[...Array(5)].map((_, i) => {
                  const index = i + 1;
                  return (
                    <img
                      key={i}
                      src={index <= (hover || rating) ? star : star2}
                      className="last-revies"
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(0)}
                      style={{ cursor: 'pointer' }}
                      alt="rating-star"
                    />
                  );
                })}
              </div>
              <input
                className="text-field-6 w-input text-block-24-tb"
                maxLength={256}
                name="Full-Name"
                placeholder="Full Name"
                type="text"
                required
              />
              <div className="w-layout-hflex flex-block-44 .w-layout-hflex-form-review" style={{ gap: '10px' }}>
                <input
                  className="text-field-6 w-input text-block-24-tb"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  className="text-field-6 w-input text-block-24-tb"
                  maxLength={256}
                  name="Order-Number"
                  placeholder="Order Number"
                  type="text"
                  required
                />
              </div>
              <textarea
                name="Comments"
                maxLength={5000}
                placeholder="Comments"
                className="text-field-6 text-field-6-text-area w-input text-block-24-tb"
                style={{ marginTop: '15px' }}
              />
              <input
                type="submit"
                className="submit-button-3 w-button submit-button-tb-mb submit-button-tb-mb-review"
                value="Submit"
                style={{ marginTop: '15px' }}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
