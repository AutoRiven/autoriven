// PageHero component import — This will display the page title and breadcrumbs
import PageHero from '../components/pageHeroSection';

// ForgotPassword Component
const ForgotPassword = () => {
  // Form submit handler — This will run when the user submits the email
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop default form submission (page refresh)
    console.log('Forgot password submitted'); // Placeholder for API logic
  };

  return (
    <div className="forgot-password">
      
      {/* Top section with page heading and navigation breadcrumbs */}
      <PageHero
        title="Forgot Password"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Forgot Password', href: '/forgot_password' },
        ]}
      />

      {/* Main content area */}
      <section className="contacr-section contacr-section-login">
        <div className="w-layout-blockcontainer container container-sm w-container">

          {/* Section title and description */}
          <div className="div-block-16">
            <h2 className="heading-2 heading-2-tb-mb">Enter Your Email</h2>
            <div className="link-2">
              Check your email, we have sent you a verification code to reset your password.
            </div>
          </div>

          {/* Form container */}
          <div className="w-layout-vflex">
            <div className="form-block-5 w-form">
              
              {/* Forgot password form */}
              <form onSubmit={handleSubmit}>
                {/* Email input field */}
                <input
                  className="text-field-5 w-input"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  type="email"
                  id="Email"
                  required
                />

                {/* Submit button */}
                <input
                  type="submit"
                  className="submit-button submit-button-full-width w-button w-button-login"
                  value="Forgot Now"
                />
              </form>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
