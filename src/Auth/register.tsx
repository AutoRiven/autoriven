// Required imports
import { Link } from 'react-router-dom';
import PageHero from '../components/pageHeroSection';
import facebook from '../assets/icons/facebookBlock.svg';
import google from '../assets/icons/GoogleBlock.svg';

// Register Component
const Register = () => {
  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on submit
    console.log('Registration submitted'); // Placeholder for backend API logic
  };

  return (
    <div className="register">
      
      {/* Page title and breadcrumb navigation */}
      <PageHero
        title="Register"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Register', href: '/register' },
        ]}
      />

      {/* Registration form section */}
      <section className="contacr-section contacr-section-login">
        <div className="w-layout-blockcontainer container container-sm w-container">
          <div className="w-layout-vflex">

            {/* Registration form */}
            <div className="form-block-5 w-form">
              <form onSubmit={handleSubmit}>
                
                {/* First and last name inputs */}
                <div className="w-layout-hflex flex-block-34 flex-block-34-1">
                  <input
                    className="text-field-5 w-input"
                    maxLength={256}
                    name="First-Name"
                    id="First-Name"
                    placeholder="First Name"
                    type="text"
                    required
                  />
                  <input
                    className="text-field-5 w-input"
                    maxLength={256}
                    name="Last-Name"
                    id="Last-Name"
                    placeholder="Last Name"
                    type="text"
                    required
                  />
                </div>

                {/* Email input */}
                <input
                  className="text-field-5 w-input"
                  maxLength={256}
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  type="email"
                  required
                />

                {/* Password input */}
                <input
                  className="text-field-5 w-input"
                  maxLength={256}
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  type="password"
                  required
                />

                {/* Terms and Privacy Policy checkbox */}
                <div className="w-checkbox checkbox-field">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="w-checkbox-input"
                  />
                  <span className="w-form-label w-form-label-tect">
                    Accept the terms and{' '}
                    <Link to="/privacy-policy" className="privacy-link">
                      <strong>Privacy Policy</strong>
                    </Link>
                  </span>
                </div>

                {/* Submit button */}
                <input
                  type="submit"
                  className="submit-button submit-button-full-width w-button w-button-login w-button-register"
                  value="Register Now"
                />
              </form>
            </div>

            {/* Link to login page */}
            <div className="w-layout-hflex flex-block-37 flex-block-37-center">
              <Link to="/login" className="link-4 link-4-login">
                Already have an account? <strong>Log in</strong>
              </Link>
            </div>

            {/* Divider for social login */}
            <div className="div-block-14">
              <div className="line" />
              <div className="text-block-21 link-4-login">or Sign in with</div>
            </div>

            {/* Social login buttons */}
            <div className="w-layout-hflex flex-block-38">
              <img
                src={facebook}
                loading="lazy"
                alt="Sign in with Facebook"
                className="image-17"
              />
              <img
                src={google}
                loading="lazy"
                alt="Sign in with Google"
                className="image-17"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
