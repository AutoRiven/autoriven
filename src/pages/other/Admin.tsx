const Admin = () => {
  return (
    <div className="privacy-policy">
      <section className="page-section-hero">
        <div className="w-layout-vflex flex-block-11">
          <h1 className="heading">Admin</h1>
          <div className="w-layout-hflex flex-block-12">
            <a href="#" className="link-2">Home / </a>
            <a href="#" className="link-2">Admin</a>
          </div>
        </div>
      </section>

      <section className="checkout-section ">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-24 div-block-24-admin ">
            <h3 className="heading-24">Add New Products STEP 1</h3>
            <h3 className="heading-24">Add New Products STEP 2</h3>
            <h3 className="heading-24">Update Products</h3>
            <h3 className="heading-24">Translate Products</h3>
            <h3 className="heading-24">Statistic Data</h3>
            <h3 className="heading-24">Generate SITEMAP</h3>
          </div>

          <div className="w-layout-grid grid-30 grid-30-admin">
            {[
              'Search Product by ID',
              'Translate Product by ID',
              'Edit Product Status',
              'Edit Product Delivery',
              'Edit Product Price',
              'Edit Product Title',
              'Edit Product Description',
              'Edit Product Images (links to photos)',
              'Scrape NEW Product by ID Allegro',
              'Scrape NEW Products by SEARCH Allegro',
              'Edit ProdUser Allegro BLOCK to scrapeuct Title',
              'Passwords Block to scrape'
            ].map((label, index) => (
              <div className="main-block-25 w-layout-grid">
                <div className="div-block-25" key={index}>
                <h2 className="heading-25">{label}</h2>
                <div className="w-form">
                  <form
                    name={`admin-form-${index}`}
                    method="get"
                    className="form-7"
                  >
                    <input
                      className="text-field-7 w-input"
                      maxLength={256}
                      name={`field-${index}`}
                      placeholder=""
                      type="text"
                      id={`field-${index}`}
                      required
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="submit-button-4 w-button "
                      defaultValue="Update"
                    />
                  </form>
                 
                </div>
              </div>
              <div className="div-block-25"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
