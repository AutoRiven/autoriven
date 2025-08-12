import PageHero from '../../components/pageHeroSection'
import arrowCircle from '../../assets/icons/arrowCircle.svg'
import WorldwideShipping from '../../components/WorldwideShipping'
import { Link } from 'react-router-dom'

const ContactUs_Index = () => {
  const faqLinks = [
    { label: 'Information about parts', id: 'Information-About-Parts' },
    { label: 'Orders and purchases', id: 'Orders-and-Purchases' },
    { label: 'Shipping and delivery', id: 'Shipping-and-Delivery' },
    { label: 'Returns and refunds', id: 'Returns-and-Refunds' },
    { label: 'Assistance and support', id: 'Assistance-and-Support' },
  ]

  return (
    <div className='contact-us-page'>
      <PageHero
        title="Contact us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact us', href: '/Contact' },
        ]}
      />

      <section className="contacr-section contacr-section-tb-mobile">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="heading-2 heading-2-tb-mobile-caontact">Quick Answers to Common Questions</h2>

          <div className="div-block-13 div-block-13-tb-mobile-contact">
            {faqLinks.map((item, idx) => (
              <Link
                key={idx}
                to={`/faq#${item.id}`}
                className="w-layout-hflex flex-block-33"
              >
                <div>{item.label}</div>
                <img
                  src={arrowCircle}
                  loading="lazy"
                  alt={`${item.label} arrow icon`}
                  className="image-16"
                />
              </Link>
            ))}
          </div>

          <div className="w-layout-grid grid-26 grid-26-tb-mobile-contact">
            {/* Contact Form */}
            <div className="w-layout-vflex">
              <h2 className="heading-2 heading-2-left heading-2-tb-mobile-caontact">Get in touch</h2>
              <div className="form-block-5 w-form form-block-5-mobile-contact">
                <form className="w-form">
                  <div className="w-layout-hflex flex-block-34">
                    <input
                      className="text-field-5 w-input text-field-5 w-input-mobile"
                      maxLength={256}
                      name="Name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                    <input
                      className="text-field-5 w-input w-input-mobile"
                      maxLength={256}
                      name="Email"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <input
                    className="text-field-5 w-input w-input-mobile"
                    maxLength={256}
                    name="Subject"
                    placeholder="Subject"
                    type="text"
                    required
                  />
                  <textarea
                    placeholder="Message!"
                    maxLength={5000}
                    name="Message"
                    className="text-field-5 text-field-5-text-area w-input w-input-mobile w-input-mobile-area"
                  />
                  <input
                    type="submit"
                    className="submit-button w-button btn-tb-mb-contact"
                    value="Submit Now"
                  />
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-layout-vflex flex-block-36">
              <h3 className="heading-18 heading-18-mobile-contact">Support Contact</h3>

              <div className="w-layout-vflex flex-block-35">
                <div className="text-block-20 text-block-20-mobile">Phone:</div>
                <Link to="tel:+48453094174" className="link-3 text-block-20-mobile">
                  +48 453 094 174
                </Link>
              </div>

              <div className="w-layout-vflex flex-block-35">
                <div className="text-block-20 text-block-20-mobile">Email:</div>
                <Link
                  to="mailto:info@autoriven.com?subject=Support Inquiry"
                  className="link-3 text-block-20-mobile"
                >
                  info@autoriven.com
                </Link>
              </div>

              <div className="w-layout-vflex flex-block-35">
                <div className="text-block-20 text-block-20-mobile">Location:</div>
                <Link
                  to="https://www.google.com/maps?q=BARTYCKA+22B+M21A00-716+WARSZAWA+Poland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-3 text-block-20-mobile"
                >
                  Poland, BARTYCKA 22B M21 A00-716 WARSZAWA
                </Link>
              </div>

              <div className="w-layout-vflex flex-block-35">
                <div className="text-block-20">Time & Date:</div>
                <div className="link-3 text-block-20-mobile">
                  Monday - Friday From 9:00 to 16:00 UTC/GMT +2 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section" style={{ marginTop: '3rem' }}>
          <div
            className="map-embed"
            style={{
              width: '80%',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'block',
              margin: 'auto',
            }}
          >
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5457127492644!2d21.041448876535494!3d52.212232756460315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd1deabe5d8b%3A0x34c1f9e5cd97814a!2sBartycka%2022B%2C%2000-716%20Warszawa%2C%20Poland!5e0!3m2!1sen!2spl!4v1710912345000!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <WorldwideShipping />
    </div>
  )
}

export default ContactUs_Index
