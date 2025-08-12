// SecurePayment.jsx
import paypal from '../../assets/images/paypal.png';
import stripe from '../../assets/images/stripe.png';
import master from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';
import bank from '../../assets/images/bank.png';
import american from '../../assets/images/american.png';

const SecurePayment = () => {
  return (
    <section className="secure-payment secure-payment-tb-mb">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="heading-2 heading-2-tb-mb">
          Secure <span className="text-span">payment</span>
        </h2>
        <div className="w-layout-grid grid-4 grid-4-tb-mb">
          <img src={paypal} loading="lazy" alt="PayPal logo" />
          <img src={stripe} loading="lazy" alt="Stripe logo" />
          <img src={bank} loading="lazy" alt="Bank transfer icon" />
          <img src={visa} loading="lazy" alt="Visa card logo" />
          <img src={american} loading="lazy" alt="American Express logo" />
          <img src={master} loading="lazy" alt="MasterCard logo" />
        </div>
      </div>
    </section>
  );
};

export default SecurePayment;
