
const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="w-layout-blockcontainer container w-container ">
         <div className="form-block-6 w-form">
            <form method="get">
              <h3 className="heading-2 heading-2-left .heading-2-tb-mb heading-2-left-1 ">
              Contact Us
              </h3>
              <img loading="lazy" src="images/31343C.svg" alt="" />
             
              <div className="w-layout-hflex flex-block-44 w-layout-hflex-form">
                <input
                 className="text-field-6 w-input"
                maxLength={256}
                name="Full-Name"
                placeholder="Full Name"
                type="text"
                required
                />
                <input
                  className="text-field-6 w-input"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  type="email"
                  required
                />
                
              </div>
              <textarea
                name="Message!"
                maxLength={5000}
                placeholder="Message!"
                className="text-field-6 text-field-6-text-area w-input"
              />
              <input
                type="submit"
                className="submit-button-3 w-button submit-button-tb-mb-review submit-button"
                value="Submit"
              />
            </form>
           
          </div>
      </div>
    </div>
  )
}

export default ContactUs
