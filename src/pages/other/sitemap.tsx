import { Link } from 'react-router-dom';
import PageHero from '../../components/pageHeroSection';

const SiteMap = () => {
  const mainPages = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Wishlist', path: '/wishlist' },
    { label: 'Newsletter', path: '#' },
    { label: 'Cart', path: '/cart' },
    { label: 'Checkout', path: '/checkout/login' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login / Register', path: '/login' },
    { label: 'Customer Area', path: '/dashboard' },
    { label: 'Reviews', path: '/reviews' },
  ];

  const categoriesCol1 = [
    'Body Components',
    'Filters And Filtration Systems',
    'Lighting And Signaling Devices',
    'Engines And Engine Components',
    'Cooling Systems Electrical And Ignition Systems',
    'Brake Systems',
    'Steering Mechanisms',
    'Climate Control Systems',
    'Drivetrain Components',
    'Fuel Delivery Systems',
  ];

  const categoriesCol2 = [
    'Pneumatic Components',
    'Ventilation Systems',
    'Exhaust And Emission Control Systems',
    'Suspension And Chassis Systems',
    'Wiper And Washer Systems',
    'Interior Equipment And Trim',
    'Auxiliary Heating And Vehicle Refrigeration',
    'Performance And Mechanical Upgrades',
    'OEM Parts And Automotive Chemicals',
  ];

  const legalPages = [
    { label: 'About Us', path: '/about' },
    { label: 'Cookies Policy', path: '/cookies-policy' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms And Condition', path: '/terms' },
  ];

  const supportPages = [
    { label: 'Shipping', path: '/delivery' },
    { label: 'Payments', path: '/payments' },
    { label: 'Warranty', path: '#' },
    { label: 'Returns', path: '/returns' },
    { label: 'Faq', path: '#' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
 <>
     <PageHero
      title="Sitemap"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Sitemap', href: '/sitemap' },
      ]}
    />
    <section className="sitemap">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-left heading-2-left-mobile">
          Explore <span className="text-span">AutoRiven</span>
        </h2>

        <div className="w-layout-grid grid-7 gride-7-sie-map">
          <div>
            <h4><strong>Main Pages:</strong></h4>
            <ul>
              {mainPages.map((item, index) => (
                <li key={index} className='text-block-3 ' style={{color: '#2563EB',marginBottom:12}}><Link to={item.path}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4><strong>Our Main Categories:</strong></h4>
            <ul>
              {categoriesCol1.map((cat, index) => (
                <li key={index} className='text-block-3 ' style={{color: '#2563EB',marginBottom:12}}>{cat}</li>
              ))}
            </ul>
          </div>

          <div>
            <ul>
                <h4  className='none-1'><strong><br /></strong></h4>
              {categoriesCol2.map((cat, index) => (
                <li key={index} className='text-block-3' style={{color: '#2563EB',marginBottom:12}}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="heading-2 heading-2-left ">
          Additional <span className="text-span">Resources</span>
        </h2>

        <div className="w-layout-grid grid-3 gride-7-sie-map">
          <div>
            <h4><strong>Legal Pages:</strong></h4>
            <ul>
              {legalPages.map((item, index) => (
                <li key={index} className='text-block-3 ' style={{color: '#2563EB',marginBottom:12}}><Link to={item.path}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4><strong>Support:</strong></h4>
            <ul>
              {supportPages.map((item, index) => (
                <li key={index} className='text-block-3 ' style={{color: '#2563EB',marginBottom:12}}><Link to={item.path}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className='grid-3-dis'>
            <h4><strong>404 Error Page</strong></h4>
            <ul>
              <li  className='text-block-3 ' style={{color: '#2563EB',marginBottom:12}}><Link to="/random-error">Page Not Found</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
 </>
  );
};

export default SiteMap;
