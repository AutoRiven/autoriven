// Import required modules and assets
import { Link } from 'react-router-dom';
import PageHero from '../components/pageHeroSection';
import facebook from '../assets/icons/facebookBlock.svg';
import google from '../assets/icons/GoogleBlock.svg';

// Login Component
const Login = () => {
  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop default form submission
    console.log('Login submitted'); // Placeholder for actual login logic (API call)
  };

  return (
    <div className="login">
      
      {/* Page title and breadcrumb navigation */}
      <PageHero
        title="Login"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Login', href: '/login' },
        ]}
      />

      {/* Login section */}
      <section className="contacr-section contacr-section-login">
        <div className="w-layout-blockcontainer container container-sm w-container">
          <div className="w-layout-vflex">
            
            {/* Login form */}
            <div className="form-block-5 w-form">
              <form onSubmit={handleSubmit}>
                
                {/* Username / Name input */}
                <input
                  className="text-field-5 w-input"
                  maxLength={256}
                  name="Name-or-username"
                  id="Name-or-username"
                  placeholder="Name or username"
                  type="text"
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

                {/* Remember me checkbox */}
                <label className="w-checkbox checkbox-field">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="w-checkbox-input"
                  />
                  <span className="w-form-label w-form-label-tect">Remember me</span>
                </label>

                {/* Submit button */}
                <input
                  type="submit"
                  className="submit-button submit-button-full-width w-button w-button-login"
                  value="Login Now"
                />
              </form>
            </div>

            {/* Additional links */}
            <div className="w-layout-hflex flex-block-37">
              <Link to="/signup" className="link-4 link-4-login">
                Not registered?{' '}
                <Link to="/register" className="privacy-link">
                  <strong>Sign up</strong>
                </Link>
              </Link>
              <Link to="/forgot-password" className="link-4 link-4-login">
                Forgot password?
              </Link>
            </div>

            {/* Divider for social login */}
            <div className="div-block-14">
              <div className="line" />
              <div className="text-block-21 link-4-login">or Sign in with</div>
            </div>

            {/* Social login options */}
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

export default Login;
