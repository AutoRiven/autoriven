import icon1 from '../../assets/icons/Icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mobile-1">
          Why <span className="text-span">Choose Us?</span>
        </h2>
        <div className="w-layout-grid grid-11 icon-grids icon-grids-tb-mobile">
          <div className="w-layout-vflex flex-block-15">
            <img
              src={icon1}
              loading="lazy"
              alt="Wide range of auto parts icon"
              className="image-10 image-10-tb-mobile"
            />
            <h3 className="heading-8 heading-8-tb-mobile">Massive Selection</h3>
            <div className="text-block-7 text-block-7-tb-mobile">
              Yes, we specialize in high-quality used OEM auto parts. Every part.
            </div>
          </div>
          <div className="w-layout-vflex flex-block-15">
            <img
              src={icon2}
              loading="lazy"
              alt="Verified suppliers network icon"
              className="image-10 image-10-tb-mobile"
            />
            <h3 className="heading-8 heading-8-tb-mobile">Trusted Network</h3>
            <div className="text-block-7 text-block-7-tb-mobile">
              Connect with thousands of reliable suppliers across Poland.
            </div>
          </div>
          <div className="w-layout-vflex flex-block-15">
            <img
              src={icon3}
              loading="lazy"
              alt="Fast shipping icon"
              className="image-10 image-10-tb-mobile"
            />
            <h3 className="heading-8 heading-8-tb-mobile">Quick Delivery</h3>
            <div className="text-block-7 text-block-7-tb-mobile">
              98% of listed parts are available and ready to ship quickly.
            </div>
          </div>
          <div className="w-layout-vflex flex-block-15">
            <img
              src={icon4}
              loading="lazy"
              alt="Customer support icon"
              className="image-10 image-10-tb-mobile"
            />
            <h3 className="heading-8 heading-8-tb-mobile">24/7 Support</h3>
            <div className="text-block-7 text-block-7-tb-mobile">
              Our team is here to help you find exactly what you need anytime.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
