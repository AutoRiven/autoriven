import { Link } from 'react-router-dom';
import about3 from '../../assets/images/about3.png';

const CantFind = () => {
  return (
    <section className="can-t-find-what-you-need">
      <div className="w-layout-blockcontainer container w-container w-container-tb-mobile">
        <div className="w-layout-grid grid-10 grid-10-tb-mobile">
          <div className="w-layout-vflex flex-block-13">
            <img
              src={about3}
              loading="lazy"
              alt="About our parts availability"
              className="image-9"
            />
            <div className="image-border image-border-tb-mobile" />
          </div>
          <div
            id="w-node-f5d00448-189e-0c99-85f6-d5fc541c7736-6f23afbd"
            className="w-layout-vflex flex-block-14"
          >
            <h2 className="heading-2 heading-2-tb-mobile">
              Can’t Find <span className="text-span">What You Need?</span>
            </h2>
            <div className="text-block-3 text-block-3-tb-mobile">
              If the part you’re searching for isn’t listed, don’t worry—our
              network is always active. Scrapyards across Poland are
              constantly dismantling vehicles, and new parts are added to our
              inventory daily. The item you need might be in the process of
              being disassembled and could appear on the site within a few
              days. Simply contact us at info@autoriven.com, and we’ll check
              with our suppliers to see if it’s on the way. We’re here to help
              you find exactly what you’re looking for.
            </div>
            <Link to="/shop" className="button w-button button-tb-mobile">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CantFind;
