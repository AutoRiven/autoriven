import { Link } from "react-router-dom";
import productsImage from "../../assets/images/products.png";
const Related_products = () => {
  return (
    <section className="related-products">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className=" Related-Products">Related Products</h2>
        <div className="w-layout-grid grid-15 grid-15-1">
          <div className="div-block-10">
            <div className="div-block-9 block-9-div-soze">
              <img
                src={productsImage}
                loading="lazy"
                alt=""
                className="image-12"
              />
            </div>
            <Link
              to="/shop-detail"
              style={{ color: "#333", textDecoration: "none" }}
            >
              {" "}
              <h3 className="heading-14 heading-14-text">
                Engine Oil Quartz 5000
              </h3>
            </Link>
            <div className="text-block-14 text-block-14-12">
              Our high-performance replacement motor engine.
            </div>
            <h3 className="heading-14 heading-14-text heading-14-text_out_of_stock ">
              OUT OF STOCK
            </h3>
          </div>
          <div className="div-block-10">
            <div className="div-block-9 block-9-div-soze">
              <img
                src={productsImage}
                loading="lazy"
                alt=""
                className="image-12"
              />
              <div className="text-block-15">NEW</div>
            </div>
            <Link
              to="/shop-detail"
              style={{ color: "#333", textDecoration: "none" }}
            >
              {" "}
              <h3 className="heading-14 heading-14-text">
                Engine Oil Quartz 5000
              </h3>
            </Link>
            <div className="text-block-14 text-block-14-12">
              Our high-performance replacement motor engine.
            </div>
            <h3 className="text-block-12 text-block-12-pr ">€27.45</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Related_products;
