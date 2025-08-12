import { Link } from 'react-router-dom'
import about_1 from '../../assets/images/about_1.png'
import about_2 from '../../assets/images/about_2.png'

const WhoWeAre = () => {
  return (
    
    <section className="who-we-are-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-10 grid-10-tb-mobile">
          <div className="w-layout-vflex flex-block-13">
            <img
              src={about_1}
              loading="lazy"
              alt=""
              className="image-9"
            />
            <div className="image-border image-border-tb-mobile" />
          </div>
          <div className="w-layout-vflex flex-block-14 w-layout-vflex-center">
            <h2 className="heading-2 heading-2-tb-mobile">
              Who <span className="text-span">We Are</span>
            </h2>
            <div className="text-block-3 text-block-3-tb-mobile">
              Welcome to autoriven.com, your one-stop platform for used auto
              parts sourced directly from Poland. Operated by AUTOZ SPÓŁKA Z
              OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, we bring together thousands of
              suppliers across Poland to offer you an extensive inventory of
              over 8 million products from scrapyards. Our mission is to make
              finding the right auto part easier, faster, and more reliable
              than ever before.
            </div>
            <Link to="/shop" className="button w-button button-tb-mobile dinone" >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="w-layout-grid grid-10 grid-10-tb-mobile-reverse">
          <div className="w-layout-vflex flex-block-14 w-layout-vflex-center">
            <h2 className="heading-2 heading-2-tb-mobile">
              What <span className="text-span">We Do</span>
            </h2>
            <div className="text-block-3 text-block-3-tb-mobile">
              At autoriven.com, we’ve revolutionized the way you source used
              auto parts. No more calling individual suppliers one by one to
              check availability—our platform does the hard work for you. With
              a simple search on our Website, you can browse millions of parts
              from trusted Polish scrapyards. In 98% of cases, the part you’re
              looking for is already available and ready to ship. We connect
              you directly to a vast network of suppliers, ensuring a wide
              range of high-quality, affordable options delivered worldwide.
            </div>
            <Link to="/shop" className="button w-button button-tb-mobile dinone">
              Explore Products
            </Link>
          </div>
          <div className="w-layout-vflex flex-block-13">
            <img
              src={about_2}
              loading="lazy"
              alt=""
              className="image-9"
            />
            <div className="image-border image-border-tb-mobile-1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
